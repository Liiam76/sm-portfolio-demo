import Link from "next/link";
import { Big_Shoulders, Hanken_Grotesk } from "next/font/google";
import { cases } from "@/content/cases";
import { persona, services } from "@/content/persona";
import { headlineFigures } from "@/lib/metrics";
import { PostTile } from "@/components/shared/PostTile";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["800", "900"], display: "swap", variable: "--font-poster" });
const body = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

export function Poster() {
  const h = headlineFigures();
  const ticker = `${h.audience} AUDIENCE GAINED   ·   ${h.spend} AD SPEND MANAGED   ·   ${h.responseTime} FIRST REPLY   ·   `;
  return (
    <div className={`v-poster ${display.variable} ${body.className} min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--ink)]`}>
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-5">
        <Link href="/variants" className="font-[family-name:var(--font-poster)] text-2xl font-black uppercase tracking-wide">{persona.name}</Link>
        <nav aria-label="Main" className="flex gap-4 text-xs font-semibold uppercase tracking-wide sm:gap-5 sm:text-sm">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-8 md:pt-16">
        <h1 className="font-[family-name:var(--font-poster)] text-[clamp(3.5rem,17vw,6rem)] font-black uppercase leading-[0.95] tracking-tight [text-wrap:balance]">
          Brands get <span className="box-decoration-clone bg-[var(--yellow)] px-2 text-[var(--deep)]">followed</span> when someone runs the room.
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-[48ch] text-lg leading-relaxed">{persona.positioning} {persona.intro}</p>
          <div className="flex gap-3">
            <a href={`mailto:${persona.email}`} className="bg-[var(--yellow)] px-6 py-3 font-bold uppercase text-[var(--deep)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yellow)]">Hire Amaka</a>
            <a href={persona.cvFile} className="border-2 border-[var(--ink)] px-6 py-3 font-bold uppercase transition-colors hover:bg-[var(--ink)] hover:text-[var(--bg)]">CV</a>
          </div>
        </div>
      </section>

      <div aria-hidden className="overflow-hidden bg-[var(--yellow)] py-3 text-[var(--deep)]">
        <div className="v-marquee flex w-max whitespace-pre font-[family-name:var(--font-poster)] text-3xl font-black">
          <span>{ticker.repeat(4)}</span><span>{ticker.repeat(4)}</span>
        </div>
      </div>

      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-[family-name:var(--font-poster)] text-6xl font-black uppercase leading-none md:text-8xl">Work</h2>
        <ul className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-12">
          {cases.slice(0, 4).map((c, i) => (
            <li key={c.slug} className={[
              "md:col-span-6", i === 0 ? "md:col-span-7" : "", i === 1 ? "md:col-span-5 md:mt-12" : "", i === 2 ? "md:col-span-5" : "", i === 3 ? "md:col-span-7" : "",
            ].join(" ")}>
              <Link href="#work" className="group block">
                <div className="overflow-hidden ring-4 ring-[var(--ink)] transition-transform duration-300 group-hover:-rotate-1"><PostTile c={c} /></div>
                <p className="mt-3 font-[family-name:var(--font-poster)] text-3xl font-black uppercase leading-none">{c.title}</p>
                <p className="mt-1 max-w-[46ch] opacity-90">{c.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="bg-[var(--deep)] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-[family-name:var(--font-poster)] text-6xl font-black uppercase leading-none md:text-8xl">What I run</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.name} className="border-t-2 border-[var(--yellow)] pt-3">
                <dt className="font-[family-name:var(--font-poster)] text-3xl font-black uppercase">{s.name}</dt>
                <dd className="mt-1 max-w-[46ch] opacity-90">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer id="contact" className="bg-[var(--yellow)] px-5 py-20 text-[var(--deep)]">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-poster)] text-[clamp(3rem,13vw,6rem)] font-black uppercase leading-[0.9]">Say hello.</p>
          <a href={`mailto:${persona.email}`} className="mt-4 inline-block break-all text-xl font-bold underline decoration-2 underline-offset-4 md:text-3xl">{persona.email}</a>
          <p className="mt-10 max-w-[60ch] text-sm">{persona.sampleNotice}</p>
        </div>
      </footer>
    </div>
  );
}
