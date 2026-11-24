"use client";
import Image from "next/image";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { money } from "@/lib/catalog";
import { openByDay } from "@/lib/site";

/**
 * Two separate carts on purpose: the café order (fast, pickup in minutes) and the gift-shop bag
 * (browse now, pick up any open day). Mixing them muddies pickup timing at checkout.
 */
export type Kind = "cafe" | "shop";
export type Line = { key: string; id: string; name: string; option?: string; price: number; qty: number; img?: string; kind: Kind };

const COPY = {
  cafe: { cart: "Your order", button: "Order", cta: "Choose pickup time", empty: "Add a drink from the menu.", emptyHref: "/order", emptyLabel: "See the menu", cross: { text: "Browsing gifts too?", href: "/shop", label: "Visit the shop" } },
  shop: { cart: "Your bag", button: "Bag", cta: "Choose pickup day", empty: "Add something from the gift shop.", emptyHref: "/shop", emptyLabel: "Browse the shop", cross: { text: "Want a coffee for the visit?", href: "/order", label: "Order ahead" } },
} as const;

type Cart = {
  lines: Line[];
  openKind: Kind | null;
  setOpenKind: (k: Kind | null) => void;
  add: (l: Omit<Line, "qty" | "key">) => void;
  setQty: (key: string, qty: number) => void;
  clear: (k: Kind) => void;
};

const Ctx = createContext<Cart | null>(null);
export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
};
const useKind = (kind: Kind) => {
  const c = useCart();
  const lines = c.lines.filter((l) => l.kind === kind);
  return { ...c, lines, count: lines.reduce((n, l) => n + l.qty, 0), subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0) };
};

const STORE = "dr-cart-v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [openKind, setOpenKind] = useState<Kind | null>(null);

  useEffect(() => {
    try { const raw = localStorage.getItem(STORE); if (raw) setLines(JSON.parse(raw)); } catch { /* private mode: start empty */ }
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(lines)); } catch { /* ignore */ }
  }, [lines]);

  const add = useCallback((l: Omit<Line, "qty" | "key">) => {
    const key = `${l.kind}|${l.id}|${l.option ?? ""}`;
    setLines((ls) => {
      const hit = ls.find((x) => x.key === key);
      return hit ? ls.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x)) : [...ls, { ...l, key, qty: 1 }];
    });
    setOpenKind(l.kind);
  }, []);
  const setQty = useCallback((key: string, qty: number) => setLines((ls) => (qty <= 0 ? ls.filter((x) => x.key !== key) : ls.map((x) => (x.key === key ? { ...x, qty } : x)))), []);
  const clear = useCallback((k: Kind) => setLines((ls) => ls.filter((l) => l.kind !== k)), []);

  const value = useMemo<Cart>(() => ({ lines, openKind, setOpenKind, add, setQty, clear }), [lines, openKind, add, setQty, clear]);

  return <Ctx.Provider value={value}>{children}<CartDrawer /></Ctx.Provider>;
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmt = (m: number) => { const h = Math.floor(m / 60), mm = m % 60; return `${((h + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`; };
const denverNow = () => new Date(new Date().toLocaleString("en-US", { timeZone: "America/Denver" }));

/** Café: ASAP plus 15-minute slots today, or the next open day if closed. */
function cafeSlots() {
  const now = denverNow();
  const mins = now.getHours() * 60 + now.getMinutes();
  for (let d = 0; d < 7; d++) {
    const day = (now.getDay() + d) % 7;
    const [o, c] = openByDay[day];
    const start = d === 0 ? Math.max(o, Math.ceil((mins + 15) / 15) * 15) : o + 15;
    if (start <= c - 15) {
      const label = d === 0 ? "Today" : d === 1 ? "Tomorrow" : DAYS[day];
      const slots: string[] = [];
      if (d === 0 && mins >= o && mins < c - 10) slots.push("As soon as possible (about 10 min)");
      for (let m = start; m <= c - 15 && slots.length < 16; m += 15) slots.push(`${label}, ${fmt(m)}`);
      return slots;
    }
  }
  return ["Next open day"];
}

/** Gift shop: any of the next 7 open days, during open hours. */
function shopDays() {
  const now = denverNow();
  const mins = now.getHours() * 60 + now.getMinutes();
  const out: string[] = [];
  for (let d = 0; d < 8 && out.length < 7; d++) {
    const day = (now.getDay() + d) % 7;
    const [o, c] = openByDay[day];
    if (d === 0 && mins > c - 30) continue;
    const date = new Date(now); date.setDate(now.getDate() + d);
    const label = d === 0 ? "Today" : d === 1 ? "Tomorrow" : `${DAYS[day]}, ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
    out.push(`${label} (${fmt(d === 0 ? Math.max(o, Math.ceil((mins + 30) / 15) * 15) : o)} – ${fmt(c)})`);
  }
  return out;
}

function CartDrawer() {
  const { openKind, setOpenKind } = useCart();
  const [kind, setKind] = useState<Kind>("cafe");
  useEffect(() => { if (openKind) setKind(openKind); }, [openKind]);
  const open = openKind !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenKind(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, setOpenKind]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open} inert={!open}>
      <div className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpenKind(null)} />
      <aside role="dialog" aria-modal="true" aria-label={COPY[kind].cart} className={`cart absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper transition-[transform,visibility] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${open ? "translate-x-0 shadow-2xl" : "invisible translate-x-full"}`}>
        <Panel key={kind} kind={kind} open={open} />
      </aside>
    </div>
  );
}

function Panel({ kind, open }: { kind: Kind; open: boolean }) {
  const { lines, setOpenKind, setQty, subtotal, clear } = useKind(kind);
  const copy = COPY[kind];
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");
  const [slots, setSlots] = useState<string[]>([]);
  const [when, setWhen] = useState("");
  const [pay, setPay] = useState("card");
  const [order, setOrder] = useState<{ no: string; when: string; total: number } | null>(null);

  useEffect(() => { if (open) { const s = kind === "cafe" ? cafeSlots() : shopDays(); setSlots(s); setWhen(s[0]); } else if (step === "done") setStep("cart"); }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const tax = subtotal * 0.07875; // TODO: confirm sales tax rate with their POS
  const total = subtotal + tax;
  const close = () => setOpenKind(null);

  const place = (e: React.FormEvent) => {
    e.preventDefault();
    setOrder({ no: String(Math.floor(1000 + Math.random() * 9000)), when, total });
    clear(kind);
    setStep("done");
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5">
        <h2 className="caps text-xs">{step === "done" ? (kind === "cafe" ? "Order placed" : "Reserved") : step === "checkout" ? (kind === "cafe" ? "Pickup time" : "Pickup day") : copy.cart}</h2>
        <button onClick={close} className="text-sm uppercase tracking-[.2em] text-muted hover:text-ink" aria-label={`Close ${copy.cart.toLowerCase()}`}>Close</button>
      </div>

      {step === "done" && order ? (
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <p className="caps text-[11px] text-olive">{kind === "cafe" ? "Order" : "Reservation"} #{order.no}</p>
          <p className="display mt-4 text-4xl">See you <span className="accent text-wood">soon.</span></p>
          <p className="mt-4 text-muted">{kind === "cafe" ? "Pickup" : "Pick up"}: {order.when}. Total {money(order.total)}.</p>
          <p className="mt-2 text-sm text-muted">{kind === "cafe" ? "We'll text you when your drinks are ready." : "We'll set your items aside at the counter, ready for pickup."}</p>
          <p className="mt-8 border border-dashed border-[var(--line)] p-4 text-xs text-muted">
            Demo only: nothing was sent or charged. {kind === "cafe" ? "On the live site this order goes straight to the café's POS (Square, Toast or Clover) and prints at the counter." : "On the live site this goes to the online store (Square Online or Shopify) and stock updates automatically."}
          </p>
          <Link href={copy.cross.href} onClick={close} className="btn btn-line mt-8">{copy.cross.label}</Link>
          <button onClick={() => { setStep("cart"); close(); }} className="mt-3 py-2 text-xs uppercase tracking-[.2em] text-muted">Done</button>
        </div>
      ) : step === "checkout" ? (
        <form onSubmit={place} className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          {kind === "shop" && (
            <fieldset className="mb-6">
              <legend className="text-[11px] uppercase tracking-[.2em] text-muted">How you&apos;ll get it</legend>
              <label className="mt-2 flex items-center gap-3 border border-ink px-3 py-3"><input type="radio" name="ful" defaultChecked /> Pick up at the café</label>
              <label className="mt-2 flex items-center gap-3 border border-[var(--line)] px-3 py-3 text-muted"><input type="radio" name="ful" disabled /> Ship to me (coming later)</label>
            </fieldset>
          )}
          <label className="text-[11px] uppercase tracking-[.2em] text-muted" htmlFor={`${kind}-when`}>{kind === "cafe" ? "Pickup time" : "Pickup day"}</label>
          <select id={`${kind}-when`} value={when} onChange={(e) => setWhen(e.target.value)} className="mt-2 border border-[var(--line)] bg-plaster px-3 py-3">
            {slots.map((s) => <option key={s}>{s}</option>)}
          </select>
          <label className="mt-5 text-[11px] uppercase tracking-[.2em] text-muted" htmlFor={`${kind}-name`}>Name for the {kind === "cafe" ? "order" : "pickup"}</label>
          <input id={`${kind}-name`} required autoComplete="given-name" className="mt-2 border border-[var(--line)] bg-plaster px-3 py-3" placeholder="First name" />
          <label className="mt-5 text-[11px] uppercase tracking-[.2em] text-muted" htmlFor={`${kind}-phone`}>Phone, for a text when it&apos;s ready</label>
          <input id={`${kind}-phone`} type="tel" autoComplete="tel" className="mt-2 border border-[var(--line)] bg-plaster px-3 py-3" placeholder="(505) 555-0123" />
          <fieldset className="mt-6">
            <legend className="text-[11px] uppercase tracking-[.2em] text-muted">Payment</legend>
            {[["card", "Pay now by card"], ["counter", "Pay at pickup"]].map(([v, l]) => (
              <label key={v} className="mt-2 flex items-center gap-3 border border-[var(--line)] px-3 py-3">
                <input type="radio" name={`${kind}-pay`} value={v} checked={pay === v} onChange={() => setPay(v)} /> {l}
              </label>
            ))}
            {pay === "card" && <p className="mt-2 text-xs text-muted">Card entry appears here on the live site, handled securely by the payment provider. Nothing is charged in this demo.</p>}
          </fieldset>
          <div className="mt-auto pt-8">
            <Totals subtotal={subtotal} tax={tax} total={total} />
            <button type="submit" className="btn btn-ink mt-5 w-full">{kind === "cafe" ? "Place order" : "Reserve for pickup"} · {money(total)}</button>
            <button type="button" onClick={() => setStep("cart")} className="mt-3 w-full py-2 text-xs uppercase tracking-[.2em] text-muted">Back</button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {lines.length === 0 ? (
              <div className="py-20 text-center">
                <p className="display text-3xl">Nothing here <span className="accent text-wood">yet.</span></p>
                <p className="mt-3 text-sm text-muted">{copy.empty}</p>
                <Link href={copy.emptyHref} onClick={close} className="btn btn-ink mt-6">{copy.emptyLabel}</Link>
              </div>
            ) : (
              <ul className="divide-y divide-[var(--line)]">
                {lines.map((l) => (
                  <li key={l.key} className="flex gap-4 py-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-sand">
                      {l.img && <Image src={l.img} alt="" fill sizes="64px" className="object-cover" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{l.name}</p>
                      {l.option && <p className="text-xs text-muted">{l.option}</p>}
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => setQty(l.key, l.qty - 1)} className="h-8 w-8 border border-[var(--line)]" aria-label={`One less ${l.name}`}>−</button>
                        <span className="w-6 text-center text-sm" aria-live="polite">{l.qty}</span>
                        <button onClick={() => setQty(l.key, l.qty + 1)} className="h-8 w-8 border border-[var(--line)]" aria-label={`One more ${l.name}`}>+</button>
                      </div>
                    </div>
                    <p className="text-sm">{money(l.price * l.qty)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {lines.length > 0 && (
            <div className="border-t border-[var(--line)] px-6 py-5">
              <Totals subtotal={subtotal} tax={tax} total={total} />
              <button onClick={() => setStep("checkout")} className="btn btn-ink mt-5 w-full">{copy.cta}</button>
              <p className="mt-3 text-center text-xs text-muted">{copy.cross.text} <Link href={copy.cross.href} onClick={close} className="underline underline-offset-2 hover:text-wood">{copy.cross.label}</Link></p>
            </div>
          )}
        </>
      )}
    </>
  );
}

function Totals({ subtotal, tax, total }: { subtotal: number; tax: number; total: number }) {
  return (
    <dl className="space-y-1 text-sm">
      <div className="flex justify-between text-muted"><dt>Subtotal</dt><dd>{money(subtotal)}</dd></div>
      <div className="flex justify-between text-muted"><dt>Tax (est.)</dt><dd>{money(tax)}</dd></div>
      <div className="flex justify-between font-medium"><dt>Total</dt><dd>{money(total)}</dd></div>
    </dl>
  );
}

export function CartButton({ kind, className = "" }: { kind: Kind; className?: string }) {
  const { count, setOpenKind } = useKind(kind);
  const label = COPY[kind].button;
  return (
    <button onClick={() => setOpenKind(kind)} className={`relative ${className}`} aria-label={`Open ${COPY[kind].cart.toLowerCase()}, ${count} item${count === 1 ? "" : "s"}`}>
      {label}{count > 0 && <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-wood px-1 text-[10px] text-paper">{count}</span>}
    </button>
  );
}

/** Phone-only bar pinned to the bottom of the page once its cart has something in it. */
export function OrderBar({ kind }: { kind: Kind }) {
  const { count, subtotal, setOpenKind } = useKind(kind);
  if (count === 0) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--line)] bg-paper/95 p-3 backdrop-blur md:hidden">
      <button onClick={() => setOpenKind(kind)} className="btn btn-ink w-full">View {kind === "cafe" ? "order" : "bag"} · {count} · {money(subtotal)}</button>
    </div>
  );
}
