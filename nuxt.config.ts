// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: 
  [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    'nuxt-primevue',
  ],

  css: ['primevue/resources/themes/aura-light-green/theme.css'],

  primevue: {
    options: {
      ripple: true,
      inputStyle: 'filled'
    },
    components: {
      prefix: 'Prime',
      include: '*'
    }
  }

})