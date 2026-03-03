import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${company.fullName}, paysagiste à ${company.city}.`,
  robots: { index: false, follow: false },
};

// ─── Section helper ───────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-bold text-forest-800 mb-3 pb-2 border-b border-cream-200">
        {title}
      </h2>
      <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MentionsLegalesPage() {
  const lastUpdated = "1er janvier 2025";

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-20">
      {/* Header */}
      <div className="bg-forest-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-forest-300 text-sm font-medium uppercase tracking-widest mb-3">
            Informations légales
          </p>
          <h1 className="font-display text-4xl font-bold">Mentions légales</h1>
          <p className="text-forest-300 mt-3 text-sm">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <Section title="1. Éditeur du site">
          <p>
            Le site <strong className="text-forest-800">{process.env.NEXT_PUBLIC_SITE_URL ?? "www.hkpaysage.fr"}</strong> est
            édité par :
          </p>
          <ul className="mt-3 space-y-1 not-prose">
            <li><span className="font-medium text-forest-700">Raison sociale :</span> {company.legalName}</li>
            <li><span className="font-medium text-forest-700">Forme juridique :</span> SARL</li>
            <li><span className="font-medium text-forest-700">Capital social :</span> {company.capital}</li>
            <li><span className="font-medium text-forest-700">Siège social :</span> {company.address}</li>
            <li>
              <span className="font-medium text-forest-700">SIRET :</span>{" "}
              {company.siret}
            </li>
            <li>
              <span className="font-medium text-forest-700">RCS :</span>{" "}
              {company.rcsCity}
            </li>
            <li>
              <span className="font-medium text-forest-700">Téléphone :</span>{" "}
              <a href={company.phoneHref} className="text-forest-700 hover:underline">
                {company.phone}
              </a>
            </li>
            <li>
              <span className="font-medium text-forest-700">Email :</span>{" "}
              <a href={company.emailHref} className="text-forest-700 hover:underline">
                {company.email}
              </a>
            </li>
          </ul>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>
            Le directeur de la publication est le gérant de {company.legalName}, joignable à
            l&apos;adresse email :{" "}
            <a href={company.emailHref} className="text-forest-700 hover:underline">
              {company.email}
            </a>
          </p>
        </Section>

        <Section title="3. Hébergement">
          <p>
            Ce site est hébergé par <strong className="text-forest-800">Vercel Inc.</strong>
          </p>
          <ul className="mt-2 space-y-1">
            <li>340 Pine Street, Suite 1601, San Francisco, CA 94104, États-Unis</li>
            <li>
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-700 hover:underline"
              >
                vercel.com
              </a>
            </li>
          </ul>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, visuels, logos,
            structure) est la propriété exclusive de {company.legalName} et est
            protégé par les lois françaises et internationales relatives au droit
            d&apos;auteur et à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation, totale
            ou partielle, du contenu de ce site est interdite sans l&apos;accord
            écrit préalable de {company.legalName}.
          </p>
        </Section>

        <Section title="5. Données personnelles & RGPD">
          <p>
            Dans le cadre de l&apos;utilisation de ce site, certaines données
            personnelles peuvent être collectées (formulaire de contact, formulaire de
            devis). Le traitement de ces données est décrit dans notre{" "}
            <Link
              href="/politique-confidentialite"
              className="text-forest-700 underline hover:text-forest-900"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et
            à la loi Informatique et Libertés, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement et de portabilité de
            vos données en contactant :{" "}
            <a href={company.emailHref} className="text-forest-700 hover:underline">
              {company.email}
            </a>
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement. Aucun cookie publicitaire ou de traçage tiers n&apos;est
            utilisé sans votre consentement explicite.
          </p>
        </Section>

        <Section title="7. Responsabilité">
          <p>
            {company.legalName} s&apos;efforce de maintenir les informations de ce
            site à jour et exactes. Toutefois, nous ne pouvons garantir
            l&apos;exactitude, la complétude ou l&apos;actualité des informations
            diffusées. La responsabilité de {company.legalName} ne pourra être
            engagée pour tout dommage direct ou indirect résultant de
            l&apos;utilisation de ce site.
          </p>
        </Section>

        <Section title="8. Liens hypertextes">
          <p>
            Ce site peut contenir des liens vers des sites tiers.{" "}
            {company.legalName} n&apos;exerce aucun contrôle sur ces sites et
            n&apos;assume aucune responsabilité quant à leur contenu ou leur
            disponibilité.
          </p>
        </Section>

        <Section title="9. Droit applicable & médiation">
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas
            de litige, les parties s&apos;engagent à rechercher une solution amiable
            avant toute action judiciaire. À défaut d&apos;accord, les tribunaux
            compétents de Lyon seront seuls compétents.
          </p>
          <p>
            Conformément à l&apos;article L.612-1 du Code de la consommation, vous
            pouvez recourir gratuitement au médiateur de la consommation de votre
            choix en cas de litige non résolu.
          </p>
        </Section>

        <div className="mt-12 p-5 bg-forest-50 rounded-2xl border border-forest-100">
          <p className="text-sm text-gray-500 text-center">
            Pour toute question, contactez-nous à{" "}
            <a href={company.emailHref} className="text-forest-700 font-medium hover:underline">
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
