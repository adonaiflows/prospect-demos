import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: { title: site.metaTitle, description: site.metaDescription, type: "website" },
  robots: { index: false, follow: false }, // concept demo: keep out of search until approved
};

export const viewport: Viewport = { themeColor: site.theme.bg };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = site.theme;
  const vars = {
    "--bg": t.bg, "--surface": t.surface, "--ink": t.ink, "--muted": t.muted,
    "--accent": t.accent, "--accent-ink": t.accentInk, "--line": t.line,
    "--display": t.display === "serif" ? "var(--serif)" : "var(--sans)",
  } as CSSProperties;
  return (
    <html lang="en" style={vars}>
      <body>{children}</body>
    </html>
  );
}
