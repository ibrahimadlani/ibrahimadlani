/**
 * In-page jump links shown in the sidebar on large screens.
 *
 * Each `href` must match the `id` of a `<Section>` rendered on the homepage, in
 * the order the sections appear: the navbar derives the active link from the
 * vertical offsets of these elements.
 *
 * @typedef {Object} NavItem
 * @property {string} href  - Fragment identifier of the target section.
 * @property {string} label - Text of the link.
 */

/** @type {NavItem[]} */
export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
];
