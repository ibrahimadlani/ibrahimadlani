import CertificationsTable from "@/components/Certifications/CertificationsTable";
import BackLink from "@/components/ui/BackLink";
import { SITE_AUTHOR } from "@/lib/site";

export const metadata = {
  title: "All Certifications",
  description:
    "The full list of certifications earned by Ibrahim Adlani, with the year, the issuing organisation and a link to each public credential.",
  alternates: { canonical: "/certifications" },
};

/**
 * Full certifications listing.
 *
 * @returns {JSX.Element}
 */
export default function CertificationsPage() {
  return (
    <div className="lg:py-24">
      <BackLink>{SITE_AUTHOR}</BackLink>
      <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-darkPrimary sm:text-5xl">
        All Certifications
      </h1>
      <CertificationsTable />
    </div>
  );
}
