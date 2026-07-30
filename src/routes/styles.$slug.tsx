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

  return (
    <div className={`theme-${slug} min-h-screen`} data-style={style?.slug}>
      <Outlet />
    </div>
  );
}
