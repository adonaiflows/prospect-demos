import Image from "next/image";
import Link from "next/link";
import HeroSwitch from "@/components/HeroSwitch";
import { HeroGallery, HeroLivingRoom, HeroMantel } from "@/components/Heroes";
import AddToOrder from "@/components/AddToOrder";
import VideoLoop from "@/components/VideoLoop";
import { OrderBar } from "@/components/Cart";
import { menu } from "@/lib/catalog";
import { ADDRESS, CITY, MAPS, RATING, SHOP, WHERE, hours } from "@/lib/site";
import { z } from "@/lib/z";

// Short excerpts from public Google reviews (Nov 24, 2026). TODO: get the owner's OK before launch.
const reviews = [
  { quote: "I’ve never had anything quite like the Daydream.", who: "Jess G." },
  { quote: "The atmosphere is super good vibes, cozy, and chill.", who: "Gabriella G." },
  { quote: "After I tried the Cookie Butter Latte, it was amazing.", who: "Aya A." },
];

// Drinks Google reviewers mention by name. Prices on the order page are samples.
const favoriteIds = ["daydream", "banana-pudding", "ube", "cookie-butter", "banana-bread"];
const all = menu.flatMap((s) => s.items);
const favorites = favoriteIds.map((id) => all.find((i) => i.id === id)!);

export default function Home() {
  return (
    <main id="main">
      <HeroSwitch
        options={[
          { id: "a", label: "Living room", node: <HeroLivingRoom /> },
          { id: "b", label: "Mantel", node: <HeroMantel /> },
          { id: "c", label: "Gallery wall", node: <HeroGallery /> },
        ]}
      />

      {/* PROOF: real rating and real words from regulars */}
      <section aria-labelledby="proof" className="border-y border-[var(--line)] bg-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[auto_1fr] md:items-center md:gap-14 md:px-8">
          <div>
            <h2 id="proof" className="caps text-[11px] text-muted">Regulars say</h2>
            <p className="display mt-2 text-6xl">{RATING.stars}<span className="text-matcha">★</span></p>
            <p className="text-sm text-muted">{RATING.count} Google reviews</p>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.who} className="border-l-2 border-matcha pl-4">
                <p className="display text-2xl italic leading-tight">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-2 text-xs text-muted">{r.who} · Google review</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR MATCHA: a process clip in an arch, with whole photos floating in front of it */}
      <section id="matcha" className="scroll-mt-16 overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
          <div className="scene relative order-2 mx-auto h-[460px] w-full max-w-[520px] md:order-1 md:h-[600px]">
            <div data-stage="9" className="absolute inset-0">
              <div style={z(0)} className="lift arch absolute right-[6%] top-0 h-[78%] w-[64%] overflow-hidden bg-bg2">
                <VideoLoop src="/video/sifting.mp4" poster="/images/sifting-poster.webp" label="Matcha being sifted into a bowl" className="h-full w-full object-cover" />
              </div>
              <figure style={z(120, "rotate(-5deg)")} className="lift frame absolute bottom-[4%] left-0 w-[56%]">
                <Image src="/images/whisk.webp" alt="A bamboo whisk resting in a bowl of fresh matcha" width={1100} height={732} sizes="(min-width: 768px) 290px, 55vw" className="w-full" />
              </figure>
              <figure style={z(200, "rotate(4deg)")} className="lift frame absolute bottom-[16%] right-0 w-[40%]">
                <Image src="/images/tray.webp" alt="Matcha bowls, a whisk and loose powder on a wooden table" width={1100} height={738} sizes="(min-width: 768px) 210px, 40vw" className="w-full" />
              </figure>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="caps text-[11px] text-matcha">Our matcha</p>
            <h2 className="display mt-4 text-6xl md:text-7xl">Green, <span className="italic text-matcha">on purpose.</span></h2>
            <p className="mt-6 max-w-md text-lg text-muted">Every cup is whisked to order, so it comes out bright and smooth, and a little addictive. It&apos;s the kind of drink you think about on the drive over.</p>
            <ol className="mt-10 space-y-6">
              {[
                ["Whisked to order", "Your matcha is made the moment you order it."],
                ["Your way", "Iced or hot, under cold foam, with coconut milk."],
                ["Take it home", "Homebody's Saemidori matcha comes in a tin for your kitchen."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-5">
                  <span className="display text-4xl text-matcha">0{i + 1}</span>
                  <div><h3 className="text-lg font-semibold">{t}</h3><p className="text-muted">{b}</p></div>
                </li>
              ))}
            </ol>
            {/* TODO: owner to confirm matcha grade and origin before adding them here. */}
          </div>
        </div>
      </section>

      {/* FAVORITES: the drinks reviewers name, orderable right here */}
      <section aria-labelledby="favs" className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="caps text-[11px] text-leaf">The ones people drive over for</p>
              <h2 id="favs" className="display mt-4 text-6xl md:text-7xl">House <span className="italic text-leaf">favorites.</span></h2>
            </div>
            <p className="max-w-sm text-paper/75">Straight from the reviews: the drinks regulars keep naming. Add one and pick it up on your way.</p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-14">
            <div className="scene relative mx-auto hidden h-[560px] w-full max-w-[460px] md:block">
              <div data-stage="8" className="absolute inset-0">
                <figure style={z(0)} className="lift absolute left-0 top-0 w-[78%] overflow-hidden rounded-2xl">
                  <Image src="/images/hb-cups.webp" alt="Three layered matcha cups with green-dusted lids" width={894} height={1066} sizes="360px" className="w-full" />
                </figure>
                <div style={z(170, "rotate(5deg)")} className="absolute bottom-0 right-0 w-[40%]">
                  <Image src="/images/iced-cut.webp" alt="" width={640} height={1065} sizes="190px" className="w-full drop-shadow-[0_40px_30px_rgba(0,0,0,.5)]" />
                </div>
              </div>
            </div>
            <ul className="divide-y divide-paper/15 border-y border-paper/15">
              {favorites.map((f) => (
                <li key={f.id} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="display text-3xl md:text-4xl">{f.name}</h3>
                    {f.tag && <span className="caps shrink-0 rounded-full bg-leaf px-2.5 py-1 text-[10px] text-ink">{f.tag}</span>}
                  </div>
                  <p className="mt-1 text-paper/75">{f.desc}</p>
                  <AddToOrder item={f} kind="cafe" dark />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/order" className="btn btn-light">See the full menu <span aria-hidden>→</span></Link>
            <p className="text-xs text-paper/65">Sample prices for this demo.</p>
          </div>
        </div>
      </section>

      {/* WELCOME HOME */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-28">
          <div>
            <p className="caps text-[11px] text-matcha">Welcome home</p>
            <h2 className="display mt-4 text-6xl md:text-7xl">We know your name <span className="italic text-matcha">and your order.</span></h2>
            <p className="mt-6 max-w-md text-lg text-muted">The space is small, and we like it that way. Come in for five minutes or stay for an hour, and you&apos;ll feel like one of us either way.</p>
            <p className="mt-4 max-w-md text-muted">Find us on the first floor of Winrock Town Center.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/order" className="btn btn-matcha">Order ahead <span aria-hidden>→</span></Link>
              <a href={MAPS} className="btn btn-line">Get directions</a>
            </div>
          </div>
          <div className="scene relative mx-auto h-[440px] w-full max-w-[520px] md:h-[560px]">
            <div data-stage="9" className="absolute inset-0">
              <figure style={z(0, "rotate(3deg)")} className="lift frame absolute right-0 top-0 w-[62%]">
                <Image src="/images/hb-ice.webp" alt="Homebody, a wellness bar: an ice cube dripping with matcha" width={1100} height={1109} sizes="(min-width: 768px) 320px, 60vw" className="w-full" />
              </figure>
              <figure style={z(140, "rotate(-4deg)")} className="lift frame absolute bottom-0 left-0 w-[54%]">
                <Image src="/images/hot-latte.webp" alt="A hot matcha latte with leaf art on a wooden table" width={1026} height={682} sizes="(min-width: 768px) 280px, 52vw" className="w-full" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE IT HOME: their real products and prices, sold on their current store */}
      <section aria-labelledby="home-shop" className="bg-bg2">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-24">
          <figure className="lift frame mx-auto w-full max-w-[560px] -rotate-2">
            <Image src="/images/hb-scoop.webp" alt="Homebody Matcha scoop, The Matcha Society" width={1118} height={696} sizes="(min-width: 768px) 540px, 92vw" className="w-full" />
          </figure>
          <div>
            <p className="caps text-[11px] text-matcha">The Matcha Society</p>
            <h2 id="home-shop" className="display mt-4 text-6xl md:text-7xl">Be a homebody <span className="italic text-matcha">at home.</span></h2>
            <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              <li className="flex items-baseline justify-between py-4"><span className="text-lg font-medium">Homebody Saemidori Matcha Tin</span><span className="display text-3xl">$40</span></li>
              <li className="flex items-baseline justify-between py-4"><span className="text-lg font-medium">The Standards Cap</span><span className="display text-3xl">$50</span></li>
            </ul>
            <a href={SHOP} className="btn btn-ink mt-8">Shop the tin <span aria-hidden>→</span></a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="scroll-mt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-3 md:px-8 md:py-28">
          <div className="md:col-span-1">
            <p className="caps text-[11px] text-matcha">Visit</p>
            <h2 className="display mt-4 text-6xl">Come <span className="italic text-matcha">over.</span></h2>
          </div>
          <div>
            <h3 className="caps text-[11px] text-muted">Where</h3>
            <p className="mt-3 text-lg">{ADDRESS}<br />{CITY}</p>
            <p className="mt-1 text-muted">{WHERE}</p>
            <a href={MAPS} className="mt-4 inline-block font-semibold text-matcha underline underline-offset-4">Get directions</a>
          </div>
          <div>
            <h3 className="caps text-[11px] text-muted">Hours</h3>
            <dl className="mt-3 space-y-1 text-lg">
              {hours.map(([d, h]) => <div key={d} className="flex justify-between gap-6 border-b border-[var(--line)] pb-1"><dt>{d}</dt><dd>{h}</dd></div>)}
            </dl>
            <p className="mt-3 text-xs text-muted">Holiday hours may differ.</p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-matcha text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center md:px-8">
          <p className="display text-5xl md:text-6xl">Stay in a little longer. <span className="italic">We&apos;ll have it ready.</span></p>
          <Link href="/order" className="btn btn-light shrink-0">Order ahead <span aria-hidden>→</span></Link>
        </div>
      </section>
      <OrderBar kind="cafe" />
    </main>
  );
}
