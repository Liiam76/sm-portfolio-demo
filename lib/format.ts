export function compact(n: number): string {
  if (n >= 1_000_000) return `${trim(n / 1_000_000)}M`;
  if (n >= 1_000) return `${trim(n / 1_000)}K`;
  return String(n);
}

function trim(n: number): string {
  return n.toFixed(1).replace(/\.0$/, "");
}

export function naira(n: number): string {
  if (n === 0) return "₦0";
  if (n >= 1_000_000) return `₦${trim(n / 1_000_000)}M`;
  if (n >= 1_000) return `₦${Math.round(n / 1_000)}K`;
  return `₦${n}`;
}

export function pctChange(from: number, to: number): number | null {
  if (from === 0) return null;
  return Math.round(((to - from) / from) * 1000) / 10;
}
