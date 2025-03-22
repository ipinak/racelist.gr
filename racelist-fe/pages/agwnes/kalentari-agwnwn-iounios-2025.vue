<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header title="Ερχόμενοι αγώνες για τον Ιούνιο" />

    <RaceList :races="races" />

    <h2 class="text-2xl text-center text-[#9BBEC4] mt-10 mb-4">
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

  const races = [
    {
      title: 'Olympus Marathon',
      date: '2025-06-27',
      location: 'Δίον',
      distances: ['71km', '44km', '12.5km', '5km', '4.25km'],
      link: 'https://www.olympus-marathon.com/?utm_src=racelist.gr',
    },
    {
      title: 'Voio Race Series 2025 (Αγώνας Αυγερινού)',
      date: '2025-06-15',
      location: 'Σιάτιστα',
      distances: ['22km'],
      link: 'https://voio.gr/polites/voiorace/?utm_src=racelist.gr',
    },
    {
      title: 'Rock Solid Kastellorizo 2025',
      date: '2025-06-07',
      location: 'Καστελόριζο',
      distances: ['22km', '10km', '5km', '1.3km'],
      link: 'https://rocksolid.gr/?utm_src=racelist.gr',
    },
    {
      title: '4th Evrytania Trail Races 2025',
      date: '2025-06-07',
      location: 'Καρπενήσι, Ευρυτανίας',
      distances: ['80km', '60km', '30km', '20km', '12km', '6km'],
      link: 'https://www.e4-topantavrexei.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Skyros Sports Festival 2025',
      date: '2025-06-14',
      location: 'Σκύρος',
      distances: ['21.1km', '10km', '5km', '1km'],
      link: 'https://i-qsports.com/skyros-sports-festival/?utm_src=racelist.gr',
    },
    {
      title: 'Kerkini Lake Run 2025',
      date: '2025-06-15',
      location: 'Κερκίνη, Σερρών',
      distances: ['21.1km', '10km', '7.5km', '1km'],
      link: 'https://raceid.com/el/races/13150/about?utm_src=racelist.gr',
    },
    {
      title: '2nd Panetoliko Mountain Trail Run',
      date: '2025-06-22',
      location: 'Αγιος Βλάσσης, Αγρίνιο',
      distances: ['17km', '8km', '1km'],
      link: 'https://panetolikotrail.gr/?utm_src=racelist.gr',
    },
  ];

  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Ιούνιο | racelist.gr',
    link: [{ rel: 'canonical', href: 'https://racelist.gr/index.html' }],
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Ιούνιο | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση.',
      },
      { property: 'og:url', content: 'https://racelist.gr' },
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Ιούνιο | racelist.gr',
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
