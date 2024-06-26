import { useState, useEffect } from "react";
import Image from "next/image";
import useDarkMode from "../../hooks/useDarkMode";

/**
 * CertificationsItem component for displaying an individual certification.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.date - The date of the certification.
 * @param {string} props.title - The title of the certification.
 * @param {string} props.company - The company issuing the certification.
 * @param {string} props.certificationUrl - The URL to the certification details.
 * @param {string} props.imageAlt - The alt text for the company logo image.
 * @param {Object} props.image - The source URLs for the company logo images.
 * @param {string} props.image.light - The source URL for the light mode image.
 * @param {string} props.image.dark - The source URL for the dark mode image.
 * @returns {JSX.Element} The CertificationsItem component.
 */
const CertificationsItem = ({ date, title, company, certificationUrl, imageAlt, image }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log("Theme from localStorage:", theme); // Log the theme value
    setIsDarkMode(theme === "dark");
  }, []);

  return (
    <li className="mb-12">
      <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 dark:lg:group-hover:bg-darkMuted/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <Image
          alt={imageAlt}
          src={image.light}
          width={200}
          height={200}
          className="dark:hidden z-10 col-span-2 rounded border-2 border-primary/10 dark:border-darkPrimary/10 transition group-hover:border-primary/30 dark:group-hover:border-darkPrimary/30 sm:col-span-2"
        />
        <Image
          alt={imageAlt}
          src={image.dark}
          width={200}
          height={200}
          className="dark:block hidden z-10 col-span-2 rounded border-2 border-primary/10 dark:border-darkPrimary/10 transition group-hover:border-primary/30 dark:group-hover:border-darkPrimary/30 sm:col-span-2"
        />
        <div className="z-10 col-span-6">
          <p className="-mt-1 text-sm font-semibold leading-6 text-primary dark:text-darkPrimary">{date}</p>
          <h3 className="-mt-1 font-medium">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-teal-300 dark:focus-visible:text-accent group/link text-base"
              href={certificationUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}{" "}
                <span className="inline-block">
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
            <div>
              <div className="text-muted dark:text-darkMuted" aria-hidden="true">
                {company}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </li>
  );
};

export default CertificationsItem;
