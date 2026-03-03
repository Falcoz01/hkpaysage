import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import { getResend } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().optional(),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0).optional(),
});

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "h.kpaysage@gmail.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ message: "Content-Type invalide" }, { status: 415 });
  }

  const ip = getClientIp(req);
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { message: "Trop de demandes. Réessayez dans une heure." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Corps de requête invalide" }, { status: 400 });
  }

  // Honeypot anti-spam
  if (
    body &&
    typeof body === "object" &&
    "honeypot" in body &&
    (body as Record<string, unknown>).honeypot !== ""
  ) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Données invalides.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  const subject = `Nouveau message de contact — ${name}`;

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><title>${subject}</title></head>
    <body style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#2d5016;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;margin:0;font-size:22px">Nouveau message de contact</h1>
        <p style="color:#aad485;margin:4px 0 0">HK Paysage — ${SITE_URL}</p>
      </div>
      <div style="background:#f8f4ed;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5d9c4">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:600;width:35%">Nom</td><td style="padding:8px 0">${name}</td></tr>
          <tr style="background:#fff"><td style="padding:8px 4px;font-weight:600">Email</td><td style="padding:8px 4px"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;font-weight:600">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;background:#fff;padding:16px;border-radius:6px;border-left:4px solid #2d5016">
          <p style="font-weight:600;margin:0 0 8px">Message :</p>
          <p style="margin:0;white-space:pre-line">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#888">
          Message reçu via <a href="${SITE_URL}">${SITE_URL}</a>
        </p>
      </div>
    </body>
    </html>
  `;

  try {
    await getResend().emails.send({
      from: "HK Paysage <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      html,
    });
    console.log("[API /api/contact] ✅ Message envoyé à", CONTACT_EMAIL);
  } catch (err) {
    console.error("[API /api/contact] ❌ Erreur envoi email :", err);
    return NextResponse.json(
      { message: "L'envoi a échoué. Veuillez nous appeler directement." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "Message envoyé avec succès." }, { status: 200 });
}
