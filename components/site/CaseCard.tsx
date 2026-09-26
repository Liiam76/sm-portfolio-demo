import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { PostTile } from "@/components/shared/PostTile";

export function CaseCard({ c, priority = false }: { c: CaseStudy; priority?: boolean }) {
  return (
    <Link
      href={`/work/${c.slug}`}
      className="group block h-full overflow-hidden rounded-3xl bg-[var(--paper)] text-[var(--paper-ink)] ring-2 ring-[var(--ink)] transition-transform duration-300 hover:-translate-y-1"
      data-priority={priority || undefined}
    >
      <PostTile c={c} />
      <div className="p-4">
        <p className="text-sm font-semibold">{c.brand} · {c.platforms.join(", ")} · {c.year}</p>
        <p className="mt-1 text-lg font-bold leading-tight">{c.summary}</p>
        <p className="mt-3 text-sm font-bold underline decoration-2 underline-offset-4 group-hover:decoration-[var(--bg)]">Read the case study</p>
      </div>
    </Link>
  );
}
