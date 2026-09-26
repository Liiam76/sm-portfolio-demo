import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Amaka Oyelaran, Social Media Manager (sample portfolio)", template: "%s | Amaka Oyelaran" },
  description:
    "Sample portfolio of a fictional Lagos social media manager, built as a class demo. All people, brands and numbers are invented.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
