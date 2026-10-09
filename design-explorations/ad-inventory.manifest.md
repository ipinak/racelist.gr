# ad-inventory — data manifest

Dataset: `racelist-fe/public/min.races.json` — 516 races, 46 upcoming (as of 2026-10-09).

| Variant · element | Field | Class | Count |
|---|---|---|---|
| A · title, date, location | `Title`, `Date`, `Location` | ✅ Real | 516/516 |
| A · distances | `Distances` | ✅ Real | 505/516 (46/46 upcoming) |
| A · "Εγγραφή →" button | `SignupLink` | ⚠️ Sometimes | 477/516 (42/46 upcoming) |
| A · organizer image 1200×300 | — advertiser-supplied | ❌ Aspirational | 0/516 |
| A · featured flag + run dates | — new sponsorship record | ❌ Aspirational | 0/516 |
| B · display creatives | — ad server / advertiser | ❌ Aspirational | 0 |
| B · 300×600 sidebar | — articles are single-column today | ❌ Aspirational (layout) | 0/49 articles |
| C · sponsor name, logo, offer, code | — advertiser-supplied, per month | ❌ Aspirational | 0/24 monthly pages |
| D · tool inputs/results | computed by each tool | ✅ Real | 6/6 tools |
| D · sponsor logo + product card | — advertiser-supplied | ❌ Aspirational | 0/6 tools |
| E · road/trail targeting | derived, `shared/raceType.js` `isTrail` | ✅ Real | 516/516 |
| E · distance targeting | `Distances` | ✅ Real | 505/516 |
| E · product tiles | — shop product feed | ❌ Aspirational | 0 |

## Decisions for B + E (2026-10-09)

| Gap | Decision |
|---|---|
| B · display creatives | **Source:** direct-sold, self-hosted images in `public/ads/display/`, configured in `shared/ads/display-campaigns.json` |
| B · 300×600 sidebar | **Built:** sticky right column on articles at ≥1280px (`app.vue`) |
| B · 300×250 in-article | **Manual:** `<AdSlot size="medium-rectangle">` placed by hand per article; no auto-insertion |
| B · unsold | **Fallback:** sidebar shows the HouseAd `tile`; other sizes render nothing |
| E · product tiles | **Source:** `shared/ads/gear-campaigns.json`, images in `public/ads/gear/` |
| E · unsold | **Cut:** no shelf when no products match |

Deliberate deviation: race pages are 896px wide, so the shelf scrolls sideways (240×300 tiles, 3½ visible) instead of the mock's 4-wide 1020px row.
