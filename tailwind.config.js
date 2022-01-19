module.exports = {
  
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     fontFamily: {
        monserrat: 'Montserrat',
        open     : 'Open+Sans+Condensed',
      },
      colors: {
        primary: '#FE9569',
        secondary:'#DB6307',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
