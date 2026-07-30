import { Link, useLocation, useParams } from "@tanstack/react-router";
import { STYLES } from "@/lib/styles-registry";
import { cn } from "@/lib/utils";

/** Fixed style switcher rendered on every page. */
export function StyleSwitcher() {
  const location = useLocation();
  const params = useParams({ strict: false }) as { slug?: string };
  const isGallery = location.pathname.endsWith("/components");
  const current = params.slug;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-3">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/80 p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <Link
          to="/"
          className="rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/60 transition-colors hover:text-white"
        >
          Index
        </Link>
        <span className="h-4 w-px bg-white/15" />
        {STYLES.map((s) => (
          <Link
            key={s.slug}
            to={isGallery ? "/styles/$slug/components" : "/styles/$slug"}
            params={{ slug: s.slug }}
            className={cn(
              "rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-colors",
              current === s.slug ? "bg-white text-black" : "text-white/60 hover:text-white",
            )}
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
