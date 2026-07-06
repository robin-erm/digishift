"use client";

import { motion } from "framer-motion";
import { Globe, Workflow, CalendarClock, Settings2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Globe,
    title: "Digitale Präsenz",
    description:
      "Eine moderne, professionelle Website, die Vertrauen schafft und neue Kunden gewinnt.",
    tags: ["Website", "Onlineauftritt", "SEO-Grundlagen"],
  },
  {
    icon: Workflow,
    title: "Prozessautomatisierung",
    description:
      "Wir digitalisieren Ihre Abläufe und automatisieren wiederkehrende Aufgaben – für mehr Effizienz im Tagesgeschäft.",
    tags: ["Digitale Workflows", "Systemintegration", "Automatisierung"],
  },
  {
    icon: CalendarClock,
    title: "Terminbuchung & CRM",
    description:
      "Automatisierte Terminbuchung und strukturierte Kundenverwaltung – damit keine Anfrage verloren geht.",
    tags: ["Terminbuchung", "CRM", "Lead-Erfassung"],
  },
  {
    icon: Settings2,
    title: "Individuelle Lösungen",
    description:
      "Maßgeschneiderte Softwarelösungen für Ihre spezifischen Anforderungen – bei Bedarf unterstützt durch moderne KI-Werkzeuge.",
    tags: ["Beratung", "Konzept", "Individuelle Entwicklung"],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 block">
            Leistungen
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1] max-w-md">
              Was wir für Sie tun
            </h2>
            <p className="text-muted-foreground max-w-xs sm:text-right">
              Von der ersten Idee bis zur fertigen Umsetzung – aus einer Hand.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-background p-8 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-xl font-medium tracking-[-0.01em] mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-md font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
