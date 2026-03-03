import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendQuoteEmailToPro, sendConfirmationEmailToClient } from "@/lib/email";
import type { QuoteFormData } from "@/types";

// ─── Schéma de validation (côté serveur — source de vérité) ──────────────────

const quoteSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  phone: z
    .string()
    .min(10)
    .max(20)
    .regex(/^[\d\s+\-.()]+$/),
  email: z.string().email().max(254),
  city: z.string().min(2).max(100),
  postalCode: z.string().length(5).regex(/^\d{5}$/),
  serviceType: z.string().min(1).max(100),
  budget: z.string().max(50).optional(),
  description: z.string().min(20).max(2000),
  desiredDate: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consentement requis" }),
  }),
  // Honeypot — doit être vide
  honeypot: z.string().max(0).optional(),
});

// ─── Helper : extraction IP ───────────────────────────────────────────────────

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ─── POST /api/quote ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Content-Type check
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { message: "Content-Type invalide" },
      { status: 415 }
    );
  }

  // 2. Rate limiting
  const ip = getClientIp(req);
  const { allowed, remaining } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      {
        message:
          "Trop de demandes. Veuillez réessayer dans une heure ou nous appeler directement.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": "3600",
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // 3. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de requête invalide" },
      { status: 400 }
    );
  }

  // 4. Honeypot — si rempli, simuler un succès silencieux (anti-bot)
  if (
    body &&
    typeof body === "object" &&
    "honeypot" in body &&
    typeof (body as Record<string, unknown>).honeypot === "string" &&
    (body as Record<string, unknown>).honeypot !== ""
  ) {
    // Faux succès pour ne pas alerter le bot
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // 5. Validation Zod
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Données invalides. Vérifiez le formulaire.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data as QuoteFormData;

  // 6. Envoi des emails
  // Email pro (critique) — on échoue si ça plante
  try {
    await sendQuoteEmailToPro(data);
    console.log("[API /api/quote] ✅ Email pro envoyé à", process.env.CONTACT_EMAIL);
  } catch (err) {
    console.error("[API /api/quote] ❌ Erreur email pro :", err);
    return NextResponse.json(
      {
        message:
          "Votre demande a été reçue mais l'envoi de l'email a échoué. Veuillez nous appeler directement.",
      },
      { status: 500 }
    );
  }

  // Email confirmation client (optionnel) — on log sans bloquer
  try {
    await sendConfirmationEmailToClient(data);
    console.log("[API /api/quote] ✅ Email confirmation envoyé à", data.email);
  } catch (err) {
    console.warn("[API /api/quote] ⚠️ Email confirmation client non envoyé (normal en test) :", err);
  }

  // 7. Succès
  return NextResponse.json(
    { success: true, message: "Demande de devis envoyée avec succès." },
    {
      status: 200,
      headers: { "X-RateLimit-Remaining": String(remaining) },
    }
  );
}

// ─── OPTIONS (CORS preflight si besoin) ──────────────────────────────────────

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}
