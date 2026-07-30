import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, ChevronUp, Moon, Search, Sun, Terminal } from "lucide-react";
import { STYLES } from "@/lib/styles-registry";
import { STYLE_CATEGORIES } from "@/lib/style-categories";
import { cn } from "@/lib/utils";

/**
 * Fixed style switcher rendered on every page. 58 themes: compact pill with
 * prev/next cycling plus a searchable, grouped panel — not 58 buttons.
 */
export function StyleSwitcher() {
  const location = useLocation();
  const params = useParams({ strict: false }) as { slug?: string };
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [alt, setAlt] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAlt(localStorage.getItem("sf-alt-mode") === "1");
  }, []);
  const toggleAlt = () => {
    const next = !alt;
    setAlt(next);
    localStorage.setItem("sf-alt-mode", next ? "1" : "0");
    window.dispatchEvent(new Event("sf-alt-change"));
  };
  const panelRef = useRef<HTMLDivElement>(null);

  const subPage = location.pathname.endsWith("/components")
    ? "/styles/$slug/components"
    : location.pathname.endsWith("/blocks")
      ? "/styles/$slug/blocks"
      : location.pathname.endsWith("/app")
        ? "/styles/$slug/app"
        : "/styles/$slug";

  const current = params.slug;
  // Cycle in the exact order of the homepage categories, not registry order.
  const ORDERED = STYLE_CATEGORIES.flatMap((c) =>
    c.slugs
      .map((slug) => STYLES.find((s) => s.slug === slug))
      .filter((s): s is (typeof STYLES)[number] => Boolean(s)),
  );
  const idx = ORDERED.findIndex((s) => s.slug === current);
  const currentStyle = idx >= 0 ? ORDERED[idx] : null;
  const prev = ORDERED[(idx - 1 + ORDERED.length) % ORDERED.length];
  const next = ORDERED[(idx + 1) % ORDERED.length];

  useEffect(() => {
    setOpen(false);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const q = query.trim().toLowerCase();
  const groups = STYLE_CATEGORIES.map((c) => ({
    label: c.label,
    list: ORDERED.filter(
      (s) =>
        c.slugs.includes(s.slug) &&
        (!q || (s.name + s.slug + s.tagline).toLowerCase().includes(q)),
    ),
  }));
  const filteredCount = groups.reduce((n, g) => n + g.list.length, 0);

  const linkCls = (active: boolean) =>
    cn(
      "flex items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-[12px] font-medium transition-colors",
      active ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white",
    );

  return (
    <div ref={panelRef} className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-3">
      {/* Panel */}
      {open && (
        <div className="mb-2 w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-black/90 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
            <Search className="size-3.5 text-white/40" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${STYLES.length} themes…`}
              className="w-full bg-transparent text-[13px] text-white placeholder:text-white/35 focus:outline-none"
            />
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            {groups.map(({ label, list }) =>
              list.length === 0 ? null : (
                <div key={label} className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    {label}
                  </p>
                  {list.map((s) => (
                    <Link
                      key={s.slug}
                      to={subPage}
                      params={{ slug: s.slug }}
                      className={linkCls(s.slug === current)}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="flex -space-x-1">
                          {s.swatch.map((c) => (
                            <span
                              key={c}
                              className="size-3 rounded-full border border-white/25"
                              style={{ background: c }}
                            />
                          ))}
                        </span>
                        {s.name}
                      </span>
                      {s.slug === current && <Check className="size-3.5" />}
                    </Link>
                  ))}
                </div>
              ),
            )}
            {filteredCount === 0 && (
              <p className="px-3 py-6 text-center text-[12px] text-white/40">No theme matches.</p>
            )}
          </div>
        </div>
      )}

      {/* Pill */}
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/80 p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <Link
          to="/"
          className="rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/60 transition-colors hover:text-white"
        >
          Index
        </Link>
        {currentStyle && (
          <>
            <span className="h-4 w-px bg-white/15" />
            <Link
              to={subPage}
              params={{ slug: prev.slug }}
              aria-label={`Previous: ${prev.name}`}
              className="rounded-full p-1.5 text-white/60 transition-colors hover:text-white"
            >
              <ChevronLeft className="size-3.5" />
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-black"
            >
              <span className="flex -space-x-1">
                {currentStyle.swatch.map((c) => (
                  <span
                    key={c}
                    className="size-3 rounded-full border border-black/20"
                    style={{ background: c }}
                  />
                ))}
              </span>
              {currentStyle.name}
              <ChevronUp className={cn("size-3 transition-transform", open && "rotate-180")} />
            </button>
            <Link
              to={subPage}
              params={{ slug: next.slug }}
              aria-label={`Next: ${next.name}`}
              className="rounded-full p-1.5 text-white/60 transition-colors hover:text-white"
            >
              <ChevronRight className="size-3.5" />
            </Link>
            <span className="hidden px-2 font-mono text-[10px] text-white/40 sm:block">
              {idx + 1}/{ORDERED.length}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <button
              onClick={toggleAlt}
              aria-label="Toggle light/dark variant"
              title="Light / dark variant of this theme"
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white/60 transition-colors hover:text-white"
            >
              {alt ? <Sun className="size-3" /> : <Moon className="size-3" />}
              <span className="hidden md:inline">{alt ? "Base" : "Flip"}</span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `npx shadcn@latest add https://style-foundry-gabbulldo.vercel.app/r/${current}.json`,
                );
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
              }}
              title={`npx shadcn@latest add https://style-foundry-gabbulldo.vercel.app/r/${current}.json`}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white/60 transition-colors hover:text-white"
            >
              {copied ? <Check className="size-3 text-emerald-400" /> : <Terminal className="size-3" />}
              <span className="hidden md:inline">{copied ? "Copied!" : "Install"}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
