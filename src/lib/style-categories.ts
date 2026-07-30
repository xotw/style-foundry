/** Ordered homepage grouping. Every theme slug appears in exactly one category. */
export const STYLE_CATEGORIES: { id: string; label: string; blurb: string; slugs: string[] }[] = [
  {
    id: "minimal",
    label: "Minimal & structured",
    blurb: "Type-led, grid-first, nothing decorative survives.",
    slugs: ["swiss", "bauhaus", "flat", "material", "minimal-warm", "e-ink", "editorial", "newspaper", "luxury", "art-deco"],
  },
  {
    id: "depth",
    label: "Depth & materials",
    blurb: "Glass, clay, plastic, nature — surfaces you can almost touch.",
    slugs: ["glass", "liquid-glass", "neumorphism", "claymorphism", "skeuomorphism", "frutiger-aero", "aurora", "dreamcore", "biophilic"],
  },
  {
    id: "retro",
    label: "Retro & expressive",
    blurb: "Loud, nostalgic, rule-breaking on purpose.",
    slugs: ["brutalism", "maximalism", "memphis", "vaporwave", "y2k", "pixel", "heisei-retro", "windows95-dna", "hackernews-dna"],
  },
  {
    id: "technical",
    label: "Dark & technical",
    blurb: "Built for operators: dense, dark, precise.",
    slugs: ["dark-saas", "terminal", "cyberpunk", "hud-scifi"],
  },
  {
    id: "tech-dna",
    label: "Tech & SaaS DNA",
    blurb: "The design languages of iconic software products, from crawled brand values.",
    slugs: ["stripe-dna", "superhuman-dna", "figma-dna", "arc-dna", "github-dna", "apple-dna", "braun-dna", "teenage-engineering-dna", "ableton-dna", "proton-dna", "anthropic-dna", "nasa-dna", "notion-dna", "revolut-dna", "microsoft-dna"],
  },
  {
    id: "social-dna",
    label: "Social & messaging DNA",
    blurb: "Feeds, bubbles and communities — the interfaces everyone knows.",
    slugs: ["slack-dna", "discord-dna", "telegram-dna", "whatsapp-dna", "signal-dna", "facebook-dna", "instagram-dna", "x-dna", "linkedin-dna", "reddit-dna", "pinterest-dna"],
  },
  {
    id: "commerce-dna",
    label: "Commerce & lifestyle DNA",
    blurb: "Marketplaces, retail and consumer brands with a point of view.",
    slugs: ["airbnb-dna", "ikea-dna", "lego-dna", "aesop-dna", "ssense-dna", "headspace-dna", "duolingo-dna", "cash-app-dna", "uber-dna", "amazon-dna", "mcdonalds-dna", "starbucks-dna"],
  },
  {
    id: "media-dna",
    label: "Media & entertainment DNA",
    blurb: "Content-first surfaces where the UI steps back.",
    slugs: ["spotify-dna", "netflix-dna", "bloomberg-dna"],
  },
  {
    id: "sports-dna",
    label: "Sports DNA",
    blurb: "Brands and clubs built on intensity, speed and pride.",
    slugs: ["nike-dna", "adidas-dna", "reebok-dna", "crossfit-dna", "nba-dna", "nfl-dna", "formula1", "redbull-dna"],
  },
  {
    id: "nba-teams",
    label: "NBA teams",
    blurb: "All 30 franchises: Icon-edition nights, Association whites, official colors.",
    slugs: ["chicago-bulls", "boston-celtics", "new-york-knicks", "philadelphia-76ers", "la-lakers", "golden-state-warriors", "miami-heat", "detroit-pistons", "san-antonio-spurs", "brooklyn-nets", "toronto-raptors", "milwaukee-bucks", "cleveland-cavaliers", "indiana-pacers", "atlanta-hawks", "charlotte-hornets", "orlando-magic", "washington-wizards", "denver-nuggets", "minnesota-timberwolves", "okc-thunder", "portland-trail-blazers", "utah-jazz", "dallas-mavericks", "houston-rockets", "memphis-grizzlies", "new-orleans-pelicans", "phoenix-suns", "sacramento-kings", "la-clippers"],
  },
  {
    id: "football-clubs",
    label: "Football clubs",
    blurb: "European giants in their kit colors — crest pride as a design system.",
    slugs: ["barcelona-dna", "real-madrid-dna", "psg", "arsenal", "chelsea", "marseille", "ac-milan", "inter-milan", "roma", "lazio", "juventus", "bayern-munich", "dortmund", "atletico-madrid", "benfica", "porto"],
  },
  {
    id: "gaming-dna",
    label: "Gaming & streaming DNA",
    blurb: "Consoles, stores and live platforms.",
    slugs: ["playstation-dna", "xbox-dna", "nintendo-dna", "steam-dna", "twitch-dna", "youtube-dna", "tiktok-dna"],
  },
  {
    id: "cinematic",
    label: "Cinematic",
    blurb: "Screen worlds everyone recognizes — homage palettes, no props required.",
    slugs: ["millennium-falcon", "stranger-things", "matrix", "dune", "wes-anderson", "severance", "james-bond", "ghibli"],
  },
  {
    id: "nfl-teams",
    label: "NFL teams",
    blurb: "All 32 franchises: stadium-night colors, road whites on the flip.",
    slugs: ["arizona-cardinals", "atlanta-falcons", "baltimore-ravens", "buffalo-bills", "carolina-panthers", "chicago-bears", "cincinnati-bengals", "cleveland-browns", "dallas-cowboys", "denver-broncos", "detroit-lions", "green-bay-packers", "houston-texans", "indianapolis-colts", "jacksonville-jaguars", "kansas-city-chiefs", "las-vegas-raiders", "la-chargers", "la-rams", "miami-dolphins", "minnesota-vikings", "new-england-patriots", "new-orleans-saints", "new-york-giants", "new-york-jets", "philadelphia-eagles", "pittsburgh-steelers", "san-francisco-49ers", "seattle-seahawks", "tampa-bay-buccaneers", "tennessee-titans", "washington-commanders"],
  },
];
