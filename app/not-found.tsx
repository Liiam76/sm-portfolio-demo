import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[oklch(0.7_0.2_40)] px-5 text-[oklch(0.2_0.04_30)]">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight">Post not found.</h1>
        <p className="mt-3 text-lg">That page does not exist in this sample portfolio.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-[oklch(0.2_0.04_30)] px-6 py-3 font-bold text-[oklch(0.92_0.2_118)]">Back home</Link>
      </div>
    </main>
  );
}
