import type { Metadata } from "next";
import Link from "next/link";
import {
  Sprout, Scissors, Square, TreePine, Droplets, Shield, Leaf, Flower2,
  ArrowRight, CheckCircle2, type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Nos services — Paysagiste Lyon",
  description:
    "Création de jardin, entretien, terrasse, élagage, arrosage automatique, clôtures, gazon, massifs. HK Paysage, paysagiste à Lyon. Devis gratuit.",
  openGraph: {
    title: "Services paysagisme — HK Paysage Lyon",
    description: "Tous nos services d'aménagement et d'entretien d'espaces verts à Lyon et sa métropole.",
  },
};

const iconMap: Record<string, LucideIcon> = {
  Sprout, Scissors, Square, TreePine, Droplets, Shield, Leaf, Flower2,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-forest-950 to-forest-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-forest-300 mb-4">
              Notre savoir-faire
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-5">
              Tous nos services
            </h1>
            <p className="text-forest-200 text-lg max-w-2xl mx-auto leading-relaxed">
              De la conception à l&apos;entretien, chaque prestation est réalisée par des
              professionnels qualifiés avec le même exigence de qualité.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-label="Liste des services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="space-y-6" staggerDelay={0.07}>
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Leaf;
              return (
                <StaggerItem key={service.slug}>
                  <article
                    id={service.slug}
                    className="bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden"
                  >
                    <div className="p-8 lg:p-10 grid lg:grid-cols-[auto_1fr_auto] gap-8 items-start">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-forest-700" aria-hidden="true" />
                      </div>

                      {/* Content */}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-forest-800 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5 max-w-2xl">
                          {service.description}
                        </p>

                        {/* Benefits */}
                        <ul className="grid sm:grid-cols-2 gap-2" aria-label="Avantages inclus">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2
                                className="w-4 h-4 text-forest-500 shrink-0"
                                aria-hidden="true"
                              />
                              {benefit.label}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
                        {service.startingPrice && (
                          <p className="font-semibold text-moss-500 text-sm whitespace-nowrap">
                            {service.startingPrice}
                          </p>
                        )}
                        <Button asChild size="sm">
                          <Link href="/devis">
                            Demander un devis
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-forest-800 mb-4">
              Votre service n&apos;est pas listé ?
            </h2>
            <p className="text-gray-500 mb-8">
              Contactez-nous, nous trouverons ensemble la solution adaptée à votre
              projet. Nous intervenons dans {company.zone}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/devis">Demander un devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
