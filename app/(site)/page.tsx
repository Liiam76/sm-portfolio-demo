import Link from "next/link";
import { cases } from "@/content/cases";
import { persona, services } from "@/content/persona";
import { headlineFigures } from "@/lib/metrics";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { CaseCard } from "@/components/site/CaseCard";
import { Testimonials } from "@/components/site/Testimonials";

export default function Home() {
  const h = headlineFigures();
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.15fr_1fr] md:pt-12">
        <div>
          <p className="inline-block rounded-full bg-[var(--ink)] px-4 py-1.5 text-sm font-semibold text-[var(--lime)]">
            Open to full-time roles in Lagos
          </p>
          <h1 className="mt-5 text-[clamp(2.6rem,9vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [text-wrap:balance]">
            I make Nigerian brands worth following.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">{persona.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-[var(--lime)] transition-transform duration-200 hover:-translate-y-0.5">Let&apos;s talk</Link>
            <a href={persona.cvFile} className="rounded-full border-2 border-[var(--ink)] px-6 py-3 font-bold transition-colors hover:bg-[var(--ink)] hover:text-[var(--lime)]">Download CV</a>
          </div>
        </div>
        <div className="relative mx-auto h-[26rem] w-full max-w-md md:h-[32rem]" aria-hidden>
          <div className="float absolute left-0 top-10 w-[46%]" style={{ ["--r" as string]: "-8deg" }}><PhoneFrame c={cases[0]} /></div>
          <div className="float absolute left-[26%] top-0 z-10 w-[50%]" style={{ ["--r" as string]: "3deg", animationDelay: "-2s" }}><PhoneFrame c={cases[1]} /></div>
          <div className="float absolute right-0 top-16 w-[44%]" style={{ ["--r" as string]: "9deg", animationDelay: "-4s" }}><PhoneFrame c={cases[3]} /></div>
        </div>
      </section>

      <section aria-label="Results at a glance" className="border-y-2 border-[var(--ink)] bg-[var(--lime)] py-4">
        <p className="mx-auto max-w-6xl px-5 text-center text-lg font-bold md:text-2xl">
          {h.audience} followers and members grown, {h.spend} of ad spend managed, first reply on X in {h.responseTime}.
        </p>
      </section>

      <section aria-labelledby="work-heading" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="work-heading" className="text-4xl font-extrabold tracking-tight md:text-6xl">The grid</h2>
          <Link href="/work" className="font-bold underline decoration-2 underline-offset-4">All case studies</Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {cases.map((c, i) => (
            <li key={c.slug} className={i === 0 ? "col-span-2 row-span-2" : i === cases.length - 1 ? "col-span-2 md:col-span-1" : ""}>
              <CaseCard c={c} priority={i === 0} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-heading" className="bg-[var(--paper)] py-20 text-[var(--paper-ink)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 id="how-heading" className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl">What I run</h2>
            <Link href="/services" className="mt-6 inline-block font-bold underline decoration-2 underline-offset-4">See how each service works</Link>
          </div>
          <ul className="divide-y-2 divide-[var(--ink)] border-y-2 border-[var(--ink)]">
            {services.map((s) => (
              <li key={s.name} className="py-4">
                <p className="text-xl font-extrabold">{s.name}</p>
                <p className="mt-1 max-w-[56ch] leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="voices-heading" className="bg-[var(--ink)] py-20 text-[var(--paper)] on-dark">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <h2 id="voices-heading" className="text-4xl font-extrabold leading-none tracking-tight md:text-6xl">What people say in the comments</h2>
          <Testimonials />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="max-w-[20ch] text-[clamp(2rem,6vw,4rem)] font-extrabold leading-none tracking-tight">Want the story behind the numbers?</p>
        <Link href="/about" className="mt-6 inline-block rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-[var(--lime)]">About Amaka</Link>
      </section>
    </>
  );
}
