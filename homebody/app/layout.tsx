import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stage from "@/components/Stage";

const display = Cormorant_Garamond({ weight: ["500"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display", display: "swap" });
const script = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap", preload: false });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Homebody Matcha | Matcha bar at Winrock, Albuquerque", template: "%s | Homebody Matcha" },
  description: "Matcha whisked to order at Winrock Town Center in Albuquerque. Order ahead for pickup, see the menu, hours and directions.",
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
  openGraph: { title: "Homebody Matcha", description: "Made by homebodies. Matcha whisked to order at Winrock Town Center, Albuquerque.", images: ["/images/hb-cup.webp"] },
};

export const viewport: Viewport = { themeColor: "#f3eee4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>
          <Header />
          {children}
          <Footer />
          <Stage />
        </CartProvider>
      </body>
    </html>
  );
}
