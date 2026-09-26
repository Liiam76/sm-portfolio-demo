import type { Metadata } from "next";
import { certifications, persona, principles, roles, story, tools } from "@/content/persona";
import { PageIntro } from "@/components/site/PageIntro";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description: "Five years of social media management for Nigerian consumer brands: story, principles, experience, tools.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About Amaka">{persona.positioning}</PageIntro>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-[1fr_1.4fr]">
        <h2 className="text-3xl font-extrabold tracking-tight">The short version</h2>
        <div className="max-w-[60ch] space-y-5 text-lg leading-relaxed">
          {story.map((p) => <p key={p}>{p}</p>)}
          <p className="font-bold">{persona.education}</p>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="bg-[var(--lime)] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 id="principles-heading" className="text-4xl font-extrabold tracking-tight md:text-5xl">How I work</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <li key={p.name} className="rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6 text-[var(--paper-ink)]">
                <p className="text-xl font-extrabold leading-tight">{p.name}</p>
                <p className="mt-2 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="exp-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="exp-heading" className="text-4xl font-extrabold tracking-tight md:text-5xl">Experience</h2>
        <ol className="mt-8 divide-y-2 divide-[var(--ink)] border-y-2 border-[var(--ink)]">
          {roles.map((r) => (
            <li key={r.employer} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-2xl font-extrabold leading-tight">{r.title}</p>
                <p className="mt-1 font-semibold">{r.employer} · {r.type}</p>
                <p className="text-sm">{r.start} to {r.end}</p>
              </div>
              <ul className="max-w-[60ch] list-disc space-y-2 pl-5 leading-relaxed">
                {r.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="tools-heading" className="bg-[var(--paper)] py-16 text-[var(--paper-ink)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 id="tools-heading" className="text-3xl font-extrabold tracking-tight">Tools</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tools.map((t) => <li key={t} className="rounded-full border-2 border-[var(--ink)] px-4 py-1.5 text-sm font-bold">{t}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Certifications</h2>
            <ul className="mt-5 space-y-2 leading-relaxed">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="voices-heading" className="bg-[var(--ink)] py-20 text-[var(--paper)] on-dark">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <h2 id="voices-heading" className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl">What colleagues and clients say</h2>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
