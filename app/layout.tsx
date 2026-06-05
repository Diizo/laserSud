import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Laser Sud — Institut d'épilation laser · Fos-sur-Mer",
    template: "%s — Laser Sud",
  },
  description:
    "Institut d'épilation laser dernière génération à Fos-sur-Mer. Précis, confortable, durable. Prenez rendez-vous en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
