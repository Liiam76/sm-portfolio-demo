import Link from "next/link";
import { Hanken_Grotesk } from "next/font/google";
import { cases } from "@/content/cases";
import { persona, roles, testimonials } from "@/content/persona";
import { describeGrowth, headlineFigures } from "@/lib/metrics";

const font = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

export function Studio() {
  const h = headlineFigures();
  return (
    <div className={`v-studio ${font.className} min-h-screen bg-[var(--bg)] text-[var(--ink)]`}>
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6">
        <Link href="/variants" className="font-semibold">{persona.name}</Link>
        <nav aria-label="Main" className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="#work" className="hover:text-[var(--ink)]">Work</a>
          <a href="#experience" className="hover:text-[var(--ink)]">Experience</a>
          <a href="#contact" className="hover:text-[var(--ink)]">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 md:pt-28">
        <h1 className="max-w-[18ch] text-[clamp(2.4rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] [text-wrap:balance]">
          Social media for Nigerian consumer brands, measured in sales.
        </h1>
        <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-[var(--muted)]">
          {persona.name} is a {persona.title.toLowerCase()} in Lagos. {persona.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <a href={`mailto:${persona.email}`} className="rounded-md bg-[var(--accent)] px-5 py-3 text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">Email Amaka</a>
          <a href={persona.cvFile} className="rounded-md border border-[var(--line)] px-5 py-3 transition-colors hover:border-[var(--ink)]">Download CV</a>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-5 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
        <div className="mt-6 border-t border-[var(--line)]">
          {cases.map((c) => {
            const g = describeGrowth(c.growth[0]);
            return (
              <Link key={c.slug} href="#work" className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b border-[var(--line)] py-6 transition-colors hover:bg-[oklch(0.96_0_0)] md:grid-cols-[1.3fr_1.6fr_auto]">
                <span className="text-xl font-semibold">{c.brand}<span className="ml-3 text-sm font-normal text-[var(--muted)]">{c.year}</span></span>
                <span className="text-[var(--muted)]">{c.summary}</span>
                <span className="font-semibold tabular-nums text-[var(--accent)] md:text-right">
                  {c.growth[0].label}: {g.from} to {g.to}
                </span>
              </Link>
            );
          })}
        </div>
        <p className="mt-6 text-[var(--muted)]">
          Across these campaigns: {h.audience} audience gained, {h.spend} in ad spend managed.
        </p>
      </section>

      <section id="experience" className="mx-auto grid max-w-5xl gap-10 px-5 pb-24 md:grid-cols-[1fr_2fr]">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <ol className="space-y-8">
          {roles.map((r) => (
            <li key={r.employer}>
              <p className="font-semibold">{r.title}, {r.employer}</p>
              <p className="text-sm text-[var(--muted)]">{r.start} to {r.end} · {r.type}</p>
              <p className="mt-2 max-w-[60ch] leading-relaxed">{r.points[0]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <blockquote className="max-w-[34ch] text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-tight tracking-tight">
          &ldquo;{testimonials[0].quote}&rdquo;
          <footer className="mt-4 text-base font-normal text-[var(--muted)]">{testimonials[0].name}, {testimonials[0].role}, {testimonials[0].company}</footer>
        </blockquote>
      </section>

      <footer id="contact" className="border-t border-[var(--line)] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <a href={`mailto:${persona.email}`} className="text-2xl font-semibold text-[var(--accent)] underline underline-offset-4 md:text-4xl break-all">{persona.email}</a>
          <p className="mt-6 max-w-[60ch] text-sm text-[var(--muted)]">{persona.availability}</p>
          <p className="mt-4 max-w-[60ch] text-sm text-[var(--muted)]">{persona.sampleNotice}</p>
        </div>
      </footer>
    </div>
  );
}
