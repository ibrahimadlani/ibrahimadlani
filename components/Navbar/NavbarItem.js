/**
 * One sidebar jump link. The leading rule grows and brightens when the link is
 * hovered, focused, or points at the section currently in view.
 *
 * @param {Object} props
 * @param {string} props.href     - Fragment identifier of the target section.
 * @param {string} props.label    - Text of the link.
 * @param {boolean} props.isActive - Whether the target section is in view.
 * @returns {JSX.Element}
 */
const NavbarItem = ({ href, label, isActive }) => (
  <li>
    <a className="group flex items-center py-3" href={href}>
      <span
        className={`nav-indicator mr-4 h-px bg-muted transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none dark:bg-darkMuted dark:group-hover:bg-darkPrimary dark:group-focus-visible:bg-darkPrimary ${
          isActive ? "w-16 bg-primary dark:bg-darkPrimary" : "w-8"
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest text-muted transition-colors group-hover:text-primary group-focus-visible:text-primary dark:text-darkMuted dark:group-hover:text-darkPrimary dark:group-focus-visible:text-darkPrimary ${
          isActive ? "text-primary dark:text-darkPrimary" : ""
        }`}
      >
        {label}
      </span>
    </a>
  </li>
);

export default NavbarItem;
