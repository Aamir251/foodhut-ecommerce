const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors : {
      primary : 'var(--primary)',
      secondary : 'var(--secondary)',
      bgPrimary : 'var(--bg-primary)',
      gray : 'var(--gray)',
      lightgray : 'var(--lightgray)'
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
