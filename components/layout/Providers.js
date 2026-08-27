"use client";

import { ThemeProvider } from "next-themes";

import CursorGradient from "./CursorGradient";

/**
 * Client boundary of the application.
 *
 * Isolating it here keeps `app/layout.js` a server component, which is what
 * lets the app export `metadata`; a `"use client"` root layout cannot.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The rendered route.
 * @returns {JSX.Element}
 */
const Providers = ({ children }) => (
  <ThemeProvider attribute="class">
    <CursorGradient />
    {children}
  </ThemeProvider>
);

export default Providers;
