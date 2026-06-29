import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, company, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "DigiShift Kontaktformular <onboarding@resend.dev>",
    to: "kontakt@digishift-ai.de",
    replyTo: email,
    subject: `Neue Anfrage von ${name}${company ? ` – ${company}` : ""}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #1a1a1a; margin-bottom: 24px;">Neue Kontaktanfrage über digishift-ai.de</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #666; width: 120px;">Name</td><td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${name}</td></tr>
          ${company ? `<tr><td style="padding: 10px 0; color: #666;">Unternehmen</td><td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${company}</td></tr>` : ""}
          <tr><td style="padding: 10px 0; color: #666;">E-Mail</td><td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;"><a href="mailto:${email}" style="color: #3b6ef6;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 10px 0; color: #666;">Telefon</td><td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${phone}</td></tr>` : ""}
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #666; margin: 0 0 8px 0; font-size: 14px;">Nachricht</p>
          <p style="color: #1a1a1a; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; color: #999; font-size: 12px;">Du kannst direkt auf diese E-Mail antworten — die Antwort geht an ${email}.</p>
      </div>
    `,
  });

  if (error) {
    return Response.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }

  return Response.json({ success: true });
}
