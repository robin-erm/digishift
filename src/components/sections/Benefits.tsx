"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Zeit sparen",
    description:
      "Digitale Prozesse und klare Abläufe entlasten Sie und Ihr Team im Tagesgeschäft.",
    metric: "Bis zu 70%",
    metricLabel: "weniger manueller Aufwand",
  },
  {
    icon: TrendingUp,
    title: "Mehr Kundenanfragen",
    description:
      "Eine professionelle Website und einfache Terminbuchung sorgen dafür, dass Interessenten Sie leichter finden und erreichen.",
    metric: "Rund um die Uhr",
    metricLabel: "erreichbar für Anfragen",
  },
  {
    icon: BadgeCheck,
    title: "Professioneller Auftritt",
    description:
      "Ein moderner Onlineauftritt und digitale Abläufe schaffen Vertrauen und heben Sie von Mitbewerbern ab.",
    metric: "Erster Eindruck",
    metricLabel: "der überzeugt",
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
            Unsere Digitalisierungslösungen liefern messbare Ergebnisse – von
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
