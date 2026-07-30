/**
 * Builds a shadcn-compatible registry from the theme token files.
 *
 * Output: public/r/registry.json (index) + public/r/<slug>.json (one item per
 * theme). Once deployed, any project can install a theme with:
 *
 *   npx shadcn@latest add https://<domain>/r/<slug>.json
 *
 * Each item ships the theme CSS file plus the shadcn variable bridge, so the
 * installed theme skins both the token contract and stock shadcn components.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const themesDir = join(root, "src/styles/themes");
const outDir = join(root, "public/r");
mkdirSync(outDir, { recursive: true });

const BRIDGE = `
/* Bridge shadcn semantic variables to the theme tokens so stock shadcn/ui
   components are skinned by the theme. Scope-safe: applies inside the theme
   class only. */
[class*="theme-"] {
  --background: var(--bg);
  --foreground: var(--fg);
  --card: var(--surface);
  --card-foreground: var(--fg);
  --popover: var(--surface);
  --popover-foreground: var(--fg);
  --primary: var(--accent);
  --primary-foreground: var(--accent-fg);
  --secondary: var(--surface-2);
  --secondary-foreground: var(--fg);
  --muted: var(--surface-2);
  --muted-foreground: var(--fg-muted);
  --accent-foreground: var(--accent-fg);
  --border: var(--line);
  --input: var(--line);
  --ring: var(--accent);
  --destructive: var(--danger);
  --destructive-foreground: var(--accent-fg);

  /* Full app surface: sidebar, charts, app-level font + shadow + tracking vars.
     These are what real products (shadcn full kit, RootCX-style UI kits) consume —
     without them a retrofit looks half-themed. */
  --sidebar: var(--surface-2);
  --sidebar-foreground: var(--fg);
  --sidebar-primary: var(--accent);
  --sidebar-primary-foreground: var(--accent-fg);
  --sidebar-accent: color-mix(in oklab, var(--accent) 12%, var(--surface-2));
  --sidebar-accent-foreground: var(--fg);
  --sidebar-border: var(--line);
  --sidebar-ring: var(--accent);

  --chart-1: var(--accent);
  --chart-2: var(--accent-2);
  --chart-3: var(--success);
  --chart-4: var(--warning);
  --chart-5: var(--danger);

  --font-sans: var(--font-body);
  --font-heading: var(--font-app, var(--font-display));
  --font-serif: var(--font-display);

  --shadow-2xs: var(--shadow-1);
  --shadow-xs: var(--shadow-1);
  --shadow-sm: var(--shadow-1);
  --shadow: var(--shadow-2);
  --shadow-md: var(--shadow-2);
  --shadow-lg: var(--shadow-3);
  --shadow-xl: var(--shadow-3);
  --shadow-2xl: var(--shadow-3);

  --tracking-normal: 0em;
}

/* Base experience: make the theme own the canvas and native elements even in
   apps that never adopted semantic classes. Scoped to the theme wrapper. */
[class*="theme-"] {
  background-color: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
}
[class*="theme-"] :is(h1, h2, h3, h4) { font-family: var(--font-display); }
[class*="theme-"] :is(code, pre, kbd, samp) { font-family: var(--font-mono); }
[class*="theme-"] ::selection { background: color-mix(in oklab, var(--accent) 30%, transparent); }

/* OPT-IN HARD MODE — add "sf-enforce" beside the theme class when the host app
   bakes font/shadow/radius literals into its compiled utilities (a var bridge
   cannot beat a literal). Targeted !important, fonts and surfaces only. */
[class*="theme-"].sf-enforce { font-family: var(--font-body) !important; }
[class*="theme-"].sf-enforce :is(h1, h2, h3, h4, [class*="font-heading"]) {
  font-family: var(--font-app, var(--font-display)) !important;
  letter-spacing: var(--tracking-display) !important;
}
/* Data stays data: metrics/KPIs keep the body face with aligned lining figures.
   The display face is for headlines ONLY — never on numbers. Opt specific
   elements INTO the display face with data-sf="display". */
[class*="theme-"] :is([class*="text-2xl"], [class*="text-3xl"], [class*="text-4xl"], [class*="text-5xl"]) {
  font-variant-numeric: lining-nums tabular-nums;
}
[class*="theme-"].sf-enforce [data-sf="display"] {
  font-family: var(--font-display) !important;
  letter-spacing: var(--tracking-display) !important;
}
[class*="theme-"] :is(.sf-num, [data-sf="num"]) {
  font-family: var(--font-body) !important;
  font-variant-numeric: lining-nums tabular-nums;
}
[class*="theme-"].sf-enforce :is(button, [role="button"]) { font-family: var(--font-ui, var(--font-body)) !important; }
[class*="theme-"].sf-enforce :is(code, pre, kbd) { font-family: var(--font-mono) !important; }
[class*="theme-"].sf-enforce :is(.bg-card, [class*="card"]) {
  box-shadow: var(--shadow-2) !important;
  border-radius: var(--radius-lg) !important;
  border: var(--border-width) solid var(--line) !important;
}
[class*="theme-"].sf-enforce :is([class*="shadow-sm"], [class*="shadow-md"]) { box-shadow: var(--shadow-1) !important; }
[class*="theme-"].sf-enforce :is([class*="shadow-lg"], [class*="shadow-xl"]) { box-shadow: var(--shadow-3) !important; }
`;

// System families that must not go through Google Fonts
const SYSTEM_FAMS = new Set(["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text",
  "Segoe UI", "Selawik", "Tahoma", "MS Sans Serif", "Verdana", "Geneva", "Georgia", "Arial",
  "Helvetica Neue", "Helvetica", "Futura", "Courier New", "ui-monospace", "monospace",
  "sans-serif", "serif", "cursive", "system-ui", "Inter"]); // Inter loaded app-side or swap below
SYSTEM_FAMS.delete("Inter"); // Inter is on Google Fonts — include it
const SINGLE_WEIGHT = new Set(["Monoton", "Anton", "VT323", "Audiowide", "Press Start 2P", "Bebas Neue",
  "Abril Fatface", "Archivo Black", "Black Ops One", "Fjalla One", "Graduate", "Fugaz One",
  "Passion One", "Staatliches", "Questrial", "Instrument Serif", "Marcellus", "Forum",
  "Julius Sans One", "Pathway Gothic One", "Share Tech Mono", "Didact Gothic", "Nova Square", "Varela Round"]);

function fontImportFor(css) {
  const fams = new Set();
  for (const tok of ["font-display", "font-body", "font-mono"]) {
    const m = css.match(new RegExp(`--${tok}:\\s*([^;]+);`));
    if (!m) continue;
    for (const raw of m[1].split(",")) {
      const fam = raw.trim().replace(/^"|"$/g, "");
      if (!fam || SYSTEM_FAMS.has(fam) || fam.startsWith("-") || fam.startsWith("ui-")) continue;
      fams.add(fam);
      break; // only the primary family per token
    }
  }
  if (fams.size === 0) return "";
  const parts = [...fams].map((f) => {
    const enc = f.replace(/ /g, "+");
    return SINGLE_WEIGHT.has(f) ? `family=${enc}` : `family=${enc}:wght@400;500;600;700`;
  });
  return `@import url('https://fonts.googleapis.com/css2?${parts.join("&")}&display=swap');\n\n`;
}

const slugs = readdirSync(themesDir)
  .filter((f) => f.endsWith(".css"))
  .map((f) => f.replace(/\.css$/, ""))
  .sort();

const items = [];
for (const slug of slugs) {
  const css = readFileSync(join(themesDir, `${slug}.css`), "utf8");
  const firstComment = css.match(/\/\*\s*(.+?)\s*\*\//)?.[1] ?? slug;
  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: `theme-${slug}`,
    type: "registry:item",
    title: firstComment.split("—")[0].trim(),
    description: `${firstComment} — self-contained: fonts auto-imported, full app-variable bridge (shadcn + sidebar + charts + font/shadow scales). Wrap your app root in class \"theme-${slug}\".`,
    files: [
      {
        path: `registry/themes/${slug}.css`,
        type: "registry:file",
        target: `~/styles/themes/${slug}.css`,
        content: fontImportFor(css) + css + BRIDGE,
      },
    ],
  };
  items.push({ name: item.name, type: item.type, title: item.title, description: item.description });
  writeFileSync(join(outDir, `${slug}.json`), JSON.stringify(item, null, 2));
}

writeFileSync(
  join(outDir, "registry.json"),
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "style-foundry",
      homepage: "https://github.com/xotw/style-foundry",
      items,
    },
    null,
    2,
  ),
);

console.log(`registry: ${slugs.length} theme items -> public/r/`);
