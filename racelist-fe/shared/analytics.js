// GA4 event parameters for races and articles. Values stay short, stable and
// English so they group cleanly as custom dimensions in GA4 reports.
import { isTrail } from './raceType';
import { parseLocation } from './location';

const distanceKmOf = (text) => {
  const str = String(text).toLowerCase();
  if (str.includes('half') || str.includes('ημιμαραθ')) return 21.1;
  if (str.includes('marathon') || str.includes('μαραθ')) return 42.195;
  // "κm" covers entries typed with a Greek kappa
  const match = str.match(/(\d+(?:[.,]\d+)?)\s*(k|κ)?/);
  if (!match) return null;
  const num = parseFloat(match[1].replace(',', '.'));
  // "1000m" style values are metres
  return match[2] || num <= 100 ? num : num / 1000;
};

export const distanceCategory = (text) => {
  const km = distanceKmOf(text);
  if (km === null) return 'other';
  if (km >= 4.5 && km <= 5.5) return '5k';
  if (km >= 9.5 && km <= 10.5) return '10k';
  if (km >= 20.5 && km <= 21.5) return 'half_marathon';
  if (km >= 41.5 && km <= 42.5) return 'marathon';
  if (km > 42.5) return 'ultra';
  return 'other';
};

export const raceEventParams = (race) => {
  const { area, full } = parseLocation(race?.Location);
  const distances = [...new Set((race?.Distances || []).map(distanceCategory))];
  return {
    race_name: race?.Title,
    race_slug: race?.Slug?.replace(/\/$/, ''),
    race_date: race?.Date,
    race_city: area || full,
    // A race usually offers several distances; send them all, comma-separated
    race_distance: distances.join(','),
    race_type: isTrail(race) ? 'trail' : 'road',
  };
};

// Articles carry no category field, so infer one from the slug.
// Order matters: the first matching category wins.
const ARTICLE_CATEGORIES = [
  ['results', ['apotelesmata']],
  ['nutrition', ['trwme', 'fame', 'diatrofi', 'gel']],
  [
    'gear',
    ['review', 'shoes', 'papoutsi', 'garmin', 'suunto', 'coros', 'amazfit',
      'huawei', 'nike', 'adidas', 'new-balance', 'smartwatch', 'zoni'],
  ],
  ['race_news', ['2025', '2026', '2027', 'marathon-', 'hmimarathonios']],
];

export const articleCategory = (slug) => {
  const s = String(slug).toLowerCase();
  const hit = ARTICLE_CATEGORIES.find(([, kws]) => kws.some((kw) => s.includes(kw)));
  return hit ? hit[0] : 'training';
};
