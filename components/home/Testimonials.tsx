"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

export function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 bg-forest-950"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
          description="Des retours authentiques de particuliers et professionnels qui nous font confiance."
          light
          id="testimonials-title"
        />

        <StaggerContainer
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <blockquote className="relative bg-forest-900/60 backdrop-blur-sm border border-forest-800 rounded-2xl p-7 h-full flex flex-col">
                {/* Quote icon */}
                <Quote
                  className="w-8 h-8 text-forest-600 mb-4 shrink-0"
                  aria-hidden="true"
                />

                {/* Stars */}
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label={`Note : ${testimonial.rating} sur 5`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-moss-400 text-moss-400"
                          : "text-forest-700"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-forest-100 text-sm leading-relaxed flex-1">
                  {testimonial.text}
                </p>

                {/* Author */}
                <footer className="mt-6 pt-5 border-t border-forest-800">
                  <cite className="not-italic">
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-forest-400 text-xs mt-0.5">
                      {testimonial.city} · {testimonial.service} · {testimonial.date}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
