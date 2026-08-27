import { render, screen } from "@testing-library/react";

import Navbar from "@/components/Navbar/Navbar";
import { navItems } from "@/data/navigation";

describe("Navbar", () => {
  it("renders one link per section", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navItems.length);
    links.forEach((link, index) => {
      expect(link).toHaveTextContent(navItems[index].label);
      expect(link).toHaveAttribute("href", navItems[index].href);
    });
  });

  // The scroll handler used to read `.offsetTop` off the query result without
  // a null check, which threw on any page missing one of the sections.
  it("does not throw when the sections are absent from the page", () => {
    render(<Navbar />);
    expect(() => window.dispatchEvent(new Event("scroll"))).not.toThrow();
  });
});
