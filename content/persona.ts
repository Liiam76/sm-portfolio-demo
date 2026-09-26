import type { Role, Service, Testimonial } from "./types.ts";

export const persona = {
  name: "Amaka Oyelaran",
  firstName: "Amaka",
  title: "Senior Social Media Manager",
  city: "Lagos, Nigeria",
  yearsExperience: 5,
  email: "hello@amakaoyelaran.example",
  phone: "+234 800 000 0000",
  handle: "@amaka.socials",
  availability:
    "Open to full-time Senior Social Media Manager and Head of Social roles in Lagos. Hybrid or on-site.",
  positioning:
    "I run social for Nigerian consumer brands, and I measure it in audience, sales and sentiment.",
  intro:
    "Five years across two agencies and one FMCG house. I plan the content, run the paid budget, staff the community desk and report on what moved the business.",
  sampleNotice:
    "This is a sample portfolio built for a class demo. The person, every employer, brand, campaign and number on this site is invented.",
  cvFile: "/amaka-oyelaran-cv.pdf",
} as const;

export const roles: Role[] = [
  {
    title: "Senior Social Media Manager",
    employer: "Nkwo Foods",
    type: "In-house",
    start: "Sep 2024",
    end: "Present",
    points: [
      "Lead social for four consumer food brands with a team of three content creators and two community managers.",
      "Own a quarterly paid social budget and report reach, cost per result and sales attribution to the Head of Brand.",
      "Built the X community desk that cut median first response from 9 hours to 38 minutes.",
      "Launched a Facebook recipe community that reached 38,400 members in six months.",
    ],
  },
  {
    title: "Social Media Manager",
    employer: "Brightroom Digital",
    type: "Agency",
    start: "Jul 2022",
    end: "Aug 2024",
    points: [
      "Managed social for six retainer clients across beauty, beverages and retail, each with a monthly content calendar and report.",
      "Ran creator programmes with 15 to 40 micro-creators per campaign.",
      "Trained two junior executives who were later promoted to managers.",
    ],
  },
  {
    title: "Social Media Executive",
    employer: "Lekki Lane Media",
    type: "Agency",
    start: "Oct 2021",
    end: "Jun 2022",
    points: [
      "Scheduled and published daily content for eight small business accounts.",
      "Handled comments and direct messages, and escalated sales leads to account managers.",
      "Wrote the first monthly analytics template the agency used across clients.",
    ],
  },
];

export const services: Service[] = [
  {
    name: "Channel strategy",
    body: "A 90-day plan per platform with content pillars, posting cadence and the three numbers that decide whether it worked.",
  },
  {
    name: "Content and creators",
    body: "Briefs, scripts and shot lists for short video and carousels, plus creator sourcing, briefing and payment tracking.",
  },
  {
    name: "Community and care",
    body: "A response desk with tone guides, escalation rules and reply-time targets, staffed across WhatsApp, X, Instagram and Facebook.",
  },
  {
    name: "Paid social",
    body: "Meta and TikTok campaigns built from organic winners, with weekly cost-per-result reviews and budget shifts.",
  },
  {
    name: "Reporting",
    body: "One-page monthly reports that link audience, engagement and sales, written for a brand manager who has five minutes.",
  },
];

export const tools = [
  "Meta Business Suite and Ads Manager",
  "TikTok Ads Manager",
  "Sprout Social",
  "Google Analytics 4",
  "Looker Studio",
  "Canva",
  "CapCut",
  "Notion",
];

export const certifications = [
  "Meta Certified Digital Marketing Associate, 2022",
  "Google Analytics Certification, 2023",
  "HubSpot Social Media Marketing, 2022",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Amaka answered a viral complaint in 47 minutes and had our team aligned before legal finished reading it. Sentiment was back under control inside ten days.",
    name: "Chinedu Bamigbose",
    role: "Head of Brand",
    company: "Nkwo Foods",
  },
  {
    quote:
      "She turned a hair care launch into a hashtag our customers filled with their own videos. We saw orders rise while the campaign ran, and we kept the creators she found.",
    name: "Ronke Salako",
    role: "Founder",
    company: "Zuri Naturals",
  },
  {
    quote:
      "Her monthly reports were the only ones clients read to the end. She ties every post to a number, and she trains her juniors to do the same.",
    name: "Tunde Ibekwe",
    role: "Account Director",
    company: "Brightroom Digital",
  },
];
