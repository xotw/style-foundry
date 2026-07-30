# Style Foundry — Catalog

58 themes (28+2 aesthetics, 28 product DNA), one token file each in `src/styles/themes/<slug>.css`, scoped `.theme-<slug>`.
DNA themes carry real crawled values from the source products. Every theme has a unique font identity.
System layer: per-theme design rules (use/avoid/spacing/type/motion) in `src/lib/style-rules.ts`, rendered on each landing.
Live: `/styles/<slug>` (landing + system rules) and `/styles/<slug>/components` (full gallery).

| Style | Character | BG | Accent | Radius | Fonts |
|---|---|---|---|---|---|
| **ableton-dna** | Ableton DNA — flat color blocks, geometric type, zero decoration, Bauhaus pop | `oklch(1.000 0 0)` | `oklch(0.637 0.252 15.4)` | 0px | Questrial |
| **aesop-dna** | Aesop DNA — apothecary editorial: paper cream, humanist serif, quiet sage calm | `oklch(0.995 0.016 102.8)` | `oklch(0.320 0.005 106.7)` | 0px | EB Garamond / Inter |
| **airbnb-dna** | Airbnb DNA — warm white, coral accent, very rounded, soft diffuse shadows | `oklch(0.995 0.003 60)` | `oklch(0.658 0.231 17.1)` | 0.875rem | Plus Jakarta Sans |
| **anthropic-dna** | Anthropic DNA — warm cream, book-like serif display, terracotta accent | `oklch(0.982 0.005 95.1)` | `oklch(0.672 0.131 38.8)` | 0.5rem | Source Serif 4 / Archivo |
| **apple-dna** | Apple DNA — pure white, huge tight display type, monochrome with one blue accent | `oklch(1 0 0)` | `oklch(0.563 0.193 256.2)` | 0.75rem | -apple-system |
| **arc-dna** | Arc DNA — soft pastel gradients, macOS-glass panels, bubbly corners | `oklch(0.989 0.024 99.1)` | `oklch(0.499 0.274 269.3)` | 1.125rem | Varela Round / Inter |
| **art-deco** | Art Deco — black and gold, geometric symmetry, sunburst elegance | `oklch(0.188 0.011 80.5)` | `oklch(0.731 0.115 85.0)` | 0px | Marcellus / Josefin Sans |
| **aurora** | midnight sky with drifting teal/violet light ribbons | `oklch(0.16 0.04 260)` | `oklch(0.79 0.16 175)` | 1rem | Outfit / Inter |
| **bauhaus** | primary red/blue/yellow, geometric blocks, heavy grotesk | `oklch(0.95 0.012 85)` | `oklch(0.55 0.23 28)` | 0rem | Jost |
| **biophilic** | deep greens and earth tones, organic blob radii, soft natural light | `oklch(0.96 0.018 110)` | `oklch(0.48 0.11 150)` | 1.5rem | Fraunces / Jost |
| **bloomberg-dna** | Bloomberg DNA — black finance terminal, amber data type, dense, zero decoration | `oklch(0.09 0 0)` | `oklch(0.78 0.17 65)` | 0rem | VT323 / IBM Plex Mono |
| **braun-dna** | Braun DNA — Dieter Rams functionalism: warm gray, black text, signal-orange dot | `oklch(0.9 0.006 85)` | `oklch(0.756 0.155 73.2)` | 0.125rem | Archivo |
| **brutalism** | thick black borders, hard offset shadows, saturated primaries | `oklch(0.94 0.15 100)` | `oklch(0.68 0.24 350)` | 0px | Archivo Black / Archivo |
| **cash-app-dna** | Cash App DNA — pure black, electric green, heavy condensed type | `oklch(0 0 0)` | `oklch(0.761 0.245 144.3)` | 1rem | Anton / Inter |
| **claymorphism** | puffy pastel clay blobs, chunky radii, inner highlights | `oklch(0.95 0.035 300)` | `oklch(0.72 0.16 340)` | 2rem | Fredoka |
| **cyberpunk** | ink-black slabs, acid yellow + hot magenta, neon edges | `oklch(0.13 0.03 290)` | `oklch(0.88 0.2 100)` | 0.125rem | Chakra Petch |
| **dark-saas** | Dark SaaS — near-black canvas, subtle borders, one electric accent, tight type | `oklch(0.139 0.003 246.3)` | `oklch(0.62 0.23 274)` | 0.5rem | Inter |
| **discord-dna** | Discord DNA — blurple dark, rounded chat surfaces, playful but engineered | `oklch(0.321 0.009 268.4)` | `oklch(0.577 0.209 273.9)` | 0.5rem | Figtree |
| **dreamcore** | hazy pastel gradients, blurred glows, floating ethereal calm | `oklch(0.955 0.018 306.7)` | `oklch(0.708 0.128 305.6)` | 1.5rem | Quicksand |
| **duolingo-dna** | Duolingo DNA — bright green, chunky 3D-pressed buttons, very rounded, cheerful | `oklch(1 0 0)` | `oklch(0.748 0.229 137.6)` | 1rem | Baloo 2 |
| **e-ink** | pure grayscale paper, high contrast, serif body, matte, zero gloss | `oklch(0.94 0.002 90)` | `oklch(0.16 0 0)` | 0.125rem | Literata |
| **editorial** | magazine: Playfair Display, generous whitespace, thin rules, paper tones | `oklch(0.975 0.011 85)` | `oklch(0.45 0.13 30)` | 0rem | Playfair Display / Inter |
| **figma-dna** | Figma DNA — white canvas, five-color primary system, crisp 8px grid | `oklch(1 0 0)` | `oklch(0.670 0.183 249.2)` | 0.375rem | Instrument Sans |
| **flat** | Flat / Metro — saturated solids, zero shadow, sharp geometry, big type | `oklch(0.96 0.004 250)` | `oklch(0.6 0.19 30)` | 0rem | Titillium Web |
| **frutiger-aero** | Frutiger Aero — 2000s: sky blue + vivid green, glossy bubbles, lens flares | `oklch(0.88 0.07 220)` | `oklch(0.72 0.19 145)` | 1rem | Open Sans |
| **github-dna** | GitHub DNA — Primer: familiar dev surfaces, link blue, precise grays, 6px radius | `oklch(1.000 0 0)` | `oklch(0.540 0.191 257.5)` | 0.375rem | Mona Sans |
| **glass** | dark gradient bg, frosted blurred surfaces, thin light borders, glows | `oklch(0.18 0.05 275)` | `oklch(0.78 0.16 195)` | 1.25rem | Space Grotesk / Inter |
| **hackernews-dna** | Hacker News DNA — web-1.0 artifact: beige, Verdana, tables, zero ornament | `oklch(0.971 0.009 106.6)` | `oklch(0.696 0.204 43.5)` | 0px | Verdana |
| **headspace-dna** | Headspace DNA — warm peach pastels, organic blobs, very soft shadows | `oklch(1.000 0 0)` | `oklch(0.478 0.257 263.6)` | 1.5rem | Karla |
| **heisei-retro** | Heisei Retro — 90s Japanese tech catalog: warm beige plastic, red/blue, dense boxes | `oklch(0.923 0.025 89.2)` | `oklch(0.553 0.226 28.0)` | 0.25rem | Zen Kaku Gothic New |
| **hud-scifi** | HUD Sci-Fi — cool dark blue, thin cyan lines, corner brackets, radar data | `oklch(0.170 0.017 252.7)` | `oklch(0.806 0.129 212.2)` | 2px | Rajdhani |
| **ikea-dna** | IKEA DNA — democratic blue and yellow, Skapa functionalism, price-tag boldness | `oklch(1.000 0 0)` | `oklch(0.460 0.140 252.7)` | 0.375rem | Noto Sans |
| **lego-dna** | LEGO DNA — primary brick colors, chunky modular blocks, bold play energy | `oklch(1.000 0 0)` | `oklch(0.543 0.216 28.3)` | 0.5rem | Nunito Sans |
| **liquid-glass** | Specular sheen that reads as refracted light across translucent panels. | `oklch(0.96 0.012 250)` | `oklch(0.62 0.17 255)` | 1.5rem | Geist |
| **luxury** | deep ink, champagne gold, high-contrast serif, hairline rules | `oklch(0.17 0.012 60)` | `oklch(0.82 0.12 88)` | 0.125rem | Cormorant Garamond / Jost |
| **material** | Material Design 3: tonal palette, filled surfaces, elevation | `oklch(0.97 0.012 300)` | `oklch(0.5 0.19 295)` | 1rem | Roboto Flex |
| **maximalism** | clashing saturated colors, mixed display fonts, dense layered patterns | `oklch(0.55 0.24 330)` | `oklch(0.62 0.26 25)` | 1.25rem | Abril Fatface / Outfit |
| **memphis** | 80s postmodern: squiggles, confetti shapes, clashing primaries | `oklch(0.97 0.02 90)` | `oklch(0.68 0.23 15)` | 0.75rem | Bebas Neue / Archivo |
| **minimal-warm** | Minimal Warm — sand and clay neutrals, soft radii, quiet contrast | `oklch(0.965 0.014 75)` | `oklch(0.6 0.11 45)` | 0.875rem | Lora / Inter |
| **nasa-dna** | NASA DNA — 1976 Graphics Standards Manual: worm red, federal grid, Helvetica discipline | `oklch(1.000 0 0)` | `oklch(0.644 0.219 28.2)` | 0px | Public Sans |
| **netflix-dna** | Netflix DNA — cinematic black, signal red, UI recedes behind imagery | `oklch(0.000 0 0)` | `oklch(0.581 0.235 28.0)` | 0.25rem | Albert Sans |
| **neumorphism** | soft extruded gray surfaces, double shadows, pill shapes | `oklch(0.93 0.005 260)` | `oklch(0.62 0.14 265)` | 1.5rem | Poppins |
| **newspaper** | newsprint gray, blackletter-ish serif heads, column rules | `oklch(0.94 0.008 95)` | `oklch(0.18 0.005 60)` | 0rem | Old Standard TT / Libre Baskerville |
| **nike-dna** | Nike DNA — athletic black/white, condensed uppercase display, volt accent | `oklch(1.000 0 0)` | `oklch(0.178 0 0)` | 0.5rem | Oswald / Inter |
| **pixel** | 8-bit lo-fi, dithered textures, hard 2px pixel borders, stepped shadows | `oklch(0.22 0.05 265)` | `oklch(0.78 0.2 145)` | 0rem | Press Start 2P / VT323 |
| **skeuomorphism** | brushed metal, linen, glossy bevels, inset engravings | `oklch(0.82 0.012 250)` | `oklch(0.55 0.14 245)` | 0.625rem | Nunito / Inter |
| **slack-dna** | Slack DNA — aubergine primary, white surfaces, four-color accents, approachable | `oklch(0.99 0.002 300)` | `oklch(0.306 0.108 327.1)` | 0.5rem | Lato |
| **spotify-dna** | Spotify DNA — near-black entertainment surface, vivid green, pills everywhere | `oklch(0.182 0 0)` | `oklch(0.770 0.212 148.7)` | 0.5rem | DM Sans |
| **ssense-dna** | SSENSE DNA — stark fashion e-commerce: black on white, micro type, luxury by subtraction | `oklch(1.000 0 0)` | `oklch(0.000 0 0)` | 0px | Archivo Narrow / Inter |
| **stripe-dna** | Stripe DNA — clean white, indigo/cyan gradient accents, crisp small type, airy depth | `oklch(0.981 0.005 247.9)` | `oklch(0.521 0.268 277.4)` | 0.5rem | Hanken Grotesk |
| **superhuman-dna** | Superhuman DNA — deep violet-tinted dark, refined gradients, glowing accents, keyboard-first | `oklch(0.974 0.030 88.4)` | `oklch(0.286 0.058 9.5)` | 0.75rem | Instrument Serif / Inter |
| **swiss** | strict grid, Inter Tight, black/white + one red accent, zero radius | `oklch(1 0 0)` | `oklch(0.55 0.235 27)` | 0px | Inter Tight |
| **teenage-engineering-dna** | Teenage Engineering DNA — light gray plastic, orange accents, tiny mono uppercase labels | `oklch(0.93 0.002 250)` | `oklch(0.659 0.195 38.3)` | 0px | Space Mono |
| **telegram-dna** | Telegram DNA — paper-light chat, sky blue, round bubbles, native speed | `oklch(1.000 0 0)` | `oklch(0.644 0.162 251.8)` | 0.75rem | Roboto |
| **terminal** | black bg, phosphor green, IBM Plex Mono, ASCII-ish borders | `oklch(0.13 0.015 150)` | `oklch(0.85 0.22 145)` | 0rem | IBM Plex Mono |
| **vaporwave** | purple/pink/cyan gradients, chrome text, 80s grid horizon | `oklch(0.2 0.13 300)` | `oklch(0.75 0.22 340)` | 0.25rem | Orbitron / Space Grotesk |
| **windows95-dna** | Windows 95 DNA — silver bevels, navy title bars, teal desktop, hard pixels | `oklch(0.543 0.093 194.8)` | `oklch(0.271 0.188 264.1)` | 0px | Tahoma |
| **y2k** | glossy chrome-blue, bubbly gradients, silver bevels, cyan glow | `oklch(0.9 0.05 230)` | `oklch(0.7 0.19 300)` | 1.25rem | Audiowide / Poppins |

## Reuse

- **Lovable project**: paste the theme file content into your first prompt — "use these exact design tokens".
- **Direct build**: copy `src/styles/themes/<slug>.css` + wrap your app in `class="theme-<slug>"`; components in `src/components/ui/` are token-driven shadcn.
- **Token contract**: `--bg --surface --surface-2 --fg --fg-muted --accent --accent-fg --accent-2 --line --success --warning --danger --radius(-sm/-lg/-pill) --shadow-1/2/3 --glow --border-width --blur-amount --font-display/body/mono --tracking-display --label-transform --label-tracking`
