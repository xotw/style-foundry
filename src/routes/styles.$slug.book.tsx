import { createFileRoute } from "@tanstack/react-router";
import { BrandBook } from "@/components/showcase/BrandBook";
import { getStyle } from "@/lib/styles-registry";

export const Route = createFileRoute("/styles/$slug/book")({
  head: ({ params }) => {
    const style = getStyle(params.slug);
    const title = `${style?.name ?? "Style"} brand book — UI Style Library`;
    const description = `The complete ${style?.name ?? "selected"} design system: palette with live values, full type hierarchy, shadow and radius scales, every control state.`;
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
  component: BookPage,
});

function BookPage() {
  const { slug } = Route.useParams();
  const style = getStyle(slug)!;
  return <BrandBook style={style} />;
}
