export function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-8 md:pt-14">
      <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [text-wrap:balance]">{title}</h1>
      {children ? <div className="mt-5 max-w-[60ch] text-lg leading-relaxed">{children}</div> : null}
    </section>
  );
}
