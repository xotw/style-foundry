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

## The catalog

Every theme name links to its live **App in use** demo — the honest test.

### Minimal & structured (10)

Type-led, grid-first, nothing decorative survives.

| Theme | Character | Fonts |
|---|---|---|
| [Swiss](https://style-foundry-gabbulldo.vercel.app/styles/swiss/app) | Strict grid, hairline rules, one red accent. Nothing decorative survives. | Inter Tight / Inter Tight |
| [Bauhaus](https://style-foundry-gabbulldo.vercel.app/styles/bauhaus/app) | Red, blue, yellow. Circles and squares. Nothing spare. | Jost |
| [Flat](https://style-foundry-gabbulldo.vercel.app/styles/flat/app) | Metro-era solids, no shadows, sharp edges, authentically digital. | Titillium Web |
| [Material](https://style-foundry-gabbulldo.vercel.app/styles/material/app) | Material 3 tonal palettes, filled surfaces, state layers, elevation. | Roboto Flex / Roboto Flex |
| [Minimal Warm](https://style-foundry-gabbulldo.vercel.app/styles/minimal-warm/app) | Sand and clay neutrals, soft radii, deliberately quiet contrast. | Lora / Inter |
| [E-Ink](https://style-foundry-gabbulldo.vercel.app/styles/e-ink/app) | Paper grayscale, serif body, matte contrast, one functional accent. | Literata / Literata |
| [Editorial](https://style-foundry-gabbulldo.vercel.app/styles/editorial/app) | Magazine typography, wide margins, hairline rules on paper tones. | Playfair Display / Inter |
| [Newspaper](https://style-foundry-gabbulldo.vercel.app/styles/newspaper/app) | Newsprint gray, column rules, screaming serif headlines. | Old Standard TT / Libre Baskerville |
| [Luxury](https://style-foundry-gabbulldo.vercel.app/styles/luxury/app) | Deep ink, champagne gold hairlines, airy high-contrast serif. | Cormorant Garamond / Jost |
| [Art Deco](https://style-foundry-gabbulldo.vercel.app/styles/art-deco/app) | Black and gold, geometric symmetry, sunburst elegance. | Marcellus / Josefin Sans |

### Depth & materials (9)

Glass, clay, plastic, nature — surfaces you can almost touch.

| Theme | Character | Fonts |
|---|---|---|
| [Glass](https://style-foundry-gabbulldo.vercel.app/styles/glass/app) | Frosted panels floating over a deep gradient, edges lit from behind. | Space Grotesk / Inter |
| [Liquid Glass](https://style-foundry-gabbulldo.vercel.app/styles/liquid-glass/app) | Bright room, refracting panels, specular hairlines, adaptive blur. | Geist |
| [Neumorphism](https://style-foundry-gabbulldo.vercel.app/styles/neumorphism/app) | Soft extruded gray surfaces, double shadows, pill shapes. | Poppins / Poppins |
| [Claymorphism](https://style-foundry-gabbulldo.vercel.app/styles/claymorphism/app) | Puffy pastel clay, chunky radii, inner highlights everywhere. | Fredoka |
| [Skeuomorphism](https://style-foundry-gabbulldo.vercel.app/styles/skeuomorphism/app) | Brushed metal, glossy bevels, inset engravings, real shadows. | Nunito / Inter |
| [Frutiger Aero](https://style-foundry-gabbulldo.vercel.app/styles/frutiger-aero/app) | Sky blue and vivid green, glossy bubbles, lens-flare optimism. | Open Sans / Open Sans |
| [Aurora](https://style-foundry-gabbulldo.vercel.app/styles/aurora/app) | Midnight sky with drifting teal and violet light ribbons. | Outfit / Inter |
| [Dreamcore](https://style-foundry-gabbulldo.vercel.app/styles/dreamcore/app) | Hazy pastel gradients, blurred glows, floating ethereal calm. | Quicksand |
| [Biophilic](https://style-foundry-gabbulldo.vercel.app/styles/biophilic/app) | Deep greens and earth tones, organic blob radii, soft natural light. | Fraunces / Jost |

### Retro & expressive (9)

Loud, nostalgic, rule-breaking on purpose.

| Theme | Character | Fonts |
|---|---|---|
| [Brutalism](https://style-foundry-gabbulldo.vercel.app/styles/brutalism/app) | Thick black borders, hard offset shadows, shouting primaries. | Archivo Black / Archivo |
| [Maximalism](https://style-foundry-gabbulldo.vercel.app/styles/maximalism/app) | Clashing saturation, mixed display fonts, layered pattern everywhere. | Abril Fatface / Outfit |
| [Memphis](https://style-foundry-gabbulldo.vercel.app/styles/memphis/app) | Postmodern confetti, clashing primaries, hard offset blocks. | Bebas Neue / Archivo |
| [Vaporwave](https://style-foundry-gabbulldo.vercel.app/styles/vaporwave/app) | Purple-to-cyan gradients, chrome lettering, an endless 80s grid. | Orbitron / Space Grotesk |
| [Y2K](https://style-foundry-gabbulldo.vercel.app/styles/y2k/app) | Glossy chrome bevels, bubble buttons, aqua-era optimism. | Audiowide / Poppins |
| [Pixel](https://style-foundry-gabbulldo.vercel.app/styles/pixel/app) | 8-bit lo-fi, dithered texture, hard 2px borders, stepped shadows. | Press Start 2P / VT323 |
| [Heisei Retro](https://style-foundry-gabbulldo.vercel.app/styles/heisei-retro/app) | 90s Japanese tech catalog: beige plastic, red/blue, dense boxes. | Zen Kaku Gothic New |
| [Windows 95 DNA](https://style-foundry-gabbulldo.vercel.app/styles/windows95-dna/app) | Silver bevels, navy title bars, teal desktop, hard pixels. | Tahoma (system) |
| [Hacker News DNA](https://style-foundry-gabbulldo.vercel.app/styles/hackernews-dna/app) | Web-1.0 artifact: beige, Verdana, tables, zero ornament. | Verdana (system) |

### Dark & technical (4)

Built for operators: dense, dark, precise.

| Theme | Character | Fonts |
|---|---|---|
| [Dark SaaS](https://style-foundry-gabbulldo.vercel.app/styles/dark-saas/app) | Near-black product surface, tight type, a single electric accent. | Inter / Inter |
| [Terminal](https://style-foundry-gabbulldo.vercel.app/styles/terminal/app) | Black screen, phosphor green, monospace everything, scanlines. | IBM Plex Mono / IBM Plex Mono |
| [Cyberpunk](https://style-foundry-gabbulldo.vercel.app/styles/cyberpunk/app) | Ink slabs, acid yellow, magenta offsets, neon chromatic edges. | Chakra Petch |
| [HUD Sci-Fi](https://style-foundry-gabbulldo.vercel.app/styles/hud-scifi/app) | Cool dark blue, thin cyan lines, corner brackets, radar data. | Rajdhani |

### Tech & SaaS DNA (15)

The design languages of iconic software products, from crawled brand values.

| Theme | Character | Fonts |
|---|---|---|
| [Stripe DNA](https://style-foundry-gabbulldo.vercel.app/styles/stripe-dna/app) | Clean white, indigo-to-cyan gradient accents, crisp type, generous air. | Hanken Grotesk |
| [Superhuman DNA](https://style-foundry-gabbulldo.vercel.app/styles/superhuman-dna/app) | Cream paper, plum serif display, lavender accents, refined calm. | Instrument Serif / Inter |
| [Figma DNA](https://style-foundry-gabbulldo.vercel.app/styles/figma-dna/app) | White canvas, five-color primary system, crisp 8px grid, precise. | Instrument Sans |
| [Arc DNA](https://style-foundry-gabbulldo.vercel.app/styles/arc-dna/app) | Pastel gradients, glass panels, bubbly corners, whimsical light depth. | Varela Round / Inter |
| [GitHub DNA](https://style-foundry-gabbulldo.vercel.app/styles/github-dna/app) | Primer: familiar dev surfaces, link blue, precise grays. | Mona Sans |
| [Apple DNA](https://style-foundry-gabbulldo.vercel.app/styles/apple-dna/app) | Pure white, huge tight display type, monochrome with one blue accent. | SF Pro (system) |
| [Braun DNA](https://style-foundry-gabbulldo.vercel.app/styles/braun-dna/app) | Warm gray functionalism, signal-orange dot, zero ornament, less but better. | Archivo |
| [Teenage Engineering DNA](https://style-foundry-gabbulldo.vercel.app/styles/teenage-engineering-dna/app) | Gray plastic surfaces, orange accents, tiny mono labels, hairline grid. | Space Mono |
| [Ableton DNA](https://style-foundry-gabbulldo.vercel.app/styles/ableton-dna/app) | Flat color blocks, geometric type, zero decoration. | Questrial |
| [Proton DNA](https://style-foundry-gabbulldo.vercel.app/styles/proton-dna/app) | Privacy purple over deep navy ink, Swiss-made trust. | Red Hat Display |
| [Anthropic DNA](https://style-foundry-gabbulldo.vercel.app/styles/anthropic-dna/app) | Cream paper, book-like serif display, terracotta accent, calm spacing. | Source Serif 4 / Archivo |
| [NASA DNA](https://style-foundry-gabbulldo.vercel.app/styles/nasa-dna/app) | 1976 Standards Manual: worm red, federal grid discipline. | Public Sans |
| [Notion DNA](https://style-foundry-gabbulldo.vercel.app/styles/notion-dna/app) | Paper white, ink gray, serif calm. | Spectral / Inter |
| [Revolut DNA](https://style-foundry-gabbulldo.vercel.app/styles/revolut-dna/app) | Midnight fintech, aurora gradients, borderless. | Sora |
| [Microsoft DNA](https://style-foundry-gabbulldo.vercel.app/styles/microsoft-dna/app) | Fluent four-square, segoe clarity. | Segoe UI (system) |

### Social & messaging DNA (11)

Feeds, bubbles and communities — the interfaces everyone knows.

| Theme | Character | Fonts |
|---|---|---|
| [Slack DNA](https://style-foundry-gabbulldo.vercel.app/styles/slack-dna/app) | Aubergine primary, white surfaces, four-color accents, approachable. | Lato |
| [Discord DNA](https://style-foundry-gabbulldo.vercel.app/styles/discord-dna/app) | Blurple dark, rounded chat surfaces, playful but engineered. | Figtree |
| [Telegram DNA](https://style-foundry-gabbulldo.vercel.app/styles/telegram-dna/app) | Paper-light chat, sky blue, round bubbles, native speed. | Roboto |
| [WhatsApp DNA](https://style-foundry-gabbulldo.vercel.app/styles/whatsapp-dna/app) | Chat wallpaper beige, teal headers, bubble green. | Mulish |
| [Signal DNA](https://style-foundry-gabbulldo.vercel.app/styles/signal-dna/app) | Quiet white, trusted blue, bubbles with nothing to hide. | Hind |
| [Facebook DNA](https://style-foundry-gabbulldo.vercel.app/styles/facebook-dna/app) | Feed gray, white cards, the blue, dense social chrome. | Onest |
| [Instagram DNA](https://style-foundry-gabbulldo.vercel.app/styles/instagram-dna/app) | Gallery white, hairline borders, gradient pink to purple. | Sen |
| [X DNA](https://style-foundry-gabbulldo.vercel.app/styles/x-dna/app) | Void black, ghost grays, one blue, ruthless density. | Schibsted Grotesk |
| [LinkedIn DNA](https://style-foundry-gabbulldo.vercel.app/styles/linkedin-dna/app) | Warm paper feed, white cards, professional blue. | Source Sans 3 |
| [Reddit DNA](https://style-foundry-gabbulldo.vercel.app/styles/reddit-dna/app) | Upvote orange, community white, pill-shaped everything. | Reddit Sans |
| [Pinterest DNA](https://style-foundry-gabbulldo.vercel.app/styles/pinterest-dna/app) | Pin red on gallery white, masonry softness. | Urbanist |

### Commerce & lifestyle DNA (12)

Marketplaces, retail and consumer brands with a point of view.

| Theme | Character | Fonts |
|---|---|---|
| [Airbnb DNA](https://style-foundry-gabbulldo.vercel.app/styles/airbnb-dna/app) | Warm white marketplace, coral accent, big radii, soft diffuse shadows. | Plus Jakarta Sans |
| [IKEA DNA](https://style-foundry-gabbulldo.vercel.app/styles/ikea-dna/app) | Democratic blue and yellow, Skapa functionalism. | Noto Sans |
| [LEGO DNA](https://style-foundry-gabbulldo.vercel.app/styles/lego-dna/app) | Primary brick colors, chunky modular blocks, bold play. | Nunito Sans |
| [Aesop DNA](https://style-foundry-gabbulldo.vercel.app/styles/aesop-dna/app) | Apothecary editorial: paper cream, humanist serif, sage calm. | EB Garamond / Inter |
| [SSENSE DNA](https://style-foundry-gabbulldo.vercel.app/styles/ssense-dna/app) | Stark fashion e-commerce: micro type, luxury by subtraction. | Archivo Narrow / Inter |
| [Headspace DNA](https://style-foundry-gabbulldo.vercel.app/styles/headspace-dna/app) | Peach pastels, organic blobs, very soft shadows, breathing whitespace. | Karla |
| [Duolingo DNA](https://style-foundry-gabbulldo.vercel.app/styles/duolingo-dna/app) | Bright green, chunky 3D-pressed buttons, very rounded and cheerful. | Baloo 2 |
| [Cash App DNA](https://style-foundry-gabbulldo.vercel.app/styles/cash-app-dna/app) | Pure black, electric green, heavy condensed type, neon-on-dark energy. | Anton / Inter |
| [Uber DNA](https://style-foundry-gabbulldo.vercel.app/styles/uber-dna/app) | Move black and white, geometric utility. | Rubik |
| [Amazon DNA](https://style-foundry-gabbulldo.vercel.app/styles/amazon-dna/app) | Smile orange, squid ink, everything-store density. | PT Sans |
| [McDonald's DNA](https://style-foundry-gabbulldo.vercel.app/styles/mcdonalds-dna/app) | Golden arches yellow, happy meal red. | Comfortaa / Inter |
| [Starbucks DNA](https://style-foundry-gabbulldo.vercel.app/styles/starbucks-dna/app) | Siren green, cream house warmth. | Assistant |

### Media & entertainment DNA (3)

Content-first surfaces where the UI steps back.

| Theme | Character | Fonts |
|---|---|---|
| [Spotify DNA](https://style-foundry-gabbulldo.vercel.app/styles/spotify-dna/app) | Near-black entertainment shell, vivid green, pill buttons everywhere. | DM Sans |
| [Netflix DNA](https://style-foundry-gabbulldo.vercel.app/styles/netflix-dna/app) | Cinematic black, signal red, UI recedes behind imagery. | Albert Sans |
| [Bloomberg DNA](https://style-foundry-gabbulldo.vercel.app/styles/bloomberg-dna/app) | Black terminal, amber data type, dense tables, zero decoration. | VT323 / IBM Plex Mono |

### Sports DNA (8)

Brands and clubs built on intensity, speed and pride.

| Theme | Character | Fonts |
|---|---|---|
| [Nike DNA](https://style-foundry-gabbulldo.vercel.app/styles/nike-dna/app) | Black and white, condensed uppercase display, hard edges, volt accent. | Oswald / Inter |
| [adidas DNA](https://style-foundry-gabbulldo.vercel.app/styles/adidas-dna/app) | Stark black on white, squared everything, three stripes discipline. | Barlow |
| [Reebok DNA](https://style-foundry-gabbulldo.vercel.app/styles/reebok-dna/app) | Vector red and blue on stark white, condensed speed. | Saira Condensed / Inter |
| [CrossFit DNA](https://style-foundry-gabbulldo.vercel.app/styles/crossfit-dna/app) | Forged dark steel, red intensity, stencil grit. | Black Ops One / Inter |
| [NBA DNA](https://style-foundry-gabbulldo.vercel.app/styles/nba-dna/app) | League blue and red on white, gold trophy accents. | Fjalla One / Inter |
| [NFL DNA](https://style-foundry-gabbulldo.vercel.app/styles/nfl-dna/app) | Shield navy, gridiron red, varsity slab type. | Graduate / Inter |
| [Formula 1](https://style-foundry-gabbulldo.vercel.app/styles/formula1/app) | Race red on carbon black, apex speed. | Michroma / Inter |
| [Red Bull DNA](https://style-foundry-gabbulldo.vercel.app/styles/redbull-dna/app) | Energy red and yellow over racing navy. | Chivo |

### NBA teams (9)

Nine iconic franchises, official colors, jumbotron energy.

| Theme | Character | Fonts |
|---|---|---|
| [Chicago Bulls](https://style-foundry-gabbulldo.vercel.app/styles/chicago-bulls/app) | Bulls red and black, nineties swagger. | Big Shoulders / Inter |
| [Boston Celtics](https://style-foundry-gabbulldo.vercel.app/styles/boston-celtics/app) | Parquet green and champion gold. | Big Shoulders / Inter |
| [New York Knicks](https://style-foundry-gabbulldo.vercel.app/styles/new-york-knicks/app) | Garden blue and orange, MSG lights. | Big Shoulders / Inter |
| [Philadelphia 76ers](https://style-foundry-gabbulldo.vercel.app/styles/philadelphia-76ers/app) | Liberty blue and red, trust the process. | Big Shoulders / Inter |
| [LA Lakers](https://style-foundry-gabbulldo.vercel.app/styles/la-lakers/app) | Showtime purple and gold. | Big Shoulders / Inter |
| [Golden State Warriors](https://style-foundry-gabbulldo.vercel.app/styles/golden-state-warriors/app) | Bay bridge blue and gold. | Big Shoulders / Inter |
| [Miami Heat](https://style-foundry-gabbulldo.vercel.app/styles/miami-heat/app) | Heat culture black, vice red and flame. | Big Shoulders / Inter |
| [Detroit Pistons](https://style-foundry-gabbulldo.vercel.app/styles/detroit-pistons/app) | Motor city red, white and blue. | Big Shoulders / Inter |
| [San Antonio Spurs](https://style-foundry-gabbulldo.vercel.app/styles/san-antonio-spurs/app) | Silver and black fundamentals. | Big Shoulders / Inter |

### Football clubs (16)

European giants in their kit colors — crest pride as a design system.

| Theme | Character | Fonts |
|---|---|---|
| [FC Barcelona DNA](https://style-foundry-gabbulldo.vercel.app/styles/barcelona-dna/app) | Blaugrana night navy, garnet and gold. | Exo 2 |
| [Real Madrid DNA](https://style-foundry-gabbulldo.vercel.app/styles/real-madrid-dna/app) | Royal white, championship gold, regal navy restraint. | Cinzel / Inter |
| [PSG](https://style-foundry-gabbulldo.vercel.app/styles/psg/app) | Parc des Princes navy, hechter red stripe. | Prompt / Inter |
| [Arsenal](https://style-foundry-gabbulldo.vercel.app/styles/arsenal/app) | Cannon red, north london navy and gold. | Khand / Inter |
| [Chelsea](https://style-foundry-gabbulldo.vercel.app/styles/chelsea/app) | Royal blue pride of london. | Kanit / Inter |
| [Olympique de Marseille](https://style-foundry-gabbulldo.vercel.app/styles/marseille/app) | Droit au but sky blue and gold. | Teko / Inter |
| [AC Milan](https://style-foundry-gabbulldo.vercel.app/styles/ac-milan/app) | Rossoneri red and black stripes. | Antonio / Inter |
| [Inter Milan](https://style-foundry-gabbulldo.vercel.app/styles/inter-milan/app) | Nerazzurri blue and black night. | Familjen Grotesk |
| [AS Roma](https://style-foundry-gabbulldo.vercel.app/styles/roma/app) | Giallorossi garnet and imperial gold. | Forum / Inter |
| [Lazio](https://style-foundry-gabbulldo.vercel.app/styles/lazio/app) | Biancocelesti sky blue and eagle gold. | Cabin |
| [Juventus](https://style-foundry-gabbulldo.vercel.app/styles/juventus/app) | Bianconeri black and white stripes. | Passion One / Inter |
| [Bayern Munich](https://style-foundry-gabbulldo.vercel.app/styles/bayern-munich/app) | Mia san mia red and bavarian blue. | Staatliches / Inter |
| [Borussia Dortmund](https://style-foundry-gabbulldo.vercel.app/styles/dortmund/app) | The yellow wall on black. | Fugaz One / Inter |
| [Atlético Madrid](https://style-foundry-gabbulldo.vercel.app/styles/atletico-madrid/app) | Rojiblanco stripes, colchonero navy. | Barlow Condensed / Inter |
| [Benfica](https://style-foundry-gabbulldo.vercel.app/styles/benfica/app) | Águias red over lisbon white. | Amaranth / Inter |
| [FC Porto](https://style-foundry-gabbulldo.vercel.app/styles/porto/app) | Dragões blue and gold. | Ruda / Inter |

### Gaming & streaming DNA (7)

Consoles, stores and live platforms.

| Theme | Character | Fonts |
|---|---|---|
| [PlayStation DNA](https://style-foundry-gabbulldo.vercel.app/styles/playstation-dna/app) | Console blue, iconic shapes, studio white. | Encode Sans |
| [Xbox DNA](https://style-foundry-gabbulldo.vercel.app/styles/xbox-dna/app) | Power green on carbon dark. | Manrope |
| [Nintendo DNA](https://style-foundry-gabbulldo.vercel.app/styles/nintendo-dna/app) | Joy red on toy white, rounded delight. | M PLUS Rounded 1c |
| [Steam DNA](https://style-foundry-gabbulldo.vercel.app/styles/steam-dna/app) | Midnight library blue, glowing shelves. | Work Sans |
| [Twitch DNA](https://style-foundry-gabbulldo.vercel.app/styles/twitch-dna/app) | Glitch purple dark, live energy. | Readex Pro |
| [YouTube DNA](https://style-foundry-gabbulldo.vercel.app/styles/youtube-dna/app) | Play red on white, thumbnail-first. | Roboto Condensed / Inter |
| [TikTok DNA](https://style-foundry-gabbulldo.vercel.app/styles/tiktok-dna/app) | Void black, glitch cyan and pink, vertical energy. | Montserrat |

### Cinematic (8)

Screen worlds everyone recognizes — homage palettes, no props required.

| Theme | Character | Fonts |
|---|---|---|
| [Star Wars](https://style-foundry-gabbulldo.vercel.app/styles/star-wars/app) | A galaxy far away: space black, crawl yellow, saber glow. | Pathway Gothic One / Inter |
| [Stranger Things](https://style-foundry-gabbulldo.vercel.app/styles/stranger-things/app) | Upside-down night, neon red serif glow. | Grenze / Inter |
| [The Matrix](https://style-foundry-gabbulldo.vercel.app/styles/matrix/app) | Digital rain green on void. | Share Tech Mono |
| [Dune](https://style-foundry-gabbulldo.vercel.app/styles/dune/app) | Spice sand, monumental thin display, desert silence. | Julius Sans One / Inter |
| [Wes Anderson](https://style-foundry-gabbulldo.vercel.app/styles/wes-anderson/app) | Symmetrical pastel worlds, precious detail. | Didact Gothic |
| [Severance](https://style-foundry-gabbulldo.vercel.app/styles/severance/app) | Lumon terminal teal, pale cyan data, sterile calm. | IBM Plex Sans |
| [James Bond](https://style-foundry-gabbulldo.vercel.app/styles/james-bond/app) | Tuxedo black and white, gunbarrel gold. | League Spartan / Inter |
| [Ghibli](https://style-foundry-gabbulldo.vercel.app/styles/ghibli/app) | Watercolor meadows, warm paper skies, gentle wonder. | Mali |

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

Built by **Gab** ([@xotw](https://github.com/xotw)) — the vision, the art direction and the merciless QA — with Claude on the tools. The site dogfoods its own `dark-saas` theme, naturally.
