import type { Metadata } from "next";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Demande de devis gratuit — Paysagiste Lyon",
  description:
    "Demandez un devis gratuit pour votre projet d'aménagement paysager à Lyon. Réponse sous 48 h. Création jardin, terrasse, entretien, élagage.",
  robots: { index: true, follow: true },
};

const perks = [
  "Déplacement gratuit sur votre terrain",
  "Devis détaillé sous 48 h ouvrées",
  "Sans engagement de votre part",
  "Conseils personnalisés offerts",
];

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-forest-950 to-forest-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-forest-300 mb-4">
              Gratuit &amp; sans engagement
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Demander un devis
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Décrivez votre projet et notre équipe vous contacte sous 48 h pour
              vous proposer un devis sur mesure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 lg:py-24 bg-cream-50" aria-label="Formulaire de demande de devis">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Form */}
            <AnimatedSection animation="fade-up">
              <div className="bg-white rounded-2xl shadow-card border border-cream-200 p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold text-forest-800 mb-2">
                  Votre projet
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Tous les champs marqués d&apos;un{" "}
                  <span className="text-red-500" aria-hidden="true">*</span> sont obligatoires.
                </p>
                <QuoteForm />
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Perks */}
              <AnimatedSection animation="fade-left" delay={0.1}>
                <div className="bg-forest-700 rounded-2xl p-7 text-white">
                  <h3 className="font-display text-lg font-bold mb-5">
                    Pourquoi choisir HK Paysage ?
                  </h3>
                  <ul className="space-y-3" aria-label="Avantages">
                    {perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm text-forest-100">
                        <CheckCircle2 className="w-5 h-5 text-moss-400 shrink-0 mt-0.5" aria-hidden="true" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Contact direct */}
              <AnimatedSection animation="fade-left" delay={0.15}>
                <div className="bg-white rounded-2xl p-7 border border-cream-200 shadow-card space-y-5">
                  <h3 className="font-semibold text-forest-800">
                    Préférez-vous nous appeler ?
                  </h3>
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-3 text-forest-700 hover:text-forest-900 font-semibold transition-colors"
                    aria-label={`Appeler ${company.phone}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    {company.phone}
                  </a>
                  <a
                    href={company.emailHref}
                    className="flex items-center gap-3 text-forest-700 hover:text-forest-900 font-medium transition-colors text-sm"
                    aria-label={`Envoyer un email à ${company.email}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    {company.email}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-forest-500" aria-hidden="true" />
                    </div>
                    <div>
                      <p>{company.hours.weekdays}</p>
                      <p>{company.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
