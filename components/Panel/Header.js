import Headshot from "./Headshot";
import Navbar from "../Navbar/Navbar";
import Socials from "./Socials";

/**
 * Header component for the website.
 * This component contains the headshot, name, title, bio, navigation bar, and social links.
 * It is styled to be sticky on large screens and includes responsive design elements.
 *
 *@returns {JSX.Element} The Header component.
 */

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Headshot component */}
        <Headshot />

        {/* Name and Title */}
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          <a href="/">Ibrahim Adlani</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-primary">
          Junior Software Engineer
        </h2>

        {/* Bio */}
        <p className="mt-4 max-w-xs leading-normal">
          I build dynamic full-stack web applications with a focus on
          performance.
        </p>

        <div className="pointer-events-none bottom-0 sm:flex sm:justify-start mt-5 hidden ">
          <div className="pointer-events-auto flex items-center justify-between bg-primary px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>

              <strong className="font-semibold">Development in progress...</strong>
            </p>
          </div>
        </div>

        {/* Navigation Bar */}
        <Navbar />
      </div>

      {/* Social Links */}
      <Socials />
    </header>
  );
};

export default Header;
