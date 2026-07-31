import { useEffect, useState } from "react";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { getStyle, STYLE_SLUGS } from "@/lib/styles-registry";
import { BACKDROP_EVENT, backdropKey, backdropsFor } from "@/lib/theme-backdrops";

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
  const [backdrop, setBackdrop] = useState("");
  const hasBackdrops = backdropsFor(slug).length > 0;

  useEffect(() => {
    setAlt(localStorage.getItem("sf-alt-mode") === "1");
    const sync = () => setAlt(localStorage.getItem("sf-alt-mode") === "1");
    window.addEventListener("sf-alt-change", sync);
    return () => window.removeEventListener("sf-alt-change", sync);
  }, []);

  useEffect(() => {
    if (!hasBackdrops) return setBackdrop("");
    const read = () => setBackdrop(localStorage.getItem(backdropKey(slug)) ?? backdropsFor(slug)[1]?.id ?? "");
    read();
    window.addEventListener(BACKDROP_EVENT, read);
    return () => window.removeEventListener(BACKDROP_EVENT, read);
  }, [slug, hasBackdrops]);

  return (
    <div
      className={`theme-${slug} min-h-screen${alt ? " alt-mode" : ""}${backdrop ? ` ${backdrop}` : ""}`}
      data-style={style?.slug}
    >
      <Outlet />
    </div>
  );
}
