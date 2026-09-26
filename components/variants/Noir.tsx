import Link from "next/link";
import { Bodoni_Moda, Figtree } from "next/font/google";
import { cases } from "@/content/cases";
import { persona, testimonials } from "@/content/persona";
import { describeGrowth, headlineFigures } from "@/lib/metrics";
import { PostTile } from "@/components/shared/PostTile";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], display: "swap", variable: "--font-noir" });
const body = Figtree({ subsets: ["latin"], display: "swap" });

export function Noir() {
  const h = headlineFigures();
  return (
    <div className={`v-noir ${display.variable} ${body.className} min-h-screen bg-[var(--bg)] leading-relaxed text-[var(--ink)]`}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link href="/variants" className="font-[family-name:var(--font-noir)] text-xl">{persona.name}</Link>
        <nav aria-label="Main" className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="#work" className="hover:text-[var(--ink)]">Work</a>
          <a href="#voices" className="hover:text-[var(--ink)]">Voices</a>
          <a href="#contact" className="hover:text-[var(--ink)]">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 md:pt-28">
        <p className="text-sm text-[var(--coral)]">{persona.title}, Lagos</p>
        <h1 className="mt-5 max-w-[16ch] font-[family-name:var(--font-noir)] text-[clamp(2.75rem,8.5vw,6rem)] font-medium italic leading-[1] tracking-[-0.02em] [text-wrap:balance]">
          Attention is easy. Trust is the work.
        </h1>
        <p className="mt-8 max-w-[56ch] text-lg text-[var(--muted)]">{persona.intro}</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={`mailto:${persona.email}`} className="rounded-full bg-[var(--coral)] px-7 py-3 font-semibold text-[oklch(0.16_0.012_20)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coral)]">Start a conversation</a>
          <a href={persona.cvFile} className="underline decoration-[var(--line)] underline-offset-8 transition-colors hover:decoration-[var(--coral)]">Download CV</a>
        </div>
        <p className="mt-16 max-w-[60ch] border-t border-[var(--line)] pt-6 text-[var(--muted)]">
          {h.audience} audience grown. {h.spend} in ad spend managed. First public reply in a live crisis: 47 minutes.
        </p>
      </section>

      <section id="work" className="border-t border-[var(--line)] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-[family-name:var(--font-noir)] text-4xl italic md:text-5xl">Selected work</h2>
        </div>
        <ul className="mx-auto mt-10 max-w-6xl">
          {cases.slice(0, 4).map((c, i) => {
            const g = describeGrowth(c.growth[0]);
            return (
              <li key={c.slug} className="border-t border-[var(--line)] first:border-t-0">
                <Link href="#work" className={`group grid items-center gap-6 px-5 py-8 transition-colors hover:bg-[var(--surface)] md:grid-cols-[14rem_1fr_auto] ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="w-full max-w-[14rem] md:[direction:ltr]"><PostTile c={c} className="rounded-sm" /></div>
                  <div className="md:[direction:ltr]">
                    <p className="text-sm text-[var(--muted)]">{c.brand} · {c.year} · {c.platforms.join(", ")}</p>
                    <p className="mt-1 font-[family-name:var(--font-noir)] text-3xl">{c.title}</p>
                    <p className="mt-2 max-w-[52ch] text-[var(--muted)]">{c.summary}</p>
                  </div>
                  <p className="text-[var(--coral)] md:[direction:ltr] md:text-right">
                    <span className="block font-[family-name:var(--font-noir)] text-4xl">{g.change}</span>
                    <span className="text-sm text-[var(--muted)]">{c.growth[0].label}</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="voices" className="bg-[var(--surface)] py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote className="font-[family-name:var(--font-noir)] text-xl leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-[var(--muted)]">{t.name}, {t.role}, {t.company}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <a href={`mailto:${persona.email}`} className="break-all font-[family-name:var(--font-noir)] text-[clamp(1.75rem,5vw,3.5rem)] italic text-[var(--coral)] underline decoration-1 underline-offset-8">{persona.email}</a>
          <p className="mt-6 max-w-[56ch] text-[var(--muted)]">{persona.availability}</p>
          <p className="mt-4 max-w-[56ch] text-sm text-[var(--muted)]">{persona.sampleNotice}</p>
        </div>
      </footer>
    </div>
  );
}
