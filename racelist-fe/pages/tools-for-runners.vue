<template>
  <div>
    <h1 class="font-display text-3xl font-semibold text-center text-ink my-6">Βοηθήματα Δρομέων</h1>
    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0"
    >
      <li
        v-for="link in links"
        :key="link.href"
        class="border border-line rounded-xl p-4 text-center hover:bg-paper-dim hover:border-blue transition-colors"
      >
        <NuxtLink
          :to="link.href"
          class="font-display text-lg font-semibold text-blue hover:text-blue-deep"
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
        content: 'https://racelist.gr/tools-for-runners/',
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
    link: [
      { rel: 'canonical', href: 'https://racelist.gr/tools-for-runners/' },
    ],
  });

  const links = [
    {
      title: 'Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου',
      href: '/gel-calculator/',
    },
    {
      title: 'Υπολογιστής Ενυδάτωσης - Υγρά καύσιμα για την άσκησή σας',
      href: '/hydration-calculator/',
    },
    {
      title: 'Υπολογιστής Τεστ Cooper | Εκτίμηση Απόστασης σε 12 Λεπτά',
      href: '/cooper-test/',
    },
    {
      title:
        'Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο | Εργαλείο για Δρομείς',
      href: '/pace-calculator/',
    },
    {
      title: 'Υπολογιστής Προβλέψεων Χρόνων - Τύπος Riegel για Δρομείς',
      href: '/race-time-predictor/',
    },
    {
      title: 'Υπολογιστής Κόστους & Διάρκειας Ζωής Παπουτσιών Τρεξίματος',
      href: '/shoe-cost-tracker/',
    },
  ];
</script>
