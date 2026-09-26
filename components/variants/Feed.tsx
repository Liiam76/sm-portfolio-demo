import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import { cases } from "@/content/cases";
import { persona, services, testimonials } from "@/content/persona";
import { headlineFigures } from "@/lib/metrics";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { PostTile } from "@/components/shared/PostTile";

const font = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export function Feed() {
  const h = headlineFigures();
  return (
    <div className={`v-feed ${font.className} min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--ink)]`}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/variants" className="text-lg font-extrabold tracking-tight">{persona.name}</Link>
        <nav aria-label="Main" className="flex gap-5 text-sm font-semibold">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.15fr_1fr] md:pt-14">
        <div>
          <p className="inline-block rounded-full bg-[var(--ink)] px-4 py-1.5 text-sm font-semibold text-[var(--lime)]">
            Open to full-time roles in Lagos
          </p>
          <h1 className="mt-5 text-[clamp(2.6rem,9vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [text-wrap:balance]">
            I make Nigerian brands worth following.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">
            {persona.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-[var(--lime)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]">Let&apos;s talk</a>
            <a href={persona.cvFile} className="rounded-full border-2 border-[var(--ink)] px-6 py-3 font-bold transition-colors hover:bg-[var(--ink)] hover:text-[var(--lime)]">Download CV</a>
          </div>
        </div>
        <div className="relative mx-auto h-[26rem] w-full max-w-md md:h-[32rem]" aria-hidden>
          <div className="v-float absolute left-0 top-10 w-[46%]" style={{ ["--r" as string]: "-8deg" }}><PhoneFrame c={cases[0]} /></div>
          <div className="v-float absolute left-[26%] top-0 z-10 w-[50%]" style={{ ["--r" as string]: "3deg", animationDelay: "-2s" }}><PhoneFrame c={cases[1]} /></div>
          <div className="v-float absolute right-0 top-16 w-[44%]" style={{ ["--r" as string]: "9deg", animationDelay: "-4s" }}><PhoneFrame c={cases[3]} /></div>
        </div>
      </section>

      <section aria-label="Results" className="border-y-2 border-[var(--ink)] bg-[var(--lime)] py-4">
        <p className="mx-auto max-w-6xl px-5 text-center text-lg font-bold md:text-2xl">
          {h.audience} followers and members grown, {h.spend} of ad spend managed, first reply on X in {h.responseTime}.
        </p>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">The grid</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {cases.map((c, i) => (
            <li key={c.slug} className={i === 0 ? "col-span-2 row-span-2" : i === cases.length - 1 ? "col-span-2 md:col-span-1" : ""}>
              <Link href="#work" className="group block overflow-hidden rounded-3xl bg-[var(--paper)] ring-2 ring-[var(--ink)] transition-transform duration-300 hover:-translate-y-1">
                <PostTile c={c} />
                <div className="p-4">
                  <p className="text-sm font-semibold opacity-70">{c.brand} · {c.platforms.join(", ")}</p>
                  <p className="mt-1 text-lg font-bold leading-tight">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="bg-[var(--ink)] py-20 text-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <h2 className="text-4xl font-extrabold leading-none tracking-tight md:text-6xl">What people say in the comments</h2>
          <ul className="space-y-4">
            {testimonials.map((t) => (
              <li key={t.name} className="rounded-3xl rounded-bl-md bg-[var(--paper)] p-5 text-[var(--ink)]">
                <p className="leading-relaxed">{t.quote}</p>
                <p className="mt-3 text-sm font-bold">{t.name}, {t.role}, {t.company}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">What I run</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {services.map((s) => (
            <li key={s.name} className="rounded-full border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-2 font-bold">{s.name}</li>
          ))}
        </ul>
      </section>

      <footer id="contact" className="bg-[var(--lime)] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[clamp(2rem,7vw,4.5rem)] font-extrabold leading-none tracking-tight">Hiring a social lead?</p>
          <a href={`mailto:${persona.email}`} className="mt-4 inline-block break-all text-xl font-bold underline decoration-2 underline-offset-4 md:text-3xl">{persona.email}</a>
          <p className="mt-10 max-w-[60ch] text-sm opacity-80">{persona.sampleNotice}</p>
        </div>
      </footer>
    </div>
  );
}
