import aws from "../../app/images/aws.png";
import Image from "next/image";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Sticky header for the section on small screens */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary ">
          Certifications
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <Image
                alt={"imageAlt"}
                src={aws}
                layout="intrinsic"
                width={200}
                className="z-10 col-span-2 rounded border-2 border-primary/10 transition group-hover:border-primary/30 sm:col-span-2"
                style={{ color: "transparent" }}
              />
              <div className="z-10 col-span-6">
                <p className="-mt-1 text-sm font-semibold leading-6">
                  June 2020
                </p>
                <h3 className="-mt-1 font-medium">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-teal-300  group/link text-base"
                    href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      AWS Certified Solution Architect 
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
                    <div className="text-muted" aria-hidden="true">
                      Amazon Web Service
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </li>
        </ol>

        {/* Link to the full resume */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent font-semibold text-primary group/link text-base"
            href="/resume.pdf"
            target="_blank"
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
