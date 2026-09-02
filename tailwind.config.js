/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goyard-gold': '#D68B30',
        'goyard-dark': '#131313',
        'goyard-text': '#63574A',
        'goyard-beige': '#F3EBE2',
        'goyard-light': '#FEFAF5'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
