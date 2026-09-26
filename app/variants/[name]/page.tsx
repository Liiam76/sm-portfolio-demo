import { notFound } from "next/navigation";
import { variants } from "@/components/variants/registry";

export function generateStaticParams() {
  return variants.map((v) => ({ name: v.slug }));
}

export const dynamicParams = false;

export default async function VariantPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const v = variants.find((x) => x.slug === name);
  if (!v) notFound();
  const { Component } = v;
  return <Component />;
}
