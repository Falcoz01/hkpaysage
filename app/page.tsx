import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Lien d'évitement accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-forest-700 focus:font-semibold"
      >
        Aller au contenu principal
      </a>

      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}
