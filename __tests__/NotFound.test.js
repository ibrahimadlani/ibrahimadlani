import { render, screen } from "@testing-library/react";

import NotFound, { metadata } from "@/app/not-found";

describe("NotFound", () => {
  it("states the error and links back home", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "404" })
    ).toBeInTheDocument();

    // The label used to read "View Full Résumé (opens in a new tab)".
    const link = screen.getByRole("link", { name: "Go back to the homepage" });
    expect(link).toHaveAttribute("href", "/");
    expect(link).not.toHaveAttribute("target");
  });

  it("is excluded from search engines", () => {
    expect(metadata.robots.index).toBe(false);
  });
});
