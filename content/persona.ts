import type { Principle, Role, Service, Testimonial } from "./types.ts";

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
  education: "BSc Mass Communication, University of Lagos, 2020",
  responseNote: "I reply to every email within two working days.",
} as const;

export const story: string[] = [
  "I studied Mass Communication at the University of Lagos and graduated in 2020. My first client was a friend's thrift store on Instagram. I posted every day, answered every direct message and tracked orders in a notebook. Weekly orders went from 6 to 40 in three months, and that notebook became my first reporting template.",
  "I joined Lekki Lane Media in 2021, moved to Brightroom Digital in 2022 and joined Nkwo Foods in 2024. Each move gave me a bigger budget and a harder question: what did this post do for the business?",
  "Today I run social for four food brands. My week has three fixed parts: Monday planning with the brand team, a daily community desk and a Friday report with three numbers.",
];

export const principles: Principle[] = [
  {
    name: "Start with the customer's own words",
    body: "Comments and direct messages tell you what to post. Every campaign in this portfolio began with a real customer question.",
  },
  {
    name: "Pick three numbers per channel",
    body: "One for audience, one for engagement, one for the business. Everything else goes in the appendix.",
  },
  {
    name: "Reply like a person, and fast",
    body: "A reply in the first hour beats a perfect reply the next day.",
  },
];

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
    deliverables: ["A 90-day plan for each platform","Content pillars with example posts","A posting calendar for the first month"],
    measuredBy: "Follower growth, engagement rate and one business metric agreed at kickoff",
  },
  {
    name: "Content and creators",
    body: "Briefs, scripts and shot lists for short video and carousels, plus creator sourcing, briefing and payment tracking.",
    deliverables: ["Scripts and shot lists for short video","A creator brief and a payment tracker","A weekly content review"],
    measuredBy: "Save rate, video completion rate and creator content reused in paid",
  },
  {
    name: "Community and care",
    body: "A response desk with tone guides, escalation rules and reply-time targets, staffed across WhatsApp, X, Instagram and Facebook.",
    deliverables: ["A tone guide and reply templates","Escalation rules for complaints","Coverage hours across platforms"],
    measuredBy: "Median first response time and sentiment share",
  },
  {
    name: "Paid social",
    body: "Meta and TikTok campaigns built from organic winners, with weekly cost-per-result reviews and budget shifts.",
    deliverables: ["Campaign structure and audience tests","Three creative hooks tested per campaign","A weekly budget review"],
    measuredBy: "Cost per result and sales attributed to social",
  },
  {
    name: "Reporting",
    body: "One-page monthly reports that link audience, engagement and sales, written for a brand manager who has five minutes.",
    deliverables: ["A one-page monthly report","A quarterly review deck","A shared dashboard in Looker Studio"],
    measuredBy: "Whether the report changes a decision the next month",
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
