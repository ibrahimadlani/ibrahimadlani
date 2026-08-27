/**
 * Runs as part of `npm run build` (see the `postbuild` script) and writes
 * `public/sitemap.xml`, `public/sitemap-0.xml` and `public/robots.txt`.
 *
 * `siteUrl` must stay in sync with `SITE_URL` in `lib/site.js`, which feeds
 * `metadataBase`; `__tests__/site.test.js` asserts that it does.
 *
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: "https://ibrahimadlani.fr",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/admin", "/dashboard"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard"],
      },
    ],
  },
};
