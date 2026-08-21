<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold text-center mb-8">
      Αγώνες τρεξίματος δρόμου και βουνού για το {{ year }} ανα μήνα
    </h1>

    <h2 class="text-xl font-semibold text-[#0057A0] mb-4">{{ year }}</h2>
    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0 mb-10"
    >
      <li
        v-for="month in currentYearMonths"
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

    <h2 class="text-xl font-semibold text-gray-500 mb-4">
      Αρχείο {{ year - 1 }}
    </h2>
    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0"
    >
      <li
        v-for="month in previousYearMonths"
        :key="month.href"
        class="border-2 border-gray-200 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink
          :to="month.href"
          class="text-base text-gray-500 hover:text-gray-700"
        >
          {{ month.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const year = new Date().getFullYear();

  // Only months with a published calendar page for the current year.
  // Add new months here as their pages go live (kalentari-agwnwn-<minas>-2026.vue).
  const currentYearMonths = [
    {
      label: 'Ιανουάριος 2026',
      href: '/agwnes/kalentari-agwnwn-ianouarios-2026/',
    },
    {
      label: 'Φεβρουάριος 2026',
      href: '/agwnes/kalentari-agwnwn-febrouarios-2026/',
    },
    {
      label: 'Μάρτιος 2026',
      href: '/agwnes/kalentari-agwnwn-martios-2026/',
    },
    {
      label: 'Απρίλιος 2026',
      href: '/agwnes/kalentari-agwnwn-aprilios-2026/',
    },
    {
      label: 'Μάιος 2026',
      href: '/agwnes/kalentari-agwnwn-maios-2026/',
    },
    {
      label: 'Ιούνιος 2026',
      href: '/agwnes/kalentari-agwnwn-iounios-2026/',
    },
    {
      label: 'Ιούλιος 2026',
      href: '/agwnes/kalentari-agwnwn-ioulios-2026/',
    },
    {
      label: 'Αύγουστος 2026',
      href: '/agwnes/kalentari-agwnwn-augoustos-2026/',
    },
  ];

  const previousYearMonths = [
    {
      label: 'Φεβρουάριος 2025',
      href: '/agwnes/kalentari-agwnwn-febrouarios-2025/',
    },
    {
      label: 'Μάρτιος 2025',
      href: '/agwnes/kalentari-agwnwn-martios-2025/',
    },
    {
      label: 'Απρίλιος 2025',
      href: '/agwnes/kalentari-agwnwn-aprilios-2025/',
    },
    {
      label: 'Μάιος 2025',
      href: '/agwnes/kalentari-agwnwn-maios-2025/',
    },
    {
      label: 'Ιούνιος 2025',
      href: '/agwnes/kalentari-agwnwn-iounios-2025/',
    },
    {
      label: 'Ιούλιος 2025',
      href: '/agwnes/kalentari-agwnwn-ioulios-2025/',
    },
    {
      label: 'Αύγουστος 2025',
      href: '/agwnes/kalentari-agwnwn-augoustos-2025/',
    },
    {
      label: 'Σεπτέμβριος 2025',
      href: '/agwnes/kalentari-agwnwn-septembrios-2025/',
    },
    {
      label: 'Οκτώβριος 2025',
      href: '/agwnes/kalentari-agwnwn-oktobrios-2025/',
    },
    {
      label: 'Νοέμβριος 2025',
      href: '/agwnes/kalentari-agwnwn-noembrios-2025/',
    },
    {
      label: 'Δεκέμβριος 2025',
      href: '/agwnes/kalentari-agwnwn-dekembrios-2025/',
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
        content: `Ανακάλυψε όλους τους αγώνες τρεξίματος δρόμου και βουνού για το ${year}, ταξινομημένους ανά μήνα. Δες το πλήρες καλένταρι αγώνων σε όλη την Ελλάδα.`,
      },
      {
        name: 'keywords',
        content: `καλένταρι αγώνων, αγώνες τρεξίματος δρόμου ${year}, trail running ${year}, αγώνες βουνού Ελλάδα, προγραμματισμός αγώνων, τρέξιμο ${year}, ημερολόγιο δρομέα`,
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
        content: `Όλοι οι αγώνες τρεξίματος δρόμου και βουνού στην Ελλάδα για το ${year}. Αναζήτησε μήνα-μήνα τον επόμενο σου αγώνα.`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/agwnes',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });
</script>
