export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue2-starter-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/reset.css',
    'vue-animate-transitions/dist/vue-animate-transitions.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vuex', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  styleResources: {
    scss: ['@/assets/styles/variables.scss'],
    hoistUseStatements: true,
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  store: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_API_URL,
    },
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_API_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
