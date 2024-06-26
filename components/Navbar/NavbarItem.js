import React from 'react';

/**
 * NavbarItem component for individual navigation links.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.href - The link's href attribute.
 * @param {string} props.label - The link's text label.
 * @param {boolean} props.isActive - Whether the item is active.
 * @returns {JSX.Element} The NavbarItem component.
 */

const NavbarItem = ({ href, label, isActive }) => (
  <li>
    <a className={`group flex items-center py-3`} href={href}>
      <span
        className={`nav-indicator mr-4 h-px transition-all bg-muted dark:bg-darkMuted group-hover:w-16 group-hover:bg-primary dark:group-hover:bg-darkPrimary group-focus-visible:w-16 group-focus-visible:bg-primary dark:group-focus-visible:bg-darkPrimary motion-reduce:transition-none ${
          isActive ? 'w-16 bg-primary dark:bg-darkPrimary' : 'w-8'
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors text-muted dark:text-darkMuted group-hover:text-primary dark:group-hover:text-darkPrimary group-focus-visible:text-primary dark:group-focus-visible:text-darkPrimary ${
          isActive ? 'text-primary dark:text-darkPrimary' : ''
        }`}
      >
        {label}
      </span>
    </a>
  </li>
);

export default NavbarItem;
