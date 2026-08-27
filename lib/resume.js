/**
 * Résumé assets.
 *
 * Two PDFs are shipped so the downloaded document matches the theme the visitor
 * is currently reading the site in.
 */

/** Résumé typeset for light backgrounds. */
export const RESUME_LIGHT = "/resume_ibrahimadlani_L20240925.pdf";

/** Résumé typeset for dark backgrounds. */
export const RESUME_DARK = "/resume_ibrahimadlani_D20240925.pdf";

/**
 * Pick the résumé matching the active theme.
 *
 * Always pass `resolvedTheme` from `next-themes`, never `theme`: the latter can
 * be the literal string `"system"`, which would silently fall through to the
 * light résumé even while the site renders in dark mode.
 *
 * @param {string | undefined} resolvedTheme - `"dark"`, `"light"` or `undefined` before mount.
 * @returns {string} Public path to the matching PDF.
 */
export function resumeHref(resolvedTheme) {
  return resolvedTheme === "dark" ? RESUME_DARK : RESUME_LIGHT;
}
