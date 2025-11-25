<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <NuxtLink to="/" class="inline-block mb-6 text-[#0057A0] hover:underline">
      ← Επιστροφή στην αρχική
    </NuxtLink>
    <div v-if="race">
      <h1 class="text-3xl text-center text-[#0057A0] mb-8">{{ race.Title }}</h1>

      <div class="bg-[#f4f4f4] border-l-4 border-[#0057A0] p-6 rounded">
        <div class="space-y-4">
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
              class="inline-block bg-[#0057A0] text-white px-6 py-2 rounded hover:bg-[#0057A0]/90 transition-colors"
              target="_blank"
            >
              Εγγραφή στον αγώνα
            </a>
          </div>
        </div>
      </div>

      <div v-if="race.ExtraInfo?.RacePromoVideoId" class="mt-5">
        <h2 class="py-3 text-2xl font-semibold text-[#0057A0] text-center">
          Promo Βίντεο
        </h2>
        <YoutubeVideo :video-id="race.ExtraInfo.RacePromoVideoId" />
      </div>

      <div v-if="race.ExtraInfo?.RaceBriefVideoId" class="mt-5">
        <h2 class="py-3 text-2xl font-semibold text-[#0057A0] text-center">
          Briefing Βίντεο
        </h2>
        <YoutubeVideo :video-id="race.ExtraInfo.RaceBriefVideoId" />
      </div>
    </div>
    <div v-else class="text-center text-lg">Ο αγώνας δεν βρέθηκε</div>
  </div>
</template>

<script setup>
  import { formatDate } from '~/shared/formatters';

  const format = formatDate;
  const route = useRoute();
  const race = ref(null);

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

  onMounted(async () => {
    try {
      const res = await fetch('/min.races.json');
      const races = await res.json();
      race.value = races.find(
        (r) => r.Slug === route.params.id || r.Slug === `${route.params.id}/`
      );
    } catch (error) {
      console.error('Error loading race:', error);
    }
  });

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
</script>
