import type { MetadataRoute } from "next";
import { isLive } from "@/lib/env";
import { persona } from "@/content/persona";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sm-portfolio-live.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return isLive
    ? { rules: { userAgent: "*", allow: "/", disallow: ["/cv", persona.cvFile] }, sitemap: `${base}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
