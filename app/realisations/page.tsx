import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Nos réalisations — Paysagiste Lyon",
  description:
    "Découvrez nos dernières créations et rénovations de jardins, terrasses et espaces verts à Lyon et sa métropole. Filtrez par catégorie.",
  openGraph: {
    title: "Réalisations paysagisme — HK Paysage Lyon",
    description:
      "Portfolio de 10+ projets : jardins contemporains, terrasses, plantations, élagage, avant/après.",
  },
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-950 to-forest-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-forest-300 mb-4">
              Portfolio
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-5">
              Nos réalisations
            </h1>
            <p className="text-forest-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Chaque jardin raconte une histoire. Découvrez nos derniers projets et
              laissez-vous inspirer pour votre futur espace vert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid filtrable */}
      <section className="py-16 lg:py-24 bg-cream-50" aria-label="Grille des réalisations">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
