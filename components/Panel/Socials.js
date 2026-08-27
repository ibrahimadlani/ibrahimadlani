"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { socialLinks } from "@/data/socials";
import { resumeHref } from "@/lib/resume";
import DarkLightIcon from "@/components/icons/DarkLightIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ResumeIcon from "@/components/icons/ResumeIcon";
import Tooltip from "@/components/ui/Tooltip";

/** Maps the `icon` key of `data/socials.js` onto a component. */
const ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

const ITEM_CLASS_NAME = "block hover:text-primary dark:hover:text-darkPrimary";

/**
 * Contact row under the header: social profiles, the theme toggle and the
 * résumé download. Each control names itself with a `Tooltip` on hover and on
 * focus; none carries a native `title`, which would stack a second, unstyled
 * bubble on top of it.
 *
 * Only the two theme-dependent items wait for mount — rendering the whole row
 * conditionally used to make every icon pop in after hydration. Their markup is
 * reserved from the first paint so nothing shifts.
 *
 * @returns {JSX.Element}
 */
const Socials = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // `resolvedTheme` is only meaningful in the browser: rendering it on the
  // server would produce markup that does not match the client.
  useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((link) => {
        const Icon = ICONS[link.icon];

        return (
          <li key={link.href} className="mr-5 shrink-0 text-xs">
            <Tooltip label={link.title}>
              <a
                className={ITEM_CLASS_NAME}
                href={link.href}
                aria-label={link.ariaLabel}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                <Icon />
              </a>
            </Tooltip>
          </li>
        );
      })}

      <li className="mr-5 shrink-0 text-xs">
        <Tooltip label="Toggle theme">
          <button
            type="button"
            className={`${ITEM_CLASS_NAME} cursor-pointer`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            <DarkLightIcon isDarkMode={mounted && isDarkMode} />
          </button>
        </Tooltip>
      </li>

      <li className="mr-5 shrink-0 text-xs">
        <Tooltip label="Download my résumé">
          <a
            className={ITEM_CLASS_NAME}
            href={resumeHref(mounted ? resolvedTheme : undefined)}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Download my résumé (opens in a new tab)"
          >
            <ResumeIcon />
          </a>
        </Tooltip>
      </li>
    </ul>
  );
};

export default Socials;
