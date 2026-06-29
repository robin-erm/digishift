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

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Robin Eremia<br />
              Eichenlaubweg 23<br />
              75181 Pforzheim<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Kontakt</h2>
            <p>E-Mail: info@digishift.de</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Hinweis zur Umsatzsteuer</h2>
            <p>
              Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Robin Eremia<br />
              Eichenlaubweg 23<br />
              75181 Pforzheim
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
