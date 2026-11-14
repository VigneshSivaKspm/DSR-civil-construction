/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dsr: {
          navy: '#001858',        // Shadow at base of DSR letters: Headlines, dark backgrounds, text on gold
          civil: '#032E7D',       // CIVIL CONSTRUCTIONS lettering: Section titles, deep blue gradients
          roof: '#005FDD',        // Blue upper roof trim: Links, active states, primary blue surfaces
          glass: '#51BDFB',       // Facade glass: Light-blue fields and large background washes
          cyan: '#00B7FD',        // Cyan reflection on roof: Fine lines, geometric highlights, selected edges
          gold: '#FFBB02',        // Yellow hard hat: Main enquiry button, active construction stage
          'gold-hover': '#E5A700',
          silver: '#E3E7F2',      // Silver-white wall: Dividers, cool neutral panels, form borders
          white: '#FEFEFE',       // White canvas: Breathing room around logo, photography, copy
          'ice-wash': '#F2F6FC',  // Subtle architectural wash derived from glass & white
        }
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
