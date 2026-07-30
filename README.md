# Style Foundry

**121 design systems. One token contract.**

Live: **https://style-foundry-gabbulldo.vercel.app**

Style Foundry is a vault of fully committed UI themes — design aesthetics (swiss, brutalism, pixel, art-deco…) and product/team DNAs (Stripe, GitHub, Windows 95, NBA franchises, European football clubs, Formula 1, cinematic homages…). Every theme is a single CSS token file that skins the same four surfaces, so styles are directly comparable and instantly reusable.

## The four surfaces

Every theme renders the same content — only the styling changes:

| Surface | Route | What it proves |
|---|---|---|
| Landing | `/styles/<slug>` | Marketing page + "The system" usage rules |
| Components | `/styles/<slug>/components` | 46 shadcn components, fully skinned |
| Blocks | `/styles/<slug>/blocks` | Login, dashboard, settings — real product surfaces |
| App in use | `/styles/<slug>/app` | A live interactive issue tracker, mid-use |

Every theme also ships a **light/dark flip variant** (the `Flip` chip, `.alt-mode` class) — hand-tuned where the identity demands it (Dortmund flips to its away kit, terminal flips to paper).

## Install a theme in your project

**One command** (any React + Tailwind project):

```bash
npx shadcn@latest add https://style-foundry-gabbulldo.vercel.app/r/swiss.json
```

**Or register the foundry once** in `components.json`:

```json
{ "registries": { "@style-foundry": "https://style-foundry-gabbulldo.vercel.app/r/{name}.json" } }
```

```bash
npx shadcn add @style-foundry/bloomberg-dna
```

**Then wrap your app** in the theme class:

```html
<div class="theme-swiss">…</div>
```

Each registry item ships the theme tokens plus a bridge that maps shadcn's semantic variables (`--primary`, `--background`, …) to the theme, so stock shadcn/ui components are skinned automatically. Registry index: [`/r/registry.json`](https://style-foundry-gabbulldo.vercel.app/r/registry.json).

## The token contract

Every theme defines the same variables, scoped under `.theme-<slug>`:

```
--bg --surface --surface-2 --fg --fg-muted
--accent --accent-fg --accent-2 --line
--success --warning --danger
--radius --radius-sm --radius-lg --radius-pill
--shadow-1 --shadow-2 --shadow-3 --glow
--border-width --blur-amount
--font-display --font-body --font-mono --font-ui
--tracking-display --label-transform --label-tracking
```

On top of the tokens, each theme file carries a hand-crafted **signature** layer (textures, heading treatments, button physics) and a **depth** layer (tables, focus states, scrollbars, selection — all in character). DNA themes use real values: crawled from the product's live CSS where reachable, official published brand/team palettes otherwise. Contrast is audited programmatically (WCAG pairs, both modes).

## Repository map

```
src/styles/themes/<slug>.css   one theme = one file (tokens + signature + depth + alt-mode)
src/lib/styles-registry.ts     name, tagline, fonts, swatch, hero variant per theme
src/lib/style-rules.ts         per-theme usage rules (use/avoid/spacing/type/motion)
src/lib/style-categories.ts    the 13 catalog categories
src/components/showcase/       shared surfaces (landing, gallery, blocks, app)
scripts/build-registry.mjs     generates public/r/*.json (runs on prebuild)
CATALOG.md                     the full index, one line per theme
```

## Development

```bash
npm install
npm run dev        # local dev
npm run build      # builds registry + site
```

Deploys to Vercel (`vercel deploy --prod`).

---

Built by **Gabriel Hardy-Françon** — with Claude doing the heavy lifting. The site dogfoods its own `dark-saas` theme, naturally.
