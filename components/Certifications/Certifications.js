import CertificationsItem from "./CertificationsItem";
import ibm_logo from "../../app/images/companies/ibm.svg";
import freecodecamp_logo from "../../app/images/companies/freecodecamp.svg";

const certificationsData = [
  {
    title: "Cyber Sec. Operations and Tech. Solutions",
    date: "January 2020",
    company: "IBM",
    certificationUrl: "https://ibm-learning.udemy.com/certificate/UC-550b9f69-f7e3-4d14-9ffb-f9a6d6d813d7/",
    imageAlt: "IBM logo",
    image: ibm_logo,
  },
  {
    title: "Data Visualization",
    date: "November 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/data-visualization",
    imageAlt: "freeCodeCamp logo",
    image: freecodecamp_logo,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    date: "November 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
    imageAlt: "freeCodeCamp logo",
    image: freecodecamp_logo,
  },
  {
    title: "Scientific Computing with Python",
    date: "February 2021",
    company: "freeCodeCamp",
    certificationUrl: "https://freecodecamp.org/certification/ibrahimadlani/javascript-algorithms-and-data-structures",
    imageAlt: "freeCodeCamp logo",
    image: freecodecamp_logo,
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
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
            className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent font-semibold text-primary group/link text-base"
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
