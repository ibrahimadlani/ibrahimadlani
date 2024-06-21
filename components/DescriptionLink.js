/**
 * Link component for external links with consistent styling.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.href - The link's href attribute.
 * @param {string} props.ariaLabel - The link's aria-label attribute.
 * @param {string} props.children - The link's text content.
 * @returns {JSX.Element} The Link component.
 */

const DescriptionLink = ({ href, ariaLabel, children }) => {
  return (
    <a
      className="font-medium text-[#302020] hover:underline focus-visible:text-teal-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default DescriptionLink;
