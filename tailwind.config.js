module.exports = {
  // purge: [],
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayme: '#333',
        basecolor: '#fa5655',
        redme: '#fe0000'
      },
      screens: {
        '2xl': '1520px',
        '3xl': '2100px'
      }
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
