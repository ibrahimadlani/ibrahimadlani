import { render, screen } from "@testing-library/react";

import ExperienceItem from "@/components/Experience/ExperienceItem";

const experience = {
  date: "Jun 24' — Sep 24'",
  role: "Software Engineer, Intern",
  location: "Leuven, Belgium",
  company: "Septentrio",
  companyUrl: "https://septentrio.com",
  descriptions: ["Built internal tooling.", "Automated conversions."],
  technologies: ["Python", "Django"],
};

describe("ExperienceItem", () => {
  beforeEach(() => render(<ExperienceItem {...experience} />));

  it("renders the role, company and location", () => {
    expect(screen.getByText(/Software Engineer, Intern/)).toBeInTheDocument();
    expect(screen.getByText("Septentrio")).toBeInTheDocument();
    expect(screen.getByText("Leuven, Belgium")).toBeInTheDocument();
  });

  it("lists every description and technology", () => {
    experience.descriptions.forEach((description) =>
      expect(screen.getByText(description)).toBeInTheDocument()
    );
    experience.technologies.forEach((technology) =>
      expect(screen.getByText(technology)).toBeInTheDocument()
    );
  });

  // Used to be hardcoded to "Lead Engineer at …" for every position.
  it("names the actual role in the accessible link label", () => {
    const link = screen.getByRole("link", {
      name: "Software Engineer, Intern at Septentrio (opens in a new tab)",
    });
    expect(link).toHaveAttribute("href", experience.companyUrl);
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });
});
