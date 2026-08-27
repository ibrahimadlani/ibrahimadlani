import SadIbrahim from "@/components/icons/SadIbrahim";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = {
  title: "Not found",
  description: "This page could not be found.",
  robots: { index: false, follow: true },
};

/**
 * 404 page, rendered for any unmatched route.
 *
 * @returns {JSX.Element}
 */
export default function NotFound() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center lg:px-8">
      <div className="mb-12 w-[200px]">
        <SadIbrahim />
      </div>

      <h1 className="text-6xl font-extrabold text-primary dark:text-darkPrimary sm:text-7xl">
        404
      </h1>

      <p className="mt-4 text-2xl font-semibold text-secondary dark:text-darkSecondary sm:text-3xl">
        Oops! Page Not Found.
      </p>

      <p className="mt-2 max-w-lg text-lg leading-normal text-secondary dark:text-darkSecondary">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <ArrowLink
        href="/"
        lead="Go back to"
        tail="home"
        ariaLabel="Go back to the homepage"
      />
    </div>
  );
}
