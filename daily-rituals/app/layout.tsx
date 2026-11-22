import type { Metadata, Viewport } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const accent = Cormorant_Garamond({ weight: ["500"], style: ["italic"], subsets: ["latin"], variable: "--font-accent", display: "swap" });

export const metadata: Metadata = {
  title: "Daily Rituals | Coffee, gift shop & kids area in Nob Hill, Albuquerque",
  description: "A women-owned, Latino-owned café on Central Ave in Nob Hill, next door to its sister shop House of Stickks & Stones. Lavender lattes, a gift shop and a kids area.",
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
};

export const viewport: Viewport = { themeColor: "#ece5da" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${accent.variable}`}>
      <body>{children}</body>
    </html>
  );
}
