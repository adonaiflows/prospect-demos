"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartButton } from "./Cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Menu & order" },
  { href: "/#matcha", label: "Our matcha" },
  { href: "/#visit", label: "Visit" },
];

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [path]);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8" aria-label="Main">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Homebody Matcha, home">
          <span className="script text-[2.1rem] leading-none">Homebody</span>
          <span className="caps hidden text-[10px] text-muted sm:inline">Matcha</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`hover:text-matcha ${path === l.href ? "text-matcha underline underline-offset-8" : ""}`}>{l.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <CartButton kind="cafe" className="inline-flex min-h-11 items-center rounded-full bg-matcha px-5 text-sm font-semibold text-white hover:bg-ink" />
          <button onClick={() => setMenu((m) => !m)} className="min-h-11 px-3 text-sm font-medium md:hidden" aria-expanded={menu} aria-controls="mobile-nav">Menu</button>
        </div>
      </nav>
      {menu && (
        <div id="mobile-nav" className="border-t border-[var(--line)] px-4 pb-5 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`display block py-2.5 text-4xl ${path === l.href ? "text-matcha" : ""}`}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
