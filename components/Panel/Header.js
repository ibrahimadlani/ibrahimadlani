import Link from "next/link";

import { SITE_AUTHOR } from "@/lib/site";
import Navbar from "@/components/Navbar/Navbar";
import Headshot from "./Headshot";
import Socials from "./Socials";

/**
 * Identity panel: portrait, name, role, short bio, in-page navigation and
 * contact links. Sticks to the viewport alongside the content from `lg` up.
 *
 * @returns {JSX.Element}
 */
const Header = () => (
  <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <Headshot />

      <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-darkPrimary sm:text-5xl">
        <Link href="/">{SITE_AUTHOR}</Link>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-primary dark:text-darkPrimary sm:text-xl">
        Junior Software Engineer
      </h2>

      <p className="mt-4 max-w-xs leading-normal text-secondary dark:text-darkSecondary">
        I build dynamic full-stack web applications with a focus on performance.
      </p>

      <Navbar />
    </div>

    <Socials />
  </header>
);

export default Header;
