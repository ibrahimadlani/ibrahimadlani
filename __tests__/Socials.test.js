import { render, screen, within } from "@testing-library/react";

import Socials from "@/components/Panel/Socials";
import { socialLinks } from "@/data/socials";

jest.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "light", setTheme: jest.fn() }),
}));

describe("Socials", () => {
  beforeEach(() => render(<Socials />));

  it("shows a tooltip label for every control", () => {
    const expected = [
      ...socialLinks.map((link) => link.title),
      "Toggle theme",
      "Download my résumé",
    ];

    const tooltips = screen.getAllByRole("tooltip", { hidden: true });
    expect(tooltips.map((tooltip) => tooltip.textContent)).toEqual(expected);
  });

  // A native title would stack a second, unstyled bubble over the custom one.
  it("carries no native title attribute", () => {
    const controls = [
      ...screen.getAllByRole("link"),
      ...screen.getAllByRole("button"),
    ];
    controls.forEach((control) => expect(control).not.toHaveAttribute("title"));
  });

  // The tooltip is decorative: the control must still name itself.
  it("keeps an accessible name on every control", () => {
    socialLinks.forEach((link) =>
      expect(
        screen.getByRole("link", { name: link.ariaLabel })
      ).toHaveAttribute("href", link.href)
    );
    expect(
      screen.getByRole("button", { name: "Switch to dark mode" })
    ).toBeInTheDocument();
  });

  it("hides the tooltip from assistive technology", () => {
    screen
      .getAllByRole("tooltip", { hidden: true })
      .forEach((tooltip) => expect(tooltip).toHaveAttribute("aria-hidden", "true"));
  });

  it("reveals the tooltip on hover and on keyboard focus", () => {
    const [tooltip] = screen.getAllByRole("tooltip", { hidden: true });

    expect(tooltip).toHaveClass("opacity-0");
    expect(tooltip).toHaveClass("group-hover/tooltip:opacity-100");
    expect(tooltip).toHaveClass("group-focus-within/tooltip:opacity-100");
  });

  it("does not let the bubble swallow pointer events", () => {
    screen
      .getAllByRole("tooltip", { hidden: true })
      .forEach((tooltip) => expect(tooltip).toHaveClass("pointer-events-none"));
  });
});
