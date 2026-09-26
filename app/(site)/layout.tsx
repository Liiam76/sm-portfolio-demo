import { Bricolage_Grotesque } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { persona } from "@/content/persona";
import "./site.css";

const font = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`site ${font.className} flex min-h-screen flex-col overflow-x-clip bg-[var(--bg)] text-[var(--ink)]`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--lime)]">
        Skip to content
      </a>
      <p className="no-print bg-[var(--ink)] px-4 py-2 text-center text-xs text-[var(--lime)] sm:text-sm">
        Sample portfolio for a class demo. {persona.sampleNotice.split(". ").slice(1).join(". ")}
      </p>
      <SiteHeader />
      <main id="main" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
