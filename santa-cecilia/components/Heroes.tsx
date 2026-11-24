import Image from "next/image";
import Link from "next/link";
import OpenNow from "./OpenNow";

/** Three hero designs for the owner to choose from. All use real photo layers in 3D space (components/Stage.tsx). */

function Copy({ center = false }: { center?: boolean }) {
  return (
    <>
      <OpenNow />
      <h1 className={`display mt-6 text-[3.4rem] md:text-[5.8rem] ${center ? "mx-auto max-w-4xl" : ""}`}>
        Coffee on the <em className="text-terra-deep">patio</em> in Old&nbsp;Town.
      </h1>
      <p className={`mt-6 max-w-md text-lg text-muted ${center ? "mx-auto" : ""}`}>
        A small café on Romero Street, a short walk from the Plaza. Order ahead, then take your cup out onto the patio.
      </p>
      <div className={`mt-8 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
        <Link href="/order" className="btn btn-terra">Order ahead</Link>
        <Link href="/#visit" className="btn btn-line">Hours &amp; directions</Link>
      </div>
      <p className="mt-6 text-sm text-muted"><span className="tracking-widest text-terra-deep" aria-hidden>★★★★★</span> 4.8 on Google</p>
    </>
  );
}

/** A: look through an adobe archway. The wall sits in front, the photo sits behind it, so they separate as you move. */
export function HeroArch() {
  return (
    <section className="plaster relative isolate overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl items-center gap-8 px-5 pb-16 pt-8 md:grid-cols-[1.1fr_1fr] md:px-8">
        <div><Copy /></div>
        <div className="scene relative mx-auto h-[460px] w-full max-w-[440px] md:h-[580px]">
          <div data-stage="12" className="absolute inset-0">
            <div data-z="-60" className="absolute inset-[4%] overflow-hidden bg-terra">
              <Image src="/images/patio.webp" alt="A latte on a sunny table beside potted plants" fill priority sizes="(min-width: 768px) 440px, 90vw" className="object-cover" />
            </div>
            <div data-z="40" className="pointer-events-none absolute inset-0">
              <svg viewBox="0 0 100 130" preserveAspectRatio="none" className="h-full w-full drop-shadow-[0_30px_40px_rgba(43,29,22,.35)]" aria-hidden>
                <path fillRule="evenodd" fill="#e9d8bf" d="M0 0H100V130H0Z M16 130V52A34 34 0 0 1 84 52V130Z" />
                <path fill="none" stroke="#8c3a1f" strokeOpacity=".35" strokeWidth=".8" d="M16 130V52A34 34 0 0 1 84 52V130" />
              </svg>
            </div>
            <div data-z="140" className="absolute -left-4 bottom-[6%] w-[42%] md:-left-10">
              <Image src="/images/art.webp" alt="Latte art in a white cup, from above" width={1200} height={1164} sizes="200px" className="bob w-full drop-shadow-[0_30px_30px_rgba(43,29,22,.45)]" />
            </div>
            <div data-z="110" className="absolute right-[2%] top-[6%] md:-right-6">
              <p className="bob-2 lift rounded-xl bg-olive px-4 py-3 text-center text-[#fff6ea]">
                <span className="caps block text-[10px]">Old Town</span>
                <span className="display block text-2xl italic">Romero St.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cards = [
  { src: "/images/circle.webp", w: 971, h: 1200, alt: "Hands reaching for lattes on a wooden table", cls: "left-[2%] top-[6%] w-[24%]", z: 30, rot: "rotate(-8deg)" },
  { src: "/images/hero.webp", w: 1600, h: 898, alt: "Steamed milk pouring into a latte", cls: "left-[24%] top-[30%] w-[36%]", z: 90, rot: "rotate(4deg)" },
  { src: "/images/patio.webp", w: 901, h: 1200, alt: "Coffee on a sunny patio table", cls: "left-[56%] top-[2%] w-[22%]", z: 60, rot: "rotate(7deg)" },
  { src: "/images/paper.webp", w: 1200, h: 799, alt: "Latte beside a sketchbook", cls: "right-[1%] top-[44%] w-[30%]", z: 130, rot: "rotate(-5deg)" },
];

/** B: postcards from the patio, lying on a tilted table and lifting off it at different heights. */
export function HeroPostcards() {
  return (
    <section className="plaster relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 text-center md:px-8 md:pt-16">
        <Copy center />
      </div>
      <div className="scene relative mx-auto mb-10 h-[300px] w-full max-w-5xl md:mb-16 md:h-[480px]">
        <div data-stage="8" className="absolute inset-0">
          <div className="flat3d absolute inset-x-[4%] inset-y-0" style={{ transform: "rotateX(30deg)" }}>
            {cards.map((c, i) => (
              <div key={c.src} data-z={c.z} data-rot={c.rot} className={`absolute ${c.cls}`}>
                <figure className="lift bg-[#fbf6ee] p-[4%] pb-[10%]">
                  <Image src={c.src} alt={c.alt} width={c.w} height={c.h} priority={i < 2} sizes="(min-width: 768px) 340px, 40vw" className="w-full" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** C: a big cup of espresso floating over a New Mexico sun, with a swirl of crema behind it. */
export function HeroSun() {
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl items-center gap-6 px-5 pb-16 pt-8 md:grid-cols-[1fr_1.05fr] md:px-8">
        <div className="relative z-10"><Copy /></div>
        <div className="scene relative mx-auto aspect-square w-full max-w-[540px]">
          <div data-stage="12" className="absolute inset-0">
            <div data-z="0" className="absolute left-0 top-0 aspect-square w-[80%] rounded-full bg-terra" />
            <div data-z="20" className="absolute left-0 top-0 aspect-square w-[80%] rounded-full bg-[repeating-conic-gradient(from_0deg,#e9a25f_0deg_5deg,transparent_5deg_15deg)] opacity-50" />
            <div data-z="70" className="lift absolute left-[6%] top-[6%] aspect-square w-[42%] overflow-hidden rounded-full border-[6px] border-paper">
              <Image src="/images/swirl.webp" alt="" fill sizes="240px" className="object-cover" />
            </div>
            <div data-z="150" className="absolute bottom-[2%] right-0 w-[64%]">
              <Image src="/images/cup.webp" alt="A cup of espresso with thick crema, from above" width={900} height={842} priority sizes="(min-width: 768px) 420px, 78vw" className="w-full drop-shadow-[0_50px_50px_rgba(43,29,22,.5)]" />
            </div>
            <div data-z="220" className="absolute bottom-[8%] left-[4%]">
              <p className="bob lift rounded-2xl bg-paper px-5 py-4 text-left">
                <span className="caps block text-[10px] text-olive">Patio open</span>
                <span className="display block text-3xl italic">Thu – Mon</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
