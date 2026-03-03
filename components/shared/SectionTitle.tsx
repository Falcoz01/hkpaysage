import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  id?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  id,
}: SectionTitleProps) {
  return (
    <div
      id={id}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <AnimatedSection animation="fade-up" delay={0}>
          <span
            className={cn(
              "inline-block text-sm font-semibold tracking-widest uppercase mb-3",
              light ? "text-forest-300" : "text-forest-600"
            )}
          >
            {eyebrow}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection animation="fade-up" delay={eyebrow ? 0.08 : 0}>
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl font-bold leading-tight",
            light ? "text-white" : "text-forest-900"
          )}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection animation="fade-up" delay={0.15}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              light ? "text-forest-200" : "text-gray-500",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
