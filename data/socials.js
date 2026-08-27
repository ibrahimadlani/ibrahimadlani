/**
 * Contact links shown under the header.
 *
 * The theme toggle and the résumé download are not listed here: both depend on
 * the active theme and are rendered separately by `components/Panel/Socials.js`.
 *
 * @typedef {Object} SocialLink
 * @property {string} href       - Destination; `mailto:` and `tel:` are supported.
 * @property {string} title      - Tooltip and screen-reader label.
 * @property {string} ariaLabel  - Accessible name, mentioning a new tab when relevant.
 * @property {string} icon       - Key into the icon map of `components/Panel/Socials.js`.
 * @property {boolean} external  - Whether to open the link in a new tab.
 */

/** @type {SocialLink[]} */
export const socialLinks = [
  {
    href: "https://github.com/ibrahimadlani",
    title: "GitHub",
    ariaLabel: "GitHub (opens in a new tab)",
    icon: "github",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ibrahimadlani/",
    title: "LinkedIn",
    ariaLabel: "LinkedIn (opens in a new tab)",
    icon: "linkedin",
    external: true,
  },
  {
    href: "tel:+33695670877",
    title: "Phone",
    ariaLabel: "Call Ibrahim Adlani",
    icon: "phone",
    external: false,
  },
  {
    href: "mailto:ibrahim@adlani.com",
    title: "Mail",
    ariaLabel: "Email Ibrahim Adlani",
    icon: "mail",
    external: false,
  },
];
