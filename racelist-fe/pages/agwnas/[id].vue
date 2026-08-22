<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <NuxtLink to="/" class="inline-block mb-6 text-blue hover:text-blue-deep transition-colors">
      ← Επιστροφή στην αρχική
    </NuxtLink>
    <div v-if="race">
      <h1 class="font-display text-3xl font-semibold text-center text-ink mb-8">{{ race.Title }}</h1>

      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg">
        <div class="space-y-4">
          <FlipCountdown :date="race.Date" />
          <div>
            <span class="font-semibold">Ημερομηνία:</span>
            {{ format(race.Date) }}
          </div>
          <div>
            <span class="font-semibold">Τοποθεσία:</span> {{ race.Location }}
          </div>
          <div v-if="race.Description">
            <span class="font-semibold">Περιγραφή</span>
            <p class="mt-2">{{ race.Description }}</p>
          </div>
          <div v-if="race.Distances?.length">
            <span class="font-semibold text-xl">Αποστάσεις</span>
            <div class="mt-4 space-y-2">
              <DistanceBar
                v-for="distance in sortedDistances"
                :key="distance.text"
                :distance="distance"
              />
            </div>
          </div>
          <div v-if="race.SignupLink" class="mt-12 text-center">
            <a
              :href="
                race.SignupLink.includes('?')
                  ? `${race.SignupLink}&utm_source=racelist.gr`
                  : `${race.SignupLink}?utm_source=racelist.gr`
              "
              class="inline-block bg-blue-deep text-paper px-7 py-3 rounded-full font-semibold text-sm hover:bg-ink transition-colors"
              target="_blank"
            >
              Εγγραφή στον αγώνα
            </a>
          </div>
        </div>
      </div>

      <div v-if="race.ExtraInfo?.RacePromoVideoId" class="mt-5">
        <h2 class="py-3 font-display text-2xl font-semibold text-blue text-center">
          Promo Βίντεο
        </h2>
        <YoutubeVideo :video-id="race.ExtraInfo.RacePromoVideoId" />
      </div>

      <div v-if="race.ExtraInfo?.RaceBriefVideoId" class="mt-5">
        <h2 class="py-3 font-display text-2xl font-semibold text-blue text-center">
          Briefing Βίντεο
        </h2>
        <YoutubeVideo :video-id="race.ExtraInfo.RaceBriefVideoId" />
      </div>
    </div>
    <div v-else class="text-center text-lg text-grey">Ο αγώνας δεν βρέθηκε</div>
  </div>
</template>

<script setup>
  import { formatDate } from '~/shared/formatters';
  import allRaces from '~/public/min.races.json';

  const format = formatDate;
  const route = useRoute();

  // Helper function to extract numeric value from distance string
  const extractDistanceValue = (distanceStr) => {
    // Match patterns like "5K", "10km", "21.1km", "42.195km", "Half Marathon", "Marathon"
    const str = distanceStr.toLowerCase();

    if (str.includes('marathon') && !str.includes('half')) {
      return 42.195; // Full marathon
    }
    if (str.includes('half') || str.includes('ημιμαραθώνιος')) {
      return 21.1; // Half marathon
    }

    // Extract number from string (handles formats like "5K", "10km", "21.1km")
    const match = str.match(/(\d+(?:\.\d+)?)/);
    if (match) {
      const num = parseFloat(match[1]);
      // If it's a small number (likely in km), return as is
      // If it's a large number (likely in meters), convert to km
      return num > 100 ? num / 1000 : num;
    }

    return 0; // Fallback for unparseable distances
  };

  // Computed property for sorted distances
  const sortedDistances = computed(() => {
    if (!race.value?.Distances?.length) return [];

    // Parse and sort distances
    const parsedDistances = race.value.Distances.map((distance) => ({
      text: distance,
      value: extractDistanceValue(distance),
    })).sort((a, b) => a.value - b.value);

    return parsedDistances;
  });

  const race = computed(
    () =>
      allRaces.find(
        (r) =>
          r.Slug === route.params.id || r.Slug === `${route.params.id}/`,
      ) ?? null,
  );

  useHead(() => ({
    title: race.value
      ? `${race.value.Title} | racelist.gr`
      : 'Αγώνας | racelist.gr',
    link: [
      race.value?.Slug
        ? {
            rel: 'canonical',
            href: `https://racelist.gr/agwnas/${race.value.Slug}`,
          }
        : {},
    ],
    meta: [
      {
        name: 'description',
        content: race.value
          ? `${race.value.Title} στις ${race.value.Date} στην τοποθεσία ${
              race.value.Location
            }. ${race.value.Distances?.join(', ')}`
          : 'Λεπτομέρειες αγώνα δρόμου',
      },
    ],
  }));

  watchEffect(() => {
    if (!race.value?.Slug) return;

    const url = `https://racelist.gr/agwnas/${race.value.Slug}`;

    useJsonld({
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: race.value.Title,
      startDate: race.value.Date,
      url,
      location: {
        '@type': 'Place',
        name: race.value.Location,
        address: race.value.Location,
      },
      ...(race.value.Description
        ? { description: race.value.Description }
        : {}),
      ...(race.value.SignupLink
        ? {
            offers: {
              '@type': 'Offer',
              url: race.value.SignupLink,
            },
          }
        : {}),
      organizer: {
        '@type': 'Organization',
        name: 'racelist.gr',
        url: 'https://racelist.gr',
      },
    });

    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(
            buildBreadcrumbJsonld([
              { name: 'Αρχική', url: 'https://racelist.gr/' },
              { name: 'Αγώνες', url: 'https://racelist.gr/agwnes/' },
              { name: race.value.Title, url },
            ]),
          ),
        },
      ],
    });
  });
</script>
