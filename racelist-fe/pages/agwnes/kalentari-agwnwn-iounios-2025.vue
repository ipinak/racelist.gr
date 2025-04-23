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
  const title = 'Αγώνες για τον Ιούνιο 2025';

  const races = [
    {
      Title: 'Olympus Marathon',
      Date: '2025-06-27',
      Location: 'Δίον',
      Distances: ['71km', '44km', '12.5km', '5km', '4.25km'],
      SignupLink: 'https://www.olympus-marathon.com/?utm_src=racelist.gr',
    },
    {
      Title: 'Voio Race Series 2025 (Αγώνας Αυγερινού)',
      Date: '2025-06-15',
      Location: 'Σιάτιστα',
      Distances: ['22km'],
      SignupLink: 'https://voio.gr/polites/voiorace/?utm_src=racelist.gr',
    },
    {
      Title: 'Rock Solid Kastellorizo 2025',
      Date: '2025-06-07',
      Location: 'Καστελόριζο',
      Distances: ['22km', '10km', '5km', '1.3km'],
      SignupLink: 'https://rocksolid.gr/?utm_src=racelist.gr',
    },
    {
      Title: '4th Evrytania Trail Races 2025',
      Date: '2025-06-07',
      Location: 'Καρπενήσι, Ευρυτανίας',
      Distances: ['80km', '60km', '30km', '20km', '12km', '6km'],
      SignupLink: 'https://www.e4-topantavrexei.gr/?utm_src=racelist.gr',
    },
    {
      Title: 'Skyros Sports Festival 2025',
      Date: '2025-06-14',
      Location: 'Σκύρος',
      Distances: ['21.1km', '10km', '5km', '1km'],
      SignupLink:
        'https://i-qsports.com/skyros-sports-festival/?utm_src=racelist.gr',
    },
    {
      Title: 'Kerkini Lake Run 2025',
      Date: '2025-06-15',
      Location: 'Κερκίνη, Σερρών',
      Distances: ['21.1km', '10km', '7.5km', '1km'],
      SignupLink: 'https://raceid.com/el/races/13150/about?utm_src=racelist.gr',
    },
    {
      Title: '2nd Panetoliko Mountain Trail Run',
      Date: '2025-06-22',
      Location: 'Αγιος Βλάσσης, Αγρίνιο',
      Distances: ['17km', '8km', '1km'],
      SignupLink: 'https://panetolikotrail.gr/?utm_src=racelist.gr',
    },
  ];

  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Ιούνιο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-iounios-2025/',
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
