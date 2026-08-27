import { RESUME_DARK, RESUME_LIGHT, resumeHref } from "@/lib/resume";

describe("resumeHref", () => {
  it("serves the dark résumé in dark mode", () => {
    expect(resumeHref("dark")).toBe(RESUME_DARK);
  });

  it("serves the light résumé in light mode", () => {
    expect(resumeHref("light")).toBe(RESUME_LIGHT);
  });

  // Guards the bug this helper was extracted to fix: passing next-themes'
  // `theme` instead of `resolvedTheme` yields the literal string "system".
  it.each([undefined, "system"])("falls back to light for %p", (value) => {
    expect(resumeHref(value)).toBe(RESUME_LIGHT);
  });
});
