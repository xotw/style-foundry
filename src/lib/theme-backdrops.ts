/** Themes that ship a backdrop gallery (CSS wallpapers behind frosted surfaces). */
export interface Backdrop {
  id: string;
  label: string;
  swatch: string;
}

export const THEME_BACKDROPS: Record<string, Backdrop[]> = {
  "revolut-dna": [
    { id: "", label: "None", swatch: "linear-gradient(160deg,#1a1a1f,#0b0b0f)" },
    { id: "rv-lights", label: "Lights", swatch: "radial-gradient(60% 55% at 50% 50%,#b9b0ff,#2a1f66 60%,#0b0b12)" },
    { id: "rv-glow", label: "Glow", swatch: "linear-gradient(180deg,#3b46f5,#1a1a8c)" },
    { id: "rv-abstract", label: "Abstract", swatch: "linear-gradient(200deg,#6a3fb0,#241040)" },
    { id: "rv-lava", label: "Lava", swatch: "linear-gradient(135deg,#16c8d8,#ff2fb0 55%,#7b2ff7)" },
    { id: "rv-velvet", label: "Velvet", swatch: "linear-gradient(160deg,#3f8f63,#12301f)" },
    { id: "rv-travertine", label: "Travertine", swatch: "linear-gradient(160deg,#f0e6d2,#c9b79a)" },
  ],
};

export const backdropsFor = (slug: string): Backdrop[] => THEME_BACKDROPS[slug] ?? [];
export const BACKDROP_EVENT = "sf-backdrop-change";
export const backdropKey = (slug: string) => `sf-backdrop-${slug}`;
