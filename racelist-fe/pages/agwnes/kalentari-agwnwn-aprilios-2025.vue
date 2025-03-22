<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header title="Αγώνες για τον Απρίλιο" />

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

  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Απρίλιο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Απρίλιο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Απρίλιο | racelist.gr',
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

  const races = [
    {
      title: 'TUI Rhodes Marathon 2025',
      date: '2025-04-06',
      location: 'Ρόδος',
      distances: [
        '42km',
        '21km',
        '10km',
        '5km',
        'Περιπατητική διαδρομή 5km',
        'Παιδικός αγώνας 1km',
      ],
      link: 'https://rhodesmarathon.gr/?utm_src=racelist.gr',
    },
    {
      title: 'ΟΠΑΠ Μαραθώνιος Λεμεσού 2025',
      date: '2025-04-22',
      location: 'Λεμεσός, Κύπρος',
      distances: ['42km', '21km', '10km', '5km'],
      link: 'https://www.limassolmarathon.com/index.php?utm_src=racelist.gr',
    },
    {
      title: 'Crete Marathon',
      date: '2025-04-06',
      location: 'Χανιά, Κρήτη',
      distances: ['42km', '10km', '5km', '2.5km'],
      link: 'https://crete-marathon.gr/en/home?utm_src=racelist.gr',
    },
    {
      title: '8ο Δεκάρι Πάρκου',
      date: '2025-04-05',
      location: 'Πάρκο Τρίτση',
      distances: ['10km', '5km', '1.3km'],
      link: 'https://www.todekaritouparkou.gr/dilwse-symmetoxi?utm_src=racelist.gr',
    },
    {
      title: '7ος Δρόμος Μαθητών',
      date: '2025-04-06',
      location: 'Βέροια, Ημαθίας',
      distances: ['10km', '5km', '2km', '1km', '250m (AMEA)'],
      link: '',
    },
    {
      title: '19ος Μαραθώνιος Μέγας Αλέξανδρος',
      date: '2025-04-06',
      location: 'Θεσσαλονίκη',
      distances: ['42km', '10km', '5km', '1km'],
      link: 'https://atgm.gr/2013/12/11/%ce%b1%cf%84%ce%bf%ce%bc%ce%b9%ce%ba%ce%b5%cf%83-%ce%b5%ce%b3%ce%b3%cf%81%ce%b1%cf%86%ce%b5%cf%82/?utm_src=racelist.gr',
    },
    {
      title: '3ος Ημιμαραθώνιος Πάτρας',
      date: '2025-04-06',
      location: 'Πάτρα',
      distances: ['21km', '10km', '5km', '1km'],
      link: '',
    },
    {
      title: '8ος Αγώνας Πεδίου Άρεως',
      date: '2025-04-13',
      location: 'Πεδίο Άρεως, Αττική',
      distances: ['10km', '5km', '1.3km'],
      link: '',
    },
    {
      title: '25ος Αγώνας Δρόμου Καλαμάτας',
      date: '2025-04-26',
      location: 'Καλαμάτα',
      distances: ['21km', '10km', '5km', '1km'],
      link: 'https://sdym.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Poseidon Athens Half-Marathon',
      date: '2025-04-27',
      location: 'Φάληρο, Αττικής',
      distances: ['21km', '21km (relay)', '10km', '5km', '2km', '1km'],
      link: 'https://poseidon-athenshalfmarathon.com/el/?utm_src=racelist.gr',
    },
    {
      title: '5th Chios Hardstone Trail Run',
      date: '2025-04-27',
      location: 'Χίος',
      distances: ['24km', '13km', '5km', '1km'],
      link: 'https://chiosrunning.gr/?utm_src=racelist.gr',
    },
  ];
</script>
