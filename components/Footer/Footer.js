import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted dark:text-darkMuted sm:pb-0">
      <p>
        This CV was crafted with care and attention to detail, using{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Figma
        </a>{" "}
        for design and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , and deployed seamlessly with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          AWS Amplify
        </a>
        . The text is elegantly set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-primary dark:text-darkPrimary hover:text-accent dark:hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
