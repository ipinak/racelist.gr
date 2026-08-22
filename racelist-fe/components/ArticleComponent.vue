<template>
  <li class="bg-paper p-6 sm:p-7">
    <div class="font-mono text-[11px] uppercase tracking-wide text-blue mb-3">
      {{ latest ? 'Νέο' : 'Άρθρο' }}
    </div>
    <NuxtLink
      :to="article.href"
      class="block font-display text-lg font-semibold text-ink leading-snug hover:text-blue-deep transition-colors mb-3"
    >
      {{ article.title }}
    </NuxtLink>
    <time
      v-if="article.timestamp"
      :datetime="article.timestamp"
      class="block text-xs text-grey"
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
