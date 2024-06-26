import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import MailIcon from '../icons/MailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import DarkLightIcon from '../icons/DarkLightIcon';
import useDarkMode from '../../hooks/useDarkMode';
import ResumeIcon from '../icons/ResumeIcon';

/**
 * Socials component for displaying social media links.
 * This component provides links to various social media profiles such as GitHub, LinkedIn, CodePen, Instagram, Twitter, and Goodreads.
 * Each link includes an SVG icon and accessibility features like aria-label and title.
 *
 * @returns {JSX.Element} The Socials component.
 */

const Socials = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

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
    },
    {
      href: "tel:+33695670877",
      ariaLabel: "Phone (opens in a tooltip and copy to clipboard)",
      title: "Phone",
      icon: <PhoneIcon />,
    },
    {
      href: "mailto:ibrahim@adlani.com",
      ariaLabel: "Mail (opens in a tooltip and copy to clipboard)",
      title: "Mail",
      icon: <MailIcon />,
    },
    {
      href: "#",
      ariaLabel: "Toggle dark/light mode",
      title: "Toggle Dark Mode",
      icon: <DarkLightIcon isDarkMode={isDarkMode} />,
      onClick: toggleDarkMode,
    },
    ,
    {
      href: "/resume_ibrahimadlani_light.pdf",
      ariaLabel: "Download resume",
      title: "Download my resume !",
      icon: <ResumeIcon />,
    }
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((link, index) => (
        <li key={index} className="mr-5 text-xs shrink-0">
          {link.onClick ? (
            <div
              className="block hover:text-primary dark:hover:text-darkPrimary cursor-pointer"
              onClick={link.onClick}
              aria-label={link.ariaLabel}
              title={link.title}
            >
              <span className="sr-only">{link.title}</span>
              {link.icon}
            </div>
          ) : (
            <a
              className="block hover:text-primary dark:hover:text-darkPrimary"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.ariaLabel}
              title={link.title}
            >
              <span className="sr-only">{link.title}</span>
              {link.icon}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Socials;
