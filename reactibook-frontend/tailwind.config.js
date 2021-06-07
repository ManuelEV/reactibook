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
        purple: colors.purple,
        primary: {
          100: '#99ccff',
          200: '#80bfff',
          300: '#66b3ff',
          400: '#4da6ff',
          500: '#3399ff',
          600: '#1a8cff',
          700: '#0080ff',
          800: '#0073e6',
          900: '#0066cc',
        },
        secondary: {
          100: '#f17493',
          200: '#ef5d81',
          300: '#ed456f',
          400: '#ea2e5d',
          500: '#ea2a5a',
          600: '#e8174b',
          700: '#d11544',
          800: '#ba123c',
          900: '#a21035',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
