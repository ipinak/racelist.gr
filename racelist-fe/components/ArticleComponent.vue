<template>
  <li
    class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
  >
    <NuxtLink
      :to="article.href"
      class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60 capitalize"
    >
      <span
        v-if="latest"
        class="text-sm text-[#0057A0] bg-[#0057A0]/10 px-2 py-1 rounded-full font-medium"
        >Νέο</span
      >
      {{ article.title }}
    </NuxtLink>
    <time
      v-if="article.timestamp"
      :datetime="article.timestamp"
      class="block text-xs text-gray-500 mt-1"
    >
      {{ formatDate(article.timestamp) }}
    </time>
  </li>
</template>

<script setup>
  import { formatDate } from '~/shared/formatters';

  defineProps({
    article: {
      type: Object,
      required: true,
    },
    latest: {
      type: Boolean,
      default: false,
    },
  });
</script>
