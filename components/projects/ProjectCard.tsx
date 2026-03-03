"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article className="bg-white rounded-2xl overflow-hidden shadow-card border border-cream-200 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-forest-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />

        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge variant="green" className="shadow-md">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-forest-800 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {project.objective}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {project.duration}
          </span>
          <span>{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
