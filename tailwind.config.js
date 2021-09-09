module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ola: "#90c0e5"
      },
      fontFamily: {
        'header': ['Futura','sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
