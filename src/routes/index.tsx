import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Copy, Github, Star } from "lucide-react";
import { STYLES } from "@/lib/styles-registry";

const GITHUB_URL = "https://github.com/xotw/style-foundry";
const SITE_URL = "https://style-foundry-gabbulldo.vercel.app";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Style Foundry — 58 design systems, one token contract";
    const description =
      "58 fully committed UI themes — aesthetics and product DNAs — each a single CSS token file skinning the same landing page, 46-component gallery, app blocks and a live app demo. Install any theme with the shadcn CLI.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Index,
});

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="group flex w-full items-center justify-between gap-3 rounded-theme bg-surface-2 px-4 py-3 text-left font-code text-[13px] text-fg themed-border transition-colors hover:border-[color:var(--accent)]"
    >
      <span className="truncate">{command}</span>
      {copied ? (
        <Check className="size-4 shrink-0 text-success" />
      ) : (
        <Copy className="size-4 shrink-0 text-fg-muted group-hover:text-fg" />
      )}
    </button>
  );
}

const DNA_COUNT = STYLES.filter((s) => s.slug.endsWith("-dna")).length;

function Index() {
  return (
    <main className="theme-dark-saas min-h-screen bg-bg text-fg">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b-[length:var(--border-width)] border-b-line bg-bg/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-sm font-semibold">Style Foundry</span>
          <div className="flex items-center gap-2">
            <a
              href="#themes"
              className="hidden rounded-theme-sm px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg sm:block"
            >
              Themes
            </a>
            <a
              href="#install"
              className="hidden rounded-theme-sm px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg sm:block"
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-theme bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              <Star className="size-3.5" /> Star on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14">
        <p className="label-caps text-fg-muted">Open design-system vault</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.04] sm:text-6xl">
          {STYLES.length} design systems. One token contract.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-fg-muted">
          Every theme is a single CSS token file — {STYLES.length - DNA_COUNT} committed aesthetics
          and {DNA_COUNT} product DNAs built from crawled brand values. Each one skins the same four
          surfaces: a landing page, a 46-component gallery, app blocks, and a live interactive app.
          Swap the file, the whole product changes.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#themes"
            className="inline-flex items-center gap-2 rounded-theme bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            Browse the themes <ArrowRight className="size-4" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-theme px-5 py-2.5 text-sm font-medium text-fg themed-border transition-colors hover:bg-surface"
          >
            <Github className="size-4" /> xotw/style-foundry
          </a>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="border-y-[length:var(--border-width)] border-y-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-3">
          <div>
            <p className="label-caps text-accent">01 — Install a theme</p>
            <p className="mt-3 text-sm text-fg-muted">
              The shadcn CLI pulls any theme straight from this site — tokens plus the shadcn
              variable bridge, into any React + Tailwind project.
            </p>
            <div className="mt-4">
              <CopyCommand command={`npx shadcn@latest add ${SITE_URL}/r/swiss.json`} />
            </div>
          </div>
          <div>
            <p className="label-caps text-accent">02 — Or register the foundry</p>
            <p className="mt-3 text-sm text-fg-muted">
              Add the registry once to components.json, then install themes by name.
            </p>
            <div className="mt-4 space-y-2">
              <CopyCommand command={`"@style-foundry": "${SITE_URL}/r/{name}.json"`} />
              <CopyCommand command="npx shadcn add @style-foundry/bloomberg-dna" />
            </div>
          </div>
          <div>
            <p className="label-caps text-accent">03 — Wrap and ship</p>
            <p className="mt-3 text-sm text-fg-muted">
              Scope your app in the theme class. Every shadcn component and every token-driven
              surface inherits the aesthetic.
            </p>
            <div className="mt-4">
              <CopyCommand command={'<div className="theme-swiss">…</div>'} />
            </div>
          </div>
        </div>
      </section>

      {/* Theme grid */}
      <section id="themes" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label-caps text-fg-muted">The vault</p>
            <h2 className="mt-2 font-display text-3xl">
              {STYLES.length} themes, four surfaces each.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs text-fg-muted sm:block">
            App in use is the honest test — the same issue tracker, mid-use, in every identity.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {STYLES.map((s) => (
            <article
              key={s.slug}
              className="group rounded-theme-lg bg-surface p-6 themed-border transition-colors hover:border-[color:var(--accent)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{s.name}</h3>
                  <p className="mt-1 font-code text-xs text-fg-muted">/styles/{s.slug}</p>
                </div>
                <div className="flex -space-x-1.5">
                  {s.swatch.map((c) => (
                    <span
                      key={c}
                      className="size-6 rounded-full border border-line"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 min-h-12 text-sm text-fg-muted">{s.tagline}</p>
              <p className="mt-3 text-xs text-fg-muted/70">{s.fontPairing}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  to="/styles/$slug/app"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-theme bg-accent px-3.5 py-2 text-xs font-semibold text-accent-fg transition-opacity hover:opacity-90"
                >
                  App in use <ArrowUpRight className="size-3.5" />
                </Link>
                <Link
                  to="/styles/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-theme px-3.5 py-2 text-xs font-semibold text-fg-muted themed-border transition-colors hover:text-fg"
                >
                  Landing
                </Link>
                <Link
                  to="/styles/$slug/components"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-theme px-3.5 py-2 text-xs font-semibold text-fg-muted themed-border transition-colors hover:text-fg"
                >
                  Components
                </Link>
                <Link
                  to="/styles/$slug/blocks"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-theme px-3.5 py-2 text-xs font-semibold text-fg-muted themed-border transition-colors hover:text-fg"
                >
                  Blocks
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-[length:var(--border-width)] border-t-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold">Style Foundry</p>
            <p className="mt-3 max-w-[26ch] text-xs leading-relaxed text-fg-muted">
              A vault of {STYLES.length} committed design systems on one token contract. Built to be
              stolen from.
            </p>
          </div>
          <div>
            <p className="label-caps text-fg-muted">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#themes" className="text-fg-muted transition-colors hover:text-fg">
                  All themes
                </a>
              </li>
              <li>
                <Link
                  to="/styles/$slug/app"
                  params={{ slug: "swiss" }}
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  App demo
                </Link>
              </li>
              <li>
                <Link
                  to="/styles/$slug/components"
                  params={{ slug: "swiss" }}
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  Component gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label-caps text-fg-muted">Use it</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#install" className="text-fg-muted transition-colors hover:text-fg">
                  Install via shadcn CLI
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_URL}/r/registry.json`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  Registry index
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/CATALOG.md`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  Token catalog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label-caps text-fg-muted">Source</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
                >
                  <Github className="size-3.5" /> xotw/style-foundry
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
                >
                  <Star className="size-3.5" /> Star the repo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[length:var(--border-width)] border-t-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-fg-muted">
            <span>Built by Bulldozer — this page runs on the dark-saas theme, naturally.</span>
            <span className="font-code">{STYLES.length} themes · 1 token contract</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
