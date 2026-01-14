/**
 * Checks whether the given pathname corresponds to the home (root) route.
 * Supports optional locale-based routing (e.g. "/", "/es", "/en").
 *
 * @param pathname - Current pathname from the router (e.g. "/", "/es", "/en/about")
 * @param locale - Optional active locale (e.g. "es", "en")
 * @returns `true` if the pathname represents the home route, otherwise `false`
 */
export function isHomeRoute(pathname: string, locale?: string) {
  if (!locale) return pathname === "/";
  return pathname === `/${locale}`;
}

/**
 * Checks whether the given pathname corresponds to the current route.
 * Supports optional locale-based routing (e.g. "/", "/es", "/en").
 *
 * @param pathname - Current pathname from the router (e.g. "/", "/es", "/en/about")
 * @param routesPath - route path from the router (e.g. "/", "/es", "/en/about")
 * @param locale - Optional active locale (e.g. "es", "en")
 * @returns `true` if the pathname represents the home route, otherwise `false`
 */
export function isCurrentRoute(
  pathname: string,
  routesPath: string,
  locale?: string
) {
  if (!locale) return `${pathname}` === `${routesPath}`;
  return `${pathname}` === `/${locale}${routesPath}`;
}
