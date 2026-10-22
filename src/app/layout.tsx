import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Mejor 11 vs 11",
  description:
    "Arma tu mejor 11 con la ruleta de selecciones y clubes. Reto inspirado en La Cobra vs Davo Xeneize.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
