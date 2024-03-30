/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors, // Merge Tailwind CSS default colors
      transparent: 'transparent',
      current: 'currentColor',
      dgreen: '#012403',
      lblack:'#091811',
    },
    extend: {
      backgroundImage: {
        'doc': "url('../frontend/src/assets/DOC.png')",
      }
    },
  },
  plugins: [],
}
