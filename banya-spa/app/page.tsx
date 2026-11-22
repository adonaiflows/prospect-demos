import { site } from "@/lib/site";
import Motif from "@/components/Motif";
import Reveal from "@/components/Reveal";

function Cta({ href, label, ghost }: { href: string; label: string; ghost?: boolean }) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a href={href} className={`btn ${ghost ? "btn-ghost" : "btn-primary"}`} {...(external && href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
      {label}
    </a>
  );
}

export default function Home() {
  const s = site;
  return (
    <>
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 btn btn-primary">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="display text-lg font-semibold sm:text-xl">{s.shortName}</a>
          <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
            {s.nav.map((n) => <a key={n.href} href={n.href} className="text-[var(--muted)] hover:text-[var(--ink)]">{n.label}</a>)}
          </nav>
          <a href={s.hero.primary.href} className="btn btn-primary !min-h-10 !px-4 text-sm">{s.hero.primary.label}</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-14 sm:px-6 md:grid-cols-[1.15fr_.85fr] md:pt-20 md:pb-24">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">{s.hero.eyebrow}</p>
            <h1 className="display text-[2.4rem] leading-[1.04] font-semibold sm:text-6xl">{s.hero.headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{s.hero.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Cta {...s.hero.primary} />
              {s.hero.secondary && <Cta {...s.hero.secondary} ghost />}
            </div>
          </div>
          <div className="mx-auto w-56 sm:w-72 md:w-full md:max-w-sm" aria-hidden>
            <Motif kind={s.theme.motif} />
          </div>
        </section>

        {s.proof.length > 0 && (
          <section aria-label="Highlights" className="border-y border-[var(--line)] bg-[var(--surface)]">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
              {s.proof.map((p) => (
                <div key={p.label}>
                  <dt className="sr-only">{p.label}</dt>
                  <dd className="display text-2xl font-semibold sm:text-3xl">{p.value}</dd>
                  <dd className="mt-1 text-sm text-[var(--muted)]">{p.label}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section id={s.offerings.id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">{s.offerings.kicker}</p>
            <h2 className="display mt-2 text-3xl font-semibold sm:text-5xl">{s.offerings.title}</h2>
            <p className="mt-4 text-lg text-[var(--muted)]">{s.offerings.intro}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.offerings.items.map((it, i) => (
              <li key={it.name} className="reveal rounded-2xl border border-[var(--line)] p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="text-xs font-semibold text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-2 text-xl font-semibold">{it.name}</h3>
                <p className="mt-2 text-[var(--muted)]">{it.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id={s.feature.id} className="bg-[var(--ink)] text-[var(--bg)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[.18em] opacity-70">{s.feature.kicker}</p>
              <h2 className="display mt-2 text-3xl font-semibold sm:text-5xl">{s.feature.title}</h2>
              <p className="mt-4 text-lg opacity-80">{s.feature.body}</p>
              <div className="mt-7"><Cta {...s.feature.cta} /></div>
            </div>
            <ol className="grid gap-4">
              {s.feature.steps.map((st, i) => (
                <li key={st.title} className="reveal flex gap-4 rounded-2xl border border-white/15 p-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="display grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] font-semibold text-[var(--accent-ink)]">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{st.title}</h3>
                    <p className="mt-1 opacity-75">{st.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">{s.story.kicker}</p>
            <h2 className="display mt-2 text-3xl font-semibold sm:text-5xl">{s.story.title}</h2>
            {s.story.body.map((p) => <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-[var(--muted)]">{p}</p>)}
          </div>
        </section>

        <section id="visit" className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <h2 className="display text-3xl font-semibold sm:text-4xl">Visit</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {s.visit.locations.map((l) => (
                <div key={l.name} className="reveal rounded-2xl bg-[var(--bg)] p-6">
                  <h3 className="font-semibold">{l.name}</h3>
                  <p className="mt-2 text-[var(--muted)]">{l.address}</p>
                  {l.hours && <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">{l.hours.map((h) => <li key={h}>{h}</li>)}</ul>}
                  <a className="mt-4 inline-block text-sm font-semibold underline underline-offset-4" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name + " " + l.address)}`} target="_blank" rel="noopener">Get directions</a>
                </div>
              ))}
              <div className="reveal rounded-2xl bg-[var(--bg)] p-6">
                <h3 className="font-semibold">Contact</h3>
                {s.visit.phone && <p className="mt-2"><a className="underline underline-offset-4" href={`tel:${s.visit.phone.replace(/[^0-9+]/g, "")}`}>{s.visit.phone}</a></p>}
                {s.visit.email && <p className="mt-2"><a className="underline underline-offset-4" href={`mailto:${s.visit.email}`}>{s.visit.email}</a></p>}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="display text-3xl font-semibold sm:text-5xl">{s.closing.title}</h2>
          <p className="mt-4 text-lg text-[var(--muted)]">{s.closing.sub}</p>
          <div className="mt-7 flex justify-center"><Cta {...s.closing.cta} /></div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-[var(--muted)] sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {s.name}</p>
          <p>Concept demo prepared for {s.name}. Not the official website.</p>
        </div>
      </footer>
    </>
  );
}
