export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Balquimia-Comercial',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'http-equiv', name: 'http-equiv', content: 'text/html' },
      { hid: 'http-equiv', name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    
  },
 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      { src: '~/plugins/filters.js' },  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.URL_API,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

 auth: {
  strategies: {
    laravelSanctum: {
      provider: 'laravel/sanctum',
      url: process.env.URL_API,
      endpoints: {
        user  : { url: '/user',  method: 'get' },
        login : { url: '/login', method: 'post' },
        logout: { url:'/logout', method: 'post'}
      }
    },
   },
   redirect: {
     login: '/',
     logout: '/',
     home: '/dashboard',
     callback:'/'
   }
}
  
}
