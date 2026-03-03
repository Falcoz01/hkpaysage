import { Resend } from "resend";
import type { QuoteFormData } from "@/types";

// Lazy init — évite l'erreur au build si RESEND_API_KEY n'est pas définie
export function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY non définie. Ajoutez-la dans .env.local");
  }
  return new Resend(key);
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "h.kpaysage@gmail.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr";

// ─── Email vers le professionnel ─────────────────────────────────────────

export async function sendQuoteEmailToPro(data: QuoteFormData): Promise<void> {
  const subject = `Nouvelle demande de devis — ${data.firstName} ${data.lastName} (${data.serviceType})`;

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><title>${subject}</title></head>
    <body style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#2d5016;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;margin:0;font-size:22px">Nouvelle demande de devis</h1>
        <p style="color:#aad485;margin:4px 0 0">HK Paysage</p>
      </div>
      <div style="background:#f8f4ed;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5d9c4">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:600;width:40%">Nom</td><td style="padding:8px 0">${data.firstName} ${data.lastName}</td></tr>
          <tr style="background:#fff"><td style="padding:8px 4px;font-weight:600">Téléphone</td><td style="padding:8px 4px">${data.phone}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr style="background:#fff"><td style="padding:8px 4px;font-weight:600">Ville / CP</td><td style="padding:8px 4px">${data.city} — ${data.postalCode}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Prestation</td><td style="padding:8px 0">${data.serviceType}</td></tr>
          ${data.budget ? `<tr style="background:#fff"><td style="padding:8px 4px;font-weight:600">Budget</td><td style="padding:8px 4px">${data.budget}</td></tr>` : ""}
          ${data.desiredDate ? `<tr><td style="padding:8px 0;font-weight:600">Date souhaitée</td><td style="padding:8px 0">${data.desiredDate}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;background:#fff;padding:16px;border-radius:6px;border-left:4px solid #2d5016">
          <p style="font-weight:600;margin:0 0 8px">Description du besoin :</p>
          <p style="margin:0;white-space:pre-line">${data.description}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#888">
          Demande reçue via <a href="${SITE_URL}">${SITE_URL}</a>
        </p>
      </div>
    </body>
    </html>
  `;

  await getResend().emails.send({
    from: "HK Paysage <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject,
    html,
  });
}

// ─── Email de confirmation au client ────────────────────────────────────

export async function sendConfirmationEmailToClient(
  data: QuoteFormData
): Promise<void> {
  const subject = "Votre demande de devis a bien été reçue — HK Paysage";

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><title>${subject}</title></head>
    <body style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#2d5016;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;margin:0;font-size:22px">Demande bien reçue ✓</h1>
        <p style="color:#aad485;margin:4px 0 0">HK Paysage — Lyon</p>
      </div>
      <div style="background:#f8f4ed;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5d9c4">
        <p>Bonjour <strong>${data.firstName}</strong>,</p>
        <p>Nous avons bien reçu votre demande de devis pour <strong>${data.serviceType}</strong>. Merci de votre confiance !</p>
        <p>Notre équipe vous contactera dans les <strong>48 heures ouvrées</strong> (par téléphone au <strong>${data.phone}</strong> ou par email).</p>
        <div style="background:#eef7e5;border:1px solid #aad485;border-radius:8px;padding:16px;margin:24px 0">
          <p style="margin:0;font-weight:600;color:#2d5016">Récapitulatif de votre demande :</p>
          <ul style="margin:8px 0 0;padding-left:20px">
            <li>Prestation : ${data.serviceType}</li>
            <li>Commune : ${data.city} (${data.postalCode})</li>
            ${data.desiredDate ? `<li>Date souhaitée : ${data.desiredDate}</li>` : ""}
          </ul>
        </div>
        <p>En attendant, n'hésitez pas à consulter nos <a href="${SITE_URL}/realisations" style="color:#2d5016">réalisations récentes</a>.</p>
        <hr style="border:none;border-top:1px solid #e5d9c4;margin:24px 0">
        <p style="font-size:13px;color:#555">
          <strong>HK Paysage</strong><br>
          📞 06 46 31 69 42<br>
          ✉️ ${CONTACT_EMAIL}<br>
          🌐 <a href="${SITE_URL}" style="color:#2d5016">${SITE_URL}</a>
        </p>
      </div>
    </body>
    </html>
  `;

  await getResend().emails.send({
    from: "HK Paysage <onboarding@resend.dev>",
    to: data.email,
    subject,
    html,
  });
}
