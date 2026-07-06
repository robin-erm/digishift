"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Für welche Unternehmensgrößen eignen sich Ihre Lösungen?",
    answer:
      "Unsere Lösungen sind speziell auf kleine und mittelständische Unternehmen (KMU) ausgerichtet – von Einzelunternehmen bis zu Betrieben mit mehreren hundert Mitarbeitern. Wir passen Umfang und Technologie immer an Ihre Größe und Ihr Budget an. Entscheidend ist nicht die Unternehmensgröße, sondern der Wunsch, digitaler und effizienter zu werden.",
  },
  {
    question: "Wie lange dauert die Umsetzung einer Digitalisierungslösung?",
    answer:
      "Die Umsetzungsdauer hängt vom Umfang des Projekts ab. Eine professionelle Website oder ein Buchungssystem sind oft innerhalb von 1–2 Wochen umgesetzt. Komplexere Digitalisierungsprojekte mit mehreren Systemen benötigen 4–8 Wochen. In unserem kostenlosen Erstgespräch erhalten Sie eine realistische Einschätzung.",
  },
  {
    question: "Welche bestehenden Software-Systeme können integriert werden?",
    answer:
      "Wir integrieren nahezu jede Software, die über eine Schnittstelle oder einen Datenexport verfügt – darunter CRM-Systeme (HubSpot, Salesforce, Pipedrive), ERP-Systeme (SAP, DATEV, Lexoffice), E-Mail-Dienste, Google Workspace, Microsoft 365, Shopify, WooCommerce und viele weitere. Auch ältere Systeme ohne moderne Schnittstelle lassen sich oft über alternative Wege anbinden.",
  },
  {
    question: "Was kostet eine Digitalisierungslösung?",
    answer:
      "Die Kosten variieren je nach Umfang und benötigter Technologie. Einstiegsprojekte beginnen typischerweise ab 1.500 €. Wir bieten auch Betreuungsmodelle für kontinuierliche Weiterentwicklung an. In unserem kostenlosen Erstgespräch analysieren wir Ihren Bedarf und erstellen ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Was passiert, wenn eine Lösung nach der Übergabe nicht mehr funktioniert?",
    answer:
      "Wir stehen Ihnen auch nach der Implementierung zur Seite. Jede Lösung erhält einen persönlichen Ansprechpartner und auf Wunsch einen Betreuungsvertrag. Kleinere Anpassungen und Fehlerbehebungen innerhalb der ersten 30 Tage nach Go-Live sind grundsätzlich kostenlos. Bei kritischen Problemen reagieren wir innerhalb weniger Stunden.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1] mb-4">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Haben Sie weitere Fragen? Kontaktieren Sie uns direkt – wir
              antworten innerhalb von 24 Stunden.
            </p>
            <a
              href="#kontakt"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Frage stellen →
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion multiple={false} className="border-y border-border">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={index}>
                  <AccordionTrigger className="text-left text-sm font-medium no-underline py-5 gap-4 rounded-none">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
