"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="cta-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="scale">
          <div className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 rounded-4xl px-8 py-16 lg:px-16 lg:py-20 text-center">
            {/* Background blob */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-96 h-96 rounded-full bg-moss-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"
              aria-hidden="true"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-forest-500/20 blur-3xl translate-y-1/2 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p className="text-forest-300 text-sm font-semibold tracking-widest uppercase mb-4">
                Devis gratuit · Sans engagement
              </p>
              <h2
                id="cta-title"
                className="font-display text-4xl lg:text-5xl font-bold text-white mb-5"
              >
                Votre projet mérite le meilleur
              </h2>
              <p className="text-forest-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Décrivez-nous votre projet et recevez un devis détaillé sous 48 h.
                Notre équipe se déplace gratuitement pour évaluer votre terrain.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="xl" variant="white">
                  <Link href="/devis" className="group">
                    Demander mon devis gratuit
                    <ArrowRight
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline-white">
                  <a href={company.phoneHref}>
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {company.phone}
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-forest-400">
                Disponible {company.hours.weekdays} · {company.hours.saturday}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
