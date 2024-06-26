/**
 * CertificationItem component to display individual certification details.
 *
 * @param {Object} props - The properties object.
 * @returns {JSX.Element} The CertificationItem component.
 */
const CertificationItem = ({ year, project, madeAt, builtWith, link, label }) => (
    <tr className="border-b border-muted/10 last:border-none dark:border-darkMuted/10">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-primary dark:text-darkPrimary">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent sm:hidden group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project} (opens in a new tab)`}
            >
              <span>
                {project}
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
            </a>
          </div>
          <div className="hidden sm:block">{project}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {builtWith.map((tech, techIndex) => (
            <li key={techIndex} className="my-1 mr-1.5">
              <div className="flex items-center rounded-full bg-accent/10 dark:bg-darkAccent/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-darkAccent">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent text-sm group/link text-sm"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${label} (opens in a new tab)`}
            >
              <span>
                <span className="inline-block">
                  {label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
          </li>
        </ul>
      </td>
    </tr>
  );
  
  export default CertificationItem;
  