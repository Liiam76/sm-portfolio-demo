import type { CaseStudy } from "./types.ts";

export const cases: CaseStudy[] = [
  {
    slug: "zuri-wash-day",
    title: "Wash Day Wahala",
    brand: "Zuri Naturals",
    brandLine: "Natural hair care",
    employer: "Brightroom Digital",
    year: 2023,
    duration: "8 weeks",
    platforms: ["Instagram", "TikTok"],
    spendNgn: 3_200_000,
    summary:
      "A creator-led hashtag that turned a hair care launch into 1,900 customer videos.",
    challenge:
      "Zuri Naturals launched a leave-in conditioner into a crowded shelf with no launch budget for TV. Its Instagram page had 18,200 followers and a 3.1% engagement rate, and most posts were product photos.",
    strategy: [
      "Own the moment customers already complain about: wash day takes hours.",
      "Use short video first, then reuse the best creator clips in paid social.",
      "Give every creator the same simple prompt so customers could copy it.",
    ],
    execution: [
      "Briefed 32 micro-creators with a three-shot format: the mess, the routine, the result.",
      "Posted a Reel and a TikTok twice a week in the brand account, each answering one wash day question.",
      "Put a small paid budget behind the six clips with the highest save rate.",
      "Replied to every tagged video in the first hour with a product tip or a repost request.",
    ],
    growth: [
      { label: "Instagram followers", from: 18_200, to: 61_400 },
      { label: "Engagement rate", from: 3.1, to: 6.8, unit: "percent" },
    ],
    stats: [
      { label: "Reach", value: "6.4M" },
      { label: "TikTok views", value: "4.1M" },
      { label: "Customer videos under the hashtag", value: "1,900" },
      { label: "Orders from social versus the prior 8 weeks", value: "+212%" },
    ],
    lesson:
      "Creators started the trend, but the hour-one replies kept customers posting.",
    tile: { bg: "#ffb703", fg: "#1b1207", accent: "#d62828", caption: "wash day, but make it fun" },
  },
  {
    slug: "kola-crunch-match-day",
    title: "Crunch Time",
    brand: "Kola Crunch",
    brandLine: "Biscuit snack",
    employer: "Nkwo Foods",
    year: 2025,
    duration: "6 weeks",
    platforms: ["X", "TikTok"],
    spendNgn: 5_500_000,
    summary:
      "Real-time match-day content that more than doubled the brand's X following.",
    challenge:
      "Kola Crunch had 41,200 X followers and answered most customer mentions the next day. The brand wanted to be part of match-day conversation without sounding like every other snack brand.",
    strategy: [
      "Post fast, post short and stay on one joke per match.",
      "Staff a live desk for every match so replies and posts came from one voice.",
      "Move the best posts to TikTok as short clips.",
    ],
    execution: [
      "Built a match-day playbook with pre-approved jokes, banned topics and a two-person sign-off.",
      "Ran a three-person desk from kick-off to the final whistle on 14 match days.",
      "Promoted the top five posts each week with paid reach.",
      "Answered product questions in the same thread, with a link only when asked.",
    ],
    growth: [
      { label: "X followers", from: 41_200, to: 88_500 },
      { label: "Positive sentiment", from: 71, to: 84, unit: "percent" },
      { label: "Median first response", from: 540, to: 38, unit: "minutes" },
    ],
    stats: [
      { label: "Impressions", value: "22M" },
      { label: "Brand mentions versus the prior 6 weeks", value: "+180%" },
      { label: "Match days staffed", value: "14" },
    ],
    lesson:
      "A sign-off rule of two people, decided before kick-off, kept us fast without a single deleted post.",
    tile: { bg: "#0b3d91", fg: "#fff8e7", accent: "#ffd23f", caption: "goal! (of crunch)" },
  },
  {
    slug: "sunpress-sunday-squeeze",
    title: "Sunday Squeeze",
    brand: "Sunpress",
    brandLine: "Cold-pressed juice",
    employer: "Brightroom Digital",
    year: 2024,
    duration: "12 weeks",
    platforms: ["Instagram", "Facebook"],
    spendNgn: 2_400_000,
    summary:
      "A 12-episode Reels series that cut the cost per result by 46 percent.",
    challenge:
      "Sunpress paid ₦310 for each result on Meta ads, and its 27,500 followers rarely saved or shared posts. The founder wanted a format the team could repeat every week.",
    strategy: [
      "One recurring format, one release day, one host.",
      "Build each episode around a question customers had already asked in comments.",
      "Turn the top episodes into paid ads after the first 48 hours.",
    ],
    execution: [
      "Wrote 12 episode scripts from real comments and direct messages.",
      "Filmed all 12 in two shoot days to keep production costs low.",
      "Tested three hooks per episode in paid, then kept the lowest cost per result.",
      "Added a pinned comment and a WhatsApp order link to every episode.",
    ],
    growth: [
      { label: "Instagram followers", from: 27_500, to: 52_300 },
      { label: "Cost per result", from: 310, to: 168, unit: "naira" },
    ],
    stats: [
      { label: "Average reach per episode", value: "145K" },
      { label: "Save rate", value: "4.2%" },
      { label: "Episodes shipped", value: "12" },
    ],
    lesson:
      "Two shoot days for 12 episodes gave the client a habit they kept after our contract ended.",
    tile: { bg: "#3a7d44", fg: "#fdf6e3", accent: "#f4a300", caption: "sunday squeeze ep. 07" },
  },
  {
    slug: "iya-oge-kitchen",
    title: "Cook With Iya Oge",
    brand: "Iya Oge Seasoning",
    brandLine: "Seasoning cubes",
    employer: "Nkwo Foods",
    year: 2025,
    duration: "6 months",
    platforms: ["Facebook"],
    spendNgn: 1_800_000,
    summary:
      "A Facebook recipe community that reached 38,400 members from zero.",
    challenge:
      "Iya Oge sells to home cooks aged 30 to 55, and that audience lives on Facebook and WhatsApp, not TikTok. The brand had a page but no place where customers talked to each other.",
    strategy: [
      "Build a group where cooks share recipes, not one where the brand talks at them.",
      "Make the brand a host, not the star.",
      "Reward useful posts with a weekly feature and a small promo code.",
    ],
    execution: [
      "Recruited 40 founding members from existing customers before the public launch.",
      "Posted one prompt each day, such as \"What goes in your Sunday stew?\"",
      "Trained two community managers on moderation rules and reply tone.",
      "Sent a weekly recipe roundup to members and gave each featured cook a hamper.",
    ],
    growth: [{ label: "Group members", from: 0, to: 38_400 }],
    stats: [
      { label: "Members active each week", value: "22%" },
      { label: "Recipes shared by members", value: "4,600" },
      { label: "Promo codes redeemed at retail", value: "7,300" },
    ],
    lesson:
      "The best growth lever was 40 founding members who posted before anyone else arrived.",
    tile: { bg: "#c1121f", fg: "#fff3e0", accent: "#ffe066", caption: "sunday stew, who dey?" },
  },
  {
    slug: "nkwo-graduate-trainee",
    title: "Nkwo Graduate Trainee drive",
    brand: "Nkwo Foods",
    brandLine: "Employer brand",
    employer: "Nkwo Foods",
    year: 2024,
    duration: "10 weeks",
    platforms: ["LinkedIn"],
    spendNgn: 900_000,
    summary:
      "An employer brand push that tripled graduate trainee applications.",
    challenge:
      "Nkwo received 410 graduate trainee applications the previous year and few came from top universities. The LinkedIn page had 6,100 followers and posted job ads only.",
    strategy: [
      "Let current trainees tell the story instead of the company page.",
      "Show the job in short posts: a day in a factory, a day in sales, a day in brand.",
      "Run paid posts to final-year students in five target universities.",
    ],
    execution: [
      "Coached eight current trainees to post about their work on their own profiles.",
      "Published three posts a week from the company page with trainee quotes.",
      "Targeted paid posts by university and course of study.",
      "Added a one-page application link and a reply within 24 hours for every question.",
    ],
    growth: [
      { label: "LinkedIn followers", from: 6_100, to: 19_800 },
      { label: "Applications", from: 410, to: 1_240 },
    ],
    stats: [
      { label: "Trainee posts published", value: "64" },
      { label: "Target universities reached", value: "5" },
      { label: "Question replies within 24 hours", value: "100%" },
    ],
    lesson:
      "Posts from trainees earned more comments than posts from the company page, so we shifted the calendar toward them.",
    tile: { bg: "#e9f1ff", fg: "#0a2540", accent: "#0a66c2", caption: "day 1 at nkwo" },
  },
  {
    slug: "kola-crunch-pack-complaint",
    title: "The pack complaint thread",
    brand: "Kola Crunch",
    brandLine: "Crisis response",
    employer: "Nkwo Foods",
    year: 2025,
    duration: "9 days",
    platforms: ["X"],
    spendNgn: 0,
    summary:
      "A viral packaging complaint answered in 47 minutes, with sentiment recovered in nine days.",
    challenge:
      "A customer posted a photo of a short-filled pack and the thread reached 1,800 quote posts overnight. Negative sentiment peaked at 62 percent of brand mentions.",
    strategy: [
      "Reply fast, with facts, from one voice.",
      "Move the customer to a direct message and a replacement within the hour.",
      "Publish one clear update once the factory check was done.",
    ],
    execution: [
      "Sent the first public reply in 47 minutes, acknowledging the photo and asking for the batch code.",
      "Briefed legal, quality and the Head of Brand in one shared thread within two hours.",
      "Posted one update after the batch check and pinned it, then answered the top questions under it.",
      "Tracked sentiment twice a day and reported it to the leadership team each evening.",
    ],
    growth: [{ label: "Negative sentiment", from: 62, to: 21, unit: "percent" }],
    stats: [
      { label: "First public reply", value: "47 min" },
      { label: "Paid spend", value: "₦0" },
      { label: "Days to recover sentiment", value: "9" },
    ],
    lesson:
      "One pinned update beat 200 individual replies, because everyone could quote it.",
    tile: { bg: "#1b1b1f", fg: "#f5f5f5", accent: "#ff5a36", caption: "we hear you. update below." },
  },
];
