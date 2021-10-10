module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    colors: {
      primary: '#FF6464',
      secondary: '#00A8CC',
      dark: '#21243D',
      light: '#8695A4',
      blue: {
        light: '#EDF7FA'
      }
    },
    fontFamily: {
      body: ['"Heebo"', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '856px'
          },
          '@screen xl': {
            maxWidth: '1036px'
          },
          '@screen 2xl': {
            maxWidth: '1210px'
          }
        }
      })
    }
  ]
}
