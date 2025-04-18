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
  const title = 'Αγώνες για τον Φεβρουάριο 2025';

  useHead({
    title:
      'Καλένταρι αγώνων δρομου και βουνού για τον Φεβρουάριο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-febrouarios-2025',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Φεβρουάριο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Φεβρουάριο | racelist.gr',
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
      Title: '23ος Δρόμος Αργολικού Κόλπου «Παναγιώτης Παπαβασιλείου»',
      Date: '2025-02-16',
      Location: 'Ναύπλιο, Αργολίδας',
      Distances: ['15.3km', '1km'],
      SignupLink: 'https://raceid.com/el/races/13142/about?utm_src=racelist.gr',
    },
    {
      Title: 'Lycabettus Run 2025',
      Date: '2025-02-23',
      Location: 'Λυκαβηττός',
      Distances: ['11km', '9km (trail)', '5.5km', '4.5km (trail)'],
      SignupLink: 'http://www.lycabettusrun.gr/?utm_src=racelist.gr',
    },
    {
      Title: '1ο Spetses Mountain Run',
      Date: '2025-02-23',
      Location: 'Σπέτσες',
      Distances: ['20km', '9km'],
      SignupLink: '',
    },
    {
      Title: '7ο “Φανερωμένη Trail”',
      Date: '2025-02-23',
      Location: 'Χιλιομόδι, Κορινθίας',
      Distances: ['23km', '10.5km', '6km', '2.1km'],
      SignupLink: 'http://www.faneromenitrail.gr/?utm_src=racelist.gr',
    },
    {
      Title: '13ος Χορτιάτης Trail Run',
      Date: '2025-02-23',
      Location: 'Χορτιάτης, Θεσσαλονίκη',
      Distances: ['23km', '10km'],
      SignupLink: 'https://sdyth.gr/?utm_src=racelist.gr',
    },
    {
      Title: '«Τρέχω στον Μαραθώνα» Αγώνας δρόμου 8χλμ.',
      Date: '2025-02-23',
      Location: 'Μαραθώνας',
      Distances: ['8km'],
      SignupLink:
        'https://www.telmissos.gr/1407-marathon-trexw-ston-marathona-2025?utm_src=racelist.gr',
    },
    {
      Title: '25ος Δρόμος Βουνού «Υμηττός 2025»',
      Date: '2025-02-02',
      Location: 'Ημηττός',
      Distances: [],
      SignupLink: '',
    },
    {
      Title: 'Αγώνες υπεραποστάσεων 6-12-24 ωρών εντός σταδίου – Μέγαρα',
      Date: '2025-02-08',
      Location: 'Μέγαρα',
      Distances: [],
      SignupLink:
        'https://www.apollonrunnersclub.gr/agones-iperapostaseon-entos-stadiou/?utm_src=racelist.gr',
    },
    {
      Title: '6ος Atlas Trail Running',
      Date: '2025-02-08',
      Location: 'Μαλακάσα',
      Distances: ['34km', '24km', '11km', '6km'],
      SignupLink:
        'https://results.chronolog.gr/registrationc1.aspx?h=39d1109ea4f6a6a5dab0ad668cd7f6e9&l=GR&g=0?utm_src=racelist.gr',
    },
    {
      Title: 'Sparta City Ultra 2025',
      Date: '2025-02-08',
      Location: 'Σπάρτη',
      Distances: [],
      SignupLink: 'https://spartanrunners.gr/?utm_src=racelist.gr',
    },
    {
      Title: 'Ημιμαραθώνιος Αγάπης Μυτιλήνης 2025',
      Date: '2025-02-15',
      Location: 'Μυτιλήνη',
      Distances: ['21.5km', '10km', '5km', '2.5km', '1km', '500m'],
      SignupLink: '',
    },
    {
      Title: '8ο Gentiki trail 21χλμ και Gentikaki trail 5,1χλμ',
      Date: '2025-02-16',
      Location: 'Λάρισα',
      Distances: ['21km', '5.1km'],
      SignupLink:
        'https://www.larisamarathon.gr/2023/12/7-gentiki-trail-21-gentikaki-trail-51.html?utm_src=racelist.gr',
    },
  ];
</script>
