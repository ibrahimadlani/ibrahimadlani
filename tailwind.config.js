/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/certifications/*.{js,ts,jsx,tsx,mdx}",
    "./app/certifications/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f97316',  // Couleur d'accentuation
        primary: '#302020',  // Couleur principale du texte
        secondary: '#837979',  // Couleur secondaire du texte
        muted: '#837979',  // Couleur de texte atténuée
        info: '#C4CFDD',  // Couleur d'information du texte
        background: '#fff',  // Couleur de fond

        // Couleurs pour le mode sombre
        darkBackground: '#0f172a',
        darkPrimary: '#e2e8f0',
        darkSecondary: '#94a3b8',
        darkMuted: '#64748b',
        darkInfo: '#9ca3af',
      },
    },
  },
  plugins: [],
};
