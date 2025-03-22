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
      title: 'Katerini Run 2025',
      date: '2025-03-09',
      location: 'Κατερίνη, Πιερίας',
      distances: ['21km', '5km', '1km'],
      link: 'https://raceid.com/el/races/13349/about?utm_src=racelist.gr',
    },
    {
      title: '27ος Logicom Cyprus Marathon',
      date: '2025-03-09',
      location: 'Πάφος, Κύπρος',
      distances: ['42km', '21km', '10km', '5km', 'Wine run'],
      link: 'https://www.logicomcyprusmarathon.com/?utm_src=racelist.gr',
    },
    {
      title: 'Ημιμαραθώνιος Αθήνας 2025',
      date: '2025-03-09',
      location: 'Αθήνα',
      distances: ['21km', '5km'],
      link: 'https://athinahalfmarathon.gr?utm_src=racelist.gr',
    },
    {
      title:
        '2ος Παράκτιος Νυχτερινός Ημιμαραθώνιος Θερμαϊκού - «Αντώνης Ματζάρης»',
      date: '2025-03-15',
      location: 'Δήμος Θερμαϊκού, Θεσσαλονίκη',
      distances: ['21.1km', '10km', '5km', '1.6km'],
      link: 'https://thermaikoshalfmarathon.org/?utm_src=racelist.gr',
    },
    {
      title: '16ος Ημιμαραθώνιος Καλαμπάκα-Τρίκαλα «Θανάσης Σταμόπουλος»',
      date: '2025-03-16',
      location: 'Καλαμπάκα',
      distances: ['21.1km', '5km', '1km'],
      link: 'https://www.trikalahalfmarathon.org/?utm_src=racelist.gr',
    },
    {
      title: 'Run-Maroussi - Σπύρος Λούης 2025',
      date: '2025-03-16',
      location: 'Μαρούσι, Αττικής',
      distances: ['10km', '5km', '1km'],
      link: 'https://raceid.com/el/races/13154/about?utm_src=racelist.gr',
    },
    {
      title: '14ος Taygetos Challenge',
      date: '2025-03-22',
      location: 'Καρδαμύλη, Πελοποννήσου',
      distances: ['42km', '22km', '10km', '5km'],
      link: 'http://www.taygetoschallenge.com/?utm_src=racelist.gr',
    },
    {
      title: '5η Γύρα Μάνης',
      date: '2025-03-22',
      location: 'Αρεόπολη, Λακωνίας',
      distances: ['80km'],
      link: 'http://www.lakoniaultrarunning.com/?utm_src=racelist.gr',
    },
    {
      title: 'Coast to Coast Race 2025',
      date: '2025-03-23',
      location: 'Ιεράπετρα, Λασιθίου',
      distances: ['21.1km', '5km'],
      link: 'https://coast-to-coast.gr/?utm_src=racelist.gr',
    },
    {
      title: '18ος Μαραθώνιος Μεσσήνης',
      date: '2025-03-23',
      location: 'Δήμου Μεσσήνης',
      distances: ['42km'],
      link: 'https://marathon.messini.gr/?utm_src=racelist.gr',
    },
    {
      title: '9ος Δρόμος του Γιοφυριού',
      date: '2025-03-29',
      location: 'Άρτα',
      distances: ['21.1km', '5km', 'Σκυταλοδρομία', '300m', '600m', '800m'],
      link: 'https://artarunningfestival.gr/?utm_src=racelist.gr',
    },
    {
      title: 'Duth Campus Run 2025',
      date: '2025-03-30',
      location: 'Πανεπιστημιούπολη, Κομοτηνή',
      distances: ['14km', '7km'],
      link: null,
    },
    {
      title: '9ος Ημιμαραθώνιος Βόλου – 30o I Love Volos Run',
      date: '2025-03-30',
      location: 'Βόλος',
      distances: ['21.1km', '5km', '500m'],
      link: 'https://voloshalfmarathon.gr/?utm_src=racelist.gr',
    },
    {
      title: '2o Grevena City Run',
      date: '2025-03-30',
      location: 'Γρεβενά',
      distances: ['10km', '5km', '1km'],
      link: null,
    },
    {
      title: 'Μαραθώνιος Ναυπλίου 2025',
      date: '2025-03-30',
      location: 'Ναύπλιο, Αργολίδας',
      distances: ['42km'],
      link: null,
    },
    {
      title: 'Run Greece - Ηράκλειο 2025',
      date: '2025-03-30',
      location: 'Ηράκλειο, Κρήτης',
      distances: ['10km', '5km', 'Παίδων'],
      link: 'https://www.run-greece.gr/index.php/el/registration/registration-irakleio?utm_src=racelist.gr',
    },
  ];
  useHead({
    title: 'Καλένταρι αγώνων δρομου και βουνού για τον Μάρτιο | racelist.gr',
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
