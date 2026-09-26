import type { MetadataRoute } from "next";
import { isLive } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  return isLive
    ? { rules: { userAgent: "*", allow: "/", disallow: "/cv" } }
    : { rules: { userAgent: "*", disallow: "/" } };
}
