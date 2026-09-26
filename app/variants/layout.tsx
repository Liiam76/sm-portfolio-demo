import { notFound } from "next/navigation";
import { isLive } from "@/lib/env";
import "./variants.css";

export const metadata = { robots: { index: false, follow: false } };

export default function VariantsLayout({ children }: { children: React.ReactNode }) {
  if (isLive) notFound();
  return children;
}
