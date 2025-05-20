<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header :title="title" />

    <RaceList :races="races" />

    <h2 class="text-2xl text-center text-[#0057A0] mt-10 mb-4">
      Ενημερωθείτε για νέους αγώνες
    </h2>

    <div class="flex justify-center">
      <NewsletterSubmissionForm />
    </div>
  </div>
</template>

<script setup>
  import Header from '~/components/Agwnes/Header.vue';
  import RaceList from '~/components/Agwnes/RaceList.vue';
  import NewsletterSubmissionForm from '~/components/NewsletterSubmissionForm.vue';

  const title = 'Αγώνες για τον Ιούλιο 2025';

  const { data: allRaces } = await useFetch('/min.races.json');

  const races = computed(() => {
    if (!allRaces.value) return [];

    return allRaces.value.filter((race) => {
      const raceDate = new Date(race.Date);
      return raceDate.getMonth() === 6 && raceDate.getFullYear() === 2025;
    });
  });

  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Ιούλιο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-ioulios-2025/',
      },
    ],
    meta: [
      // Generic description
      {
        name: 'description',
        content:
          'Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
      },
      // Open Graph
      {
        property: 'og:title',
        content:
          'Καλένταρι αγώνων δρομου και βουνού για τον Ιούλιο | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/agwnes/kalentari-agwnwn-ioulios-2025/',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      { property: 'og:site_name', content: 'racelist.gr' },
      { property: 'og:locale', content: 'el_GR' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Καλένταρι αγώνων δρομου και βουνού για τον Ιούλιο | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        // Because we need JSON inside a JavaScript string, we must escape quotes if needed.
        // Or you can embed a raw multiline string as below:
        children: `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "racelist.gr",
        "url": "https://racelist.gr",
        "description": "Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση."
      }`,
      },
    ],
  });
</script>
