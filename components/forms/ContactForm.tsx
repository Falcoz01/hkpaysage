"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message trop court (min 5 caractères)"),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      reset();
    } catch {
      setServerError("Une erreur est survenue. Veuillez nous appeler directement.");
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-10 px-6 bg-green-50 border border-green-200 rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-green-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-green-800 mb-2">
            Message envoyé !
          </h3>
          <p className="text-green-700 text-sm">
            Merci ! Nous vous répondrons dans les <strong>24 h ouvrées</strong>.
          </p>
        </div>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm text-green-700 underline hover:text-green-900 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden">
        <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div>
        <Label htmlFor="contact-name">
          Nom complet <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Input
          id="contact-name"
          {...register("name")}
          placeholder="Marie Dupont"
          autoComplete="name"
          className={cn("mt-1.5", errors.name && "border-red-300")}
        />
        {errors.name && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Input
          id="contact-email"
          {...register("email")}
          type="email"
          placeholder="marie@example.fr"
          autoComplete="email"
          className={cn("mt-1.5", errors.email && "border-red-300")}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-phone">Téléphone (optionnel)</Label>
        <Input
          id="contact-phone"
          {...register("phone")}
          type="tel"
          placeholder="06 12 34 56 78"
          autoComplete="tel"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="contact-message">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="contact-message"
          {...register("message")}
          rows={4}
          placeholder="Bonjour, je souhaite un renseignement sur…"
          className={cn("mt-1.5", errors.message && "border-red-300")}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <div role="alert" className="flex items-start gap-3 text-sm text-red-700 bg-red-50 border border-red-300 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div role="alert" className="flex items-start gap-3 text-sm text-orange-700 bg-orange-50 border border-orange-300 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-orange-500" aria-hidden="true" />
          <span>Veuillez corriger les champs en rouge avant d'envoyer.</span>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />Envoi en cours…</>
        ) : (
          <><Send className="w-4 h-4" aria-hidden="true" />Envoyer le message</>
        )}
      </Button>
    </form>
  );
}
