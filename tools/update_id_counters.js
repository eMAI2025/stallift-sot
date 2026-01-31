#!/usr/bin/env node
const fs = require("fs");
const JSON5 = require("json5");

const args = process.argv.slice(2);
const inPlace = args.includes("--in-place");
const clean = args.filter(a => a !== "--in-place");

if (clean.length < 4) {
  console.error("Usage: node tools/update_id_counters.js <file> <YEAR> <TYPE> <INC> [TYPE INC ...] [--in-place]");
  process.exit(1);
}

const [filePath, year, ...pairs] = clean;
if (!/^\d{4}$/.test(year) || pairs.length % 2 !== 0) process.exit(2);

const allowed = new Set(["TASK","ART","DEC","WLOG"]);
const data = JSON5.parse(fs.readFileSync(filePath, "utf8"));
data.years ??= {};
data.years[year] ??= {};

for (let i=0; i<pairs.length; i+=2) {
  const t = String(pairs[i]).toUpperCase();
  const inc = Number(pairs[i+1]);
  if (!allowed.has(t) || !Number.isInteger(inc) || inc <= 0) process.exit(3);
  data.years[year][t] ??= { last: 0 };
  data.years[year][t].last = Number(data.years[year][t].last || 0) + inc;
}

const out = JSON5.stringify(data, null, 2) + "\n";
if (inPlace) fs.writeFileSync(filePath, out, "utf8");
else process.stdout.write(out);
