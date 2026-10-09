// House ads: promotions for our own products, rendered by <HouseAd />.
//
// Fields:
//   id           unique key, also used as the analytics/utm campaign
//   type         'app' (App Store) | 'web'
//   enabled      false hides the ad everywhere
//   name         product name, as written on the App Store / site
//   description  one sentence on what it does for the user
//   url          App Store product page (https://apps.apple.com/gr/app/...) or site URL
//   devices      app only, Apple devices it actually runs on: 'iPhone', 'iPad'
//   icon         optional, square image in /public; falls back to a monogram
//   screenshot   optional, app screen as it appears running, no device frame
//   qrCode       optional, app only, QR from Apple's App Store Marketing Tools (desktop)
//   ctaLabel     optional, web only, button text
//   providerToken  optional, app only, App Store Connect provider token (pt) for campaign analytics
//
// App Store rules (developer.apple.com/app-store/marketing/guidelines):
// the badge must be Apple's unmodified artwork. This is the official black
// English badge (same file hexipop.app uses); swap in the Greek one from Apple's
// Marketing Resources if wanted. Never recreate or restyle it.
// Assets live in /public/house-ads/.

export const APP_STORE_BADGE = {
  src: '/house-ads/app-store-badge-en.svg',
  alt: 'Download on the App Store',
};

export const houseAds = [
  {
    id: 'ios-app',
    type: 'app',
    enabled: true,
    name: 'Hexi Pop',
    description:
      'Δωρεάν εξαγωνικό παζλ: βάλε κομμάτια, γέμισε μια σειρά ή διαγώνιο για να σκάσει και κάνε σερί από κόμπο.',
    url: 'https://apps.apple.com/gr/app/hexipop/id6810778972',
    devices: ['iPhone'],
    icon: '/house-ads/hexipop-icon.png',
    screenshot: '/house-ads/hexipop-screen-game.jpg',
    qrCode: null,
    providerToken: null,
  },
  {
    id: 'website',
    type: 'web',
    enabled: true,
    name: 'Hexi Pop',
    description: 'Γέμισε τις γραμμές και κάν’ τες να σκάσουν. Ένα δωρεάν εξαγωνικό παζλ για iPhone.',
    url: 'https://hexipop.app/el/',
    icon: '/house-ads/hexipop-icon.png',
    screenshot: '/house-ads/hexipop-screen-home.jpg',
    ctaLabel: 'Δες το Hexi Pop',
  },
];

// Which ad each placement shows. adId: null turns the placement off.
// The banner never shows the App Store badge (one badge per page), so an app
// ad there gets a text "Λήψη" button instead.
export const houseAdPlacements = {
  sitewide: { adId: 'website', layout: 'banner' }, // above the header, every page
  'race-list': { adId: 'ios-app', afterRace: 5 }, // home list view + monthly calendars
  'race-page': { adId: 'ios-app' }, // /agwnas/[slug], below the race details
  article: { adId: 'website' }, // end of every /arthra/ article
};

export const findHouseAd = (id) =>
  houseAds.find((ad) => ad.enabled && (!id || ad.id === id)) ?? null;

// Position of the race-list ad: after the configured race, or after the last
// one on shorter lists. -1 = no ad.
export function houseAdIndexFor(raceCount) {
  const { adId, afterRace = 5 } = houseAdPlacements['race-list'];
  if (!adId || !findHouseAd(adId) || raceCount === 0) return -1;
  return Math.min(afterRace, raceCount) - 1;
}

export const hasAppStoreAds = () =>
  houseAds.some((ad) => ad.enabled && ad.type === 'app');

export function houseAdHref(ad, placement) {
  const url = new URL(ad.url);
  if (ad.type === 'app') {
    if (ad.providerToken) {
      url.searchParams.set('pt', ad.providerToken);
      url.searchParams.set('ct', `racelist-${placement}`);
    }
  } else {
    url.searchParams.set('utm_source', 'racelist.gr');
    url.searchParams.set('utm_medium', 'house_ad');
    url.searchParams.set('utm_campaign', ad.id);
    url.searchParams.set('utm_content', placement);
  }
  return url.toString();
}
