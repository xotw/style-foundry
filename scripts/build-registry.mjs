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
}
`;

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
    description: `${firstComment} — token file scoped under .theme-${slug}; wrap your app in that class.`,
    files: [
      {
        path: `registry/themes/${slug}.css`,
        type: "registry:file",
        target: `~/styles/themes/${slug}.css`,
        content: css + BRIDGE,
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
