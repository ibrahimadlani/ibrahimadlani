import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

/**
 * One row of the `/certifications` table.
 *
 * Below `sm` the "Link" column is hidden, so the credential title itself
 * becomes the link; above it the title is plain text and the last column
 * carries the link.
 *
 * @param {Object} props
 * @param {number} props.year   - Year the credential was awarded.
 * @param {string} props.title  - Full name of the credential.
 * @param {string} props.issuer - Awarding organisation.
 * @param {string[]} props.technologies - Skills covered.
 * @param {string} props.url    - Absolute URL of the public credential.
 * @param {string} props.label  - Text of the link column.
 * @returns {JSX.Element}
 */
const CertificationsTableRow = ({
  year,
  title,
  issuer,
  technologies,
  url,
  label,
}) => (
  <tr className="border-b border-muted/10 last:border-none dark:border-darkMuted/10">
    <td className="py-4 pr-4 align-top text-sm">
      <div className="translate-y-px">{year}</div>
    </td>
    <td className="py-4 pr-4 align-top font-semibold leading-snug text-primary dark:text-darkPrimary">
      <div>
        <div className="block sm:hidden">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent sm:hidden group/link text-base"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span>
              {title}
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
        <div className="hidden sm:block">{title}</div>
      </div>
    </td>
    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
      <div className="translate-y-px whitespace-nowrap">{issuer}</div>
    </td>
    <td className="hidden py-4 pr-4 align-top lg:table-cell">
      <ul className="flex -translate-y-1.5 flex-wrap">
        {technologies.map((technology) => (
          <li key={technology} className="my-1 mr-1.5">
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
              {technology}
            </div>
          </li>
        ))}
      </ul>
    </td>
    <td className="hidden py-4 align-top sm:table-cell">
      <ul className="translate-y-1">
        <li className="mb-1 flex items-center">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent text-sm group/link"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} — ${label} (opens in a new tab)`}
          >
            <span>
              <span className="inline-block">
                {label}
                <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </td>
  </tr>
);

export default CertificationsTableRow;
