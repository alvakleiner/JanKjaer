import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { SeoInfo } from "../lib/seo";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    title: SeoInfo.title,
    meta: [
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "description", content: SeoInfo.description },
      { property: "og:site_name", content: SeoInfo.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: SeoInfo.title },
      { property: "og:description", content: SeoInfo.description },
      { property: "og:url", content: SeoInfo.url },
      { property: "og:image", content: SeoInfo.bannerImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SeoInfo.title },
      { name: "twitter:description", content: SeoInfo.description },
      { name: "twitter:image", content: SeoInfo.bannerImage },
    ],
  }),
  component: () => (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <TanStackDevtools
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
      <Footer />
    </>
  ),
});
