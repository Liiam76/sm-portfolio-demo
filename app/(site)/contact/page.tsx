import type { Metadata } from "next";
import { persona } from "@/content/persona";
import { PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email Amaka about a full-time social media role in Lagos, or download the CV.",
};

export default function ContactPage() {
  const subject = encodeURIComponent("Social media role: introduction");
  return (
    <>
      <PageIntro title="Let's talk">{persona.availability}</PageIntro>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 md:grid-cols-2">
        <div className="rounded-3xl bg-[var(--lime)] p-8 ring-2 ring-[var(--ink)]">
          <p className="text-sm font-bold">Email</p>
          <a href={`mailto:${persona.email}?subject=${subject}`} className="mt-1 block break-all text-2xl font-extrabold underline decoration-2 underline-offset-4 md:text-3xl">{persona.email}</a>
          <p className="mt-6 text-sm font-bold">Phone and WhatsApp</p>
          <p className="mt-1 text-xl font-extrabold">{persona.phone}</p>
          <p className="mt-6 text-sm font-bold">Location</p>
          <p className="mt-1 text-xl font-extrabold">{persona.city}</p>
          <p className="mt-6 leading-relaxed">{persona.responseNote}</p>
        </div>
        <div className="rounded-3xl bg-[var(--paper)] p-8 text-[var(--paper-ink)] ring-2 ring-[var(--ink)]">
          <h2 className="text-2xl font-extrabold tracking-tight">What helps in a first message</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
            <li>The brand and the platforms you want to grow</li>
            <li>The size of the team and the monthly paid budget</li>
            <li>The one number the business wants to move this year</li>
          </ul>
          <a href={persona.cvFile} className="mt-8 inline-block rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-[var(--lime)]">Download CV (PDF)</a>
          <p className="mt-4 text-sm">Sample contact details. Nobody will answer this email or phone number.</p>
        </div>
      </section>
    </>
  );
}
