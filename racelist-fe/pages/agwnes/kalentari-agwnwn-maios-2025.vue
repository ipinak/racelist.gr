<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <Header title="Ερχόμενοι αγώνες για τον Μάρτιο" />

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
      title: '25ος  ΑΥΘΕΝΤΙΚΟΣ  ΕΥΧΙΔΕΙΟΣ ΑΘΛΟΣ',
      date: '2025-05-10',
      location: 'Δελφοί',
      distances: ['107,5km', '59km'],
      link: 'https://www.euchidiosathlos.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Vavdos Trail Run 2025',
      date: '2025-05-18',
      location: 'Χαλκιδική',
      distances: ['21km', '6km'],
      link: 'https://vavdostrailrun.weebly.com/?utm_src=racelist.gr',
    },
    {
      title: 'Tihiorace Trail Running 2025',
      date: '2025-05-01',
      location: 'Τείχιο Φωκίδας',
      distances: [
        'TihioStageRace 100km',
        'Wolf’s Race 50km',
        'Deer’s Race 30km',
        'Hawk’s Race 20km',
        'Rabbit’s Race 10km',
        '15km πορεία για Αθλητές ΑΜΕΑ με αμαξίδιο',
      ],
      link: 'https://my.tihiorace.gr/?utm_src=racelist.gr',
    },
    {
      title: '5ος Νυχτερινός Αγώνας Θράκης',
      date: '2025-05-03',
      location: 'Αλεξανδρουπολη',
      distances: ['10km', '5km'],
      link: 'https://thracenightrun.gr/?utm_src=racelist.gr',
    },
    {
      title: '21ος Δρόμος Θυσίας Ηρωικής Πόλης Νάουσας',
      date: '2025-05-04',
      location: 'Νάουσα',
      distances: ['6.5km'],
      link: 'https://www.naoussa.gr/e-services/apply-race?utm_src=racelist.gr',
    },
    {
      title: 'Αγώνες για το Περιβάλλον 2025 – Λίμνη Μαραθώνα',
      date: '2025-05-04',
      location: 'Μαραθώνας',
      distances: ['5km', '10km', '1km'],
      link: 'https://www.oloimaziboroume.gr/nea/%CE%B1%CE%B3%CF%8E%CE%BD%CE%B5%CF%82-%CE%B3%CE%B9%CE%B1-%CF%84%CE%BF-%CF%80%CE%B5%CF%81%CE%B9%CE%B2%CE%AC%CE%BB%CE%BB%CE%BF%CE%BD?utm_src=racelist.gr',
    },
    {
      title: 'Kassios Dias Trail Race 2025',
      date: '2025-05-04',
      location: 'Κέρκυρας',
      distances: ['CAVE Edition 25 km', 'ERIMITIS 12km', 'KIDS Race'],
      link: 'https://kassiosdias.com/?utm_src=racelist.gr',
    },
    {
      title: '2ος Παλλήνιος δρόμος',
      date: '2025-05-04',
      location: 'Παλλήνη',
      distances: ['10km', '5km', '1km`'],
      link: 'https://raceid.com/el/races/13395/about?utm_src=racelist.gr',
    },
    {
      title: '1ο Sithonia Trail Run',
      date: '2025-05-04',
      location: 'Σιθωνία, Χαλκιδικής',
      distances: ['23km', '10km'],
      link: 'https://www.sithonia-trails.gr/?utm_src=racelist.gr',
    },
    {
      title: '4ο Pamvotis View Trail',
      date: '2025-05-04',
      location: 'Δροσοχώρι, Ιωαννίνων',
      distances: ['21km', '9km', '1km'],
      link: 'https://www.facebook.com/profile.php?id=100081371259512?utm_src=racelist.gr',
    },
    {
      title: '5o Agrinio City Trail',
      date: '2025-05-04',
      location: 'Αγρίνιο',
      distances: ['21km', '9km', '1km'],
      link: null,
    },
    {
      title: '14ος Ιπποκράτειος Αγώνας Δρόμου',
      date: '2025-05-04',
      location: 'Λάρισα',
      distances: ['10km', '3km', '1km'],
      link: 'https://results.chronolog.gr/registrationc1.aspx?h=7b1a7443eb862225999cba82e6658358&l=GR?utm_src=racelist.gr',
    },
    {
      title: 'Voio Race Series 2025 (Αγώνας Μπούρινος)',
      date: '2025-05-04',
      location: 'Σιάτιστα',
      distances: ['7km', '19km'],
      link: 'https://voio.gr/polites/voiorace/?utm_src=racelist.gr',
    },
    {
      title: 'Voio Race Series 2025 (Αγώνας Νεάπολης)',
      date: '2025-05-18',
      location: 'Σιάτιστα',
      distances: ['10km', '5km'],
      link: 'https://voio.gr/polites/voiorace/?utm_src=racelist.gr',
    },
    {
      title: 'Triman 2025 (Νightrun, Trifast & Triswim, Triman)',
      date: '2025-05-09',
      location: 'Κατερίνη',
      distances: [],
      link: 'https://triman.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Tyros Run’25 – George Marneris',
      date: '2025-05-10',
      location: 'Τυρό Αρκαδίας',
      distances: ['8km', '16km'],
      link: 'https://raceid.com/el/races/13305/information?utm_src=racelist.gr',
    },
    {
      title: 'Ευχίδειος Άθλος – Υπεράθλος (Δρόμο 9 Μουσών)',
      date: '2025-05-10',
      location: 'Δελφοί',
      distances: ['59km', '107,5km', '215km'],
      link: 'https://www.euchidiosathlos.gr/?utm_src=racelist.gr',
    },
    {
      title: '4o Ipsilantis Trail',
      date: '2025-05-11',
      location: 'ΤΙΛΦΟΥΣΙΟ ΌΡΟΣ-ΒΟΙΩΤΙΑΣ',
      distances: ['11km', '21km'],
      link: null,
    },
    {
      title: '12ος Δρόμος Σέιχ Σου',
      date: '2025-05-11',
      location: 'Θεσσαλονίκη',
      distances: ['3km', '10km', '16km'],
      link: 'https://sdyth.gr/12%ce%bf%cf%82-%ce%b4%cf%81%cf%8c%ce%bc%ce%bf%cf%82-%cf%83%ce%ad%cf%8a%cf%87-%cf%83%ce%bf%cf%85/?utm_src=racelist.gr',
    },
    {
      title: 'Koziakas Trail Running 2025',
      date: '2025-05-11',
      location: 'Ελάτη, Δήμος Πύλης',
      distances: ['25km', '9km', '1km'],
      link: 'https://kt.elati-pertouli.gr/service/engrafes?utm_src=racelist.gr',
    },
    {
      title: 'Ολύμπιος Δρόμος 2025 & Αγώνας 62χλμ',
      date: '2025-05-16',
      location: 'Αρχαία Ολυμπία',
      distances: ['190km', '62km'],
      link: 'https://aethlios.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Spetsathlon 2025',
      date: '2025-05-17',
      location: 'Σπέτσες',
      distances: [
        'Spetses Triathlon Sprint & Relay',
        'Spetses Triathlon Endurance & Relay',
        'Κολυμβητικοί Αγώνες 1000m. / 3000m',
        'Αγώνας Ποδηλασίας 25km',
        '5km run',
      ],
      link: 'https://spetsathlon.com/?utm_src=racelist.gr',
    },
    {
      title: 'Goulinas Trail 2025',
      date: '2025-05-18',
      location: 'Σπερχειάδα',
      distances: ['30km', '12km', '6km'],
      link: 'http://www.goulinastrail.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Skiathos Trail Run 2025',
      date: '2025-05-18',
      location: 'Σκιάθος',
      distances: ['24km', '10km', '1.5km', '800m'],
      link: 'https://www.skiathosrun.gr/el/?utm_src=racelist.gr',
    },
    {
      title: '4ος Godzilla Xanthi Trail',
      date: '2025-05-18',
      location: 'Ξάνθη',
      distances: ['30km', '14km', '7km'],
      link: 'https://www.godzillaxanthitrail.gr/el/?utm_src=racelist.gr',
    },
    {
      title: '5ος Αγώνας Δρόμου Φαλανναίων',
      date: '2025-05-18',
      location: 'Φαλάνη, Λάρισας',
      distances: ['21.1km', '5km', '1km'],
      link: 'https://www.facebook.com/profile.php?id=100064232971537?utm_src=racelist.gr',
    },
    {
      title: 'Αγώνας Δρόμου Λίμνης Μαραθώνα 2025',
      date: '2025-05-18',
      location: 'Μαραθώνας',
      distances: ['10km'],
      link: 'http://www.telmissos.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Karpathos Run 2025',
      date: '2025-05-24',
      location: 'Κάρπαθος',
      distances: ['10km', '5km', '1km'],
      link: 'https://raceid.com/el/races/13329/about?utm_src=racelist.gr',
    },
    {
      title: '5oι Αγώνες Vasiliki Lefkada Road & Mountain Race',
      date: '2025-05-24',
      location: 'Κάρπαθος',
      distances: ['21.1km', '15km', '12km', '3.5km', '1km', 'Windsurfing'],
      link: 'https://raceid.com/el/races/13341/about?utm_src=racelist.gr',
    },
    {
      title: 'Run Greece 2025 – Σύρος',
      date: '2025-05-25',
      location: 'Σύρος',
      distances: ['10km', '5km'],
      link: 'https://www.run-greece.gr/index.php/el/?utm_src=racelist.gr',
    },
    {
      title: 'Επιδαύριος Δρόμος 2025 – Theater 2 Theater',
      date: '2025-05-25',
      location: 'Επίδαυρος',
      distances: ['21km', '5km', '1.5km', '5km περπάτημα'],
      link: 'https://why-n.gr/epidavrios-dromos-register?utm_src=racelist.gr',
    },
    {
      title: 'TihioRace Ultra Edition 2025',
      date: '2025-05-28',
      location: 'Επίδαυρος',
      distances: ['250km', '165km', '75km'],
      link: 'https://tihiorace.gr/?utm_src=racelist.gr',
    },
    {
      title: '12ος Πράσινος Ημιμαραθώνιος',
      date: '2025-05-31',
      location: 'Λευκάδα',
      distances: ['21.1km', '10km', '5km', 'Παιδικός'],
      link: 'https://greenhalfmarathon.com/?utm_src=racelist.gr',
    },
    {
      title: 'Tinos Running Experience Avance 2025',
      date: '2025-05-31',
      location: 'Λευκάδα',
      distances: ['21.1km', '10km', '5km', '1km'],
      link: 'https://tinosrunningexperience.gr/?utm_src=racelist.gr',
    },
    {
      title: '2ο Andros Trail Challenge',
      date: '2025-05-30',
      location: 'Λευκάδα',
      distances: ['34km', '5km', '1.6km', '1km'],
      link: 'https://andrusrace.com/?utm_src=racelist.gr',
    },
  ];
  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Μάιο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Μάιο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Μάιο | racelist.gr',
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
