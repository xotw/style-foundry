export type StyleEntry = {
  slug: string;
  name: string;
  tagline: string;
  fontPairing: string;
  /** Three representative colors, used only for the index swatch. */
  swatch: [string, string, string];
};

export const STYLES: StyleEntry[] = [
  {
    slug: "swiss",
    name: "Swiss",
    tagline: "Strict grid, hairline rules, one red accent. Nothing decorative survives.",
    fontPairing: "Inter Tight / Inter Tight",
    swatch: ["oklch(1 0 0)", "oklch(0.145 0 0)", "oklch(0.55 0.235 27)"],
  },
  {
    slug: "brutalism",
    name: "Brutalism",
    tagline: "Thick black borders, hard offset shadows, shouting primaries.",
    fontPairing: "Archivo Black / Archivo",
    swatch: ["oklch(0.94 0.15 100)", "oklch(0.68 0.24 350)", "oklch(0.58 0.24 258)"],
  },
  {
    slug: "glass",
    name: "Glass",
    tagline: "Frosted panels floating over a deep gradient, edges lit from behind.",
    fontPairing: "Space Grotesk / Inter",
    swatch: ["oklch(0.28 0.12 300)", "oklch(0.78 0.16 195)", "oklch(0.7 0.19 320)"],
  },
  {
    slug: "dark-saas",
    name: "Dark SaaS",
    tagline: "Near-black product surface, tight type, a single electric accent.",
    fontPairing: "Inter / Inter",
    swatch: ["oklch(0.16 0.004 285)", "oklch(0.24 0.006 285)", "oklch(0.62 0.23 274)"],
  },
  {
    slug: "neumorphism",
    name: "Neumorphism",
    tagline: "Soft extruded gray surfaces, double shadows, pill shapes.",
    fontPairing: "Poppins / Poppins",
    swatch: ["oklch(0.93 0.005 260)", "oklch(0.88 0.006 260)", "oklch(0.62 0.14 265)"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    tagline: "Magazine typography, wide margins, hairline rules on paper tones.",
    fontPairing: "Playfair Display / Inter",
    swatch: ["oklch(0.975 0.011 85)", "oklch(0.22 0.014 60)", "oklch(0.45 0.13 30)"],
  },
  {
    slug: "terminal",
    name: "Terminal",
    tagline: "Black screen, phosphor green, monospace everything, scanlines.",
    fontPairing: "IBM Plex Mono / IBM Plex Mono",
    swatch: ["oklch(0.13 0.015 150)", "oklch(0.85 0.22 145)", "oklch(0.8 0.16 195)"],
  },
  {
    slug: "vaporwave",
    name: "Vaporwave",
    tagline: "Purple-to-cyan gradients, chrome lettering, an endless 80s grid.",
    fontPairing: "Orbitron / Space Grotesk",
    swatch: ["oklch(0.2 0.13 300)", "oklch(0.75 0.22 340)", "oklch(0.83 0.16 195)"],
  },
  {
    slug: "claymorphism",
    name: "Claymorphism",
    tagline: "Puffy pastel clay, chunky radii, inner highlights everywhere.",
    fontPairing: "Nunito / Nunito",
    swatch: ["oklch(0.95 0.035 300)", "oklch(0.72 0.16 340)", "oklch(0.78 0.14 210)"],
  },
  {
    slug: "luxury",
    name: "Luxury",
    tagline: "Deep ink, champagne gold hairlines, airy high-contrast serif.",
    fontPairing: "Cormorant Garamond / Jost",
    swatch: ["oklch(0.17 0.012 60)", "oklch(0.82 0.12 88)", "oklch(0.95 0.01 85)"],
  },
  {
    slug: "memphis",
    name: "Memphis",
    tagline: "Postmodern confetti, clashing primaries, hard offset blocks.",
    fontPairing: "Bebas Neue / Archivo",
    swatch: ["oklch(0.68 0.23 15)", "oklch(0.78 0.17 195)", "oklch(0.85 0.18 90)"],
  },
  {
    slug: "aurora",
    name: "Aurora",
    tagline: "Midnight sky with drifting teal and violet light ribbons.",
    fontPairing: "Outfit / Inter",
    swatch: ["oklch(0.16 0.04 260)", "oklch(0.79 0.16 175)", "oklch(0.72 0.17 300)"],
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    tagline: "Red, blue, yellow. Circles and squares. Nothing spare.",
    fontPairing: "Archivo Black / Inter Tight",
    swatch: ["oklch(0.55 0.23 28)", "oklch(0.45 0.2 262)", "oklch(0.83 0.18 88)"],
  },
  {
    slug: "y2k",
    name: "Y2K",
    tagline: "Glossy chrome bevels, bubble buttons, aqua-era optimism.",
    fontPairing: "Orbitron / Poppins",
    swatch: ["oklch(0.9 0.05 230)", "oklch(0.7 0.19 300)", "oklch(0.82 0.14 200)"],
  },
  {
    slug: "minimal-warm",
    name: "Minimal Warm",
    tagline: "Sand and clay neutrals, soft radii, deliberately quiet contrast.",
    fontPairing: "Fraunces / Inter",
    swatch: ["oklch(0.965 0.014 75)", "oklch(0.6 0.11 45)", "oklch(0.26 0.02 55)"],
  },
  {
    slug: "cyberpunk",
    name: "Cyberpunk",
    tagline: "Ink slabs, acid yellow, magenta offsets, neon chromatic edges.",
    fontPairing: "Orbitron / IBM Plex Mono",
    swatch: ["oklch(0.13 0.03 290)", "oklch(0.88 0.2 100)", "oklch(0.7 0.25 340)"],
  },
  {
    slug: "newspaper",
    name: "Newspaper",
    tagline: "Newsprint gray, column rules, screaming serif headlines.",
    fontPairing: "Playfair Display / Libre Baskerville",
    swatch: ["oklch(0.94 0.008 95)", "oklch(0.18 0.005 60)", "oklch(0.45 0.16 25)"],
  },
  {
    slug: "skeuomorphism",
    name: "Skeuomorphism",
    tagline: "Brushed metal, glossy bevels, inset engravings, real shadows.",
    fontPairing: "Nunito / Inter",
    swatch: ["oklch(0.82 0.012 250)", "oklch(0.93 0.008 250)", "oklch(0.55 0.14 245)"],
  },
  {
    slug: "liquid-glass",
    name: "Liquid Glass",
    tagline: "Bright room, refracting panels, specular hairlines, adaptive blur.",
    fontPairing: "Inter Tight / Inter",
    swatch: ["oklch(0.96 0.012 250)", "oklch(0.86 0.11 250)", "oklch(0.62 0.17 255)"],
  },
  {
    slug: "frutiger-aero",
    name: "Frutiger Aero",
    tagline: "Sky blue and vivid green, glossy bubbles, lens-flare optimism.",
    fontPairing: "Open Sans / Open Sans",
    swatch: ["oklch(0.86 0.11 230)", "oklch(0.72 0.19 145)", "oklch(0.99 0.06 95)"],
  },
  {
    slug: "material",
    name: "Material",
    tagline: "Material 3 tonal palettes, filled surfaces, state layers, elevation.",
    fontPairing: "Roboto Flex / Roboto Flex",
    swatch: ["oklch(0.97 0.012 300)", "oklch(0.93 0.03 295)", "oklch(0.5 0.19 295)"],
  },
  {
    slug: "flat",
    name: "Flat",
    tagline: "Metro-era solids, no shadows, sharp edges, authentically digital.",
    fontPairing: "Inter Tight / Open Sans",
    swatch: ["oklch(0.55 0.19 250)", "oklch(0.6 0.19 30)", "oklch(0.65 0.17 165)"],
  },
  {
    slug: "pixel",
    name: "Pixel",
    tagline: "8-bit lo-fi, dithered texture, hard 2px borders, stepped shadows.",
    fontPairing: "Press Start 2P / VT323",
    swatch: ["oklch(0.22 0.05 265)", "oklch(0.78 0.2 145)", "oklch(0.72 0.19 30)"],
  },
  {
    slug: "e-ink",
    name: "E-Ink",
    tagline: "Paper grayscale, serif body, matte contrast, one functional accent.",
    fontPairing: "Literata / Literata",
    swatch: ["oklch(0.94 0.002 90)", "oklch(0.16 0 0)", "oklch(0.55 0.19 30)"],
  },
  {
    slug: "biophilic",
    name: "Biophilic",
    tagline: "Deep greens and earth tones, organic blob radii, soft natural light.",
    fontPairing: "Fraunces / Jost",
    swatch: ["oklch(0.96 0.018 110)", "oklch(0.48 0.11 150)", "oklch(0.66 0.11 65)"],
  },
  {
    slug: "maximalism",
    name: "Maximalism",
    tagline: "Clashing saturation, mixed display fonts, layered pattern everywhere.",
    fontPairing: "Abril Fatface / Outfit",
    swatch: ["oklch(0.55 0.24 330)", "oklch(0.95 0.14 95)", "oklch(0.72 0.2 200)"],
  },
  {
    slug: "figma-dna",
    name: "Figma DNA",
    tagline: "White canvas, five-color primary system, crisp 8px grid, precise.",
    fontPairing: "Inter / Inter",
    swatch: ["oklch(1 0 0)", "oklch(0.55 0.2 275)", "oklch(0.62 0.22 25)"],
  },
  {
    slug: "arc-dna",
    name: "Arc DNA",
    tagline: "Pastel gradients, glass panels, bubbly corners, whimsical light depth.",
    fontPairing: "Outfit / Inter",
    swatch: ["oklch(0.96 0.03 320)", "oklch(0.62 0.19 340)", "oklch(0.68 0.15 240)"],
  },
  {
    slug: "nike-dna",
    name: "Nike DNA",
    tagline: "Black and white, condensed uppercase display, hard edges, volt accent.",
    fontPairing: "Bebas Neue / Archivo",
    swatch: ["oklch(1 0 0)", "oklch(0.1 0 0)", "oklch(0.9 0.22 118)"],
  },
  {
    slug: "braun-dna",
    name: "Braun DNA",
    tagline: "Warm gray functionalism, signal-orange dot, zero ornament, less but better.",
    fontPairing: "Jost / Inter",
    swatch: ["oklch(0.9 0.006 85)", "oklch(0.15 0.004 85)", "oklch(0.65 0.2 45)"],
  },
];

export const STYLE_SLUGS = STYLES.map((s) => s.slug);

export function getStyle(slug: string): StyleEntry | undefined {
  return STYLES.find((s) => s.slug === slug);
}

export function themeClass(slug: string) {
  return `theme-${slug}`;
}
