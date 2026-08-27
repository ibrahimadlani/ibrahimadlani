import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

/**
 * One diploma in the education list.
 *
 * @param {Object} props
 * @param {string} props.date        - Human readable period.
 * @param {string} props.degree      - Degree earned.
 * @param {string} props.school      - Institution name.
 * @param {string} props.location    - City and country.
 * @param {string} props.schoolUrl   - Absolute URL of the institution.
 * @param {string} props.description - Coursework summary.
 * @param {string[]} props.topics    - Highlights, rendered as pills.
 * @returns {JSX.Element}
 */
const EducationItem = ({
  date,
  degree,
  school,
  location,
  schoolUrl,
  description,
  topics,
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
              href={schoolUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${degree} at ${school} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{degree}</span>
              <ArrowUpRightIcon />
            </a>
          </div>
          <div>
            <div className="text-muted dark:text-darkMuted" aria-hidden="true">
              {school} · <span className="inline-block">{location}</span>
            </div>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-secondary dark:text-darkSecondary">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Topics studied">
          {topics.map((topic) => (
            <li key={topic} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {topic}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export default EducationItem;
