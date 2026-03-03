import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { company } from "@/data/company";

const footerLinks = {
  services: [
    { href: "/services#creation-jardin", label: "Création de jardin" },
    { href: "/services#entretien", label: "Entretien annuel" },
    { href: "/services#terrasse-pavage", label: "Terrasse & Pavage" },
    { href: "/services#elagage-abattage", label: "Élagage & Abattage" },
    { href: "/services#nettoyage-haute-pression", label: "Nettoyage haute pression" },
    { href: "/services#arrosage-automatique", label: "Arrosage automatique" },
    { href: "/services#massifs-plantations", label: "Massifs & Plantations" },
  ],
  pages: [
    { href: "/", label: "Accueil" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/devis", label: "Demander un devis" },
    { href: "/contact", label: "Contact" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt={company.name}
                width={100}
                height={38}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-forest-200 text-sm leading-relaxed mb-6">
              {company.tagline}.<br />
              Paysagistes à {company.city} depuis plus de 15 ans.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-800 hover:bg-forest-600 flex items-center justify-center transition-colors"
                aria-label="Notre page Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-800 hover:bg-forest-600 flex items-center justify-center transition-colors"
                aria-label="Notre page Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5">Nos services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-forest-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-forest-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-3 text-sm text-forest-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-start gap-3 text-sm text-forest-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 text-sm text-forest-300 not-italic">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    {company.address}
                    <br />
                    <span className="text-forest-400">{company.zone}</span>
                  </span>
                </address>
              </li>
              <li className="flex items-start gap-3 text-sm text-forest-300">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {company.hours.weekdays}
                  <br />
                  {company.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-400">
          <p>
            © {currentYear} {company.legalName} — Tous droits réservés
          </p>
          <p className="text-forest-500 italic">
            Site réalisé par <span className="text-forest-300 not-italic font-medium">Alexandre Falcoz</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-forest-200 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-forest-200 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
