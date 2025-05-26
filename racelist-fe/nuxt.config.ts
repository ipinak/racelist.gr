// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: [
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
  ],
  // Google analytics
  gtag: {
    id: 'G-1YBT2BFVT9',
  },
  site: {
    name: 'racelist.gr',
    url: 'https://racelist.gr',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      title: 'Βρες Αγώνες Δρόμου & Βουνού σε Όλη την Ελλάδα | racelist.gr',
      htmlAttrs: {
        lang: 'el',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },

        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },

        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },

        { rel: 'manifest', href: '/site.webmanifest' },

        { rel: 'canonical', href: 'https://racelist.gr' },
      ],
      meta: [
        { charset: 'utf-8' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

        { name: 'msvalidate.01', content: 'FA3820F660BEC14548B973CE53E161B0' },

        {
          property: 'og:title',
          content:
            'Βρες Αγώνες Δρόμου & Βουνού σε Όλη την Ελλάδα για το 2025 | racelist.gr',
        },
        {
          property: 'og:description',
          content:
            'Βρες όλους τους αγώνες δρόμου και βουνού σε κάθε γωνιά της Ελλάδας για το 2025. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
        },
        { property: 'og:url', content: 'https://racelist.gr' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: 'https://racelist.gr/racelist-banner.jpg',
        },
        { property: 'og:site_name', content: 'racelist.gr' },
        { property: 'og:locale', content: 'el_GR' },

        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content:
            'Βρες Αγώνες Δρόμου & Βουνού σε Όλη την Ελλάδα για το 2025 | racelist.gr',
        },
        {
          name: 'twitter:description',
          content:
            'Βρες όλους τους αγώνες δρόμου και βουνού σε κάθε γωνιά της Ελλάδας για το 2025. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
        },
        {
          name: 'twitter:image',
          content: 'https://racelist.gr/racelist-banner.jpg',
        },

        {
          name: 'description',
          content:
            'Βρες Αγώνες Δρόμου & Βουνού σε Όλη την Ελλάδα | racelist.gr',
        },
      ],

      script: [
        {
          type: 'application/ld+json',
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "racelist.gr",
            "url": "https://racelist.gr",
            "description": "Βρες όλους τους αγώνες δρόμου και βουνού σε κάθε γωνιά της Ελλάδας για το 2025. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση."
          }`,
        },
      ],
    },
  },
});
