import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases } from "@/content/cases";
import { describeGrowth, getCase } from "@/lib/metrics";
import { naira } from "@/lib/format";
import { persona } from "@/content/persona";
import { PostTile } from "@/components/shared/PostTile";
import { CaseCard } from "@/components/site/CaseCard";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: `${c.title}, ${c.brand}`, description: c.summary };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const i = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(i + 1) % cases.length];

  return (
    <article>
      <header style={{ background: c.tile.bg, color: c.tile.fg }} className="relative overflow-hidden">
        <span aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full md:size-[28rem]" style={{ background: c.tile.accent }} />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:items-end md:py-20">
          <div>
            <Link href="/work" className="text-sm font-bold underline decoration-2 underline-offset-4">All work</Link>
            <p className="mt-6 text-lg font-semibold">{c.brand} · {c.brandLine}</p>
            <h1 className="mt-2 text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [text-wrap:balance]">{c.title}</h1>
            <p className="mt-5 max-w-[46ch] text-xl leading-snug">{c.summary}</p>
          </div>
          <div className="hidden md:block"><PostTile c={c} className="rounded-3xl ring-4 ring-[var(--ink)]" /></div>
        </div>
      </header>

      <div className="bg-[var(--paper)] text-[var(--paper-ink)]">
        <div className="mx-auto max-w-6xl px-5">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-b-2 border-[var(--ink)] py-8 md:grid-cols-5">
            {[
              ["Client", c.brand],
              ["Employer", c.employer],
              ["Year", String(c.year)],
              ["Duration", c.duration],
              ["Ad spend", c.spendNgn === 0 ? "None" : naira(c.spendNgn)],
            ].map(([k, v]) => (
              <div key={k}><dt className="text-sm font-semibold">{k}</dt><dd className="text-lg font-extrabold">{v}</dd></div>
            ))}
            <div className="col-span-2 md:col-span-5"><dt className="text-sm font-semibold">Platforms</dt><dd className="text-lg font-extrabold">{c.platforms.join(", ")}</dd></div>
          </dl>

          <div className="grid gap-12 py-14 md:grid-cols-[1fr_2fr]">
            <h2 className="text-3xl font-extrabold tracking-tight">The challenge</h2>
            <p className="max-w-[60ch] text-lg leading-relaxed">{c.challenge}</p>

            <h2 className="text-3xl font-extrabold tracking-tight">The strategy</h2>
            <ul className="max-w-[60ch] space-y-3 text-lg leading-relaxed">
              {c.strategy.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <h2 className="text-3xl font-extrabold tracking-tight">What I did</h2>
            <ol className="max-w-[60ch] space-y-4 text-lg leading-relaxed">
              {c.execution.map((s, n) => (
                <li key={s} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-extrabold text-[var(--bg)] [-webkit-text-stroke:1px_var(--ink)]" aria-hidden>{n + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <section aria-labelledby="results-heading" className="bg-[var(--ink)] py-16 text-[var(--paper)] on-dark">
        <div className="mx-auto max-w-6xl px-5">
          <h2 id="results-heading" className="text-4xl font-extrabold tracking-tight md:text-5xl">Results</h2>
          <ul className="mt-8 divide-y-2 divide-[oklch(0.4_0.02_30)] border-y-2 border-[oklch(0.4_0.02_30)]">
            {c.growth.map((g) => {
              const d = describeGrowth(g);
              return (
                <li key={g.label} className="grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
                  <p className="text-lg font-semibold">{g.label}</p>
                  <p className="text-3xl font-extrabold text-[var(--lime)] md:text-5xl">
                    {d.from} to {d.to} <span className="ml-2 text-xl text-[var(--paper)] md:text-2xl">{d.change}</span>
                  </p>
                </li>
              );
            })}
            {c.stats.map((s) => (
              <li key={s.label} className="grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
                <p className="text-lg font-semibold">{s.label}</p>
                <p className="text-3xl font-extrabold md:text-5xl">{s.value}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[40ch] text-2xl font-bold leading-snug text-[var(--lime)]">{c.lesson}</p>
          <p className="mt-6 text-sm text-[oklch(0.85_0.01_60)]">Sample case study. All figures are invented for this demo.</p>
        </div>
      </section>

      <section aria-labelledby="next-heading" className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="next-heading" className="text-3xl font-extrabold tracking-tight">Next case study</h2>
        <div className="mt-6 max-w-md"><CaseCard c={next} /></div>
        <p className="mt-12 text-lg">Want results like these for your brand? <a href={`mailto:${persona.email}`} className="font-bold underline decoration-2 underline-offset-4">Email Amaka</a>.</p>
      </section>
    </article>
  );
}
