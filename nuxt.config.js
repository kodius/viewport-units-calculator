export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Viewport Units Converter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Convert px to vw here! Only for Front-end developers :)' },
      { hid: 'og:title', property: 'og:title', content: 'Viewport Units Converter' },
      { hid: 'og:description', property: 'og:description', content: 'Convert px to vw here! Only for Front-end developers :)' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Viewport Units Converter' },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },   // other configs

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-clipboard2',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
