"use client";

import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('#about');
  
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sectionOffsets = navItems.map(item => {
      const element = document.querySelector(item.href);
      return {
        href: item.href,
        offsetTop: element.offsetTop,
      };
    });

    const currentSection = sectionOffsets.find((section, index) => {
      const nextSection = sectionOffsets[index + 1];
      if (nextSection) {
        return scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop;
      } else {
        return scrollPosition >= section.offsetTop;
      }
    });

    if (currentSection) {
      setActiveSection(currentSection.href);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item, index) => (
          <NavbarItem
            key={index}
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