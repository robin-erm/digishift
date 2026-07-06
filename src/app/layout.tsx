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
  title: "DigiShift – Digitalisierungsberatung für kleine und mittelständische Unternehmen",
  description:
    "Wir helfen kleinen und mittelständischen Unternehmen dabei, ihre Prozesse zu digitalisieren, professioneller aufzutreten und effizienter zu arbeiten.",
  keywords: [
    "Digitalisierungsberatung",
    "Digitalisierungsagentur",
    "Prozessdigitalisierung",
    "Geschäftsprozess-Automatisierung",
    "Website für KMU",
    "Terminbuchungssystem",
    "CRM-Lösungen",
    "Digitale Workflows",
  ],
  authors: [{ name: "DigiShift" }],
  openGraph: {
    title: "DigiShift – Digitalisierungsberatung für kleine und mittelständische Unternehmen",
    description:
      "Wir helfen kleinen und mittelständischen Unternehmen dabei, ihre Prozesse zu digitalisieren und effizienter zu arbeiten.",
    type: "website",
    locale: "de_DE",
    siteName: "DigiShift",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiShift – Digitalisierungsberatung für kleine und mittelständische Unternehmen",
    description:
      "Wir helfen kleinen und mittelständischen Unternehmen dabei, ihre Prozesse zu digitalisieren und effizienter zu arbeiten.",
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
