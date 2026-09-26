import Link from "next/link";
import { persona } from "@/content/persona";
import { navLinks } from "./nav";
import { MobileMenu } from "./MobileMenu";

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
      <MobileMenu cvFile={persona.cvFile} />
    </header>
  );
}
