import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound, Outlet } from "@tanstack/react-router";
import { ArrowLeft, Check, Moon, Sun, Terminal } from "lucide-react";
import { getStyle, STYLE_SLUGS } from "@/lib/styles-registry";

/** One-click theme install: copies the shadcn CLI command for this theme. */
function InstallChip({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const command = `npx shadcn@latest add https://style-foundry-gabbulldo.vercel.app/r/${slug}.json`;
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      title={command}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors hover:text-white"
    >
      {copied ? (
        <>
          <Check className="size-3 text-emerald-400" /> Copied!
        </>
      ) : (
        <>
          <Terminal className="size-3" /> Install
        </>
      )}
    </button>
  );
}

export const Route = createFileRoute("/styles/$slug")({
  beforeLoad: ({ params }) => {
    if (!STYLE_SLUGS.includes(params.slug)) throw notFound();
  },
  component: StyleLayout,
});

function StyleLayout() {
  const { slug } = Route.useParams();
  const style = getStyle(slug);
  const [alt, setAlt] = useState(false);

  useEffect(() => {
    setAlt(localStorage.getItem("sf-alt-mode") === "1");
  }, []);
  const toggle = () => {
    const next = !alt;
    setAlt(next);
    localStorage.setItem("sf-alt-mode", next ? "1" : "0");
  };

  return (
    <div
      className={`theme-${slug} min-h-screen${alt ? " alt-mode" : ""}`}
      data-style={style?.slug}
    >
      {/* Always-visible way home, styled like the switcher shell */}
      <Link
        to="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors hover:text-white"
      >
        <ArrowLeft className="size-3" /> Foundry
      </Link>
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
        <button
          onClick={toggle}
          aria-label="Toggle light/dark variant"
          title="Light / dark variant of this theme"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors hover:text-white"
        >
          {alt ? <Sun className="size-3" /> : <Moon className="size-3" />}
          {alt ? "Base" : "Flip"}
        </button>
        <InstallChip slug={slug} />
      </div>
      <Outlet />
    </div>
  );
}
