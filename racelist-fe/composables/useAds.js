import { onMounted, onBeforeUnmount, watch } from 'vue';
import { athensToday } from '~/shared/ads';
import { useAnalytics } from '~/composables/useAnalytics';

// Pages are prerendered, so the server picks campaigns by build date. The
// browser starts from that same date (no hydration mismatch) and then moves
// to the real date, so a campaign that started or ended since the last
// deploy still switches on time.
export function useAdDate() {
  const today = useState('ads:today', athensToday);
  onMounted(() => {
    today.value = athensToday();
  });
  return today;
}

// Sends `ad_impression` once when at least half of the element has been
// visible, and returns a `click` handler that sends `ad_click`. Both go to
// Google Analytics with the given params (campaign, slot, page) so
// advertisers can get impression and click counts.
export function useAdTracking(elRef, params) {
  const { triggerEvent } = useAnalytics();
  let observer = null;
  let seen = false;

  const observe = (el) => {
    observer?.disconnect();
    if (!el || seen || typeof IntersectionObserver === 'undefined') return;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && params()) {
          seen = true;
          triggerEvent('ad_impression', params());
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
  };

  onMounted(() => watch(elRef, observe, { immediate: true }));
  onBeforeUnmount(() => observer?.disconnect());

  const click = (extra = {}) => {
    if (params()) triggerEvent('ad_click', { ...params(), ...extra });
  };

  return { click };
}
