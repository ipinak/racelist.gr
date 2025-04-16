<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header :title="title" />

    <RaceList :races="races" />

    <h2 class="text-2xl text-center text-[#0057A0] my-6">
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
  const title = 'Αγώνες για τον Απρίλιο 2025';

  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Απρίλιο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-aprilios-2025',
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
      Title: 'TUI Rhodes Marathon 2025',
      Date: '2025-04-06',
      Location: 'Ρόδος',
      Distances: [
        '42km',
        '21km',
        '10km',
        '5km',
        'Περιπατητική διαδρομή 5km',
        'Παιδικός αγώνας 1km',
      ],
      SignupLink: 'https://rhodesmarathon.gr/?utm_src=racelist.gr',
    },
    {
      Title: 'ΟΠΑΠ Μαραθώνιος Λεμεσού 2025',
      Date: '2025-04-22',
      Location: 'Λεμεσός, Κύπρος',
      Distances: ['42km', '21km', '10km', '5km'],
      SignupLink:
        'https://www.limassolmarathon.com/index.php?utm_src=racelist.gr',
    },
    {
      Title: 'Crete Marathon',
      Date: '2025-04-06',
      Location: 'Χανιά, Κρήτη',
      Distances: ['42km', '10km', '5km', '2.5km'],
      SignupLink: 'https://crete-marathon.gr/en/home?utm_src=racelist.gr',
    },
    {
      Title: '8ο Δεκάρι Πάρκου',
      Date: '2025-04-05',
      Location: 'Πάρκο Τρίτση',
      Distances: ['10km', '5km', '1.3km'],
      SignupLink:
        'https://www.todekaritouparkou.gr/dilwse-symmetoxi?utm_src=racelist.gr',
    },
    {
      Title: '7ος Δρόμος Μαθητών',
      Date: '2025-04-06',
      Location: 'Βέροια, Ημαθίας',
      Distances: ['10km', '5km', '2km', '1km', '250m (AMEA)'],
      SignupLink: '',
    },
    {
      Title: '19ος Μαραθώνιος Μέγας Αλέξανδρος',
      Date: '2025-04-06',
      Location: 'Θεσσαλονίκη',
      Distances: ['42km', '10km', '5km', '1km'],
      SignupLink:
        'https://atgm.gr/2013/12/11/%ce%b1%cf%84%ce%bf%ce%bc%ce%b9%ce%ba%ce%b5%cf%83-%ce%b5%ce%b3%ce%b3%cf%81%ce%b1%cf%86%ce%b5%cf%82/?utm_src=racelist.gr',
    },
    {
      Title: '3ος Ημιμαραθώνιος Πάτρας',
      Date: '2025-04-06',
      Location: 'Πάτρα',
      Distances: ['21km', '10km', '5km', '1km'],
      SignupLink: '',
    },
    {
      Title: '8ος Αγώνας Πεδίου Άρεως',
      Date: '2025-04-13',
      Location: 'Πεδίο Άρεως, Αττική',
      Distances: ['10km', '5km', '1.3km'],
      SignupLink: '',
    },
    {
      Title: '25ος Αγώνας Δρόμου Καλαμάτας',
      Date: '2025-04-26',
      Location: 'Καλαμάτα',
      Distances: ['21km', '10km', '5km', '1km'],
      SignupLink: 'https://sdym.gr/?utm_src=racelist.gr',
    },
    {
      Title: 'Poseidon Athens Half-Marathon',
      Date: '2025-04-27',
      Location: 'Φάληρο, Αττικής',
      Distances: ['21km', '21km (relay)', '10km', '5km', '2km', '1km'],
      SignupLink:
        'https://poseidon-athenshalfmarathon.com/el/?utm_src=racelist.gr',
    },
    {
      Title: '5th Chios Hardstone Trail Run',
      Date: '2025-04-27',
      Location: 'Χίος',
      Distances: ['24km', '13km', '5km', '1km'],
      SignupLink: 'https://chiosrunning.gr/?utm_src=racelist.gr',
    },
  ];
</script>
