import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutz – DigiShift",
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">2. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              [Dein Name / Firmenname]<br />
              [Adresse]<br />
              E-Mail: info@digishift.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-sm font-semibold text-foreground mt-4 mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <h3 className="text-sm font-semibold text-foreground mt-4 mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">4. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA gehostet. Details entnehmen Sie der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
