"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceTypes } from "@/data/services";
import { cn } from "@/lib/utils";

// ─── Validation schema ────────────────────────────────────────────────────

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis (min 2 caractères)"),
  lastName: z.string().min(2, "Nom requis (min 2 caractères)"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[\d\s+\-.()]+$/, "Format de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  city: z.string().min(2, "Ville requise"),
  postalCode: z
    .string()
    .length(5, "Code postal invalide (5 chiffres)")
    .regex(/^\d{5}$/, "Code postal invalide"),
  serviceType: z.string().min(1, "Veuillez sélectionner une prestation"),
  budget: z.string().optional(),
  description: z
    .string()
    .min(20, "Décrivez votre projet (min 20 caractères)")
    .max(2000, "Description trop longue (max 2000 caractères)"),
  desiredDate: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  honeypot: z.string().max(0, "Bot détecté").optional(),
});

type FormData = z.infer<typeof schema>;

// ─── Field wrapper ─────────────────────────────────────────────────────────

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>
        {label}
        {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────

export function QuoteForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setServerError(
          "Trop de demandes. Veuillez réessayer dans une heure ou nous appeler directement."
        );
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(
          body.message ?? "Une erreur est survenue. Veuillez réessayer."
        );
        return;
      }

      setSubmitted(true);
      setTimeout(() => router.push("/devis/confirmation"), 2000);
    } catch {
      setServerError(
        "Impossible d'envoyer le formulaire. Vérifiez votre connexion et réessayez."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot (anti-spam, caché visuellement) */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden">
        <label htmlFor="website">Site web</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {/* Personal info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Prénom" required error={errors.firstName?.message}>
          <Input
            {...register("firstName")}
            placeholder="Marie"
            autoComplete="given-name"
            aria-required="true"
            aria-invalid={!!errors.firstName}
            className={cn(errors.firstName && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
        <Field label="Nom" required error={errors.lastName?.message}>
          <Input
            {...register("lastName")}
            placeholder="Dupont"
            autoComplete="family-name"
            aria-required="true"
            aria-invalid={!!errors.lastName}
            className={cn(errors.lastName && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Téléphone" required error={errors.phone?.message} hint="On vous rappellera sous 48 h">
          <Input
            {...register("phone")}
            type="tel"
            placeholder="06 12 34 56 78"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            className={cn(errors.phone && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <Input
            {...register("email")}
            type="email"
            placeholder="marie@example.fr"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            className={cn(errors.email && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Ville" required error={errors.city?.message}>
          <Input
            {...register("city")}
            placeholder="Lyon"
            autoComplete="address-level2"
            aria-required="true"
            aria-invalid={!!errors.city}
            className={cn(errors.city && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
        <Field label="Code postal" required error={errors.postalCode?.message}>
          <Input
            {...register("postalCode")}
            placeholder="69000"
            autoComplete="postal-code"
            inputMode="numeric"
            maxLength={5}
            aria-required="true"
            aria-invalid={!!errors.postalCode}
            className={cn(errors.postalCode && "border-red-300 focus-visible:ring-red-400")}
          />
        </Field>
      </div>

      {/* Service */}
      <Field label="Type de prestation" required error={errors.serviceType?.message}>
        <Select onValueChange={(val) => setValue("serviceType", val, { shouldValidate: true })}>
          <SelectTrigger
            aria-required="true"
            aria-invalid={!!errors.serviceType}
            className={cn(errors.serviceType && "border-red-300 focus:ring-red-400")}
          >
            <SelectValue placeholder="Sélectionnez une prestation" />
          </SelectTrigger>
          <SelectContent>
            {serviceTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
            <SelectItem value="Autre">Autre / Je ne sais pas encore</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Budget estimé" error={errors.budget?.message} hint="Optionnel — aide à adapter nos propositions">
          <Select onValueChange={(val) => setValue("budget", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner (optionnel)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Moins de 1 000 €">Moins de 1 000 €</SelectItem>
              <SelectItem value="1 000 – 3 000 €">1 000 – 3 000 €</SelectItem>
              <SelectItem value="3 000 – 7 000 €">3 000 – 7 000 €</SelectItem>
              <SelectItem value="7 000 – 15 000 €">7 000 – 15 000 €</SelectItem>
              <SelectItem value="Plus de 15 000 €">Plus de 15 000 €</SelectItem>
              <SelectItem value="Je ne sais pas">Je ne sais pas encore</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Date souhaitée de début" error={errors.desiredDate?.message} hint="Optionnel">
          <Input
            {...register("desiredDate")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
        </Field>
      </div>

      {/* Description */}
      <Field
        label="Décrivez votre projet"
        required
        error={errors.description?.message}
        hint="Surface approximative, végétaux existants, ambiance souhaitée… Plus c'est précis, mieux c'est !"
      >
        <Textarea
          {...register("description")}
          rows={5}
          placeholder="Ex : Je souhaite créer un jardin méditerranéen sur 150 m², avec une terrasse de 30 m², quelques oliviers et des massifs de lavande…"
          aria-required="true"
          aria-invalid={!!errors.description}
          className={cn(errors.description && "border-red-300 focus-visible:ring-red-400")}
        />
      </Field>

      {/* RGPD consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          onCheckedChange={(checked) =>
            setValue("consent", checked === true, { shouldValidate: true })
          }
          aria-required="true"
          aria-invalid={!!errors.consent}
        />
        <div className="flex-1">
          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            J&apos;accepte que mes données personnelles soient utilisées pour traiter ma demande
            de devis, conformément à la{" "}
            <a href="/politique-confidentialite" className="text-forest-700 underline hover:text-forest-900">
              politique de confidentialité
            </a>
            .{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {/* Succès */}
      {submitted && (
        <div
          role="status"
          className="flex items-start gap-3 bg-green-50 border border-green-300 text-green-800 rounded-xl p-4 text-sm"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-green-600" aria-hidden="true" />
          <span>✅ Demande envoyée avec succès ! Vous allez être redirigé…</span>
        </div>
      )}

      {/* Server error */}
      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer ma demande de devis
            <Send className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Réponse sous 48 h ouvrées · Devis gratuit · Sans engagement
      </p>
    </form>
  );
}
