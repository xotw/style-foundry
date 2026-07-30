import { createFileRoute } from "@tanstack/react-router";
import { ComponentGallery } from "@/components/showcase/ComponentGallery";
import { getStyle } from "@/lib/styles-registry";

export const Route = createFileRoute("/styles/$slug/components")({
  head: ({ params }) => {
    const style = getStyle(params.slug);
    const title = `${style?.name ?? "Style"} component gallery — UI Style Library`;
    const description = `Buttons, inputs, overlays, navigation and data components rendered entirely in the ${style?.name ?? "selected"} theme tokens.`;
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
  component: GalleryPage,
});

function GalleryPage() {
  const { slug } = Route.useParams();
  const style = getStyle(slug)!;
  return <ComponentGallery style={style} />;
}
