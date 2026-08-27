import sitemapConfig from "@/next-sitemap.config";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

describe("site constants", () => {
  it("exposes a canonical origin without a trailing slash", () => {
    expect(SITE_URL).toMatch(/^https:\/\//);
    expect(SITE_URL).not.toMatch(/\/$/);
  });

  it("keeps next-sitemap on the same origin as the metadata", () => {
    expect(sitemapConfig.siteUrl).toBe(SITE_URL);
  });

  it("has a name and a description to build page titles from", () => {
    expect(SITE_AUTHOR).toBeTruthy();
    expect(SITE_DESCRIPTION.length).toBeGreaterThan(50);
  });
});
