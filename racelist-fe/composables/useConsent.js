// Cookie consent state, shared by the banner, the footer link and the
// consent plugin. The choice lives in localStorage and maps onto Google
// Consent Mode v2 signals.
const STORAGE_KEY = 'consent:v1';
// Ask again after a year, as the Greek DPA (HDPA) guidance expects
const MAX_AGE_MS = 365 * 864e5;

const readStored = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || Date.now() - stored.ts > MAX_AGE_MS) return null;
    return { analytics: !!stored.analytics, ads: !!stored.ads };
  } catch {
    return null;
  }
};

const toConsentMode = ({ analytics, ads }) => ({
  analytics_storage: analytics ? 'granted' : 'denied',
  ad_storage: ads ? 'granted' : 'denied',
  ad_user_data: ads ? 'granted' : 'denied',
  ad_personalization: ads ? 'granted' : 'denied',
});

export function useConsent() {
  // null until the visitor has chosen (or the stored choice expired)
  const choice = useState('consent:choice', () => null);
  const bannerOpen = useState('consent:open', () => false);
  const { gtag } = useGtag();

  const apply = (value) => gtag('consent', 'update', toConsentMode(value));

  // Called once on the client, before GA sends its first hit
  const restore = () => {
    choice.value = readStored();
    if (choice.value) apply(choice.value);
    else bannerOpen.value = true;
  };

  const save = (value) => {
    choice.value = { analytics: !!value.analytics, ads: !!value.ads };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choice.value, ts: Date.now() }));
    } catch {
      // Storage blocked: the choice still applies for this page view
    }
    apply(choice.value);
    bannerOpen.value = false;
  };

  return {
    choice,
    bannerOpen,
    restore,
    save,
    acceptAll: () => save({ analytics: true, ads: true }),
    rejectAll: () => save({ analytics: false, ads: false }),
    openSettings: () => (bannerOpen.value = true),
  };
}
