import Link from "next/link";
import { persona } from "@/content/persona";
import { navLinks } from "./nav";

export function SiteFooter() {
  return (
    <footer className="no-print bg-[var(--ink)] px-5 py-14 text-[var(--paper)] on-dark">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Hiring a social lead in Lagos?</p>
          <a href={`mailto:${persona.email}`} className="mt-4 inline-block break-all text-lg font-bold text-[var(--lime)] underline decoration-2 underline-offset-4">
            {persona.email}
          </a>
          <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-[oklch(0.85_0.01_60)]">{persona.sampleNotice}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 font-semibold">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:underline">{l.label}</Link></li>
            ))}
            <li><a href={persona.cvFile} className="underline-offset-4 hover:underline">Download CV (PDF)</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
