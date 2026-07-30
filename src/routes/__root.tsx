import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { StyleSwitcher } from "../components/showcase/StyleSwitcher";
import { Toaster } from "../components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "UI Style Library" },
      { name: "description", content: "A reusable vault of UI styles and components." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "UI Style Library" },
      { name: "twitter:title", content: "UI Style Library" },
      { property: "og:description", content: "A reusable vault of UI styles and components." },
      { name: "twitter:description", content: "A reusable vault of UI styles and components." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bec309f6-265a-4564-92e4-679655a093f9/id-preview-d7c2ea90--0ee5b953-df74-4d15-97b8-d07366e9281b.lovable.app-1785411193518.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bec309f6-265a-4564-92e4-679655a093f9/id-preview-d7c2ea90--0ee5b953-df74-4d15-97b8-d07366e9281b.lovable.app-1785411193518.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&family=Archivo+Black&family=Archivo:wght@400;500;600;700&family=Audiowide&family=Baloo+2:wght@400;600;700&family=Bebas+Neue&family=Chakra+Petch:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Fredoka:wght@400;500;600&family=Geist:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif&family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Josefin+Sans:wght@300;400;600&family=Jost:wght@300;400;500;600&family=Karla:wght@400;600;700&family=Lato:wght@400;700;900&family=Libre+Baskerville:wght@400;700&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600;7..72,700&family=Lora:wght@500;600&family=Marcellus&family=Nunito:wght@400;600;700;800&family=Old+Standard+TT:wght@400;700&family=Open+Sans:wght@400;600;700&family=Orbitron:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Press+Start+2P&family=Quicksand:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,700&family=Source+Serif+4:opsz,wght@8..60,400..700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Titillium+Web:wght@400;600;700&family=VT323&family=Varela+Round&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Mona+Sans:wght@400;500;600;700&family=Figtree:wght@400;600;700&family=Albert+Sans:wght@400;500;700&family=Questrial&family=Public+Sans:wght@400;500;700&family=Archivo+Narrow:wght@500;700&family=EB+Garamond:wght@400;500;600&family=Roboto:wght@400;500;700&family=Noto+Sans:wght@400;600;700&family=Nunito+Sans:wght@400;700;800&family=Barlow:wght@400;500;600;700&family=Saira+Condensed:wght@500;600;700&family=Black+Ops+One&family=Fjalla+One&family=Graduate&family=Exo+2:wght@400;500;600;700&family=Cinzel:wght@400;600;700&family=Mulish:wght@400;600;700&family=Onest:wght@400;500;600;700&family=Sen:wght@400;500;700&family=Schibsted+Grotesk:wght@400;500;700&family=Red+Hat+Display:wght@400;500;700&family=Hind:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&family=Reddit+Sans:wght@400;600;700&family=Big+Shoulders:wght@500;700;800&family=Saira:wght@400;600;700&family=Michroma&family=Urbanist:wght@400;600;700&family=Montserrat:wght@400;600;800&family=Spectral:wght@400;500;600&family=Sora:wght@400;600;700&family=Rubik:wght@400;500;700&family=PT+Sans:wght@400;700&family=Roboto+Condensed:wght@400;700&family=Readex+Pro:wght@400;600;700&family=Comfortaa:wght@400;700&family=Assistant:wght@400;600;700&family=Chivo:wght@400;600;700&family=Encode+Sans:wght@400;600;700&family=Manrope:wght@400;600;800&family=M+PLUS+Rounded+1c:wght@400;700;800&family=Work+Sans:wght@400;500;600;700&family=Prompt:wght@500;600;700&family=Khand:wght@500;600;700&family=Kanit:wght@500;600;700&family=Teko:wght@500;600;700&family=Antonio:wght@500;700&family=Familjen+Grotesk:wght@400;600;700&family=Forum&family=Cabin:wght@400;600;700&family=Passion+One:wght@400;700&family=Staatliches&family=Fugaz+One&family=Barlow+Condensed:wght@500;600;700&family=Amaranth:wght@400;700&family=Ruda:wght@400;600;700&family=Pathway+Gothic+One&family=Grenze:wght@400;600;700&family=Share+Tech+Mono&family=Julius+Sans+One&family=Didact+Gothic&family=IBM+Plex+Sans:wght@400;500;600&family=League+Spartan:wght@500;700&family=Mali:wght@400;600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <StyleSwitcher />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

