// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../base-nuxt'
  ],
  modules: ['@nuxt/content', 'nuxt-gtag'],
  gtag: {
    id: 'G-PJS5R6V63D'
  },
})
