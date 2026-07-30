# Style Foundry

Prompt 1 — Kickoff (architecture extractible)

Build a "UI Style Library" — a reference vault of UI styles and components, designed to be reused in other projects.

ARCHITECTURE RULES (critical, this repo will be mined by other projects):

- Each style's design tokens live in its OWN CSS file: src/styles/themes/<slug>.css, defining CSS variables (colors, radii, shadows, fonts, spacing) scoped under a .theme-<slug> class. No inline hex values in components — everything through tokens.

- Shared demo components live in src/components/showcase/ and read only from theme tokens, so any style can skin them.

- Each style gets TWO routes:

  - /styles/<slug> — a landing page: nav, hero, feature cards, stats bar, pricing (3 tiers), form, data table, footer. Same content on every style page, only styling changes.

  - /styles/<slug>/components — a full component gallery in that style: buttons (all variants/sizes/states), inputs, select, checkbox, radio, switch, slider, badge, avatar, card, alert, dialog, drawer, dropdown menu, tabs, accordion, tooltip, toast, skeleton, progress, breadcrumb, pagination, calendar, table, command palette. Every component visibly styled by the theme — no default shadcn look.

- Index page at "/" lists all styles (card grid: name, 3-color swatch, font pairing, tagline) with links to both routes.

- Fixed style-switcher on every page.

Start with 4 styles:

- swiss (strict grid, Inter Tight, black/white + one red accent, zero radius, no shadows)

- brutalism (thick black borders, hard offset shadows, saturated yellow/pink/blue, Archivo Black)

- glass (dark gradient bg, frosted backdrop-blur cards, thin light borders, glows)

- dark-saas (Linear/Vercel: near-black, subtle borders, one electric accent, tight type)

Commit fully to each aesthetic. No backend, no auth, static content only.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ee5b953-df74-4d15-97b8-d07366e9281b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
