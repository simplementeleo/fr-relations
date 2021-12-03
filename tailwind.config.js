module.exports = {
  // purge: [],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: '#333',
        base: '#fa5655',
        redme: '#fe0000'
      }
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
