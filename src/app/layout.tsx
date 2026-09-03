import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "KayConfesser — Confesse-toi, reçois de vrais conseils",
  description:
    "La plateforme anonyme où tu partages tes doutes et reçois des conseils sincères d'une communauté bienveillante.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-surface text-ink`}
      >
        {children}
      </body>
    </html>
  );
}