/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark mode is driven by a `class` on <html>, written by next-themes.
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // `accent` is shared by both themes; every other token has a `dark`
        // counterpart applied through the `dark:` variant.
        accent: "#f97316",

        primary: "#302020", // body headings and emphasised text
        secondary: "#837979", // body copy
        muted: "#837979", // metadata, captions
        info: "#C4CFDD",
        background: "#fff",

        darkPrimary: "#e2e8f0",
        darkSecondary: "#94a3b8",
        darkMuted: "#64748b",
        darkInfo: "#9ca3af",
        darkBackground: "#0f172a",
      },
    },
  },
  plugins: [],
};
