/**
 * Site-wide constants.
 *
 * `SITE_URL` is the single source of truth for the canonical domain. It feeds
 * `metadataBase` in the root layout and is asserted to match the `siteUrl` of
 * `next-sitemap.config.js` by `__tests__/site.test.js`.
 */

/** Canonical origin, without a trailing slash. */
export const SITE_URL = "https://ibrahimadlani.fr";

/** Full name used across metadata and structured titles. */
export const SITE_AUTHOR = "Ibrahim Adlani";

/** Job title shown in the header and in page titles. */
export const SITE_ROLE = "Software Engineer";

/** Default meta description, reused by every page that does not override it. */
export const SITE_DESCRIPTION =
  "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.";
