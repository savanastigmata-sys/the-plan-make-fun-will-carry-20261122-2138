import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Find 50 Shopify stores on X. Day 1: give 3 free 24h conversion audits (code fixes included) for testimonials. Sell $99 audits via Gumroad; $100 buys domain + X Premium. Reinvest profit in $5/day X ads. Edge: fixes shipped, not a report. Likely: 10 sales = $990 by day 30.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan);
console.log("chars:", [...plan].length);
