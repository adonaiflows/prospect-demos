import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import AddToOrder from "@/components/AddToOrder";
import { OrderBar } from "@/components/Cart";
import { shop } from "@/lib/catalog";

export const metadata: Metadata = { title: "Shop", description: "Shop the Daily Rituals gift shop online: baskets, stoneware, apothecary goods and cards, ready for pickup at the café." };

export default function ShopPage() {
  return (
    <main id="main">
      <Reveal />
      <Stage />
      {/* HERO: the real gift wall in 3D layers */}
      <section className="limewash relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1fr_1.1fr] md:px-8 md:pb-20 md:pt-16">
          <div>
            <p className="caps text-[11px] text-olive">The gift shop · Online</p>
            <h1 className="display mt-5 text-[3rem] md:text-[5rem]">The shelves, <span className="accent text-wood">now online.</span></h1>
            <p className="mt-6 max-w-md text-lg text-muted">Woven baskets, speckled stoneware, apothecary goods and cards from the café&apos;s gift wall. Reserve online and pick up any day we&apos;re open.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#home" className="btn btn-ink">Browse the shop</a>
              <Link href="/order" className="btn btn-line">Add a coffee</Link>
            </div>
          </div>
          <div className="scene relative mx-auto h-[420px] w-full max-w-[520px] md:h-[500px]">
            <div data-stage="12" className="absolute inset-0">
              <div data-z="0" className="lift absolute bottom-0 left-0 top-6 w-[62%] overflow-hidden">
                <Image src="/images/r-shelves.webp" alt="Gift wall with jars, cards and woven baskets on a driftwood stand" fill priority sizes="320px" className="object-cover" />
              </div>
              <div data-z="90" className="absolute right-0 top-0 w-[48%]">
                <figure className="bob lift overflow-hidden border-[7px] border-paper"><Image src="/images/r-shop.webp" alt="Tables of gifts and textiles" width={752} height={926} sizes="240px" className="w-full" /></figure>
              </div>
              <div data-z="170" className="absolute bottom-6 right-[8%] w-[36%]">
                <figure className="bob-2 lift overflow-hidden border-[7px] border-paper"><Image src="/images/p-stoneware.webp" alt="Speckled stoneware bowls and mugs" width={556} height={436} sizes="190px" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Shop sections" className="sticky top-[61px] z-30 border-y border-[var(--line)] bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-xs uppercase tracking-[.2em] md:px-8">
          {shop.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-wood">{s.title}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 md:px-8">
        <p className="border border-dashed border-[var(--line)] px-4 py-3 text-xs text-muted">Sample products and prices for this demo, photographed from the real gift wall. TODO: real inventory, makers and prices (can sync from Square).</p>
        {shop.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-32 pt-14">
            <h2 className="reveal display text-4xl md:text-5xl">{sec.title}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {sec.items.map((item, i) => (
                <article key={item.id} className="reveal scene" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div data-stage="8" className="h-full">
                    <div data-z="0" className="lift flex h-full flex-col bg-paper">
                      <div className="relative aspect-square overflow-hidden bg-sand">
                        {item.img && <Image src={item.img} alt={item.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />}
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
                        <AddToOrder item={item} kind="shop" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="reveal mt-20 grid items-center gap-8 bg-ink p-8 text-paper md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="caps text-[11px] text-sand">Next door</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">More through the doorway at <span className="accent text-sand">House of Stickks &amp; Stones.</span></h2>
            <p className="mt-3 text-sm text-paper/70">TODO: link to Stickks &amp; Stones, or add its goods to this shop.</p>
          </div>
          <Link href="/visit" className="btn bg-paper text-ink hover:bg-sand">Plan a visit</Link>
        </section>
      </div>
      <OrderBar kind="shop" />
    </main>
  );
}
