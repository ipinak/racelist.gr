<template>
  <li
    class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
  >
    <NuxtLink
      :to="article.href"
      class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60 capitalize"
    >
      {{ article.title }}
    </NuxtLink>
  </li>
</template>

<script setup>
  defineProps({
    article: {
      type: Object,
      required: true,
    },
  });
</script>
