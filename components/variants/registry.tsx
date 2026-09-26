import type { ComponentType } from "react";
import { Feed } from "./Feed";
import { Studio } from "./Studio";
import { Poster } from "./Poster";
import { Noir } from "./Noir";

export const variants: { slug: string; name: string; note: string; Component: ComponentType }[] = [
  { slug: "feed", name: "Feed (playful, social-native)", note: "Drenched orange, phone mockups, grid that looks like a profile.", Component: Feed },
  { slug: "studio", name: "Studio (clean, minimal)", note: "Off-white, one blue accent, results as a ledger.", Component: Studio },
  { slug: "poster", name: "Poster (editorial, bold)", note: "Cobalt and acid yellow, condensed type, overlapping grid.", Component: Poster },
  { slug: "noir", name: "Noir (dark, premium)", note: "Near-black, Bodoni italic, coral accent, rows instead of cards.", Component: Noir },
];
