import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données personnelles de ${company.fullName}.`,
  robots: { index: false, follow: false },
};

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
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PolitiqueConfidentialitePage() {
  const lastUpdated = "1er janvier 2025";

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-20">
      {/* Header */}
      <div className="bg-forest-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-forest-300 text-sm font-medium uppercase tracking-widest mb-3">
            Protection des données
          </p>
          <h1 className="font-display text-4xl font-bold">
            Politique de confidentialité
          </h1>
          <p className="text-forest-300 mt-3 text-sm">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">

        {/* Intro */}
        <div className="bg-white rounded-2xl p-6 border border-cream-200 mb-10 shadow-soft">
          <p className="text-gray-600 text-sm leading-relaxed">
            {company.legalName} (ci-après «&nbsp;nous&nbsp;») accorde une grande
            importance à la protection de vos données personnelles. La présente
            politique décrit comment nous collectons, utilisons et protégeons vos
            données, conformément au Règlement Général sur la Protection des Données
            (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés
            modifiée.
          </p>
        </div>

        <Section title="1. Responsable du traitement">
          <ul className="space-y-1">
            <li><span className="font-medium text-forest-700">Entité :</span> {company.legalName}</li>
            <li><span className="font-medium text-forest-700">Adresse :</span> {company.address}</li>
            <li>
              <span className="font-medium text-forest-700">Email DPO :</span>{" "}
              <a href={company.emailHref} className="text-forest-700 hover:underline">
                {company.email}
              </a>
            </li>
            <li><span className="font-medium text-forest-700">Téléphone :</span> {company.phone}</li>
          </ul>
        </Section>

        <Section title="2. Données collectées et finalités">
          <p>Nous collectons uniquement les données strictement nécessaires à nos prestations :</p>

          <div className="mt-4 space-y-4">
            {/* Formulaire devis */}
            <div className="rounded-xl border border-cream-200 overflow-hidden">
              <div className="bg-forest-50 px-4 py-2 border-b border-cream-200">
                <p className="font-semibold text-forest-800 text-sm">Formulaire de demande de devis</p>
              </div>
              <table className="w-full text-xs">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Données</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Finalité</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-100">
                  <tr>
                    <td className="px-4 py-2">Nom, prénom</td>
                    <td className="px-4 py-2">Identification du demandeur</td>
                    <td className="px-4 py-2">Intérêt légitime</td>
                  </tr>
                  <tr className="bg-cream-50/50">
                    <td className="px-4 py-2">Téléphone, email</td>
                    <td className="px-4 py-2">Prise de contact pour le devis</td>
                    <td className="px-4 py-2">Consentement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Ville, code postal</td>
                    <td className="px-4 py-2">Vérification de la zone d&apos;intervention</td>
                    <td className="px-4 py-2">Intérêt légitime</td>
                  </tr>
                  <tr className="bg-cream-50/50">
                    <td className="px-4 py-2">Description du projet</td>
                    <td className="px-4 py-2">Établissement du devis</td>
                    <td className="px-4 py-2">Exécution du contrat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Formulaire contact */}
            <div className="rounded-xl border border-cream-200 overflow-hidden">
              <div className="bg-forest-50 px-4 py-2 border-b border-cream-200">
                <p className="font-semibold text-forest-800 text-sm">Formulaire de contact</p>
              </div>
              <table className="w-full text-xs">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Données</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Finalité</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-500">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-100">
                  <tr>
                    <td className="px-4 py-2">Nom, email</td>
                    <td className="px-4 py-2">Réponse à votre message</td>
                    <td className="px-4 py-2">Consentement</td>
                  </tr>
                  <tr className="bg-cream-50/50">
                    <td className="px-4 py-2">Message</td>
                    <td className="px-4 py-2">Traitement de votre demande</td>
                    <td className="px-4 py-2">Intérêt légitime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section title="3. Durée de conservation">
          <p>
            Vos données personnelles sont conservées uniquement le temps nécessaire
            aux finalités pour lesquelles elles ont été collectées :
          </p>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>
              <span className="font-medium text-forest-700">Demandes de devis non transformées :</span>{" "}
              3 mois à compter de la demande
            </li>
            <li>
              <span className="font-medium text-forest-700">Données clients (contrat signé) :</span>{" "}
              5 ans à compter de la fin de la prestation (obligations comptables)
            </li>
            <li>
              <span className="font-medium text-forest-700">Données de messagerie :</span>{" "}
              3 mois à compter de la clôture de l&apos;échange
            </li>
          </ul>
        </Section>

        <Section title="4. Destinataires des données">
          <p>
            Vos données ne sont jamais vendues ni cédées à des tiers. Elles peuvent
            être transmises uniquement aux prestataires techniques suivants, liés à
            {company.legalName} par des contrats conformes au RGPD :
          </p>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>
              <span className="font-medium text-forest-700">Resend</span> (envoi
              d&apos;emails transactionnels) — serveurs en Europe
            </li>
            <li>
              <span className="font-medium text-forest-700">Vercel</span>{" "}
              (hébergement du site) — données traitées en Europe
            </li>
          </ul>
        </Section>

        <Section title="5. Vos droits (RGPD)">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="mt-2 space-y-1.5">
            {[
              { right: "Droit d'accès", desc: "Obtenir une copie de vos données" },
              { right: "Droit de rectification", desc: "Corriger des données inexactes" },
              { right: "Droit d'effacement", desc: "Demander la suppression de vos données" },
              { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré" },
              { right: "Droit d'opposition", desc: "Vous opposer à certains traitements" },
              { right: "Droit de limitation", desc: "Restreindre l'utilisation de vos données" },
            ].map(({ right, desc }) => (
              <li key={right} className="flex gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-forest-400 mt-1.5 shrink-0" />
                <span>
                  <span className="font-medium text-forest-700">{right}</span> —{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à{" "}
            <a href={company.emailHref} className="text-forest-700 underline hover:text-forest-900">
              {company.email}
            </a>{" "}
            avec une preuve d&apos;identité. Nous vous répondrons dans un délai d&apos;un mois.
          </p>
          <p>
            En cas de réclamation non résolue, vous pouvez saisir la{" "}
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-700 underline hover:text-forest-900"
            >
              CNIL
            </a>{" "}
            (Commission Nationale de l&apos;Informatique et des Libertés).
          </p>
        </Section>

        <Section title="6. Sécurité des données">
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non autorisé,
            perte, destruction ou divulgation :
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Transmission chiffrée via HTTPS/TLS</li>
            <li>Accès aux données limité aux seules personnes habilitées</li>
            <li>Protection anti-spam sur les formulaires (honeypot + rate limiting)</li>
            <li>Hébergement sur infrastructure sécurisée</li>
          </ul>
        </Section>

        <Section title="7. Cookies">
          <p>
            Ce site n&apos;utilise que des cookies strictement nécessaires à son
            fonctionnement (ex : sécurité des formulaires). Aucun cookie publicitaire
            ou de traçage analytique n&apos;est déposé sans votre consentement
            explicite.
          </p>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être
            averti de leur dépôt. Cela pourrait affecter certaines fonctionnalités du
            site.
          </p>
        </Section>

        <Section title="8. Modifications">
          <p>
            Nous nous réservons le droit de modifier la présente politique à tout
            moment. La date de mise à jour figurant en haut de cette page sera alors
            actualisée. Nous vous encourageons à consulter régulièrement cette page.
          </p>
        </Section>

        {/* CTA */}
        <div className="mt-12 p-6 bg-forest-50 rounded-2xl border border-forest-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-forest-800">Une question sur vos données ?</p>
            <p className="text-sm text-gray-500 mt-0.5">
              Nous répondons à toutes vos demandes sous 72 h ouvrées.
            </p>
          </div>
          <a
            href={company.emailHref}
            className="shrink-0 inline-flex items-center gap-2 bg-forest-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-forest-800 transition-colors"
          >
            {company.email}
          </a>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/mentions-legales"
            className="text-sm text-forest-600 hover:text-forest-800 underline"
          >
            Voir les mentions légales
          </Link>
        </div>
      </div>
    </div>
  );
}
