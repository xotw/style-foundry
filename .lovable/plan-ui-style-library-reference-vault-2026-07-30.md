# UI Style Library — Reference Vault

A static, extractible library of UI styles. Each style is a self-contained theme (one CSS file of tokens) that skins a shared set of demo components. Four styles to start: Swiss, Brutalism, Glass, Dark SaaS.

## Structure

```text
src/styles/themes/swiss.css        .theme-swiss { --tokens }
src/styles/themes/brutalism.css
src/styles/themes/glass.css
src/styles/themes/dark-saas.css

src/components/showcase/           shared, token-only demo components
  LandingNav / Hero / FeatureCards / StatsBar / Pricing /
  ContactForm / DataTable / SiteFooter
  ComponentGallery (+ section subcomponents)
  StyleSwitcher (fixed, on every page)

src/lib/styles-registry.ts         slug, name, tagline, swatch, font pairing

src/routes/index.tsx               card grid of all styles
src/routes/styles.$slug.tsx        layout: applies .theme-<slug> wrapper + switcher
src/routes/styles.$slug.index.tsx  landing page
src/routes/styles.$slug.components.tsx  component gallery
```

## Token contract (identical variable names in every theme file)

Colors (`--bg`, `--surface`, `--surface-2`, `--fg`, `--fg-muted`, `--accent`, `--accent-fg`, `--border`, `--success`, `--warning`, `--danger`), radii (`--radius`, `--radius-sm/lg/pill`), shadows (`--shadow-sm/md/lg`, `--shadow-offset`), fonts (`--font-display`, `--font-body`, `--font-mono`, `--tracking-tight`), spacing/borders (`--space-unit`, `--border-width`), plus effect hooks (`--backdrop`, `--glow`) that resolve to `none` where unused.

Themes are registered in `src/styles.css` via `@theme inline` so Tailwind classes like `bg-surface`, `text-fg`, `border-border`, `rounded-theme` resolve to whatever the active `.theme-<slug>` scope defines. Components use only those utilities — no hex, no `bg-white`/`text-black`.

## Pages

**Landing (`/styles/<slug>`)** — same content in all four: nav, hero, 3 feature cards, stats bar, 3-tier pricing, contact form, data table, footer.

**Gallery (`/styles/<slug>/components`)** — buttons (variants/sizes/states incl. hover, disabled, loading), input, textarea, select, checkbox, radio, switch, slider, badge, avatar, card, alert, dialog, drawer, dropdown menu, tabs, accordion, tooltip, toast (sonner), skeleton, progress, breadcrumb, pagination, calendar, table, command palette.

**Index (`/`)** — grid of style cards: name, 3-color swatch, font pairing, tagline, links to both routes.

**Switcher** — fixed control on every page; keeps the current sub-route (landing stays landing, gallery stays gallery) when switching style.

## Aesthetic commitments

- **Swiss** — Inter Tight, strict 12-col grid, pure black/white + one red accent, radius 0, no shadows, hairline rules, uppercase micro-labels.
- **Brutalism** — Archivo Black, 3px black borders, hard offset shadows that shift on hover, saturated yellow/pink/blue blocks, radius 0.
- **Glass** — dark gradient backdrop, frosted `backdrop-blur` surfaces, 1px light borders, soft accent glows, large radii.
- **Dark SaaS** — near-black canvas, subtle 1px borders, one electric accent, tight tracking, small radii, restrained motion.

## Technical notes

- Fonts (Inter Tight, Archivo Black, Geist/Inter, Space Grotesk) load via `<link>` in `src/routes/__root.tsx` — never `@import` a remote URL in CSS.
- shadcn `ui/*` primitives are used for behavior only; their default classes are overridden via wrapper components in `showcase/` driven by theme tokens, so no component looks like stock shadcn.
- Sonner `<Toaster />` mounted once in `__root.tsx`, styled per theme.
- Each route gets its own `head()` with a unique title/description/og tags.
- No backend, no auth, static content only.

## Build order

1. Token contract + `styles.css` wiring + 4 theme files + registry + fonts.
2. Showcase landing components + `/styles/$slug` layout, landing route, switcher.
3. Component gallery route with all listed components.
4. Index page; per-theme pass to sharpen each aesthetic and remove any residual default look.
