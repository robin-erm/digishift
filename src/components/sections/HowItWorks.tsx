"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ScanSearch, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Kostenloses Erstgespräch",
    description:
      "Wir lernen Ihr Unternehmen kennen und verstehen Ihre aktuellen Herausforderungen. Keine Verpflichtungen, keine Kosten.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Analyse Ihrer Prozesse",
    description:
      "Wir analysieren gemeinsam Ihre Abläufe und identifizieren die Prozesse mit dem größten Automatisierungspotenzial.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Entwicklung der Automatisierung",
    description:
      "Unser Team entwickelt die maßgeschneiderte Lösung – transparent und mit regelmäßigen Updates für Sie.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementierung & Betreuung",
    description:
      "Wir integrieren die Lösung in Ihre bestehenden Systeme und begleiten Sie auch danach persönlich.",
  },
];

export function HowItWorks() {
  return (
    <section id="ablauf" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Ablauf
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            So funktioniert es
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Von der ersten Idee bis zur laufenden Automatisierung – in vier
            klaren Schritten.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-start"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10 relative">
                      <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-2 -right-3 text-xs font-bold text-primary/40 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Jetzt Erstgespräch buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
