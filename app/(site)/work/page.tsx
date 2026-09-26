import { Suspense } from "react";
import type { Metadata } from "next";
import { cases } from "@/content/cases";
import { PageIntro } from "@/components/site/PageIntro";
import { WorkFilter } from "@/components/site/WorkFilter";
import { CaseCard } from "@/components/site/CaseCard";
import { headlineFigures } from "@/lib/metrics";

export const metadata: Metadata = {
  title: "Work",
  description: "Six social media case studies for Nigerian consumer brands, with goals, approach and results.",
};

export default function WorkPage() {
  const h = headlineFigures();
  return (
    <>
      <PageIntro title="Work">
        Six campaigns for food, beauty and beverage brands. Across them: {h.audience} followers and members gained and {h.spend} of ad spend managed.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Suspense
          fallback={
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => <li key={c.slug}><CaseCard c={c} /></li>)}
            </ul>
          }
        >
          <WorkFilter cases={cases} />
        </Suspense>
      </section>
    </>
  );
}
