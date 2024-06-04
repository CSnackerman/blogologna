// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/eslint'],
  devtools: { enabled: false },
  css: ['~/assets/styles/base.scss'],
  eslint: {
    config: {
      // stylistic: true
    },
  },
});
