"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Zeit sparen",
    description:
      "Reduzieren Sie manuelle Arbeit durch intelligente Automatisierungen und gewinnen Sie wertvolle Kapazitäten zurück.",
    metric: "Bis zu 70%",
    metricLabel: "weniger Zeitaufwand",
  },
  {
    icon: TrendingDown,
    title: "Kosten senken",
    description:
      "Weniger Verwaltungsaufwand bedeutet geringere Betriebskosten und messbar bessere Margen für Ihr Unternehmen.",
    metric: "Bis zu 40%",
    metricLabel: "Kostenreduktion",
  },
  {
    icon: Rocket,
    title: "Produktivität steigern",
    description:
      "Ihre Mitarbeiter konzentrieren sich auf wertschöpfende Aufgaben, statt Zeit mit Routinearbeiten zu verbringen.",
    metric: "3× schneller",
    metricLabel: "Prozessabläufe",
  },
];

export function Benefits() {
  return (
    <section id="vorteile" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 block">
            Vorteile
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1]">
            Was Sie gewinnen
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Unsere Automatisierungslösungen liefern messbare Ergebnisse – von
            Tag eins an.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-background p-8">
                <p className="text-3xl font-medium tracking-[-0.02em] text-primary tabular-nums">
                  {benefit.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-1 mb-6">
                  {benefit.metricLabel}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.75} />
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
