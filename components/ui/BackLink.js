import Link from "next/link";

import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

/**
 * Back link shown above the title of the sub pages.
 *
 * @param {Object} props
 * @param {string} [props.href]  - Destination, the homepage by default.
 * @param {React.ReactNode} props.children - Label, usually the site owner's name.
 * @returns {JSX.Element}
 */
const BackLink = ({ href = "/", children }) => (
  <Link
    className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent"
    href={href}
  >
    <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
    {children}
  </Link>
);

export default BackLink;
