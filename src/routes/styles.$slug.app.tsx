import { createFileRoute } from "@tanstack/react-router";
import { AppShowcase } from "@/components/showcase/AppShowcase";
import { getStyle } from "@/lib/styles-registry";

export const Route = createFileRoute("/styles/$slug/app")({
  head: ({ params }) => {
    const style = getStyle(params.slug);
    const title = `${style?.name ?? "Style"} — app in use — UI Style Library`;
    const description = `A realistic product screen (issue tracker mid-use) rendered entirely in the ${style?.name ?? "selected"} theme tokens.`;
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
  component: AppPage,
});

function AppPage() {
  const { slug } = Route.useParams();
  const style = getStyle(slug)!;
  return <AppShowcase style={style} />;
}
