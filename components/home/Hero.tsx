"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* ─── Background avec parallax ──────────────────────────────── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/*
          📷 PHOTO DE FOND : sauvegardez votre photo de jardin dans
          /public/images/hero-garden.jpg
          (format recommandé : JPG, min 1920×1080px)
          Si la photo est absente, le dégradé vert s'affiche en fallback.
        */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-forest-950"
          style={{ backgroundImage: "url('/images/hero-garden.jpg')" }}
        />

        {/* Overlay gradient pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

        {/* Blobs animés subtils */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-forest-600/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-moss-500/15 blur-3xl"
          />
        </div>

        {/* Dot pattern overlay subtil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* ─── Contenu ──────────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40"
      >
        <div className="max-w-3xl">
          {/* Badge étoiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6 flex-wrap"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-moss-400 text-moss-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm text-forest-200 font-medium">
              Devis gratuit — Réponse sous 48 h
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            {company.tagline.split(",")[0]},{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-200 to-moss-300">
              notre métier
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-forest-100 leading-relaxed mb-10 max-w-xl"
          >
            Tonte, débroussaillage, taille de haies, création de gazon, béton
            drainant & désactivé. Kévin Hilarion intervient
            pour tous vos travaux d&apos;espaces verts.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="xl" variant="white">
              <Link href="/devis" className="group">
                Demander un devis gratuit
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline-white">
              <a href={company.phoneHref} className="group flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {company.phone}
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Indicateur de scroll ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-xs text-forest-300 tracking-widest uppercase">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-forest-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
