import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/persona";
import { PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Services",
  description: "What a senior social media manager runs day to day: strategy, content, community, paid social and reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="What I run">
        The five jobs I own on a brand team, with what you get and how I decide it worked.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <ul className="space-y-5">
          {services.map((s) => (
            <li key={s.name} className="grid gap-6 rounded-3xl bg-[var(--paper)] p-6 text-[var(--paper-ink)] ring-2 ring-[var(--ink)] md:grid-cols-[1fr_1.2fr] md:p-8">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight">{s.name}</h2>
                <p className="mt-3 max-w-[44ch] leading-relaxed">{s.body}</p>
              </div>
              <div>
                <p className="text-sm font-bold">You get</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                  {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <p className="mt-4 text-sm font-bold">Measured by</p>
                <p className="mt-1 leading-relaxed">{s.measuredBy}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="mt-10 inline-block rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-[var(--lime)]">Talk about a role</Link>
      </section>
    </>
  );
}
