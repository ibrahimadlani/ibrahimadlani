import BackLink from "@/components/ui/BackLink";
import { SITE_AUTHOR } from "@/lib/site";

export const metadata = {
  title: "Articles",
  description:
    "Writing by Ibrahim Adlani on software engineering, web development and everything he builds along the way.",
  alternates: { canonical: "/articles" },
};

/**
 * Articles index. Nothing is published yet, so the page states so rather than
 * rendering an empty list.
 *
 * @returns {JSX.Element}
 */
export default function ArticlesPage() {
  return (
    <div className="lg:py-24">
      <BackLink>{SITE_AUTHOR}</BackLink>
      <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-darkPrimary sm:text-5xl">
        Articles
      </h1>
      <p className="mt-6 max-w-lg text-secondary dark:text-darkSecondary">
        Nothing published yet. I am putting together a few write-ups on the
        things I build — check back soon.
      </p>
    </div>
  );
}
