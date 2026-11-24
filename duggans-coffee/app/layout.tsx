import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Duggan's Coffee | Coffee & breakfast on Lead Ave, Albuquerque", template: "%s | Duggan's Coffee" },
  description: "Veteran-owned coffee and breakfast near UNM at 2227 Lead Ave SE. Order ahead for pickup, see hours and get directions.",
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
};

export const viewport: Viewport = { themeColor: "#16100c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
