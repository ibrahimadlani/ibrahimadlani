import CertificationsItem from "./CertificationsItem";
import ibm_logo from "../../app/images/companies/ibm.svg";
import imb_dark_logo from "../../app/images/companies/ibm_dark.svg";
import freecodecamp_logo from "../../app/images/companies/freecodecamp.svg";
import freecodecamp_logo_dark_logo from "../../app/images/companies/freecodecamp_dark.svg";
import ets_logo from "../../app/images/companies/ets.svg";
import ets_dark_logo from "../../app/images/companies/ets_dark.svg";

/**
 * Certifications component to display a list of certifications.
 *
 * @returns {JSX.Element} The Certifications component.
 */

const certificationsData = [
  {
    title: "Test Of English for International Communication",
    date: "June 2024",
    company: "ETS",
    certificationUrl: "https://www.etsglobal.org/fr/en/digital-score-report/95A1C364CF4BC38D1D702D808A8249FFEBF27BF11C785F6464CA05E76C390B25UVpXanM3VUd0YXUzRHpIWWszQ2ZDWGFjb1I2SURIbnFkRzVYQTZWbDROMHdLaHJx",
    imageAlt: "ETS logo",
    image: {
      light: ets_logo,
      dark: ets_dark_logo
    }
  },
  {
    title: "Cyber Sec. Operations and Tech. Solutions",
    date: "January 2020",
    company: "IBM",
    certificationUrl: "https://ibm-learning.udemy.com/certificate/UC-550b9f69-f7e3-4d14-9ffb-f9a6d6d813d7/",
    imageAlt: "IBM logo",
    image: {
      light: ibm_logo,
      dark: imb_dark_logo
    }
  },
  {
    title: "Data Visualization",
    date: "November 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/data-visualization",
    imageAlt: "freeCodeCamp logo",
    image: {
      light: freecodecamp_logo,
      dark: freecodecamp_logo_dark_logo
    }
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    date: "November 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
    imageAlt: "freeCodeCamp logo",
    image: {
      light: freecodecamp_logo,
      dark: freecodecamp_logo_dark_logo
    }
  },
  {
    title: "Scientific Computing with Python",
    date: "February 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/scientific-computing-with-python-v7",
    imageAlt: "freeCodeCamp logo",
    image: {
      light: freecodecamp_logo,
      dark: freecodecamp_logo_dark_logo
    }
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Sticky header for the section on small screens */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen sm:bg-transparent bg-background/75 dark:bg-darkBackground/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-darkPrimary">
          Certifications
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {certificationsData.map((certification, index) => (
            <CertificationsItem key={index} {...certification} />
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent font-semibold text-primary group/link text-base"
            href="/certifications"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Certifications List
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
    </section>
  );
};

export default Certifications;
