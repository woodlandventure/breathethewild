import { createBrowserHistory, parseHref } from "@tanstack/history";

const routeQueryParam = "route";

const normalizeBasePathname = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${withLeadingSlash.replace(/\/+$/, "")}/`;
};

const normalizeInternalPathname = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};

const browserBasePathname =
  typeof window === "undefined"
    ? "/"
    : normalizeBasePathname(new URL(import.meta.env.BASE_URL, window.location.href).pathname);

const getInternalPathnameFromBrowserPathname = (pathname: string) => {
  if (pathname === browserBasePathname) {
    return "/";
  }

  if (browserBasePathname !== "/" && pathname.startsWith(browserBasePathname)) {
    return normalizeInternalPathname(pathname.slice(browserBasePathname.length - 1));
  }

  return normalizeInternalPathname(pathname);
};

export const queryParamHistory = createBrowserHistory({
  parseLocation: () => {
    const searchParams = new URLSearchParams(window.location.search);
    const routePathname = searchParams.get(routeQueryParam);
    searchParams.delete(routeQueryParam);

    const internalPathname = routePathname
      ? normalizeInternalPathname(routePathname)
      : getInternalPathnameFromBrowserPathname(window.location.pathname);
    const internalSearch = searchParams.toString();
    const internalHref = `${internalPathname}${internalSearch ? `?${internalSearch}` : ""}${window.location.hash}`;

    return parseHref(internalHref, window.history.state);
  },
  createHref: (href) => {
    const url = new URL(href, window.location.origin);
    const searchParams = new URLSearchParams(url.search);
    const internalPathname = normalizeInternalPathname(url.pathname);

    if (internalPathname === "/") {
      searchParams.delete(routeQueryParam);
    } else {
      searchParams.set(routeQueryParam, internalPathname);
    }

    const externalSearch = searchParams.toString();
    return `${browserBasePathname}${externalSearch ? `?${externalSearch}` : ""}${url.hash}`;
  },
});
