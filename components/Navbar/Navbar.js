"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/data/navigation";
import NavbarItem from "./NavbarItem";

/**
 * Sidebar navigation highlighting the section currently in view.
 *
 * A section counts as active once the middle of the viewport has passed its
 * top edge, which is why the offsets are recomputed on every scroll: the sticky
 * section headings change the layout as the page moves.
 *
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    let frame = 0;

    const findActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Sections missing from the page are skipped rather than throwing:
      // the navbar is shared and not every route renders all of them.
      const offsets = navItems
        .map((item) => ({
          href: item.href,
          offsetTop: document.querySelector(item.href)?.offsetTop,
        }))
        .filter((section) => section.offsetTop !== undefined);

      const current = offsets.find((section, index) => {
        const next = offsets[index + 1];
        return next
          ? scrollPosition >= section.offsetTop &&
              scrollPosition < next.offsetTop
          : scrollPosition >= section.offsetTop;
      });

      if (current) setActiveSection(current.href);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(findActiveSection);
    };

    findActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={activeSection === item.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
