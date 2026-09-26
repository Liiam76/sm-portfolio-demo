import type { Metadata } from "next";
import { certifications, persona, roles, tools } from "@/content/persona";
import { cases } from "@/content/cases";
import { describeGrowth, headlineFigures } from "@/lib/metrics";

export const metadata: Metadata = { title: "CV", robots: { index: false } };

export default function CvPage() {
  const h = headlineFigures();
  return (
    <div className="mx-auto max-w-3xl bg-[var(--paper)] px-8 py-10 text-[13px] leading-snug text-[oklch(0.2_0.02_30)] print:max-w-none print:bg-white print:p-0 print:text-[11.5px] print:leading-[1.3]">
      <h1 className="text-3xl font-extrabold tracking-tight">{persona.name}</h1>
      <p className="mt-1 text-base font-semibold">{persona.title}, {persona.city}</p>
      <p className="mt-1">{persona.email} · {persona.phone}</p>

      <h2 className="mt-5 border-b border-black pb-1 text-sm font-extrabold uppercase tracking-wide">Profile</h2>
      <p className="mt-2">{persona.positioning} {persona.intro} Featured work: {h.audience} followers and members gained and {h.spend} in ad spend managed.</p>

      <h2 className="mt-5 border-b border-black pb-1 text-sm font-extrabold uppercase tracking-wide">Experience</h2>
      {roles.map((r) => (
        <div key={r.employer} className="mt-3 break-inside-avoid">
          <p className="font-extrabold">{r.title}, {r.employer} <span className="font-normal">({r.type}), {r.start} to {r.end}</span></p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      ))}

      <h2 className="mt-5 border-b border-black pb-1 text-sm font-extrabold uppercase tracking-wide">Selected results</h2>
      <ul className="mt-2 list-disc space-y-0.5 pl-5">
        {cases.map((c) => {
          const g = describeGrowth(c.growth[0]);
          return <li key={c.slug}><span className="font-bold">{c.brand}, {c.title} ({c.year}):</span> {c.growth[0].label} {g.from} to {g.to} ({g.change}) on {c.platforms.join(" and ")}.</li>;
        })}
      </ul>

      <h2 className="mt-5 border-b border-black pb-1 text-sm font-extrabold uppercase tracking-wide">Skills and tools</h2>
      <p className="mt-2">{tools.join(", ")}.</p>

      <h2 className="mt-5 border-b border-black pb-1 text-sm font-extrabold uppercase tracking-wide">Education and certifications</h2>
      <p className="mt-2">{persona.education}</p>
      <ul className="mt-1 list-disc pl-5">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>

      <p className="mt-6 border-t border-black pt-2 text-[11px]">{persona.sampleNotice}</p>
    </div>
  );
}
