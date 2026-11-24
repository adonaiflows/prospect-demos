import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import AddToOrder from "@/components/AddToOrder";
import { OrderBar } from "@/components/Cart";
import { menu } from "@/lib/catalog";
import { hours } from "@/lib/site";

export const metadata: Metadata = { title: "Order ahead", description: "Order coffee ahead for pickup at Santa Cecilia, a patio café in Old Town Albuquerque." };

export default function OrderPage() {
  return (
    <main id="main">
      <Reveal />
      <Stage />
      {/* HERO */}
      <section className="plaster relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-20 md:pt-16">
          <div>
            <p className="caps text-[11px] text-olive">Order ahead · Pickup on Romero St</p>
            <h1 className="display mt-5 text-[3.2rem] md:text-[5.2rem]">Order now, <em className="text-terra-deep">sit in the sun</em> sooner.</h1>
            <p className="mt-6 max-w-md text-lg text-muted">Order from your phone on the walk over from the Plaza, pick a time, and your cup is on the counter when you arrive.</p>
            <ol className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center text-[11px] font-semibold uppercase tracking-[.16em]">
              {["Choose", "Pick a time", "Pick up"].map((s, i) => (
                <li key={s} className="rounded-xl border border-[var(--line)] bg-paper/70 px-2 py-4"><span className="display block text-3xl normal-case italic tracking-normal text-terra-deep">{i + 1}</span>{s}</li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Pickup hours: {hours.map(([d, h]) => `${d} ${h}`).join(" · ")}</p>
          </div>

          <div className="scene relative mx-auto hidden h-[480px] w-full max-w-[440px] md:block">
            <div data-stage="14" className="absolute inset-0">
              <div data-z="0" className="archway lift absolute inset-x-12 bottom-0 top-0 overflow-hidden border-[6px] border-paper">
                <Image src="/images/circle.webp" alt="Lattes being shared on a wooden table" fill priority sizes="340px" className="object-cover" />
              </div>
              <div data-z="130" className="absolute -left-4 bottom-6 w-[44%]">
                <Image src="/images/art.webp" alt="Latte art from above" width={1200} height={1164} sizes="200px" className="bob w-full drop-shadow-[0_30px_30px_rgba(43,29,22,.45)]" />
              </div>
              <div data-z="190" data-rot="rotate(5deg)" className="absolute -right-2 top-10 w-[38%]">
                <figure className="bob-2 lift overflow-hidden rounded-lg border-[6px] border-paper"><Image src="/images/shot.webp" alt="Espresso pulling" width={1100} height={579} sizes="180px" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <nav aria-label="Menu sections" className="sticky top-[64px] z-30 border-y border-[var(--line)] bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-xs font-semibold uppercase tracking-[.18em] md:px-8">
          {menu.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-terra-deep">{s.title}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 md:px-8">
        <p className="rounded-xl border border-dashed border-[var(--line)] px-4 py-3 text-xs text-muted">Sample menu and prices for this demo. The live version pulls the real menu straight from the café&apos;s POS.</p>

        {menu.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-32 pt-14">
            <h2 className="reveal display text-4xl md:text-5xl">{sec.title}</h2>
            <div className={`mt-8 grid gap-6 ${sec.items.some((i) => i.img) ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {sec.items.map((item) =>
                item.img ? (
                  <article key={item.id} className="reveal scene">
                    <div data-stage="6" className="h-full">
                      <div data-z="0" className="lift flex h-full flex-col overflow-hidden rounded-2xl bg-paper">
                        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                          <Image src={item.img} alt={item.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                          {item.tag && <span className="absolute left-3 top-3 rounded-full bg-olive px-3 py-1 text-[11px] font-semibold uppercase tracking-[.14em] text-[#fff6ea]">{item.tag}</span>}
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="display text-2xl">{item.name}</h3>
                          <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
                          <AddToOrder item={item} kind="cafe" />
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={item.id} className="reveal border-b border-[var(--line)] pb-5">
                    <h3 className="display text-2xl">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    <AddToOrder item={item} kind="cafe" />
                  </article>
                )
              )}
            </div>
          </section>
        ))}
      </div>
      <OrderBar kind="cafe" />
    </main>
  );
}
