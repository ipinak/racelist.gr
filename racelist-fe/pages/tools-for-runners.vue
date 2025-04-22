<template>
  <div>
    <h1 class="text-3xl text-center text-[#0057A0] my-6">Βοηθήματα Δρομέων</h1>
    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0"
    >
      <li
        v-for="link in links"
        :key="link.href"
        class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink
          :to="link.href"
          class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60"
        >
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  useHead({
    title: 'Εργαλεία για Υπολογισμούς Τρεξίματος - racelist.gr',
    meta: [
      {
        name: 'description',
        content:
          'Ανακαλύψτε χρήσιμα εργαλεία και υπολογιστές για δρομείς. Υπολογίστε την ενυδάτωση, τα ενεργειακά gel και άλλες σημαντικές παραμέτρους για το τρέξιμο και την ποδηλασία.',
      },
      {
        name: 'keywords',
        content:
          'εργαλεία δρομέων, υπολογιστής τρεξίματος, ενυδάτωση τρεξίματος, υπολογιστής gel, υπολογιστής ρυθμου, ypologistis rithmou, pace calculator',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Εργαλεία για Υπολογισμούς Δρομέων - racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Μάθετε πόση ενυδάτωση και πόσα ενεργειακά gel χρειάζεστε για το τρέξιμο και την ποδηλασία. Αξιόπιστα εργαλεία για βελτιωμένη προπόνηση και αγώνες.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/tools-for-runners',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Εργαλεία για Υπολογισμούς Δρομέων - racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Χρησιμοποιήστε εύκολα εργαλεία για να υπολογίσετε ενυδάτωση και ενεργειακά gel για το τρέξιμο και την ποδηλασία.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://racelist.gr/tools-for-runners' }],
  });

  const links = [
    {
      title: 'Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου',
      href: '/gel-calculator',
    },
    {
      title: 'Υπολογιστής Ενυδάτωσης - Υγρά καύσιμα για την άσκησή σας',
      href: '/hydration-calculator',
    },
    {
      title: 'Υπολογιστής Τεστ Cooper | Εκτίμηση Απόστασης σε 12 Λεπτά',
      href: '/cooper-test',
    },
    {
      title:
        'Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο | Εργαλείο για Δρομείς',
      href: '/pace-calculator',
    },
  ];
</script>
