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
            <h2 className="text-base font-semibold text-foreground mb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              Robin Eremia<br />
              Eichenlaubweg 23<br />
              75181 Pforzheim<br />
              E-Mail: kontakt@digishift-ai.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">2. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt. Eine Einwilligung ist daher nach § 25 TTDSG nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">3. Hosting (Vercel)</h2>
            <p>
              Diese Website wird gehostet bei:<br /><br />
              Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA<br /><br />
              Beim Aufruf der Website werden automatisch Server-Log-Dateien erfasst (IP-Adresse, Browser, Betriebssystem, Uhrzeit). Diese Daten werden nach 7 Tagen gelöscht und nicht mit anderen Daten zusammengeführt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Mit Vercel besteht ein Auftragsverarbeitungsvertrag. Weitere Informationen: vercel.com/legal/privacy-policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">4. Kontaktformular</h2>
            <p>
              Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail, Unternehmen, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Daten werden nach vollständiger Bearbeitung Ihrer Anfrage, spätestens nach 6 Monaten, gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">5. KI-Chatbot DigiBot (Groq)</h2>
            <p>
              Auf dieser Website ist der KI-Assistent „DigiBot" eingebunden. Wenn Sie den Chat nutzen, werden Ihre Nachrichten zur KI-Verarbeitung an folgendes Unternehmen übertragen:<br /><br />
              Groq, Inc., 2 N Market St, San Jose, CA 95113, USA<br /><br />
              Groq verarbeitet die Nachrichten auf Servern in den USA. Die Übertragung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Rechtsgrundlage für die Verarbeitung: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines KI-gestützten Supports). Chat-Nachrichten werden nicht dauerhaft gespeichert und nach Sitzungsende verworfen. Mit Groq besteht ein Auftragsverarbeitungsvertrag. Weitere Informationen: groq.com/privacy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">6. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich per E-Mail an: <a href="mailto:kontakt@digishift-ai.de" className="text-primary hover:underline">kontakt@digishift-ai.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">7. Datenlöschung</h2>
            <p>
              Sie können jederzeit die Löschung Ihrer gespeicherten Daten beantragen. Schreiben Sie dazu eine E-Mail an <a href="mailto:kontakt@digishift-ai.de" className="text-primary hover:underline">kontakt@digishift-ai.de</a> mit dem Betreff „Datenlöschung". Wir bearbeiten Ihren Antrag innerhalb von 30 Tagen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständige Aufsichtsbehörde für Baden-Württemberg:<br /><br />
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
              Postfach 10 29 32, 70025 Stuttgart<br />
              poststelle@lfdi.bwl.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">9. Aktualität</h2>
            <p>Stand: Juni 2026</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
