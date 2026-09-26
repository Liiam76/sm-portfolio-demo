import Link from "next/link";
import { variants } from "@/components/variants/registry";

export const metadata = { title: "Design variants" };

export default function VariantsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 font-sans">
      <h1 className="text-3xl font-bold">Home page variants</h1>
      <p className="mt-3 text-neutral-600">Staging only. Four looks for the same content. Open each on your phone too.</p>
      <ul className="mt-8 space-y-4">
        {variants.map((v) => (
          <li key={v.slug}>
            <Link href={`/variants/${v.slug}`} className="block rounded-xl border border-neutral-300 p-5 hover:border-black focus-visible:outline-2 focus-visible:outline-offset-2">
              <span className="text-xl font-semibold">{v.name}</span>
              <span className="mt-1 block text-neutral-600">{v.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
