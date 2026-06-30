import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DigiShift – KI-Automatisierungen für Unternehmen",
  description:
    "Wir automatisieren wiederkehrende Geschäftsprozesse mit modernen KI-Lösungen – damit Sie Zeit sparen und sich auf Ihr Kerngeschäft konzentrieren können.",
  keywords: [
    "KI-Automatisierung",
    "Workflow-Automatisierung",
    "KI-Chatbots",
    "Prozessoptimierung",
    "KI Agentur",
    "Automatisierung Unternehmen",
  ],
  authors: [{ name: "DigiShift" }],
  openGraph: {
    title: "DigiShift – KI-Automatisierungen für Unternehmen",
    description:
      "Wir automatisieren wiederkehrende Geschäftsprozesse mit modernen KI-Lösungen.",
    type: "website",
    locale: "de_DE",
    siteName: "DigiShift",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiShift – KI-Automatisierungen für Unternehmen",
    description:
      "Wir automatisieren wiederkehrende Geschäftsprozesse mit modernen KI-Lösungen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={geist.variable}>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" storageKey="digishift-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
