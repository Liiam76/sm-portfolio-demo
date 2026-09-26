import type { CaseStudy } from "@/content/types";

type Props = { c: CaseStudy; className?: string };

// A designed stand-in for a social post, drawn from the case study's tile colors.
export function PostTile({ c, className = "" }: Props) {
  const { bg, fg, accent, caption } = c.tile;
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden ${className}`}
      style={{ background: bg, color: fg, containerType: "inline-size" }}
      role="img"
      aria-label={`${c.brand} post: ${caption}`}
    >
      <span
        aria-hidden
        className="absolute rounded-full"
        style={{ background: accent, width: "46%", aspectRatio: "1", right: "-10%", top: "-12%" }}
      />
      <span
        aria-hidden
        className="absolute"
        style={{ background: accent, width: "22%", aspectRatio: "1", left: "8%", top: "17%", opacity: 0.9, borderRadius: "30%" }}
      />
      <span className="absolute left-[8%] top-[6%] text-[6cqw] font-semibold tracking-wide opacity-80">
        {c.brand}
      </span>
      <p
        className="absolute bottom-[8%] left-[8%] right-[8%] font-bold leading-[0.95]"
        style={{ fontSize: "13cqw", textWrap: "balance" }}
      >
        {caption}
      </p>
    </div>
  );
}
