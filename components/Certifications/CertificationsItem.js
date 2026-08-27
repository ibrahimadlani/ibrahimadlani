import Image from "next/image";

import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

const LOGO_CLASS_NAME =
  "z-10 col-span-2 rounded border-2 border-primary/10 transition group-hover:border-primary/30 dark:border-darkPrimary/10 dark:group-hover:border-darkPrimary/30 sm:col-span-2";

/**
 * One certification, as a logo card. Used by the homepage section.
 *
 * Both logo variants are rendered and one is hidden with `dark:` utilities:
 * swapping the `src` in JavaScript instead would need the resolved theme, which
 * is not known during server rendering.
 *
 * @param {Object} props
 * @param {string} props.title    - Full name of the credential.
 * @param {string} [props.shortTitle] - Abbreviated name preferred in this narrow card.
 * @param {string} props.issuer   - Awarding organisation.
 * @param {string} props.date     - Month and year it was awarded.
 * @param {string} props.url      - Absolute URL of the public credential.
 * @param {{light: import("next/image").StaticImageData, dark: import("next/image").StaticImageData}} props.logo
 * @param {string} props.logoAlt  - Alt text for the logo.
 * @returns {JSX.Element}
 */
const CertificationsItem = ({
  title,
  shortTitle,
  issuer,
  date,
  url,
  logo,
  logoAlt,
}) => (
  <li className="mb-12">
    <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-darkMuted/5"></div>
      <Image
        alt={logoAlt}
        src={logo.light}
        width={200}
        height={200}
        className={`dark:hidden ${LOGO_CLASS_NAME}`}
      />
      <Image
        alt=""
        aria-hidden="true"
        src={logo.dark}
        width={200}
        height={200}
        className={`hidden dark:block ${LOGO_CLASS_NAME}`}
      />
      <div className="z-10 col-span-6">
        <p className="-mt-1 text-sm font-semibold leading-6 text-primary dark:text-darkPrimary">
          {date}
        </p>
        <h3 className="-mt-1 font-medium">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent group/link text-base"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {shortTitle ?? title}{" "}
              <span className="inline-block">
                <ArrowUpRightIcon />
              </span>
            </span>
          </a>
          <div>
            <div className="text-muted dark:text-darkMuted" aria-hidden="true">
              {issuer}
            </div>
          </div>
        </h3>
      </div>
    </div>
  </li>
);

export default CertificationsItem;
