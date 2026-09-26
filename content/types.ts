export type Platform = "Instagram" | "TikTok" | "X" | "LinkedIn" | "Facebook";

export type Growth = {
  label: string;
  from: number;
  to: number;
  unit?: "count" | "percent" | "naira" | "minutes";
};

export type Stat = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  title: string;
  brand: string;
  brandLine: string;
  employer: string;
  year: number;
  duration: string;
  platforms: Platform[];
  spendNgn: number;
  summary: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  growth: Growth[];
  stats: Stat[];
  lesson: string;
  tile: { bg: string; fg: string; accent: string; caption: string };
};

export type Role = {
  title: string;
  employer: string;
  type: "Agency" | "In-house";
  start: string;
  end: string;
  points: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Service = { name: string; body: string; deliverables: string[]; measuredBy: string };

export type Principle = { name: string; body: string };
