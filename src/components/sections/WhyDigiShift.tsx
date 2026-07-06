"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Gauge, Target, Lightbulb, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Individuelle Lösungen",
    description: "Keine Standardprodukte. Jede Lösung wird speziell auf Ihre Prozesse und Ziele zugeschnitten.",
  },
  {
    icon: Gauge,
    title: "Moderne Technologien",
    description: "Wir setzen auf bewährte, moderne Werkzeuge – von Automatisierungsplattformen bis hin zu KI-gestützten Lösungen, wenn sie echten Mehrwert bieten.",
  },
  {
    icon: CheckCircle2,
    title: "Schnelle Umsetzung",
    description: "Erste Ergebnisse oft schon innerhalb weniger Wochen. Klare Meilensteine, kein langes Warten.",
  },
  {
    icon: Handshake,
    title: "Persönlicher Ansprechpartner",
    description: "Kein Ticketsystem, keine anonymen Support-Queues. Sie haben immer einen direkten Kontakt bei uns.",
  },
  {
    icon: Target,
    title: "Fokus auf messbare Ergebnisse",
    description: "Wir definieren klare Ziele und messen den Erfolg Ihrer Digitalisierung – transparent und nachvollziehbar.",
  },
  {
    icon: Users,
    title: "Nachgewiesene Erfahrung",
    description: "Praxiserprobte Expertise in Digitalisierung, Prozessautomatisierung und moderner Unternehmensführung – aus erster Hand.",
  },
];

export function WhyDigiShift() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 block">
              Warum DigiShift
            </span>
            <h2 className="text-3xl sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              Ihr Partner für
              <br />
              <span className="text-primary">Digitalisierung</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kein anonymes Unternehmen, sondern ein persönlicher Ansprechpartner,
              der mit Ihnen denkt. Vertrauen, Qualität und messbare Ergebnisse
              stehen bei jedem Projekt an erster Stelle.
            </p>

            {/* Stat blocks */}
            <div className="grid grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
              {[
                { value: "100%", label: "Individuelle Entwicklung" },
                { value: "24/7", label: "Digital im Einsatz" },
                { value: "<4 Wo.", label: "Typische Umsetzungszeit" },
                { value: "1:1", label: "Persönliche Betreuung" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background p-4">
                  <p className="text-2xl font-medium tracking-[-0.02em] text-primary tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: reasons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="divide-y divide-border"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex items-start gap-4 py-6 first:pt-0">
                  <Icon className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
