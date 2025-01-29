/**
 * Component for an individual experience item.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.date - The date of the experience.
 * @param {string} props.role - The role/title held during the experience.
 * @param {string} props.type - The type/location of the experience.
 * @param {string} props.company - The company name.
 * @param {string} props.companyUrl - The URL of the company.
 * @param {string[]} props.descriptions - A list of descriptions of the experience.
 * @param {string[]} props.technologies - A list of technologies used in the experience.
 * @returns {JSX.Element} The ExperienceItem component.
 */

const ExperienceItem = ({
  date,
  role,
  type,
  company,
  companyUrl,
  descriptions,
  technologies,
}) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 dark:lg:group-hover:bg-darkMuted/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted dark:text-darkMuted sm:col-span-2"
          aria-label={date}
        >
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-primary dark:text-darkPrimary">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent group/link text-base"
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Lead Engineer at ${company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {role} ·{" "}
                  <span className="inline-block">
                    {company}
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
            <div>
              <div className="text-muted dark:text-darkMuted" aria-hidden="true">
                {type}
              </div>
            </div>
          </h3>
          <ul className="list-image-[url(../../app/images/tick.svg)] mt-2 text-sm leading-normal text-secondary dark:text-darkSecondary list-inside">
            {descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-accent/10 dark:bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-accent">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

// Export the component as default
export default ExperienceItem;
