import { cases } from "../content/cases.ts";
import type { CaseStudy, Growth } from "../content/types.ts";
import { compact, naira, pctChange } from "./format.ts";

export function audienceGained(list: CaseStudy[] = cases): number {
  return list
    .filter((c) => c.growth[0]?.unit === undefined || c.growth[0]?.unit === "count")
    .reduce((sum, c) => sum + (c.growth[0].to - c.growth[0].from), 0);
}

export function totalSpend(list: CaseStudy[] = cases): number {
  return list.reduce((sum, c) => sum + c.spendNgn, 0);
}

export function describeGrowth(g: Growth): { from: string; to: string; change: string } {
  const fmt = (n: number) =>
    g.unit === "percent"
      ? `${n}%`
      : g.unit === "naira"
        ? naira(n)
        : g.unit === "minutes"
          ? formatMinutes(n)
          : compact(n);
  const change = pctChange(g.from, g.to);
  return {
    from: fmt(g.from),
    to: fmt(g.to),
    change: change === null ? "from zero" : `${change > 0 ? "+" : ""}${Math.round(change)}%`,
  };
}

function formatMinutes(n: number): string {
  if (n >= 120) return `${Math.round(n / 60)} hours`;
  return `${n} min`;
}

export function headlineFigures() {
  return {
    audience: compact(audienceGained()),
    spend: naira(totalSpend()),
    responseTime: "38 min",
  };
}

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
