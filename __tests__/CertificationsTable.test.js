import { render, screen, within } from "@testing-library/react";

import CertificationsTable from "@/components/Certifications/CertificationsTable";
import { certifications } from "@/data/certifications";

describe("CertificationsTable", () => {
  beforeEach(() => render(<CertificationsTable />));

  it("renders one row per certification", () => {
    // +1 for the header row.
    expect(screen.getAllByRole("row")).toHaveLength(certifications.length + 1);
  });

  it("shows the year and issuer of each certification", () => {
    certifications.forEach((certification) => {
      const row = screen.getByText(certification.title, {
        selector: "div.hidden",
      }).closest("tr");

      expect(
        within(row).getByText(String(certification.year))
      ).toBeInTheDocument();
      expect(within(row).getByText(certification.issuer)).toBeInTheDocument();
    });
  });

  it("points every link at its own credential", () => {
    certifications.forEach((certification) => {
      screen
        .getAllByRole("link", { name: new RegExp(certification.title, "i") })
        .forEach((link) =>
          expect(link).toHaveAttribute("href", certification.url)
        );
    });
  });
});
