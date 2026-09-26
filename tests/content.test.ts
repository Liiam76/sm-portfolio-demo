import { test } from "node:test";
import assert from "node:assert/strict";
import { cases } from "../content/cases.ts";
import { persona, roles, testimonials, services } from "../content/persona.ts";
import { audienceGained, totalSpend, describeGrowth, headlineFigures } from "../lib/metrics.ts";
import { pctChange, compact, naira } from "../lib/format.ts";

const allText = JSON.stringify({ cases, persona, roles, testimonials, services });

test("audience gained sums the first growth metric of follower cases", () => {
  assert.equal(audienceGained(), 167_400);
});

test("total spend across featured work is 13.8M naira", () => {
  assert.equal(totalSpend(), 13_800_000);
  assert.equal(naira(totalSpend()), "₦13.8M");
});

test("growth percentages are derived from raw values", () => {
  assert.equal(pctChange(18_200, 61_400), 237.4);
  assert.equal(describeGrowth({ label: "x", from: 0, to: 10 }).change, "from zero");
  assert.equal(describeGrowth({ label: "x", from: 6_100, to: 19_800 }).change, "+225%");
});

test("formatters compact numbers", () => {
  assert.equal(compact(61_400), "61.4K");
  assert.equal(compact(6_400_000), "6.4M");
  assert.equal(compact(950), "950");
});

test("headline figures match the featured cases", () => {
  const h = headlineFigures();
  assert.equal(h.audience, "167.4K");
  assert.equal(h.spend, "₦13.8M");
});

test("every case has unique slug, results and a lesson", () => {
  const slugs = new Set(cases.map((c) => c.slug));
  assert.equal(slugs.size, cases.length);
  for (const c of cases) {
    assert.ok(c.growth.length > 0, c.slug);
    assert.ok(c.stats.length >= 3, c.slug);
    assert.ok(c.lesson.length > 20, c.slug);
    assert.ok(c.platforms.length > 0, c.slug);
  }
});

test("roles run newest first and cover 5 years", () => {
  assert.equal(roles[0].end, "Present");
  assert.equal(roles.length, 3);
  assert.equal(persona.yearsExperience, 5);
});

test("copy follows house style: no em or en dashes, semicolons or curly quotes", () => {
  assert.doesNotMatch(allText, /[—–;‘’“”]/);
});

test("copy avoids banned vocabulary", () => {
  const banned = [
    "delve", "embark", "unlock", "game-changer", "utilize", "furthermore", "moreover",
    "however", "landscape", "powerful", "boost", "really", "actually", "basically",
    "just", "very", "certainly", "probably", "craft", "tapestry", "pivotal",
  ];
  const lower = allText.toLowerCase();
  for (const w of banned) {
    assert.doesNotMatch(lower, new RegExp(`\\b${w}\\b`), w);
  }
});
