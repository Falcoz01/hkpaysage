// ─── Project / Réalisation ──────────────────────────────────────────────────

export type ProjectCategory =
  | "Création de jardin"
  | "Terrasse & Allées"
  | "Plantations"
  | "Entretien"
  | "Avant / Après";

export interface ProjectStep {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  duration: string;
  year: number;
  objective: string;
  coverImage: string;
  images: string[];
  steps: ProjectStep[];
  tags: string[];
  featured: boolean;
}

// ─── Témoignage ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar?: string;
}

// ─── Service ───────────────────────────────────────────────────────────────

export interface ServiceBenefit {
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: ServiceBenefit[];
  startingPrice?: string;
  featured: boolean;
}

// ─── FAQ ───────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

// ─── Formulaire devis ──────────────────────────────────────────────────────

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  postalCode: string;
  serviceType: string;
  budget?: string;
  description: string;
  desiredDate?: string;
  consent: boolean;
  honeypot?: string;
}

// ─── Formulaire contact ────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;
}
