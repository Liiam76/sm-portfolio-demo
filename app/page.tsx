import { redirect } from "next/navigation";
import { isLive } from "@/lib/env";

export default function Home() {
  if (!isLive) redirect("/variants");
  return null;
}
