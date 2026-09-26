import type { CaseStudy } from "@/content/types";
import { persona } from "@/content/persona";
import { PostTile } from "./PostTile";

function likesFor(slug: string): string {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) % 9000;
  return `${(h / 100 + 4).toFixed(1)}K`;
}

export function PhoneFrame({ c, className = "" }: { c: CaseStudy; className?: string }) {
  return (
    <figure
      className={`w-full overflow-hidden rounded-[2rem] border-[6px] border-black bg-white text-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold">
        <span className="size-6 rounded-full" style={{ background: c.tile.accent }} />
        <span>{c.brand.toLowerCase().replace(/\s+/g, "")}</span>
        <span className="ml-auto font-normal opacity-60">{c.platforms[0]}</span>
      </div>
      <PostTile c={c} />
      <figcaption className="px-3 py-2 text-[11px] leading-snug">
        <span className="font-semibold">{likesFor(c.slug)} likes</span>
        <br />
        <span className="opacity-70">Managed by {persona.handle}</span>
      </figcaption>
    </figure>
  );
}
