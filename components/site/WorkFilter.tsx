"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { CaseStudy, Platform } from "@/content/types";
import { CaseCard } from "./CaseCard";

const platforms: Platform[] = ["Instagram", "TikTok", "X", "LinkedIn", "Facebook"];

export function WorkFilter({ cases }: { cases: CaseStudy[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const raw = params.get("platform");
  const active = platforms.find((p) => p === raw) ?? null;
  const shown = active ? cases.filter((c) => c.platforms.includes(active)) : cases;

  function pick(p: Platform | null) {
    router.replace(p ? `${pathname}?platform=${p}` : pathname, { scroll: false });
  }

  const pill = (on: boolean) =>
    `rounded-full border-2 border-[var(--ink)] px-4 py-2 text-sm font-bold transition-colors ${
      on ? "bg-[var(--ink)] text-[var(--lime)]" : "bg-transparent hover:bg-[var(--lime)]"
    }`;

  return (
    <>
      <div role="group" aria-label="Filter by platform" className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={!active} className={pill(!active)} onClick={() => pick(null)}>All</button>
        {platforms.map((p) => (
          <button key={p} type="button" aria-pressed={active === p} className={pill(active === p)} onClick={() => pick(p)}>{p}</button>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold" aria-live="polite">
        Showing {shown.length} of {cases.length} case studies
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <li key={c.slug}><CaseCard c={c} /></li>
        ))}
      </ul>
    </>
  );
}
