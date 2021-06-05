const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        pink: colors.pink,
        purple: colors.purple
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
