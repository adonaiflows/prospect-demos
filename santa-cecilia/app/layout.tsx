import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Work_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Santa Cecilia | Patio café in Old Town Albuquerque", template: "%s | Santa Cecilia" },
  description: "A patio coffee café at 111 Romero St NW in Old Town Albuquerque. Order ahead for pickup, see hours and get directions.",
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
};

export const viewport: Viewport = { themeColor: "#efe3d0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
