
import SadIbrahim from "../components/icons/SadIbrahim.js";

import Link from "next/link";

/**
 * NotFound component for handling 404 errors.
 * This component displays a message indicating the page is not found
 * and provides a link to navigate back to the homepage.
 *
 * @returns {JSX.Element} The NotFound component.
 */

export const metadata = {
    title: "Not found - Ibrahim Adlani",
    description: "Ibrahim Adlani's portfolio showcasing projects and skills in software engineering.",
    ogTitle: "Ibrahim Adlani - Software Engineer",
    ogDescription: "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
    ogImage: "/images/profile.jpg",
    ogUrl: "https://www.ibrahimadlani.com",
    twitterCard: "summary_large_image",
    twitterTitle: "Ibrahim Adlani - Software Engineer",
    twitterDescription: "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
    twitterImage: "/images/profile.jpg",
  }
  

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center lg:px-8 w-full h-full">
      <div className="w-[200px] mb-12">
        <SadIbrahim className="" />
      </div>

      {/* Error Code */}
      <h1 className="text-6xl font-extrabold text-primary dark:text-darkPrimary sm:text-7xl">
        404
      </h1>
      
      {/* Error Message */}
      <p className="mt-4 text-2xl font-semibold text-secondary dark:text-darkSecondary sm:text-3xl">
        Oops! Page Not Found.
      </p>
      
      {/* Description */}
      <p className="mt-2 max-w-lg text-lg leading-normal text-secondary dark:text-darkSecondary">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      

      <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent font-semibold text-primary group/link text-base"
            href="/"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              Go back to{" "}
              <span className="inline-block">
                home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
    </div>
  );
};

export default NotFound;
