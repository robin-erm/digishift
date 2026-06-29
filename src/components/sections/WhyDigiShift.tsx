"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Gauge, Target, Lightbulb, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Individuelle Lösungen",
    description: "Keine Standardprodukte. Jede Automatisierung wird speziell auf Ihre Prozesse und Ziele zugeschnitten.",
  },
  {
    icon: Gauge,
    title: "Moderne KI-Technologien",
    description: "Wir arbeiten mit den neuesten KI-Modellen und Automatisierungsplattformen – immer auf dem aktuellen Stand.",
  },
  {
    icon: CheckCircle2,
    title: "Schnelle Umsetzung",
    description: "Erste Ergebnisse oft schon innerhalb weniger Wochen. Agile Entwicklung, klare Meilensteine.",
  },
  {
    icon: Handshake,
    title: "Persönlicher Ansprechpartner",
    description: "Kein Ticketsystem, keine anonymen Support-Queues. Sie haben immer einen direkten Kontakt bei uns.",
  },
  {
    icon: Target,
    title: "Fokus auf messbare Ergebnisse",
    description: "Wir definieren KPIs und messen den Erfolg Ihrer Automatisierung – transparent und nachvollziehbar.",
  },
  {
    icon: Users,
    title: "Nachgewiesene Erfahrung",
    description: "Praxiserprobte Expertise in KI, Workflow-Automatisierung und Geschäftsprozessoptimierung – aus erster Hand.",
  },
];

export function WhyDigiShift() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Warum DigiShift
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Ihr Partner für
              <br />
              <span className="text-primary">KI-Automatisierung</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kein anonymes Unternehmen, sondern ein persönlicher Ansprechpartner,
              der mit Ihnen denkt. Vertrauen, Qualität und messbare Ergebnisse
              stehen bei jedem Projekt an erster Stelle.
            </p>

            {/* Stat blocks */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Individuelle Entwicklung" },
                { value: "24/7", label: "Automatisierung aktiv" },
                { value: "<4 Wo.", label: "Typische Umsetzungszeit" },
                { value: "1:1", label: "Persönliche Betreuung" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: reasons */}
          <div className="space-y-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
