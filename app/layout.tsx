import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr"),
  title: {
    default: `${company.fullName} — Paysagiste à ${company.city}`,
    template: `%s | ${company.fullName}`,
  },
  description: `${company.fullName}, paysagiste à ${company.city}. Création de jardin, entretien, terrasse, élagage. Devis gratuit. Zone : ${company.zone}.`,
  keywords: [
    "paysagiste Lyon",
    "création jardin Lyon",
    "entretien jardin Lyon",
    "terrasse jardin",
    "élagage Lyon",
    "aménagement paysager",
    "HK Paysage paysagiste",
  ],
  authors: [{ name: company.fullName }],
  creator: company.fullName,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: company.fullName,
    title: `${company.fullName} — Paysagiste à ${company.city}`,
    description: `Créateurs d'espaces verts depuis 15 ans à ${company.city}. Jardins, terrasses, entretien. Devis gratuit.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.fullName} — Paysagiste ${company.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.fullName} — Paysagiste à ${company.city}`,
    description: `Créateurs d'espaces verts depuis 15 ans à ${company.city}. Devis gratuit.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// JSON-LD LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: company.fullName,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr"}/logo.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hkpaysage.fr"}/og-image.jpg`,
  description: `Paysagiste professionnel à ${company.city}. Création de jardin, entretien, terrasse, élagage, arrosage automatique.`,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue des Jardins",
    addressLocality: "Lyon",
    postalCode: "69000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7640,
    longitude: 4.8357,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
  sameAs: [company.social.instagram, company.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
