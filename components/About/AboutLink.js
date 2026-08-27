const LINK_CLASS_NAME =
  "font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent transition focus-visible:text-accent dark:focus-visible:text-accent";

/**
 * External link inside a paragraph of prose.
 *
 * @param {Object} props
 * @param {string} props.href      - Absolute URL.
 * @param {string} props.ariaLabel - Accessible name, mentioning the new tab.
 * @param {boolean} [props.unstyled] - Skip the default colours when the child
 *   brings its own, as `KorokEffect` does.
 * @param {React.ReactNode} props.children - Link content.
 * @returns {JSX.Element}
 */
const AboutLink = ({ href, ariaLabel, unstyled = false, children }) => (
  <a
    className={unstyled ? undefined : LINK_CLASS_NAME}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default AboutLink;
