import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import App from "./App";
import { AboutPage } from "./components/AboutPage";
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

const routeTree = rootRoute.addChildren([homeRoute, paletteRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.DEV ? "/breathethewilde.com" : "/",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
