import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

/**
 * One position in the work experience list.
 *
 * @param {Object} props
 * @param {string} props.date       - Human readable period.
 * @param {string} props.role       - Job title.
 * @param {string} props.location   - City and country.
 * @param {string} props.company    - Employer name.
 * @param {string} props.companyUrl - Absolute URL of the employer.
 * @param {string[]} props.descriptions - Bullet points describing the work.
 * @param {string[]} props.technologies - Stack used, rendered as pills.
 * @returns {JSX.Element}
 */
const ExperienceItem = ({
  date,
  role,
  location,
  company,
  companyUrl,
  descriptions,
  technologies,
}) => (
  <li className="mb-12">
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-darkMuted/5"></div>
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
              aria-label={`${role} at ${company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {role} ·{" "}
                <span className="inline-block">
                  {company}
                  <ArrowUpRightIcon />
                </span>
              </span>
            </a>
          </div>
          <div>
            <div className="text-muted dark:text-darkMuted" aria-hidden="true">
              {location}
            </div>
          </div>
        </h3>
        {/* The bullet image path is resolved by PostCSS relative to
            app/styles/globals.css — do not move that file or these images. */}
        <ul className="list-image-[url(../../app/images/tick.svg)] mt-2 text-sm leading-normal text-secondary dark:text-darkSecondary list-inside">
          {descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {technology}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export default ExperienceItem;
