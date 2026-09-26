import { testimonials } from "@/content/persona";

export function Testimonials({ limit }: { limit?: number }) {
  return (
    <ul className="space-y-4">
      {testimonials.slice(0, limit).map((t) => (
        <li key={t.name} className="rounded-3xl rounded-bl-md bg-[var(--paper)] p-5 text-[var(--paper-ink)]">
          <p className="leading-relaxed">{t.quote}</p>
          <p className="mt-3 text-sm font-bold">{t.name}, {t.role}, {t.company}</p>
        </li>
      ))}
    </ul>
  );
}
