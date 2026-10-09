// Sold ad space: display banners (<AdSlot />) and the race-page gear shelf
// (<GearShelf />). Campaign data lives in the JSON files next to this one;
// see docs/advertising.md for how to add a campaign.

import { isTrail } from '~/shared/raceType';
import displayCampaigns from './display-campaigns.json';
import gearCampaigns from './gear-campaigns.json';

// Display size in CSS px. Upload creatives at 2× these for retina screens.
export const AD_SIZES = {
  leaderboard: { width: 728, height: 90 },
  'mobile-banner': { width: 320, height: 100 },
  'medium-rectangle': { width: 300, height: 250 },
  'half-page': { width: 300, height: 600 },
};

// Campaign dates are inclusive and in Greek time.
export const athensToday = () =>
  new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Athens' });

const isLive = (campaign, today) =>
  campaign.enabled &&
  (!campaign.start || campaign.start <= today) &&
  (!campaign.end || campaign.end >= today);

// The leaderboard slot switches to the 320×100 mobile banner below 768px,
// so a campaign needs both creatives to fill it.
const requiredCreatives = (size) =>
  size === 'leaderboard' ? ['leaderboard', 'mobile-banner'] : [size];

// First live campaign in file order that has the creative and placement wins.
export function findDisplayCampaign(size, placement, today) {
  return (
    displayCampaigns.find(
      (c) =>
        isLive(c, today) &&
        (!c.placements || c.placements.includes(placement)) &&
        requiredCreatives(size).every((s) => c.creatives?.[s]),
    ) ?? null
  );
}

export function adHref(url, campaignId, medium, content) {
  const u = new URL(url);
  u.searchParams.set('utm_source', 'racelist.gr');
  u.searchParams.set('utm_medium', medium);
  u.searchParams.set('utm_campaign', campaignId);
  if (content) u.searchParams.set('utm_content', content);
  return u.toString();
}

// "21.1km" → 21.1, "1500m" → 1.5, "Ημιμαραθώνιος" → 21.1
export function distanceKm(text) {
  const str = String(text).toLowerCase();
  const match = str.match(/(\d+(?:[.,]\d+)?)\s*(km|χλμ|k|m)?/);
  if (match) {
    const value = parseFloat(match[1].replace(',', '.'));
    if (match[2] === 'm' || (!match[2] && value > 100)) return value / 1000;
    return value;
  }
  if (str.includes('ημιμαραθ') || str.includes('half')) return 21.1;
  if (str.includes('μαραθ') || str.includes('marathon')) return 42.2;
  return null;
}

// Stable per-race ordering, so each race page shows a different mix of
// products without differing between the server render and the browser.
function seededOrder(items, seed) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return items
    .map((item, i) => ({ item, key: ((h ^ (i * 2654435761)) >>> 0) % 1000003 }))
    .sort((a, b) => a.key - b.key)
    .map(({ item }) => item);
}

export const GEAR_MAX_PRODUCTS = 6;

export function findGearProducts(race, today) {
  const type = isTrail(race) ? 'trail' : 'road';
  const distances = (race.Distances || []).map(distanceKm).filter((d) => d);

  const fits = (p) =>
    (!p.raceType || p.raceType === 'any' || p.raceType === type) &&
    (p.minKm == null && p.maxKm == null
      ? true
      : distances.some((d) => d >= (p.minKm ?? 0) && d <= (p.maxKm ?? Infinity)));

  const products = gearCampaigns
    .filter((c) => isLive(c, today))
    .flatMap((c) =>
      c.products
        .filter(fits)
        .map((p) => ({ ...p, shop: c.shop, campaignId: c.id })),
    );

  return seededOrder(products, race.Slug || race.Title || '').slice(
    0,
    GEAR_MAX_PRODUCTS,
  );
}
