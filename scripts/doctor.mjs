#!/usr/bin/env node
/**
 * Style Foundry doctor — scans a target app and reports how themable it is
 * BEFORE you install a theme, with the exact list of blockers and the
 * recommended path (install / enforce / retrofit).
 *
 *   node scripts/doctor.mjs /path/to/app
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const root = process.argv[2];
if (!root || !existsSync(root)) {
  console.error("Usage: node scripts/doctor.mjs /path/to/app");
  process.exit(1);
}

/* Optional per-app exceptions manifest: <app>/sf-doctor.json
   {
     "ignoreFiles": ["src/pages/CRMDashboard.tsx", "components/badges/"],
     "allowedHex": ["#0A66C2", "#E36964"],
     "reason": "status pills, owner avatars, source dots — assumed data-viz palette"
   }
   Matched findings are counted separately as documented exceptions and do NOT
   weigh on the verdict. An exception is a decision, not a blocker. */
let manifest = { ignoreFiles: [], allowedHex: [], allowedUtilities: [], allowOnColorText: false, reason: "" };
const manifestPath = join(root, "sf-doctor.json");
if (existsSync(manifestPath)) {
  try { manifest = { ignoreFiles: [], allowedHex: [], allowedUtilities: [], allowOnColorText: false, reason: "", ...JSON.parse(readFileSync(manifestPath, "utf8")) }; }
  catch { console.error("!! sf-doctor.json is invalid JSON — ignoring it"); }
}
const allowedHexSet = new Set(manifest.allowedHex.map((h) => h.toLowerCase()));
const allowedUtilSet = new Set(manifest.allowedUtilities);
const isIgnoredFile = (rel) => manifest.ignoreFiles.some((frag) => rel.includes(frag));

const EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".css", ".html", ".vue", ".svelte"]);
const SKIP = new Set(["node_modules", "dist", "build", ".next", ".output", ".git", "public"]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else if (EXT.has(extname(name)) && st.size < 2_000_000) yield p;
  }
}

let files = 0;
let rawHex = 0;
let exceptedHex = 0;
let hexFiles = new Map();
let semanticVarUse = 0;
let bakedFontLiterals = [];
let paletteBlocks = [];
let hardcodedUtils = 0;
let exceptedUtils = 0;
let hasTailwind4 = false;
let hasShadcnVars = false;
let inlineStyleColors = 0;

const pkgPath = join(root, "package.json");
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const tw = { ...pkg.dependencies, ...pkg.devDependencies }["tailwindcss"] ?? "";
  hasTailwind4 = /(^|\^|~)4\./.test(tw);
}

for (const f of walk(root)) {
  files++;
  const src = readFileSync(f, "utf8");
  const rel = f.slice(root.length + 1);

  const hexes = src.match(/#[0-9a-fA-F]{6}\b/g) ?? [];
  if (hexes.length) {
    if (isIgnoredFile(rel)) {
      exceptedHex += hexes.length;
    } else {
      const kept = hexes.filter((h) => !allowedHexSet.has(h.toLowerCase()));
      exceptedHex += hexes.length - kept.length;
      if (kept.length) {
        rawHex += kept.length;
        hexFiles.set(rel, kept.length);
      }
    }
  }
  semanticVarUse += (src.match(/var\(--(background|foreground|primary|card|muted|accent|border|ring|sidebar|chart)/g) ?? []).length;
  if (/--(primary|background|card):/.test(src)) hasShadcnVars = true;

  if (extname(f) === ".css" && !rel.includes("themes/")) {
    for (const m of src.matchAll(/--font-[\w-]+:\s*(['"][^'"]+['"][^;]*);/g)) {
      if (!m[1].trim().startsWith("var(")) bakedFontLiterals.push(`${rel}: ${m[0].trim().slice(0, 70)}`);
    }
    for (const m of src.matchAll(/(:root(?::not\(\.dark\))?|\.dark)\s*\{[^}]*--(background|primary|card)/g)) {
      paletteBlocks.push(`${rel}: palette block on \`${m[1]}\``);
    }
  }
  {
    const utils = src.match(/\b(?:bg|text|border)-(?:white|black|gray|slate|zinc|neutral|stone)-?\d*/g) ?? [];
    if (isIgnoredFile(rel)) exceptedUtils += utils.length;
    else
      for (const u of utils) {
        if (allowedUtilSet.has(u) || (manifest.allowOnColorText && (u === "text-white" || u === "text-black")))
          exceptedUtils++;
        else hardcodedUtils++;
      }
  }
  inlineStyleColors += (src.match(/style=\{\{[^}]*(?:#[0-9a-fA-F]{3,6}|rgb\()/g) ?? []).length;
}

const topHex = [...hexFiles.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

console.log("\n━━ Style Foundry doctor ━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Scanned: ${files} files in ${root}\n`);
console.log(`Tailwind v4:              ${hasTailwind4 ? "yes" : "NO (v3 or none — bridge still works via CSS vars)"}`);
console.log(`shadcn-style variables:   ${hasShadcnVars ? "yes" : "no"} (${semanticVarUse} semantic var() usages)`);
console.log(`Raw hex colors:           ${rawHex}${exceptedHex ? ` (+ ${exceptedHex} documented exceptions${manifest.reason ? ` — ${manifest.reason}` : ""})` : ""}`);
for (const [f, n] of topHex) console.log(`   ${String(n).padStart(4)}  ${f}`);
console.log(`Hardcoded gray/white/black utilities: ${hardcodedUtils}${exceptedUtils ? ` (+ ${exceptedUtils} documented exceptions)` : ""}`);
console.log(`Inline style colors:      ${inlineStyleColors}`);
console.log(`Baked font literals:      ${bakedFontLiterals.length}`);
for (const b of bakedFontLiterals.slice(0, 5)) console.log(`   ${b}`);
console.log(`Competing palette blocks: ${paletteBlocks.length}`);
for (const b of [...new Set(paletteBlocks)].slice(0, 5)) console.log(`   ${b}`);

const migration = rawHex + hardcodedUtils + inlineStyleColors * 3 + bakedFontLiterals.length * 10 + paletteBlocks.length * 10;
let verdict, advice;
if (migration < 30 && hasShadcnVars) {
  verdict = "GREEN — one-command install";
  advice = "npx shadcn add <foundry>/r/<slug>.json, wrap the root in theme-<slug>. Done.";
} else if (migration < 150) {
  verdict = "ORANGE — install + enforce + light sweep (~30-60 min)";
  advice = "Install the item, wrap with `theme-<slug> sf-enforce`, delete competing palette blocks, replace baked font literals with var(--font-display)/var(--font-body), sweep the top hex files. Verify both modes against the theme's /book page.";
} else {
  verdict = "RED — real retrofit (half a day). Set expectations accordingly";
  advice = "Follow the skill's section 2b fully: kill palette blocks and font literals at source, remap the app palette to tokens, sweep hex file by file (start with the top offenders above), pass var(--chart-1..5) to chart configs, screenshot-verify both modes against /styles/<slug>/book.";
}
console.log(`\nVERDICT: ${verdict}`);
console.log(`PATH:    ${advice}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
