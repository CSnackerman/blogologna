// https://nuxt.com/docs/api/configuration/nuxt-config

// prettier-ignore
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module', 
    '@nuxt/eslint', 
    '@nuxtjs/supabase',
    'nuxt-icon',
  ],
  devtools: { enabled: false },
  css: ['~/assets/styles/base.scss'],
  imports: {
    dirs: ['types'],
  },
  supabase: {
    redirect: false,
  }
});
