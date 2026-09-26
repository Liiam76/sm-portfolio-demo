import Link from "next/link";
import { persona } from "@/content/persona";
import { navLinks } from "./nav";

export function SiteHeader() {
  return (
    <header className="no-print relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
      <Link href="/" className="text-lg font-extrabold tracking-tight">{persona.name}</Link>
      <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-semibold md:flex">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="underline-offset-4 hover:underline">{l.label}</Link>
        ))}
        <a href={persona.cvFile} className="rounded-full bg-[var(--ink)] px-4 py-2 text-[var(--lime)] transition-transform hover:-translate-y-0.5">CV</a>
      </nav>
      <details className="group md:hidden">
        <summary className="cursor-pointer list-none rounded-full border-2 border-[var(--ink)] px-4 py-1.5 text-sm font-bold [&::-webkit-details-marker]:hidden">
          Menu
        </summary>
        <nav aria-label="Mobile" className="absolute left-3 right-3 top-full z-40 mt-2 rounded-3xl bg-[var(--ink)] p-5 text-[var(--lime)] shadow-xl on-dark">
          <ul className="space-y-1 text-2xl font-extrabold">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-2">{l.label}</Link></li>
            ))}
            <li><a href={persona.cvFile} className="block py-2">Download CV</a></li>
          </ul>
        </nav>
      </details>
    </header>
  );
}
