"use client";

import { motion, type Variants } from "framer-motion";
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Benefits() {
  return (
    <section id="vorteile" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Vorteile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Was Sie gewinnen
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Unsere Automatisierungslösungen liefern messbare Ergebnisse – von
            Tag eins an.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-2xl font-bold text-primary">{benefit.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{benefit.metricLabel}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
