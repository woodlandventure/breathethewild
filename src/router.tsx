import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import App from "./App";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { FaqPage } from "./components/FaqPage";
import { NavBar } from "./components/NavBar";
import { PalettePage } from "./components/PalettePage";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const paletteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/palette",
  component: PalettePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FaqPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([homeRoute, paletteRoute, aboutRoute, faqRoute, contactRoute]);

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.DEV ? "/breathethewilde.com" : "/",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
