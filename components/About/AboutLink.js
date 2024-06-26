/**
 * Link component for external links with consistent styling.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.href - The link's href attribute.
 * @param {string} props.ariaLabel - The link's aria-label attribute.
 * @param {string} props.children - The link's text content.
 * @returns {JSX.Element} The Link component.
 */

const AboutLink = ({ href, ariaLabel, children }) => {
  return (
    <a
      className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent transition focus-visible:text-accent dark:focus-visible:text-accent"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default AboutLink;
