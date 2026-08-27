import Link from "next/link";

import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

const LINK_CLASS_NAME =
  "inline-flex items-baseline font-semibold leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent group/link text-base";

/**
 * Standalone "see more" link closing a section, e.g. `View Full Résumé ↗`.
 *
 * The label is split in two so the arrow can never wrap onto a line of its own:
 * `tail` and the icon share an `inline-block` wrapper.
 *
 * @param {Object} props
 * @param {string} props.href       - Destination.
 * @param {string} props.lead       - Beginning of the label, allowed to wrap.
 * @param {string} props.tail       - End of the label, kept on the same line as the arrow.
 * @param {string} props.ariaLabel  - Accessible name; mention the new tab when `external`.
 * @param {boolean} [props.external] - Open in a new tab. Internal links use `next/link` instead.
 * @returns {JSX.Element}
 */
const ArrowLink = ({ href, lead, tail, ariaLabel, external = false }) => {
  const content = (
    <span>
      {lead}{" "}
      <span className="inline-block">
        {tail}
        <ArrowUpRightIcon />
      </span>
    </span>
  );

  return (
    <div className="mt-12">
      {external ? (
        <a
          className={LINK_CLASS_NAME}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      ) : (
        <Link className={LINK_CLASS_NAME} href={href} aria-label={ariaLabel}>
          {content}
        </Link>
      )}
    </div>
  );
};

export default ArrowLink;
