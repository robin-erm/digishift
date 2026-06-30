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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 block">
            Ablauf
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1]">
            So funktioniert es
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Von der ersten Idee bis zur laufenden Automatisierung – in vier
            klaren Schritten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-medium tracking-[-0.02em] text-primary/40 tabular-nums">
                    {step.number}
                  </span>
                  <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="w-8 h-px bg-border mb-4" />

                <h3 className="text-base font-medium tracking-[-0.01em] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
          >
            Jetzt Erstgespräch buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
