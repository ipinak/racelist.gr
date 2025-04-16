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
    extend: {
      colors: {
        primary: "#0057A0",      // Main brand blue
        secondary: "#4CAF50",    // Trail green
        accent: "#FF6B00",       // Action orange
        background: "#F2F4F7",   // Light background
        text: "#2D2D2D",         // Primary text
        muted: "#8C9AA3",        // Subtle gray for borders/labels
      },
    },
  },
  plugins: [],
}

