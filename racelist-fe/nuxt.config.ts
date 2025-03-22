// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/ui',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  app: {
    head: {
      title:
        'MCC Code Database - Search Merchant Category Codes (Visa & MasterCard)', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        {
          name: 'description',
          content:
            'Easily search and find MCC (Merchant Category Codes) for Visa & MasterCard. Get details on business categories, payment brands, and transaction classifications.',
        },
      ],
    },
  },
})