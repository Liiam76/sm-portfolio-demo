"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav";

export function MobileMenu({ cvFile }: { cvFile: string }) {
  // The menu is open only for the page it was opened on, so navigating closes it.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openAt === pathname;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpenAt(open ? null : pathname)}
        className="rounded-full border-2 border-[var(--ink)] px-4 py-1.5 text-sm font-bold"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="on-dark absolute left-3 right-3 top-full z-40 mt-2 rounded-3xl bg-[var(--ink)] p-5 text-[var(--lime)] shadow-xl">
          <ul className="space-y-1 text-2xl font-extrabold">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-2">{l.label}</Link></li>
            ))}
            <li><a href={cvFile} className="block py-2">Download CV</a></li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
