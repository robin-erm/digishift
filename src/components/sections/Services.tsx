"use client";

import { motion, type Variants } from "framer-motion";
import { Brain, Workflow, MessageSquare, Settings2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "KI-Automatisierungen",
    description:
      "Automatisierung wiederkehrender Prozesse mit modernen KI-Systemen. Von der Dateneingabe bis zur Entscheidungsfindung.",
    tags: ["Machine Learning", "NLP", "Computer Vision"],
  },
  {
    icon: Workflow,
    title: "Workflow-Automatisierung",
    description:
      "Verknüpfung bestehender Software und automatisierte Abläufe. Nahtlose Integration in Ihre bestehende IT-Landschaft.",
    tags: ["API-Integration", "n8n", "Zapier", "Make"],
  },
  {
    icon: MessageSquare,
    title: "KI-Chatbots",
    description:
      "Intelligente Chatbots für Website, Support und Leadgenerierung. 24/7 verfügbar, mehrsprachig und lernfähig.",
    tags: ["GPT-4", "RAG", "CRM-Integration"],
  },
  {
    icon: Settings2,
    title: "Individuelle Lösungen",
    description:
      "Maßgeschneiderte Automatisierungen passend zu Ihren Geschäftsprozessen. Entwickelt für Ihre spezifischen Anforderungen.",
    tags: ["Analyse", "Konzept", "Entwicklung"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Leistungen
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-md">
              Was wir für Sie tun
            </h2>
            <p className="text-muted-foreground max-w-xs sm:text-right">
              Von der Idee bis zur fertigen Automatisierung – aus einer Hand.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
