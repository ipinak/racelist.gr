import { useConsent } from '~/composables/useConsent';

// Re-applies a stored cookie choice on every visit. Module plugins (nuxt-gtag)
// run first, so the update is queued right after GA's consent default and
// before gtag.js loads; `wait_for_update` holds the first hit for it.
export default defineNuxtPlugin(() => {
  useConsent().restore();
});
