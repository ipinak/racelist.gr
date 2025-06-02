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
            <span class="font-semibold">Ημερομηνία:</span> {{ race.Date }}
          </div>
          <div>
            <span class="font-semibold">Τοποθεσία:</span> {{ race.Location }}
          </div>
          <div v-if="race.Description">
            <span class="font-semibold">Περιγραφή:</span>
            <p class="mt-2">{{ race.Description }}</p>
          </div>
          <div v-if="race.Distances?.length">
            <span class="font-semibold">Αποστάσεις:</span>
            <ul class="mt-2 list-disc list-inside">
              <li v-for="distance in race.Distances" :key="distance">
                {{ distance }}
              </li>
            </ul>
          </div>
          <div v-if="race.SignupLink" class="mt-6">
            <a
              :href="`${race.SignupLink}?utm_source=racelist.gr`"
              class="inline-block bg-[#0057A0] text-white px-6 py-2 rounded hover:bg-[#0057A0]/90 transition-colors"
              target="_blank"
            >
              Εγγραφή στον αγώνα
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-lg">Ο αγώνας δεν βρέθηκε</div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const race = ref(null);

  onMounted(async () => {
    try {
      const res = await fetch('/min.races.json');
      const races = await res.json();
      race.value = races.find((r) => r.Slug === route.params.id || r.Slug === `${route.params.id}/`);
    } catch (error) {
      console.error('Error loading race:', error);
    }
  });

  useHead(() => ({
    title: race.value
      ? `${race.value.Title} | racelist.gr`
      : 'Αγώνας | racelist.gr',
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
