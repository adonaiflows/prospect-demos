import type { Metadata, Viewport } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const accent = Cormorant_Garamond({ weight: ["500"], style: ["italic"], subsets: ["latin"], variable: "--font-accent", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Daily Rituals | Coffee, gift shop & kids area in Nob Hill, Albuquerque", template: "%s | Daily Rituals" },
  description: "A women-owned, Latino-owned café on Central Ave in Nob Hill, next door to its sister shop House of Stickks & Stones. Lavender lattes, a gift shop and a kids area.",
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
};

export const viewport: Viewport = { themeColor: "#ece5da" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${accent.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
