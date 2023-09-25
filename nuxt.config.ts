// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://nodejstest-kl9g.onrender.com/api/v1',
      // baseURL: 'http://localhost:5000/api/v1',
    }
  },
  components: true,
  plugins: [
    { src: '~/plugins/vue-input-mask.js', mode: 'client' },
    { src: '~/plugins/api.js', },
  ],
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
})
