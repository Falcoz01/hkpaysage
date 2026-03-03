"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isTransparent = isHomePage && !isScrolled && !isMobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-soft border-b border-cream-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ─── Logo ──────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label={`${company.fullName} — Retour à l'accueil`}
          >
            {/*
              Logo HK Paysage — SVG généré.
              Pour utiliser votre logo PNG/SVG original :
              remplacez /logo.svg par le chemin de votre fichier dans /public/
            */}
            <Image
              src="/logo.svg"
              alt={`Logo ${company.fullName}`}
              width={64}
              height={64}
              className="rounded-xl"
              priority
            />
          </Link>

          {/* ─── Navigation desktop ────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-forest-700 hover:bg-forest-50",
                  pathname === link.href && !isTransparent && "text-forest-700 bg-forest-50 font-semibold",
                  pathname === link.href && isTransparent && "text-white font-semibold bg-white/10"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ─── CTA desktop ───────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={company.phoneHref}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isTransparent ? "text-white/90 hover:text-white" : "text-forest-700 hover:text-forest-800"
              )}
              aria-label={`Appeler ${company.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {company.phone}
            </a>
            <Button
              asChild
              variant={isTransparent ? "outline-white" : "default"}
              size="sm"
            >
              <Link href="/devis">Devis gratuit</Link>
            </Button>
          </div>

          {/* ─── Toggle menu mobile ────────────────────────────────── */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-forest-700 hover:bg-forest-50"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ─── Menu mobile ───────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-cream-200"
          >
            <nav
              className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1"
              aria-label="Navigation mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-forest-700 bg-forest-50 font-semibold"
                      : "text-gray-600 hover:text-forest-700 hover:bg-forest-50"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-cream-200 flex flex-col gap-3">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 px-4 py-3 text-forest-700 font-medium"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {company.phone}
                </a>
                {company.phone2 && (
                  <a
                    href={company.phone2Href}
                    className="flex items-center gap-2 px-4 py-3 text-forest-700 font-medium"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {company.phone2}
                  </a>
                )}
                <Button asChild size="lg" className="w-full">
                  <Link href="/devis">Demander un devis gratuit</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
