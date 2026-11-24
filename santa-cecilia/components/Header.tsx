"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartButton } from "./Cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order ahead" },
  { href: "/#patio", label: "The patio" },
  { href: "/#visit", label: "Hours & directions" },
];

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [path]);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8" aria-label="Main">
        <Link href="/" className="display text-2xl italic md:text-3xl">Santa Cecilia</Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`hover:text-terra-deep ${path === l.href ? "text-terra-deep underline underline-offset-4" : ""}`}>{l.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <CartButton kind="cafe" className="inline-flex min-h-10 items-center rounded-xl bg-ink px-4 text-sm font-semibold text-paper" />
          <button onClick={() => setMenu((m) => !m)} className="px-2 py-2 text-sm font-medium md:hidden" aria-expanded={menu} aria-controls="mobile-nav">Menu</button>
        </div>
      </nav>
      {menu && (
        <div id="mobile-nav" className="border-t border-[var(--line)] px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`display block py-3 text-3xl ${path === l.href ? "italic text-terra-deep" : ""}`}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
