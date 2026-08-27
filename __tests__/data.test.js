import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/socials";

/** Every outbound link must be absolute and served over TLS. */
const expectSecureUrl = (url) => expect(url).toMatch(/^https:\/\/\S+$/);

describe("experiences", () => {
  it("is not empty", () => expect(experiences.length).toBeGreaterThan(0));

  it.each(experiences)("$company is complete", (experience) => {
    expect(experience.date).toBeTruthy();
    expect(experience.role).toBeTruthy();
    expect(experience.location).toBeTruthy();
    expectSecureUrl(experience.companyUrl);
    expect(experience.descriptions.length).toBeGreaterThan(0);
    expect(experience.technologies.length).toBeGreaterThan(0);
  });
});

describe("education", () => {
  it.each(education)("$degree is complete", (item) => {
    expect(item.date).toBeTruthy();
    expect(item.school).toBeTruthy();
    expect(item.location).toBeTruthy();
    expect(item.description).toBeTruthy();
    expectSecureUrl(item.schoolUrl);
    expect(item.topics.length).toBeGreaterThan(0);
  });
});

describe("certifications", () => {
  it.each(certifications)("$title is complete", (certification) => {
    expect(certification.issuer).toBeTruthy();
    expect(certification.date).toBeTruthy();
    expect(certification.label).toBeTruthy();
    expect(typeof certification.year).toBe("number");
    expectSecureUrl(certification.url);
    expect(certification.technologies.length).toBeGreaterThan(0);
    expect(certification.logo.light).toBeDefined();
    expect(certification.logo.dark).toBeDefined();
    expect(certification.logoAlt).toBeTruthy();
  });

  // Both views key their lists on the credential URL.
  it("has no duplicate credential URL", () => {
    const urls = certifications.map((certification) => certification.url);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("is ordered from newest to oldest", () => {
    const years = certifications.map((certification) => certification.year);
    expect([...years].sort((a, b) => b - a)).toEqual(years);
  });
});

describe("projects", () => {
  it.each(projects)("$title is complete", (project) => {
    expect(project.description).toBeTruthy();
    expect(project.imageAlt).toBeTruthy();
    expect(project.imageSrc).toBeDefined();
    expectSecureUrl(project.url);
    expect(project.technologies.length).toBeGreaterThan(0);
  });
});

describe("navigation", () => {
  it("only uses fragment identifiers", () => {
    navItems.forEach((item) => expect(item.href).toMatch(/^#[a-z]+$/));
  });

  it("has no duplicate target", () => {
    const targets = navItems.map((item) => item.href);
    expect(new Set(targets).size).toBe(targets.length);
  });
});

describe("socials", () => {
  it.each(socialLinks)("$title is complete", (link) => {
    expect(link.title).toBeTruthy();
    expect(link.ariaLabel).toBeTruthy();
    expect(link.href).toMatch(/^(https:\/\/|mailto:|tel:)/);
  });

  // mailto: and tel: hand off to another application; a new tab would be left
  // behind, blank.
  it("only opens http(s) links in a new tab", () => {
    socialLinks
      .filter((link) => link.external)
      .forEach((link) => expect(link.href).toMatch(/^https:\/\//));
  });
});
