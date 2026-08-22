<script setup>
  defineProps({
    articles: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Σχετικά Άρθρα',
    },
  });
</script>

<template>
  <div class="bg-paper-dim border border-line p-6 rounded-lg mt-8">
    <h3 class="font-display text-lg font-semibold text-ink mb-3">{{ title }}</h3>
    <ul class="list-disc pl-6 text-blue">
      <li v-for="(article, index) in articles" :key="index" class="mb-2">
        <nuxt-link
          :to="article.url"
          class="underline hover:bg-blue-deep hover:text-paper pr-0.5 py-0.5 rounded transition-colors duration-200"
        >
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
