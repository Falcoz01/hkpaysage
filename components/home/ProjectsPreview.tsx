"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProjects = getFeaturedProjects(6);

export function ProjectsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="projects-home-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos réalisations"
          title="Des espaces verts qui inspirent"
          description="Chaque projet est unique. Découvrez quelques-unes de nos dernières créations dans la région lyonnaise."
          id="projects-home-title"
        />

        <StaggerContainer
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.07}
        >
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <motion.article className="relative rounded-2xl overflow-hidden shadow-card bg-forest-900">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Card info */}
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-forest-800 leading-tight">
                      {project.title}
                    </h3>
                    <Badge variant="default" className="shrink-0 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">
                    {project.location} · {project.year}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/realisations">
              Voir toutes nos réalisations
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
