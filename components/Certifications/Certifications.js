import { certifications } from "@/data/certifications";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import CertificationsItem from "./CertificationsItem";

/**
 * Homepage certifications section: a card per credential, plus a link to the
 * full table on `/certifications`.
 *
 * @returns {JSX.Element}
 */
const Certifications = () => (
  <Section id="certifications" title="Certifications" ariaLabel="Certifications">
    <ol className="group/list">
      {certifications.map((certification) => (
        <CertificationsItem key={certification.url} {...certification} />
      ))}
    </ol>
    <ArrowLink
      href="/certifications"
      lead="View Full"
      tail="Certifications List"
      ariaLabel="View the full list of certifications"
    />
  </Section>
);

export default Certifications;
