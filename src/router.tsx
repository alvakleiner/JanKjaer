import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { LanguageProvider } from "./context/LanguageContext";

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    Wrap: ({ children }) => <LanguageProvider>{children}</LanguageProvider>,
  });

  return router;
}
