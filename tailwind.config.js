/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f97316',  // Accent color
        primary: '#302020',  // Primary text color
        secondary: '#837979',  // Secondary text color
        muted: '#837979',  // Muted text color
        info: '#C4CFDD',  // Info text color
        background: '#fff',  // Background color
      },
    },
  },
  plugins: [],
};



