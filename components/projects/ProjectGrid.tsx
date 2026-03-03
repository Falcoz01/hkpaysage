"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

type FilterCategory = "Toutes" | ProjectCategory;

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Toutes");

  const filtered = useMemo(() => {
    if (activeCategory === "Toutes") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Filter bar */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrer par catégorie"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as FilterCategory)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === category
                ? "bg-forest-700 text-white shadow-md"
                : "bg-white text-gray-600 border border-cream-300 hover:border-forest-300 hover:text-forest-700"
            )}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">
          Aucune réalisation dans cette catégorie pour l'instant.
        </p>
      )}
    </div>
  );
}
