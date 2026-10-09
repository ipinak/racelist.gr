export function useAnalytics() {
  const triggerEvent = (name, params = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params)
    }
  }

  return { triggerEvent }
}
