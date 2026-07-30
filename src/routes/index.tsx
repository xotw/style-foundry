import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { STYLES } from "@/lib/styles-registry";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "UI Style Library — a reusable vault of design systems";
    const description =
      "Four fully committed UI aesthetics — Swiss, Brutalism, Glass and Dark SaaS — each a self-contained token file skinning the same landing page and component gallery.";
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

function Index() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
          Reference vault
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          UI Style Library
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/60">
          Each style is one CSS token file. The same landing page and the same 26-component gallery
          are rendered through it — copy the theme file and the showcase components into any project.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {STYLES.map((s) => (
            <article
              key={s.slug}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{s.name}</h2>
                  <p className="mt-1 font-mono text-xs text-white/40">/styles/{s.slug}</p>
                </div>
                <div className="flex -space-x-1.5">
                  {s.swatch.map((c) => (
                    <span
                      key={c}
                      className="size-6 rounded-full border border-white/25"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 min-h-12 text-sm text-white/60">{s.tagline}</p>
              <p className="mt-3 text-xs text-white/40">{s.fontPairing}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  to="/styles/$slug/app"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-85"
                >
                  App in use <ArrowUpRight className="size-3.5" />
                </Link>
                <Link
                  to="/styles/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Landing <ArrowUpRight className="size-3.5" />
                </Link>
                <Link
                  to="/styles/$slug/components"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Components <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="h-24" />
      </div>
    </main>
  );
}
