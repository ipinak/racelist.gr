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

  const title = 'Αγώνες για τον Μάη 2025';

  const races = [
    {
      Title: '25ος ΑΥΘΕΝΤΙΚΟΣ ΕΥΧΙΔΕΙΟΣ ΑΘΛΟΣ',
      Date: '2025-05-10',
      Location: 'Δελφοί',
      Distances: ['107,5km', '59km'],
      SignupLink: 'https://www.euchidiosathlos.gr/',
    },
    {
      Title: 'Vavdos Trail Run 2025',
      Date: '2025-05-18',
      Location: 'Χαλκιδική',
      Distances: ['21km', '6km'],
      SignupLink: 'https://vavdostrailrun.weebly.com/',
    },
    {
      Title: 'Tihiorace Trail Running 2025',
      Date: '2025-05-01',
      Location: 'Τείχιο Φωκίδας',
      Distances: [
        'TihioStageRace 100km',
        'Wolf’s Race 50km',
        'Deer’s Race 30km',
        'Hawk’s Race 20km',
        'Rabbit’s Race 10km',
        '15km πορεία για Αθλητές ΑΜΕΑ με αμαξίδιο',
      ],
      SignupLink: 'https://my.tihiorace.gr/',
    },
    {
      Title: '5ος Νυχτερινός Αγώνας Θράκης',
      Date: '2025-05-03',
      Location: 'Αλεξανδρουπολη',
      Distances: ['10km', '5km'],
      SignupLink: 'https://thracenightrun.gr/',
    },
    {
      Title: '21ος Δρόμος Θυσίας Ηρωικής Πόλης Νάουσας',
      Date: '2025-05-04',
      Location: 'Νάουσα',
      Distances: ['6.5km'],
      SignupLink: 'https://www.naoussa.gr/e-services/apply-race',
    },
    {
      Title: 'Αγώνες για το Περιβάλλον 2025 – Λίμνη Μαραθώνα',
      Date: '2025-05-04',
      Location: 'Μαραθώνας',
      Distances: ['5km', '10km', '1km'],
      SignupLink:
        'https://www.oloimaziboroume.gr/nea/%CE%B1%CE%B3%CF%8E%CE%BD%CE%B5%CF%82-%CE%B3%CE%B9%CE%B1-%CF%84%CE%BF-%CF%80%CE%B5%CF%81%CE%B9%CE%B2%CE%AC%CE%BB%CE%BB%CE%BF%CE%BD',
    },
    {
      Title: 'Kassios Dias Trail Race 2025',
      Date: '2025-05-04',
      Location: 'Κέρκυρας',
      Distances: ['CAVE Edition 25 km', 'ERIMITIS 12km', 'KIDS Race'],
      SignupLink: 'https://kassiosdias.com/',
    },
    {
      Title: '2ος Παλλήνιος δρόμος',
      Date: '2025-05-04',
      Location: 'Παλλήνη',
      Distances: ['10km', '5km', '1km`'],
      SignupLink: 'https://raceid.com/el/races/13395/about',
    },
    {
      Title: '1ο Sithonia Trail Run',
      Date: '2025-05-04',
      Location: 'Σιθωνία, Χαλκιδικής',
      Distances: ['23km', '10km'],
      SignupLink: 'https://www.sithonia-trails.gr/',
    },
    {
      Title: '4ο Pamvotis View Trail',
      Date: '2025-05-04',
      Location: 'Δροσοχώρι, Ιωαννίνων',
      Distances: ['21km', '9km', '1km'],
      SignupLink: 'https://www.facebook.com/profile.php?id=100081371259512',
    },
    {
      Title: '5o Agrinio City Trail',
      Date: '2025-05-04',
      Location: 'Αγρίνιο',
      Distances: ['21km', '9km', '1km'],
      SignupLink: null,
    },
    {
      Title: '14ος Ιπποκράτειος Αγώνας Δρόμου',
      Date: '2025-05-04',
      Location: 'Λάρισα',
      Distances: ['10km', '3km', '1km'],
      SignupLink:
        'https://results.chronolog.gr/registrationc1.aspx?h=7b1a7443eb862225999cba82e6658358&l=GR',
    },
    {
      Title: 'Voio Race Series 2025 (Αγώνας Μπούρινος)',
      Date: '2025-05-04',
      Location: 'Σιάτιστα',
      Distances: ['7km', '19km'],
      SignupLink: 'https://voio.gr/polites/voiorace/',
    },
    {
      Title: 'Voio Race Series 2025 (Αγώνας Νεάπολης)',
      Date: '2025-05-18',
      Location: 'Σιάτιστα',
      Distances: ['10km', '5km'],
      SignupLink: 'https://voio.gr/polites/voiorace/',
    },
    {
      Title: 'Triman 2025 (Νightrun, Trifast & Triswim, Triman)',
      Date: '2025-05-09',
      Location: 'Κατερίνη',
      Distances: [],
      SignupLink: 'https://triman.gr/',
    },
    {
      Title: 'Tyros Run’25 – George Marneris',
      Date: '2025-05-10',
      Location: 'Τυρό Αρκαδίας',
      Distances: ['8km', '16km'],
      SignupLink: 'https://raceid.com/el/races/13305/information',
    },
    {
      Title: 'Ευχίδειος Άθλος – Υπεράθλος (Δρόμο 9 Μουσών)',
      Date: '2025-05-10',
      Location: 'Δελφοί',
      Distances: ['59km', '107,5km', '215km'],
      SignupLink: 'https://www.euchidiosathlos.gr/',
    },
    {
      Title: '4o Ipsilantis Trail',
      Date: '2025-05-11',
      Location: 'ΤΙΛΦΟΥΣΙΟ ΌΡΟΣ-ΒΟΙΩΤΙΑΣ',
      Distances: ['11km', '21km'],
      SignupLink: null,
    },
    {
      Title: '12ος Δρόμος Σέιχ Σου',
      Date: '2025-05-11',
      Location: 'Θεσσαλονίκη',
      Distances: ['3km', '10km', '16km'],
      SignupLink:
        'https://sdyth.gr/12%ce%bf%cf%82-%ce%b4%cf%81%cf%8c%ce%bc%ce%bf%cf%82-%cf%83%ce%ad%cf%8a%cf%87-%cf%83%ce%bf%cf%85/',
    },
    {
      Title: 'Koziakas Trail Running 2025',
      Date: '2025-05-11',
      Location: 'Ελάτη, Δήμος Πύλης',
      Distances: ['25km', '9km', '1km'],
      SignupLink: 'https://kt.elati-pertouli.gr/service/engrafes',
    },
    {
      Title: 'Ολύμπιος Δρόμος 2025 & Αγώνας 62χλμ',
      Date: '2025-05-16',
      Location: 'Αρχαία Ολυμπία',
      Distances: ['190km', '62km'],
      SignupLink: 'https://aethlios.gr/',
    },
    {
      Title: 'Spetsathlon 2025',
      Date: '2025-05-17',
      Location: 'Σπέτσες',
      Distances: [
        'Spetses Triathlon Sprint & Relay',
        'Spetses Triathlon Endurance & Relay',
        'Κολυμβητικοί Αγώνες 1000m. / 3000m',
        'Αγώνας Ποδηλασίας 25km',
        '5km run',
      ],
      SignupLink: 'https://spetsathlon.com/',
    },
    {
      Title: 'Goulinas Trail 2025',
      Date: '2025-05-18',
      Location: 'Σπερχειάδα',
      Distances: ['30km', '12km', '6km'],
      SignupLink: 'http://www.goulinastrail.gr/',
    },
    {
      Title: 'Skiathos Trail Run 2025',
      Date: '2025-05-18',
      Location: 'Σκιάθος',
      Distances: ['24km', '10km', '1.5km', '800m'],
      SignupLink: 'https://www.skiathosrun.gr/el/',
    },
    {
      Title: '4ος Godzilla Xanthi Trail',
      Date: '2025-05-18',
      Location: 'Ξάνθη',
      Distances: ['30km', '14km', '7km'],
      SignupLink: 'https://www.godzillaxanthitrail.gr/el/',
    },
    {
      Title: '5ος Αγώνας Δρόμου Φαλανναίων',
      Date: '2025-05-18',
      Location: 'Φαλάνη, Λάρισας',
      Distances: ['21.1km', '5km', '1km'],
      SignupLink: 'https://www.facebook.com/profile.php?id=100064232971537',
    },
    {
      Title: 'Αγώνας Δρόμου Λίμνης Μαραθώνα 2025',
      Date: '2025-05-18',
      Location: 'Μαραθώνας',
      Distances: ['10km'],
      SignupLink: 'http://www.telmissos.gr/',
    },
    {
      Title: 'Karpathos Run 2025',
      Date: '2025-05-24',
      Location: 'Κάρπαθος',
      Distances: ['10km', '5km', '1km'],
      SignupLink: 'https://raceid.com/el/races/13329/about',
    },
    {
      Title: '5oι Αγώνες Vasiliki Lefkada Road & Mountain Race',
      Date: '2025-05-24',
      Location: 'Λευκάδα',
      Distances: ['21.1km', '15km', '12km', '3.5km', '1km', 'Windsurfing'],
      SignupLink: 'https://raceid.com/el/races/13341/about',
    },
    {
      Title: 'Run Greece 2025 – Σύρος',
      Date: '2025-05-25',
      Location: 'Σύρος',
      Distances: ['10km', '5km'],
      SignupLink: 'https://www.run-greece.gr/index.php/el/',
    },
    {
      Title: 'Επιδαύριος Δρόμος 2025 – Theater 2 Theater',
      Date: '2025-05-25',
      Location: 'Επίδαυρος',
      Distances: ['21km', '5km', '1.5km', '5km περπάτημα'],
      SignupLink: 'https://why-n.gr/epidavrios-dromos-register',
    },
    {
      Title: 'TihioRace Ultra Edition 2025',
      Date: '2025-05-28',
      Location: 'Τείχιο Φωκίδας',
      Distances: ['250km', '165km', '75km'],
      SignupLink: 'https://tihiorace.gr/',
    },
    {
      Title: '12ος Πράσινος Ημιμαραθώνιος',
      Date: '2025-05-31',
      Location: 'Λευκάδα',
      Distances: ['21.1km', '10km', '5km', 'Παιδικός'],
      SignupLink: 'https://greenhalfmarathon.com/',
    },
    {
      Title: 'Tinos Running Experience Avance 2025',
      Date: '2025-05-31',
      Location: 'Τήνος',
      Distances: ['21.1km', '10km', '5km', '1km'],
      SignupLink: 'https://tinosrunningexperience.gr/',
    },
    {
      Title: '2ο Andros Trail Challenge',
      Date: '2025-05-30',
      Location: 'Άνδρος',
      Distances: ['34km', '5km', '1.6km', '1km'],
      SignupLink: 'https://andrusrace.com/',
    },
    {
      Title: '9ος Αγώνας δρόμου Μνημείων Θεσσαλονίκης',
      Date: '2025-05-25',
      Location: 'Θεσσαλονίκη',
      Distances: ['5.6km'],
      SignupLink: 'https://www.timf.gr/',
    },
    {
      Title: '38ος Κορακοβούνιος Δρόμος',
      Date: '2025-05-04',
      Location: 'Ηράκλειο, Κρήτης',
      Distances: ['4km', '1km', '500m'],
      SignupLink:
        'https://racetime.gr/registrations/registration.php?eventId=94',
    },
    {
      Title: '9ο No Finish Line',
      Date: '2025-05-07',
      Location: 'Ολυμπιακο Στάδιο, Αθήνα',
      Distances: ['100h', '24h', '5km', '1.6km', '30min (family)'],
      SignupLink:
        'https://www.nflathens.com/product/charity-run-individuals-2024/',
    },
    {
      Title: 'LIFE RUN',
      Date: '2025-05-10',
      Location: 'Χαϊδάρι, Αττικής',
      Distances: ['4km', '8km'],
      SignupLink: 'https://raceid.com/el/races/13577/about',
    },
    {
      Title: 'Δρόμος Θυσίας «Αγγελής Γοβιός»',
      Date: '2025-05-10',
      Location: 'Ψαχνά, Ευβοίας',
      Distances: ['15km', '5km', '1km'],
    },
    {
      Title: 'Ποσειδόνια',
      Date: '2025-05-10',
      Location: 'Πόρος',
      Distances: ['10km', '5km', '2km', '1km'],
      SignupLink:
        'https://poseidonia.poros.gr/poseidonia-poros-aitiseis-kostos.html',
    },
    {
      Title: '1o Sohos Trail Run',
      Date: '2025-05-11',
      Location: 'Σοχός, Θεσσαλονίκης',
      Distances: ['25km', '10km', '5km', '1mile'],
      SignupLink: 'https://raceid.com/el/races/13478/about',
    },
    {
      Title: 'Koziakas Trail',
      Date: '2025-05-11',
      Location: 'Ελάτη, Τρικάλων',
      Distances: ['25km', '8km', '1km'],
      SignupLink: 'https://kt.elati-pertouli.gr/service/engrafes/',
    },
    {
      Title: '8ος Ημιμαραθώνιος Ιωαννίνωνn',
      Date: '2025-05-11',
      Location: 'Ιωάννινα',
      Distances: ['25km', '10km', '5km', '1km'],
      SignupLink: 'https://www.ioanninahalfmarathon.gr/registration/',
    },
    {
      Title: '13ος Βατικιώτικος Αγώνας Ζωής',
      Date: '2025-05-11',
      Location: 'Νεάπολη, Λακωνίας',
      Distances: ['10km', '3km'],
      SignupLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSeIy4l_dtv0KO-hwRtKhU56jNpH-Gd7yJXnRnqabUoesDMe1Q/viewform/',
    },
    {
      Title: '3ο Eyrytania Triantafilia Mountain Trail Race',
      Date: '2025-05-17',
      Location: 'Τόρνος, Ευρυτανίας',
      Distances: ['40km', '20km', '10km', '6km'],
      SignupLink:
        'https://eospantavrexei.gr/%ce%b5%ce%b3%ce%b3%cf%81%ce%b1%cf%86%ce%ad%cf%82-evrytania-triantafilia-mountain-trail-races/',
    },
    {
      Title: 'Μαζί στη Γιορτή – Ενώνουμε τα βήματά μας - Trail Run',
      Date: '2025-05-18',
      Location: 'Γαλαξίδι, Φωκίδας',
      Distances: ['21.1km Trail'],
      SignupLink: 'https://raceid.com/en/races/13277/about/',
    },
    {
      Title: 'Μαζί στη Γιορτή – Ενώνουμε τα βήματά μας Run',
      Date: '2025-05-17',
      Location: 'Γαλαξίδι, Φωκίδας',
      Distances: ['5km', '1km'],
      SignupLink: 'https://raceid.com/en/races/13277/about/',
    },
    {
      Title: 'Marathon Lake Run 2025',
      Date: '2025-05-18',
      Location: 'Μαραθώνας',
      Distances: ['10km'],
      SignupLink: 'https://raceid.com/el/races/13389/about',
    },
    {
      Title: '4o Paros Way',
      Date: '2025-05-24',
      Location: 'Πάρος',
      Distances: ['21km', '5km'],
      SignupLink: 'https://parosway.gr/',
    },
    {
      Title: 'POWERADE B2Run Aθens',
      Date: '2025-05-29',
      Location: 'ΟΑΚΑ, Αττική',
      Distances: [],
      SignupLink: 'https://www.b2run.gr/run/gr/gr/index.html',
    },
    {
      Title: 'URSA TRAIL 2025 - Katara Vertical',
      Date: '2025-05-30',
      Location: 'Μέτσοβο',
      Distances: ['4.6km'],
      SignupLink: 'https://www.ursatrail.gr/en/main/',
    },
    {
      Title: 'URSA TRAIL 2025',
      Date: '2025-05-31',
      Location: 'Μέτσοβο',
      Distances: ['40km', '1km'],
      SignupLink: 'https://www.ursatrail.gr/en/main/',
    },
  ];
  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Μάιο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-maios-2025',
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
