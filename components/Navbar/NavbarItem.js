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
    <a className={`group flex items-center py-3 ${isActive ? 'active' : ''}`} href={href}>
      <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none ${isActive ? 'bg-primary w-16' : ''}`}></span>
      <span className={`nav-text text-xs font-bold uppercase tracking-widest text-muted group-hover:text-primary group-focus-visible:text-primary ${isActive ? 'text-primary' : ''}`}>
        {label}
      </span>
    </a>
  </li>
);

export default NavbarItem;