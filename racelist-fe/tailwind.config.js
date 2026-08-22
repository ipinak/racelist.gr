/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './composables/**/*.{vue,js,ts}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

