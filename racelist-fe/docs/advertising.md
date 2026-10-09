# Advertising on racelist.gr

This doc covers the ad space racelist.gr sells: what each slot is, how to put a campaign live, and how to report results to the advertiser.

There are three systems. All of them are self-hosted: no third-party ad scripts, and no ad cookies.

| System | Component | Data | What it is |
|---|---|---|---|
| Display banners | `<AdSlot>` | `shared/ads/display-campaigns.json` | Standard banners (728×90, 320×100, 300×250, 300×600), sold directly |
| Gear shelf | `<GearShelf>` | `shared/ads/gear-campaigns.json` | Product tiles on race pages, matched to road/trail and distance |
| House ads | `<HouseAd>` | `shared/houseAds.js` | Our own products (Hexi Pop); fill space that hasn't been sold |

Shared logic lives in `shared/ads/index.js`. Date handling and tracking live in `composables/useAds.js`.

---

## Where the slots are

| Page | Slot | Size | Unsold → |
|---|---|---|---|
| Articles `/arthra/*` | Leaderboard above the article | 728×90 desktop, 320×100 below 768px | nothing |
| Articles `/arthra/*` | Sticky sidebar (screens ≥1280px only) | 300×600 | Hexi Pop house-ad tile |
| Articles `/arthra/*` | In-article rectangle (added by hand, see below) | 300×250 | nothing |
| Race pages `/agwnas/*` | Leaderboard above the title | 728×90 / 320×100 | nothing |
| Race pages `/agwnas/*` | Gear shelf below the race details | tiles 240×300 (200×280 on mobile), up to 6, scrolls sideways | nothing |

The slots are wired in `app.vue` (articles: leaderboard and sidebar) and `pages/agwnas/[id].vue` (race pages: leaderboard and gear shelf).

---

## Selling a display campaign

### 1. Get the creatives from the advertiser

| Slot | Display size | Upload at (2×, retina) | Needed for |
|---|---|---|---|
| `leaderboard` | 728×90 | 1456×180 | the top slot on desktop |
| `mobile-banner` | 320×100 | 640×200 | the top slot on phones (**required together with `leaderboard`**) |
| `medium-rectangle` | 300×250 | 600×500 | in-article rectangles |
| `half-page` | 300×600 | 600×1200 | article sidebar |

Rules to give the advertiser:
- **Formats:** JPG, PNG, WebP, GIF or SVG, at most 150 KB each.
- **No HTML5 or third-party tags.** We only serve images.
- **Size:** keep the exact aspect ratio. Images are scaled to fill the slot and cropped if the ratio is off.
- **Link:** one landing page. UTM parameters are added automatically.

The advertiser can buy any subset of the sizes. A slot is only filled by campaigns that have the creative for it.

### 2. Add the files

Put them in `public/ads/display/<campaign-id>/`, for example:

```
public/ads/display/runshop-nov26/728x90.jpg
public/ads/display/runshop-nov26/320x100.jpg
public/ads/display/runshop-nov26/300x600.jpg
```

### 3. Add the campaign

Add an entry to `shared/ads/display-campaigns.json`:

```json
{
  "id": "runshop-nov26",
  "enabled": true,
  "advertiser": "RunShop",
  "start": "2026-11-01",
  "end": "2026-11-30",
  "url": "https://runshop.gr/offers",
  "alt": "RunShop: -20% σε παπούτσια trail",
  "placements": ["article", "race-page"],
  "creatives": {
    "leaderboard": "/ads/display/runshop-nov26/728x90.jpg",
    "mobile-banner": "/ads/display/runshop-nov26/320x100.jpg",
    "half-page": "/ads/display/runshop-nov26/300x600.jpg"
  }
}
```

| Field | Meaning |
|---|---|
| `id` | Unique, used in analytics and as `utm_campaign`. Use `advertiser-period`. |
| `enabled` | `false` switches it off without deleting it. |
| `start`, `end` | Inclusive dates, `YYYY-MM-DD`, Greek time. Either can be omitted. |
| `url` | Landing page. `utm_source=racelist.gr&utm_medium=display&utm_campaign=<id>&utm_content=<placement>-<size>` is appended. |
| `alt` | Image alt text (accessibility). Falls back to `advertiser`. |
| `placements` | Which pages: `"article"`, `"race-page"`. Omit for all. |
| `creatives` | Only the sizes they bought. |

### 4. Deploy

Run `npm run generate` and deploy as usual.

**How rotation works:**
- **One campaign per slot:** each slot shows the first live campaign in file order. To give a campaign priority, put it higher in the file. There's no rotation between campaigns, so sell each slot to one advertiser per period.
- **Dates switch on time:** the pages are prerendered, so the HTML holds whatever was live at build time. The browser re-checks the date on load, so a campaign that started or ended since the last deploy still switches on the right day without a rebuild. Redeploy after a campaign ends anyway, so the HTML is clean.

---

## Selling a gear shelf campaign

The shelf shows up to 6 products from all live gear campaigns on each race page. Products are filtered per race:
- **Race type:** `trail` or `road`. This comes from `isTrail()` in `shared/raceType.js`, which checks the race's title and location for keywords such as "ορειν", "trail", "sky" and "ultra".
- **Distance:** a product shows if **any** of the race's distances falls within its `minKm`–`maxKm`. Without a range, it shows on every distance.

Order is shuffled per race, using the race slug as the seed. Different races show different products, but the same race always shows the same order.

### 1. Get the products

For each product, collect:
- **Image:** 480×340 (landscape, 1.41:1), JPG or WebP, at most 80 KB.
- **Title:** at most about 40 characters (it's cut to two lines).
- **Price:** in euros.
- **Product URL.**

Put the images in `public/ads/gear/<campaign-id>/`.

### 2. Add the campaign

Add an entry to `shared/ads/gear-campaigns.json`:

```json
{
  "id": "runshop-gear-nov26",
  "enabled": true,
  "shop": "RunShop",
  "start": "2026-11-01",
  "end": "2026-12-31",
  "products": [
    {
      "id": "speedgoat-6",
      "title": "Hoka Speedgoat 6",
      "price": 159.9,
      "image": "/ads/gear/runshop-gear-nov26/speedgoat-6.jpg",
      "url": "https://runshop.gr/hoka-speedgoat-6",
      "raceType": "trail",
      "minKm": 10
    }
  ]
}
```

| Product field | Meaning |
|---|---|
| `id` | Unique within the campaign; reported as `product_id` on clicks and as `utm_content`. |
| `raceType` | `"trail"`, `"road"` or `"any"`. |
| `minKm`, `maxKm` | Optional distance range in km. `"minKm": 10` means "races with a 10 km+ distance". |
| `price` | Number, shown as `139,90 €`. Omit to hide the price. |

Links get `utm_source=racelist.gr&utm_medium=gear_shelf&utm_campaign=<campaign id>&utm_content=<product id>`. Shops can see sales from racelist in their own analytics, which is what CPC or commission billing needs.

### Checking targeting

Open a trail race (e.g. `/agwnas/12oi-oreinoi-agones-kabousiou-2026/`) and a road race (e.g. `/agwnas/9o-olympic-day-run-greece/`). Check that each shows the right products. If a race is wrongly classed as road or trail, fix the keywords in `shared/raceType.js`.

---

## Adding a slot somewhere else

`<AdSlot>` works on any page:

```vue
<AdSlot size="medium-rectangle" placement="article" />
```

| Prop | Values |
|---|---|
| `size` | `leaderboard` (switches to `mobile-banner` below 768px), `medium-rectangle`, `half-page` |
| `placement` | Any string; campaigns target it through `"placements"`. Existing: `article`, `race-page`. A new value, e.g. `tools`, needs adding to the campaigns that should run there. |
| `fallback` | Optional `houseAdPlacements` key from `shared/houseAds.js` to show when unsold (e.g. `"sidebar"`). Without it, the slot renders nothing. |

**In-article rectangle:** articles are hand-written pages in `pages/arthra/`. To sell a 300×250 inside one, add the line above between two paragraphs, around the third paragraph. There's no automatic in-article insertion.

**Gear shelf on another page:** use `<GearShelf :race="race" />`. It needs a race object from `min.races.json`.

---

## Reporting to advertisers

Both components send Google Analytics events through `useAnalytics()`:

| Event | Sent when | Parameters |
|---|---|---|
| `ad_impression` | Once per page view, when at least 50% of the ad has been on screen | `ad_type` (`display` / `gear_shelf`), `campaign_id`, `ad_size`, `placement`, `race` (gear shelf) |
| `ad_click` | On click | Same, plus `product_id` (gear shelf) |

The house ad sends `house_ad_click` (`ad_id`, `placement`, `layout`).

**One-time setup in Google Analytics:** Admin → Custom definitions → create event-scoped dimensions for `campaign_id`, `ad_type`, `ad_size`, `placement` and `product_id`. Parameters only show in reports after they're registered, and data isn't backfilled, so do this before the first campaign.

**Monthly report:** Explore → Free form. Use `campaign_id` as the row, `ad_size` and `placement` as columns, and the event count for `ad_impression` and `ad_click` as values. CTR = clicks ÷ impressions. The shop's own UTM data is their conversion report.

---

## Rules we keep

- **Labelling:** every paid unit is labelled "Διαφήμιση" or "Χορηγούμενο", and links use `rel="sponsored noopener"`. Don't remove either; this is required both by Google and by consumer-protection law.
- **No ad cookies:** creatives are plain images hosted by us, so no consent prompt beyond what GA already needs. If Google AdSense or Ad Manager is ever added, a cookie consent banner (GDPR) and an `ads.txt` file become mandatory first.
- **Weight:** keep creatives under the size limits above, because pages are mostly read on phones.
- **Apple rules for the Hexi Pop house ad:**
  - Official badge only.
  - One App Store badge per page.
  - "για iPhone", never "iOS".
  - Keep the Apple trademark line in the footer.

  Details are in the comment at the top of `shared/houseAds.js`.

## Unsold space

Display slots without a campaign render nothing, except the article sidebar, which shows the Hexi Pop tile. Race pages without gear products show no shelf. Nothing is left blank.

To change which house ad fills which spot, edit `houseAdPlacements` in `shared/houseAds.js`.
