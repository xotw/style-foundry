import { createFileRoute } from "@tanstack/react-router";
import { BlocksShowcase } from "@/components/showcase/BlocksShowcase";
import { getStyle } from "@/lib/styles-registry";

export const Route = createFileRoute("/styles/$slug/blocks")({
  head: ({ params }) => {
    const style = getStyle(params.slug);
    const title = `${style?.name ?? "Style"} app blocks — UI Style Library`;
    const description = `Login, dashboard and settings blocks rendered entirely in the ${style?.name ?? "selected"} theme tokens.`;
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
  component: BlocksPage,
});

function BlocksPage() {
  const { slug } = Route.useParams();
  const style = getStyle(slug)!;
  return <BlocksShowcase style={style} />;
}
