import { createFileRoute } from "@tanstack/react-router";
import { StyleLanding } from "@/components/showcase/StyleLanding";
import { getStyle } from "@/lib/styles-registry";

export const Route = createFileRoute("/styles/$slug/")({
  head: ({ params }) => {
    const style = getStyle(params.slug);
    const title = `${style?.name ?? "Style"} landing page — UI Style Library`;
    const description =
      style?.tagline ?? "A reference landing page rendered in a single design-token theme.";
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
  component: StyleLandingPage,
});

function StyleLandingPage() {
  const { slug } = Route.useParams();
  const style = getStyle(slug)!;
  return <StyleLanding style={style} />;
}
