import { certifications } from "@/data/certifications";
import CertificationsTableRow from "./CertificationsTableRow";

const HEADER_CLASS_NAME =
  "py-4 pr-8 text-sm font-semibold text-primary dark:text-darkPrimary";

/**
 * Full certifications listing rendered by `/certifications`.
 *
 * Columns drop out as the viewport narrows: "Made at" and "Built with" from
 * `lg` down, "Link" from `sm` down.
 *
 * @returns {JSX.Element}
 */
const CertificationsTable = () => (
  <table id="content" className="mt-12 w-full border-collapse text-left">
    <thead className="sticky top-0 z-10 border-b border-muted/10 bg-background/75 px-6 py-5 backdrop-blur dark:border-darkMuted/10 dark:bg-darkBackground/75">
      <tr>
        <th className={HEADER_CLASS_NAME}>Year</th>
        <th className={HEADER_CLASS_NAME}>Project</th>
        <th className={`hidden lg:table-cell ${HEADER_CLASS_NAME}`}>Made at</th>
        <th className={`hidden lg:table-cell ${HEADER_CLASS_NAME}`}>
          Built with
        </th>
        <th className={`hidden sm:table-cell ${HEADER_CLASS_NAME}`}>Link</th>
      </tr>
    </thead>
    <tbody>
      {certifications.map((certification) => (
        <CertificationsTableRow
          key={certification.url}
          year={certification.year}
          title={certification.title}
          issuer={certification.issuer}
          technologies={certification.technologies}
          url={certification.url}
          label={certification.label}
        />
      ))}
    </tbody>
  </table>
);

export default CertificationsTable;
