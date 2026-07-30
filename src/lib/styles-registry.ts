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
];

export const STYLE_SLUGS = STYLES.map((s) => s.slug);

export function getStyle(slug: string): StyleEntry | undefined {
  return STYLES.find((s) => s.slug === slug);
}

export function themeClass(slug: string) {
  return `theme-${slug}`;
}
