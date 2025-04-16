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

  const title = 'Ερχόμενοι αγώνες για τον Μάρτιο 2025';

  const races = [
    {
      Title: 'Katerini Run 2025',
      Date: '2025-03-09',
      Location: 'Κατερίνη, Πιερίας',
      Distances: ['21km', '5km', '1km'],
      SignupLink: 'https://raceid.com/el/races/13349/about?utm_src=racelist.gr',
    },
    {
      Title: '27ος Logicom Cyprus Marathon',
      Date: '2025-03-09',
      Location: 'Πάφος, Κύπρος',
      Distances: ['42km', '21km', '10km', '5km', 'Wine run'],
      SignupLink: 'https://www.logicomcyprusmarathon.com/?utm_src=racelist.gr',
    },
    {
      Title: 'Ημιμαραθώνιος Αθήνας 2025',
      Date: '2025-03-09',
      Location: 'Αθήνα',
      Distances: ['21km', '5km'],
      SignupLink: 'https://athinahalfmarathon.gr?utm_src=racelist.gr',
    },
    {
      Title:
        '2ος Παράκτιος Νυχτερινός Ημιμαραθώνιος Θερμαϊκού - «Αντώνης Ματζάρης»',
      Date: '2025-03-15',
      Location: 'Δήμος Θερμαϊκού, Θεσσαλονίκη',
      Distances: ['21.1km', '10km', '5km', '1.6km'],
      SignupLink: 'https://thermaikoshalfmarathon.org/?utm_src=racelist.gr',
    },
    {
      Title: '16ος Ημιμαραθώνιος Καλαμπάκα-Τρίκαλα «Θανάσης Σταμόπουλος»',
      Date: '2025-03-16',
      Location: 'Καλαμπάκα',
      Distances: ['21.1km', '5km', '1km'],
      SignupLink: 'https://www.trikalahalfmarathon.org/?utm_src=racelist.gr',
    },
    {
      Title: 'Run-Maroussi - Σπύρος Λούης 2025',
      Date: '2025-03-16',
      Location: 'Μαρούσι, Αττικής',
      Distances: ['10km', '5km', '1km'],
      SignupLink: 'https://raceid.com/el/races/13154/about?utm_src=racelist.gr',
    },
    {
      Title: '14ος Taygetos Challenge',
      Date: '2025-03-22',
      Location: 'Καρδαμύλη, Πελοποννήσου',
      Distances: ['42km', '22km', '10km', '5km'],
      SignupLink: 'http://www.taygetoschallenge.com/?utm_src=racelist.gr',
    },
    {
      Title: '5η Γύρα Μάνης',
      Date: '2025-03-22',
      Location: 'Αρεόπολη, Λακωνίας',
      Distances: ['80km'],
      SignupLink: 'http://www.lakoniaultrarunning.com/?utm_src=racelist.gr',
    },
    {
      Title: 'Coast to Coast Race 2025',
      Date: '2025-03-23',
      Location: 'Ιεράπετρα, Λασιθίου',
      Distances: ['21.1km', '5km'],
      SignupLink: 'https://coast-to-coast.gr/?utm_src=racelist.gr',
    },
    {
      Title: '18ος Μαραθώνιος Μεσσήνης',
      Date: '2025-03-23',
      Location: 'Δήμου Μεσσήνης',
      Distances: ['42km'],
      SignupLink: 'https://marathon.messini.gr/?utm_src=racelist.gr',
    },
    {
      Title: '9ος Δρόμος του Γιοφυριού',
      Date: '2025-03-29',
      Location: 'Άρτα',
      Distances: ['21.1km', '5km', 'Σκυταλοδρομία', '300m', '600m', '800m'],
      SignupLink: 'https://artarunningfestival.gr/?utm_src=racelist.gr',
    },
    {
      Title: 'Duth Campus Run 2025',
      Date: '2025-03-30',
      Location: 'Πανεπιστημιούπολη, Κομοτηνή',
      Distances: ['14km', '7km'],
      SignupLink: null,
    },
    {
      Title: '9ος Ημιμαραθώνιος Βόλου – 30o I Love Volos Run',
      Date: '2025-03-30',
      Location: 'Βόλος',
      Distances: ['21.1km', '5km', '500m'],
      SignupLink: 'https://voloshalfmarathon.gr/?utm_src=racelist.gr',
    },
    {
      Title: '2o Grevena City Run',
      Date: '2025-03-30',
      Location: 'Γρεβενά',
      Distances: ['10km', '5km', '1km'],
      SignupLink: null,
    },
    {
      Title: 'Μαραθώνιος Ναυπλίου 2025',
      Date: '2025-03-30',
      Location: 'Ναύπλιο, Αργολίδας',
      Distances: ['42km'],
      SignupLink: null,
    },
    {
      Title: 'Run Greece - Ηράκλειο 2025',
      Date: '2025-03-30',
      Location: 'Ηράκλειο, Κρήτης',
      Distances: ['10km', '5km', 'Παίδων'],
      SignupLink:
        'https://www.run-greece.gr/index.php/el/registration/registration-irakleio?utm_src=racelist.gr',
    },
  ];
  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Μάρτιο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/kalentari-agwnwn-martios-2025',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Μάρτιο | racelist.gr',
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
          'Καλένταρι αγώνων δρομου και βουνού για τον Μάρτιο | racelist.gr',
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
