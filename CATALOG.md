# Style Foundry — Catalog

18 themes, each a self-contained token file in `src/styles/themes/<slug>.css`, scoped under `.theme-<slug>`.
All showcase components read only from tokens — copy a theme file into any project and skin shadcn with it.
Live: landing at `/styles/<slug>`, full component gallery at `/styles/<slug>/components`.

| Style | Character | BG | Accent | Radius | Shadow | Fonts |
|---|---|---|---|---|---|---|
| **aurora** | midnight sky with drifting teal/violet light ribbons | `oklch(0.16 0.04 260)` | `oklch(0.79 0.16 175)` | 1rem | `0 2px 12px -4px oklch(0 0 0 / 50%)` | Outfit / Inter |
| **bauhaus** | primary red/blue/yellow, geometric blocks, heavy grotesk | `oklch(0.95 0.012 85)` | `oklch(0.55 0.23 28)` | 0rem | `0 0 0 2px var(--fg)` | Archivo Black / Inter Tight |
| **brutalism** | thick black borders, hard offset shadows, saturated primaries | `oklch(0.94 0.15 100)` | `oklch(0.68 0.24 350)` | 0px | `4px 4px 0 0 var(--line)` | Archivo Black / Archivo |
| **claymorphism** | puffy pastel clay blobs, chunky radii, inner highlights | `oklch(0.95 0.035 300)` | `oklch(0.72 0.16 340)` | 2rem | `0 8px 16px -6px oklch(0.6 0.1 300 / 40%)…` | Nunito |
| **cyberpunk** | ink-black slabs, acid yellow + hot magenta, neon edges | `oklch(0.13 0.03 290)` | `oklch(0.88 0.2 100)` | 0.125rem | `0 0 0 1px var(--line)` | Orbitron / IBM Plex Mono |
| **dark-saas** | Dark SaaS — near-black canvas, subtle borders, one electric accent, tight type | `oklch(0.16 0.004 285)` | `oklch(0.62 0.23 274)` | 0.5rem | `0 1px 2px 0 oklch(0 0 0 / 45%)` | Inter |
| **editorial** | magazine: Playfair Display, generous whitespace, thin rules, paper tones | `oklch(0.975 0.011 85)` | `oklch(0.45 0.13 30)` | 0rem | `0 1px 0 0 var(--line)` | Playfair Display / Inter |
| **glass** | dark gradient bg, frosted blurred surfaces, thin light borders, glows | `oklch(0.18 0.05 275)` | `oklch(0.78 0.16 195)` | 1.25rem | `0 4px 20px -6px oklch(0 0 0 / 45%)` | Space Grotesk / Inter |
| **luxury** | deep ink, champagne gold, high-contrast serif, hairline rules | `oklch(0.17 0.012 60)` | `oklch(0.82 0.12 88)` | 0.125rem | `0 1px 0 0 var(--line)` | Cormorant Garamond / Jost |
| **memphis** | 80s postmodern: squiggles, confetti shapes, clashing primaries | `oklch(0.97 0.02 90)` | `oklch(0.68 0.23 15)` | 0.75rem | `3px 3px 0 0 var(--fg)` | Bebas Neue / Archivo |
| **minimal-warm** | Minimal Warm — sand and clay neutrals, soft radii, quiet contrast | `oklch(0.965 0.014 75)` | `oklch(0.6 0.11 45)` | 0.875rem | `0 1px 2px 0 oklch(0.3 0.03 55 / 8%)` | Fraunces / Inter |
| **neumorphism** | soft extruded gray surfaces, double shadows, pill shapes | `oklch(0.93 0.005 260)` | `oklch(0.62 0.14 265)` | 1.5rem | `6px 6px 12px oklch(0.78 0.01 260 / 90%),…` | Poppins |
| **newspaper** | newsprint gray, blackletter-ish serif heads, column rules | `oklch(0.94 0.008 95)` | `oklch(0.18 0.005 60)` | 0rem | `0 1px 0 0 var(--line)` | Playfair Display / Libre Baskerville |
| **skeuomorphism** | brushed metal, linen, glossy bevels, inset engravings | `oklch(0.82 0.012 250)` | `oklch(0.55 0.14 245)` | 0.625rem | `inset 0 1px 0 oklch(1 0 0 / 85%), inset …` | Nunito / Inter |
| **swiss** | strict grid, Inter Tight, black/white + one red accent, zero radius | `oklch(1 0 0)` | `oklch(0.55 0.235 27)` | 0px | `none` | Inter Tight |
| **terminal** | black bg, phosphor green, IBM Plex Mono, ASCII-ish borders | `oklch(0.13 0.015 150)` | `oklch(0.85 0.22 145)` | 0rem | `0 0 0 1px var(--line)` | IBM Plex Mono |
| **vaporwave** | purple/pink/cyan gradients, chrome text, 80s grid horizon | `oklch(0.2 0.13 300)` | `oklch(0.75 0.22 340)` | 0.25rem | `0 0 0 1px var(--line)` | Orbitron / Space Grotesk |
| **y2k** | glossy chrome-blue, bubbly gradients, silver bevels, cyan glow | `oklch(0.9 0.05 230)` | `oklch(0.7 0.19 300)` | 1.25rem | `inset 0 1px 0 oklch(1 0 0 / 90%), 0 2px …` | Orbitron / Poppins |

## Reuse

- **Lovable project**: paste the theme file content into your first prompt — "use these exact design tokens".
- **Direct build**: copy `src/styles/themes/<slug>.css` + wrap your app in `class="theme-<slug>"`; components in `src/components/ui/` are token-driven shadcn, copy as needed.
- **Token contract** (every theme defines): `--bg --surface --surface-2 --fg --fg-muted --accent --accent-fg --accent-2 --line --success --warning --danger --radius(-sm/-lg/-pill) --shadow-1/2/3 --glow --border-width --blur-amount --font-display/body/mono --tracking-display --label-transform --label-tracking`
