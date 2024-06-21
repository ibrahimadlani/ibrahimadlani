import NavbarItem from './NavbarItem';

/**
 * Navbar component for in-page navigation.
 * This component provides links to various sections of the page such as About, Experience, and Projects.
 * It is styled to be hidden on small screens and visible on large screens.
 * Each link includes hover and focus-visible styles for improved accessibility.
 *
 * @returns {JSX.Element} The Navbar component.
 */

const Navbar = () => {
  const navItems = [
    { href: "#about", label: "About" }
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item, index) => (
          <NavbarItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
