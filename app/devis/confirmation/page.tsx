import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Demande reçue — HK Paysage",
  description: "Votre demande de devis a bien été envoyée.",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6 py-32">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-forest-600" aria-hidden="true" />
        </div>

        <h1 className="font-display text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
          Votre demande a bien été reçue !
        </h1>

        <p className="text-gray-500 leading-relaxed mb-8">
          Merci de nous avoir contactés. Notre équipe va étudier votre projet
          et vous recontactera sous <strong>48 heures ouvrées</strong> par
          téléphone ou par email.
        </p>

        {/* Info box */}
        <div className="bg-white rounded-2xl border border-cream-200 shadow-card p-6 mb-8 text-left space-y-4">
          <h2 className="font-semibold text-forest-800 text-sm uppercase tracking-wider">
            En attendant, vous pouvez nous joindre
          </h2>
          <a
            href={company.phoneHref}
            className="flex items-center gap-3 text-forest-700 hover:text-forest-900 font-semibold transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </div>
            {company.phone}
          </a>
          <a
            href={company.emailHref}
            className="flex items-center gap-3 text-forest-700 hover:text-forest-900 text-sm transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </div>
            {company.email}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/realisations">
              Voir nos réalisations
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
