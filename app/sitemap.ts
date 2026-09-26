import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sm-portfolio-live.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/services", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}` })),
    ...cases.map((c) => ({ url: `${base}/work/${c.slug}` })),
  ];
}
