import { Suspense } from "react";
import type { Metadata } from "next";
import { cases } from "@/content/cases";
import { PageIntro } from "@/components/site/PageIntro";
import { WorkFilter } from "@/components/site/WorkFilter";
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
        <Suspense fallback={null}>
          <WorkFilter cases={cases} />
        </Suspense>
      </section>
    </>
  );
}
