import { useEffect, useState } from "react";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { getStyle, STYLE_SLUGS } from "@/lib/styles-registry";

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
    const sync = () => setAlt(localStorage.getItem("sf-alt-mode") === "1");
    window.addEventListener("sf-alt-change", sync);
    return () => window.removeEventListener("sf-alt-change", sync);
  }, []);

  return (
    <div
      className={`theme-${slug} min-h-screen${alt ? " alt-mode" : ""}`}
      data-style={style?.slug}
    >
      <Outlet />
    </div>
  );
}
