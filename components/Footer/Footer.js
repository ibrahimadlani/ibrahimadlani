const LINK_CLASS_NAME =
  "font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent";

/** Tools credited in the colophon, in the order they are mentioned. */
const CREDITS = {
  figma: { href: "https://www.figma.com/", label: "Figma" },
  vscode: { href: "https://code.visualstudio.com/", label: "Visual Studio Code" },
  nextjs: { href: "https://nextjs.org/", label: "Next.js" },
  tailwind: { href: "https://tailwindcss.com/", label: "Tailwind CSS" },
  amplify: { href: "https://aws.amazon.com/amplify/", label: "AWS Amplify" },
  inter: { href: "https://rsms.me/inter/", label: "Inter" },
};

/**
 * External link in the colophon.
 *
 * @param {Object} props
 * @param {{href: string, label: string}} props.credit - Entry of `CREDITS`.
 * @returns {JSX.Element}
 */
const CreditLink = ({ credit }) => (
  <a
    href={credit.href}
    className={LINK_CLASS_NAME}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={`${credit.label} (opens in a new tab)`}
  >
    {credit.label}
  </a>
);

/**
 * Colophon closing the page.
 *
 * @returns {JSX.Element}
 */
const Footer = () => (
  <footer className="max-w-md pb-16 text-sm text-muted dark:text-darkMuted sm:pb-0">
    <p>
      This CV was crafted with care and attention to detail, using{" "}
      <CreditLink credit={CREDITS.figma} /> for design and coded in{" "}
      <CreditLink credit={CREDITS.vscode} />. Built with{" "}
      <CreditLink credit={CREDITS.nextjs} /> and{" "}
      <CreditLink credit={CREDITS.tailwind} />, and deployed seamlessly with{" "}
      <CreditLink credit={CREDITS.amplify} />. The text is elegantly set in the{" "}
      <CreditLink credit={CREDITS.inter} /> typeface.
    </p>
  </footer>
);

export default Footer;
