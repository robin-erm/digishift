"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Bereit für den
              <br />
              <span className="text-primary">nächsten Schritt?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Vereinbaren Sie Ihr kostenloses Erstgespräch und erfahren Sie, wie
              KI-Automatisierung Ihr Unternehmen voranbringt. Unverbindlich,
              transparent und ohne Verkaufsdruck.
            </p>

            <div className="space-y-4">
              {[
                "Kostenloses 30-minütiges Erstgespräch",
                "Analyse Ihres Automatisierungspotenzials",
                "Transparente Kosteneinschätzung",
                "Antwort innerhalb von 24 Stunden",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
              <p className="text-sm font-semibold mb-1">Direkt erreichbar</p>
              <a
                href="mailto:info@digishift.de"
                className="text-primary text-sm hover:underline underline-offset-4"
              >
                info@digishift.de
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-card border border-border h-full min-h-[480px] gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Anfrage erhalten!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von
                    24 Stunden bei Ihnen zurück.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 rounded-2xl bg-card border border-border"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      required
                      className="rounded-xl bg-background border-border focus:border-primary h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Unternehmen
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Muster GmbH"
                      className="rounded-xl bg-background border-border focus:border-primary h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-Mail <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.de"
                      required
                      className="rounded-xl bg-background border-border focus:border-primary h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456789"
                      className="rounded-xl bg-background border-border focus:border-primary h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Nachricht <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz, welche Prozesse Sie automatisieren möchten oder welche Herausforderungen Sie haben..."
                    required
                    rows={5}
                    className="rounded-xl bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kostenlose Beratung anfragen
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-foreground">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
