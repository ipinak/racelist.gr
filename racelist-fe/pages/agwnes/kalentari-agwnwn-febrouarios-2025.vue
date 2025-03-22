<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header title="Αγώνες για τον Φεβρουάριο" />

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
    title:
      'Καλένταρι αγώνων δρομου και βουνού για τον Φεβρουάριο | racelist.gr',
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
      title: '23ος Δρόμος Αργολικού Κόλπου «Παναγιώτης Παπαβασιλείου»',
      date: '2025-02-16',
      location: 'Ναύπλιο, Αργολίδας',
      distances: ['15.3km', '1km'],
      link: 'https://raceid.com/el/races/13142/about?utm_src=racelist.gr',
    },
    {
      title: 'Lycabettus Run 2025',
      date: '2025-02-23',
      location: 'Λυκαβηττός',
      distances: ['11km', '9km (trail)', '5.5km', '4.5km (trail)'],
      link: 'http://www.lycabettusrun.gr/?utm_src=racelist.gr',
    },
    {
      title: '1ο Spetses Mountain Run',
      date: '2025-02-23',
      location: 'Σπέτσες',
      distances: ['20km', '9km'],
      link: '',
    },
    {
      title: '7ο “Φανερωμένη Trail”',
      date: '2025-02-23',
      location: 'Χιλιομόδι, Κορινθίας',
      distances: ['23km', '10.5km', '6km', '2.1km'],
      link: 'http://www.faneromenitrail.gr/?utm_src=racelist.gr',
    },
    {
      title: '13ος Χορτιάτης Trail Run',
      date: '2025-02-23',
      location: 'Χορτιάτης, Θεσσαλονίκη',
      distances: ['23km', '10km'],
      link: 'https://sdyth.gr/?utm_src=racelist.gr',
    },
    {
      title: '«Τρέχω στον Μαραθώνα» Αγώνας δρόμου 8χλμ.',
      date: '2025-02-23',
      location: 'Μαραθώνας',
      distances: ['8km'],
      link: 'https://www.telmissos.gr/1407-marathon-trexw-ston-marathona-2025?utm_src=racelist.gr',
    },
    {
      title: '25ος Δρόμος Βουνού «Υμηττός 2025»',
      date: '2025-02-02',
      location: 'Ημηττός',
      distances: [],
      link: '',
    },
    {
      title: 'Αγώνες υπεραποστάσεων 6-12-24 ωρών εντός σταδίου – Μέγαρα',
      date: '2025-02-08',
      location: 'Μέγαρα',
      distances: [],
      link: 'https://www.apollonrunnersclub.gr/agones-iperapostaseon-entos-stadiou/?utm_src=racelist.gr',
    },
    {
      title: '6ος Atlas Trail Running',
      date: '2025-02-08',
      location: 'Μαλακάσα',
      distances: ['34km', '24km', '11km', '6km'],
      link: 'https://results.chronolog.gr/registrationc1.aspx?h=39d1109ea4f6a6a5dab0ad668cd7f6e9&l=GR&g=0?utm_src=racelist.gr',
    },
    {
      title: 'Sparta City Ultra 2025',
      date: '2025-02-08',
      location: 'Σπάρτη',
      distances: [],
      link: 'https://spartanrunners.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Ημιμαραθώνιος Αγάπης Μυτιλήνης 2025',
      date: '2025-02-15',
      location: 'Μυτιλήνη',
      distances: ['21.5km', '10km', '5km', '2.5km', '1km', '500m'],
      link: '',
    },
    {
      title: '8ο Gentiki trail 21χλμ και Gentikaki trail 5,1χλμ',
      date: '2025-02-16',
      location: 'Λάρισα',
      distances: ['21km', '5.1km'],
      link: 'https://www.larisamarathon.gr/2023/12/7-gentiki-trail-21-gentikaki-trail-51.html?utm_src=racelist.gr',
    },
  ];
</script>
