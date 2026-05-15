import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import App from "./App";
import { PalettePage } from "./components/PalettePage";

const rootRoute = createRootRoute({
  component: Outlet,
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

const routeTree = rootRoute.addChildren([homeRoute, paletteRoute]);

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.DEV ? "/breathethewilde.com" : "/",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
