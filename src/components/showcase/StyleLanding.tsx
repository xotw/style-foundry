import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Layers, Rocket, ShieldCheck } from "lucide-react";
import { STYLES, type StyleEntry } from "@/lib/styles-registry";
import { SectionTitle, TBadge, TButton, TCard, TInput, TLabel, TTextarea } from "./primitives";

const FEATURES = [
  {
    icon: Layers,
    title: "Composable surfaces",
    body: "Every panel, card and sheet is built from the same three surface tokens, so a theme swap never breaks a layout.",
  },
  {
    icon: Rocket,
    title: "Ship in an afternoon",
    body: "Drop the theme file in, add the scope class, and the whole product inherits the aesthetic instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible by default",
    body: "Contrast pairs, focus rings and hit targets are defined once at the token layer and enforced everywhere.",
  },
];

const STATS = [
  { value: "26", label: "Components" },
  { value: String(STYLES.length), label: "Style systems" },
  { value: "48", label: "Design tokens" },
  { value: "0", label: "Hardcoded hex" },
];

const TIERS = [
  {
    name: "Solo",
    price: "$0",
    note: "for one designer",
    features: ["1 theme file", "Landing kit", "Community support"],
    featured: false,
  },
  {
    name: "Studio",
    price: "$24",
    note: "per seat / month",
    features: [`All ${STYLES.length} themes`, "Full component gallery", "Token export", "Priority support"],
    featured: true,
  },
  {
    name: "Agency",
    price: "$96",
    note: "per seat / month",
    features: ["Everything in Studio", "White-label themes", "Design review calls", "SLA"],
    featured: false,
  },
];

const ROWS = [
  { id: "TK-4021", name: "Marketing site rebuild", owner: "A. Kaufmann", status: "Shipped", value: "$18,400" },
  { id: "TK-4022", name: "Token audit", owner: "R. Müller", status: "In review", value: "$4,200" },
  { id: "TK-4023", name: "Component gallery", owner: "S. Neto", status: "In progress", value: "$9,750" },
  { id: "TK-4024", name: "Dark mode pass", owner: "J. Okafor", status: "Queued", value: "$2,300" },
];

export function StyleLanding({ style }: { style: StyleEntry }) {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b-[length:var(--border-width)] border-b-line bg-bg/85 frost">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-theme-sm bg-accent text-[11px] font-bold text-accent-fg">
              {style.name.slice(0, 1)}
            </span>
            <span className="font-display text-sm font-semibold text-fg">Meridian</span>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Product", "Systems", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="text-sm text-fg-muted transition-colors hover:text-fg">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/styles/$slug/components" params={{ slug: style.slug }}>
              <TButton variant="ghost" size="sm">
                Components
              </TButton>
            </Link>
            <TButton size="sm">Get started</TButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TBadge>{style.name} system</TBadge>
            <h1 className="mt-6 font-display text-5xl leading-[1.03] text-fg sm:text-6xl">
              Design systems that survive contact with production.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-fg-muted">{style.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <TButton size="lg">
                Start building <ArrowRight className="size-4" />
              </TButton>
              <Link to="/styles/$slug/components" params={{ slug: style.slug }}>
                <TButton size="lg" variant="outline">
                  Browse components
                </TButton>
              </Link>
            </div>
            <p className="label-caps mt-8 text-fg-muted">{style.fontPairing}</p>
          </div>
          <div className="lg:col-span-5">
            <TCard className="h-full p-6">
              <div className="flex items-center justify-between">
                <span className="label-caps text-fg-muted">Live tokens</span>
                <TBadge tone="neutral">v2.4</TBadge>
              </div>
              <dl className="mt-6 space-y-3 font-code text-xs">
                {[
                  ["--accent", style.swatch[2]],
                  ["--surface", style.swatch[1]],
                  ["--bg", style.swatch[0]],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-3">
                    <span
                      className="size-5 rounded-theme-sm themed-border"
                      style={{ background: v }}
                    />
                    <dt className="text-fg">{k}</dt>
                    <dd className="ml-auto truncate text-fg-muted">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 space-y-2 border-t-[length:var(--border-width)] border-t-line pt-6">
                <div className="h-2 w-full rounded-theme-pill bg-surface-2" />
                <div className="h-2 w-4/5 rounded-theme-pill bg-surface-2" />
                <div className="h-2 w-2/3 rounded-theme-pill bg-accent" />
              </div>
            </TCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Why teams switch"
          title={`One token contract, ${STYLES.length} completely different products.`}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <TCard key={f.title} className="p-6 transition-transform duration-150 hover:-translate-y-1">
              <f.icon className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-lg text-fg">{f.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{f.body}</p>
            </TCard>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y-[length:var(--border-width)] border-y-line bg-surface-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 text-center">
              <p className="font-display text-4xl text-fg">{s.value}</p>
              <p className="label-caps mt-2 text-fg-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Pricing" title="Three tiers. No surprise line items." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <TCard
              key={t.name}
              className={
                t.featured
                  ? "relative p-7 shadow-theme-2 [border-color:var(--accent)]"
                  : "relative p-7"
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-7">
                  <TBadge>Most picked</TBadge>
                </span>
              )}
              <h3 className="font-display text-lg text-fg">{t.name}</h3>
              <p className="mt-4 font-display text-4xl text-fg">{t.price}</p>
              <p className="mt-1 text-xs text-fg-muted">{t.note}</p>
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-fg-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <TButton className="mt-7 w-full justify-center" variant={t.featured ? "primary" : "outline"}>
                Choose {t.name}
              </TButton>
            </TCard>
          ))}
        </div>
      </section>

      {/* Form + Table */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <TCard className="p-7">
          <SectionTitle eyebrow="Contact" title="Talk to the systems team." />
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <TLabel htmlFor={`${style.slug}-name`}>Name</TLabel>
                <TInput id={`${style.slug}-name`} placeholder="Ada Lovelace" />
              </div>
              <div className="space-y-2">
                <TLabel htmlFor={`${style.slug}-email`}>Email</TLabel>
                <TInput id={`${style.slug}-email`} type="email" placeholder="ada@studio.com" />
              </div>
            </div>
            <div className="space-y-2">
              <TLabel htmlFor={`${style.slug}-msg`}>Message</TLabel>
              <TTextarea id={`${style.slug}-msg`} rows={4} placeholder="What are you building?" />
            </div>
            <TButton type="submit" className="w-full justify-center">
              Send message
            </TButton>
          </form>
        </TCard>

        <TCard className="overflow-hidden">
          <div className="flex items-center justify-between p-6">
            <SectionTitle eyebrow="Projects" title="Active work" />
            <TBadge tone="neutral">Q3</TBadge>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-y-[length:var(--border-width)] border-y-line bg-surface-2">
                {["ID", "Project", "Owner", "Status", "Value"].map((h) => (
                  <th key={h} className="label-caps px-4 py-3 text-fg-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.id}
                  className="border-b-[length:var(--border-width)] border-b-line last:border-b-0 transition-colors hover:bg-surface-2"
                >
                  <td className="px-4 py-3 font-code text-xs text-fg-muted">{r.id}</td>
                  <td className="px-4 py-3 text-fg">{r.name}</td>
                  <td className="px-4 py-3 text-fg-muted">{r.owner}</td>
                  <td className="px-4 py-3">
                    <TBadge tone={r.status === "Shipped" ? "success" : "neutral"}>{r.status}</TBadge>
                  </td>
                  <td className="px-4 py-3 text-right font-code text-xs text-fg">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TCard>
      </section>

      {/* Footer */}
      <footer className="border-t-[length:var(--border-width)] border-t-line bg-surface-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-sm text-fg">Meridian — {style.name}</p>
            <p className="mt-1 text-xs text-fg-muted">Reference implementation. Static content only.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Product", "Systems", "Changelog", "Legal"].map((c) => (
              <a key={c} href="#" className="text-xs text-fg-muted transition-colors hover:text-fg">
                {c}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="h-20" />
    </div>
  );
}
