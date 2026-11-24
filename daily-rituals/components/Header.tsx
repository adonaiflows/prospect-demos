"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Star from "./Star";
import { CartButton } from "./Cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order ahead" },
  { href: "/shop", label: "Shop" },
  { href: "/visit", label: "Visit" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[.5em] caps ${className}`}>
      Daily <Star className="h-[1.3em] w-[1.3em]" /> Rituals
    </span>
  );
}

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [path]);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-plaster/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8" aria-label="Main">
        <Link href="/" aria-label="Daily Rituals home"><Wordmark className="text-sm md:text-base" /></Link>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[.2em] md:flex">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`border-b pb-1 hover:text-wood ${path === l.href ? "border-wood text-wood" : "border-transparent"}`}>{l.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <CartButton kind={path === "/shop" ? "shop" : "cafe"} className="inline-flex items-center bg-ink px-4 py-2 text-xs uppercase tracking-[.2em] text-paper" />
          <button onClick={() => setMenu((m) => !m)} className="px-2 py-2 text-xs uppercase tracking-[.2em] md:hidden" aria-expanded={menu} aria-controls="mobile-nav">Menu</button>
        </div>
      </nav>
      {menu && (
        <div id="mobile-nav" className="border-t border-[var(--line)] px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`block py-3 text-sm uppercase tracking-[.2em] ${path === l.href ? "text-wood" : ""}`}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
