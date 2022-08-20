/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          550: '#ef233c',
          650: '#d90429'
        },
        gray: {
          450: '#8d99ae'
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: '#edf2f4',
      gray: colors.slate,
      yellow: colors.amber,
      green: colors.emerald,
      pink: colors.rose,
      purple: colors.purple,
      red: colors.red,
      blue: colors.blue,
    }
  },
  plugins: [],
};
