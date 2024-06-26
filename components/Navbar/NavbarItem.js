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
        className={`nav-indicator mr-4 h-px transition-all bg-muted group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none ${
          isActive ? 'w-16 bg-primary' : 'w-8'
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors text-muted group-hover:text-primary group-focus-visible:text-primary ${
          isActive ? 'text-primary' : ''
        }`}
      >
        {label}
      </span>
    </a>
  </li>
);

export default NavbarItem;
