// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@stefanobartoletti/nuxt-social-share'
  ],
  css: [
    'boxicons/css/boxicons.min.css',
    '@/assets/css/input.css'
  ],
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-09-09'
})
