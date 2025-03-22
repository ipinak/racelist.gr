<template>
  <div>
    <h1 class="text-3xl text-center text-[#9BBEC4] my-6">Άρθρα</h1>
    <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0">
      <li
        v-for="article in articles"
        :key="article.href"
        class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink :to="article.href" class="text-lg font-semibold text-[#9BBEC4] hover:text-[#ff00ff]">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const articles = [
  {
    title: 'Ο Τερματισμός Ενός Αγώνα',
    href: '/arthra/o-termatismos-enos-agwna'
  },
  {
    title: '3 Τρόποι Αποθεραπείας από Ημιμαραθώνιο',
    href: '/arthra/3-tropoi-apotherapies-apo-hmimarathonio'
  },
  {
    title: 'Τι τρώμε πριν από έναν αγώνα τρεξίματος',
    href: '/arthra/ti-trwme-prin-enan-agwna-treximatos'
  }
]
</script>

