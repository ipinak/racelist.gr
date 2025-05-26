export default defineNuxtRouteMiddleware((to) => {
  // Check if the path ends with ".html"
  if (to.path.includes("/agwnas/")) {
    return navigateTo(to.path)
  }
})