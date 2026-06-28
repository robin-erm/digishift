import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Impressum – DigiShift",
};

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Impressum</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              [Dein Name / Firmenname]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Kontakt</h2>
            <p>
              E-Mail: info@digishift.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [USt-ID hier eintragen, falls vorhanden]
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Dein Name]<br />
              [Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
