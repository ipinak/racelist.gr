export default defineNuxtRouteMiddleware((to) => {
  // Check if the path ends with ".html"
  if (to.path.endsWith('.html')) {
    // 301 (Permanent) redirect in Nuxt 3
    return navigateTo(to.path.slice(0, -5), { redirectCode: 301 })
  }
})