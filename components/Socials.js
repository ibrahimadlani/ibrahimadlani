import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

/**
 * Socials component for displaying social media links.
 * This component provides links to various social media profiles such as GitHub, LinkedIn, CodePen, Instagram, Twitter, and Goodreads.
 * Each link includes an SVG icon and accessibility features like aria-label and title.
 *
 * @returns {JSX.Element} The Socials component.
 */

const socialLinks = [
  {
    href: "https://github.com/ibrahimadlani",
    ariaLabel: "GitHub (opens in a new tab)",
    title: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/ibrahimadlani/",
    ariaLabel: "LinkedIn (opens in a new tab)",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  }
];

const Socials = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((link, index) => (
        <li key={index} className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-[#302020]"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.ariaLabel}
            title={link.title}
          >
            <span className="sr-only">{link.title}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
