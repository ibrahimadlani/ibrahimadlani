import Headshot from "../components/Headshot";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

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

        {/* Navigation Bar */}
        <Navbar />
      </div>

      {/* Social Links */}
      <Socials />
    </header>
  );
};

export default Header;
