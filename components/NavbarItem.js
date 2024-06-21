/**
 * NavbarItem component for individual navigation links.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.href - The link's href attribute.
 * @param {string} props.label - The link's text label.
 * @returns {JSX.Element} The NavbarItem component.
 */

const NavbarItem = ({ href, label }) => (
  <li>
    <a className="group flex items-center py-3" href={href}>
      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#302020] group-focus-visible:w-16 group-focus-visible:bg-[#302020] motion-reduce:transition-none"></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-[#837979] group-hover:text-[#302020] group-focus-visible:text-[#302020]">
        {label}
      </span>
    </a>
  </li>
);

export default NavbarItem;
