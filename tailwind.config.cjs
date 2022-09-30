/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
        secondary: colors.emerald,
        neutral: colors.stone,
      },
    },
  },
  plugins: [],
}
