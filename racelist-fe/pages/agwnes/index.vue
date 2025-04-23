<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold text-center mb-8">
      Αγώνες δρόμου και βουνού για το {{ year }} ανα μήνα
    </h1>

    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0"
    >
      <li
        v-for="month in months"
        :key="month.href"
        class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink
          :to="month.href"
          class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60"
        >
          {{ month.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const year = new Date().getFullYear();
  const months = [
    {
      label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Φεβρουάριο',
      href: '/agwnes/kalentari-agwnwn-febrouarios-2025/',
    },
    {
      label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Μάρτιο',
      href: '/agwnes/kalentari-agwnwn-martios-2025/',
    },
    {
      label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Απρίλιο',
      href: '/agwnes/kalentari-agwnwn-aprilios-2025/',
    },
    {
      label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Μάιο',
      href: '/agwnes/kalentari-agwnwn-maios-2025/',
    },
    {
      label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Ιούνιο',
      href: '/agwnes/kalentari-agwnwn-iounios-2025/',
    },
  ];

  useHead({
    title: `Καλένταρι Αγώνων Δρόμου & Βουνού ${year} | racelist.gr`,
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/agwnes/',
      },
    ],
    meta: [
      {
        name: 'description',
        content: `Ανακάλυψε όλους τους αγώνες δρόμου και βουνού για το ${year}, ταξινομημένους ανά μήνα. Δες το πλήρες καλένταρι αγώνων σε όλη την Ελλάδα.`,
      },
      {
        name: 'keywords',
        content: `καλένταρι αγώνων, αγώνες δρόμου ${year}, trail running ${year}, αγώνες βουνού Ελλάδα, προγραμματισμός αγώνων, τρέξιμο ${year}, ημερολόγιο δρομέα`,
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: `Καλένταρι Αγώνων Δρόμου & Βουνού ${year} | racelist.gr`,
      },
      {
        property: 'og:description',
        content: `Όλοι οι αγώνες δρόμου και βουνού στην Ελλάδα για το ${year}. Αναζήτησε μήνα-μήνα τον επόμενο σου αγώνα.`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/agwnes',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });
</script>
