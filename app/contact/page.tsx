import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact — Paysagiste Lyon",
  description: `Contactez ${company.fullName} à ${company.city}. Téléphone : ${company.phone}. Email : ${company.email}. Zone d'intervention : ${company.zone}.`,
};

const contactItems = [
  {
    icon: Phone,
    label: "Téléphone",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: company.address,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-950 to-forest-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-forest-200 text-lg max-w-xl mx-auto leading-relaxed">
              Une question, un projet ou simplement envie d&apos;un conseil ?
              Notre équipe est à votre écoute.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-cream-50" aria-label="Informations de contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimatedSection animation="fade-up">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest-800 mb-6">
                    Nos coordonnées
                  </h2>
                  <dl className="space-y-5">
                    {contactItems.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-forest-700" aria-hidden="true" />
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                            {item.label}
                          </dt>
                          {item.href ? (
                            <dd>
                              <a
                                href={item.href}
                                className="text-forest-800 font-medium hover:text-forest-600 transition-colors"
                              >
                                {item.value}
                              </a>
                            </dd>
                          ) : (
                            <dd className="text-forest-800 font-medium">{item.value}</dd>
                          )}
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Horaires */}
                <div>
                  <h3 className="font-semibold text-forest-800 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-500" aria-hidden="true" />
                    Horaires d&apos;ouverture
                  </h3>
                  <dl className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between gap-4">
                      <dt>Lundi – Vendredi</dt>
                      <dd className="font-medium text-forest-700">8h00 – 18h00</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Samedi</dt>
                      <dd className="font-medium text-forest-700">9h00 – 13h00</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Dimanche</dt>
                      <dd className="font-medium text-gray-400">Fermé</dd>
                    </div>
                  </dl>
                </div>

                {/* Zone intervention */}
                <div>
                  <h3 className="font-semibold text-forest-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-forest-500" aria-hidden="true" />
                    Zone d&apos;intervention
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{company.zone}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.zoneList.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 bg-forest-50 border border-forest-100 rounded-full text-xs font-medium text-forest-700"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <h3 className="font-semibold text-forest-800 mb-3">
                    Suivez-nous
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-cream-200 rounded-xl text-sm font-medium text-gray-600 hover:text-forest-700 hover:border-forest-200 transition-colors shadow-soft"
                      aria-label="Notre page Instagram"
                    >
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                      Instagram
                    </a>
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-cream-200 rounded-xl text-sm font-medium text-gray-600 hover:text-forest-700 hover:border-forest-200 transition-colors shadow-soft"
                      aria-label="Notre page Facebook"
                    >
                      <Facebook className="w-4 h-4" aria-hidden="true" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="fade-left" delay={0.1}>
              <div className="bg-white rounded-2xl shadow-card border border-cream-200 p-8">
                <h2 className="font-display text-2xl font-bold text-forest-800 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-500 text-sm mb-7">
                  Réponse garantie sous 24 h ouvrées.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
