// Heuristic road/trail classification.
// The race dataset (public/min.races.json) has no Category/Type field, so
// we infer it from keywords in the title/location. Imperfect, but gives the
// visual road/trail distinction the design relies on without a data change.
const TRAIL_KEYWORDS = [
  'trail',
  'ορειν',
  'mountain',
  'βουν',
  'ανώμαλο',
  'ultra',
  'sky',
  'βαλτσαμ',
];

export const isTrail = (race) => {
  const haystack = `${race?.Title || ''} ${race?.Location || ''}`.toLowerCase();
  return TRAIL_KEYWORDS.some((kw) => haystack.includes(kw));
};
