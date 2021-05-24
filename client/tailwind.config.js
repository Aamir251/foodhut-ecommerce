const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors : {
      primary : 'var(--primary)',
      secondary : 'var(--secondary)',
      bgPrimary : 'var(--bg-primary)'
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
