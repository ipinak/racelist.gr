<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#9BBEC4] font-bold text-center mb-8">
      Αγώνες δρόμου και βουνού για το 2025 ανα μήνα
    </h1>

    <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0">
      <li
        v-for="month in months"
        :key="month.href"
        class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink :to="month.href" class="text-lg font-semibold text-[#9BBEC4] hover:text-[#ff00ff]">
          {{ month.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const months = [
  {
    label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Φεβρουάριο',
    href: '/agwnes/kalentari-agwnwn-febrouarios-2025'
  },
  {
    label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Μάρτιο',
    href: '/agwnes/kalentari-agwnwn-martios-2025'
  },
  {
    label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Απρίλιο',
    href: '/agwnes/kalentari-agwnwn-aprilios-2025'
  },
  {
    label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Μάιο',
    href: '/agwnes/kalentari-agwnwn-maios-2025'
  },
  {
    label: 'Καλένταρι αγώνων δρόμου και βουνού για τον Ιούνιο',
    href: '/agwnes/kalentari-agwnwn-iounios-2025'
  }
]
</script>

