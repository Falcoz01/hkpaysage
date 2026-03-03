"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sprout,
  Scissors,
  Square,
  TreePine,
  Droplets,
  Shield,
  Leaf,
  Flower2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Scissors,
  Square,
  TreePine,
  Droplets,
  Shield,
  Leaf,
  Flower2,
};

const featuredServices = services.filter((s) => s.featured);

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50" aria-labelledby="services-home-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos expertises"
          title="Tout pour votre espace vert"
          description="De la conception à l'entretien, nous prenons en charge tous vos projets d'aménagement extérieur avec le même soin du détail."
          id="services-home-title"
        />

        <StaggerContainer
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] ?? Leaf;
            return (
              <StaggerItem key={service.slug}>
                <motion.article
                  whileHover={{ y: -6, boxShadow: "0 12px 48px rgba(0,0,0,0.10)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-8 shadow-card border border-cream-200 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-5 group-hover:bg-forest-700 transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  {service.startingPrice && (
                    <p className="mt-4 text-sm font-semibold text-moss-500">
                      {service.startingPrice}
                    </p>
                  )}

                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900 group/link"
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
