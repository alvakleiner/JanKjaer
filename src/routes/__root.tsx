import { createRootRoute, Outlet } from "@tanstack/react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
})
