<template>
  <div class="mt-8">
    <div v-if="randomArticles.length" class="bg-paper-dim border border-line p-6 rounded-lg">
      <h3 class="font-display text-lg font-semibold text-ink mb-3">Άρθρα που μπορεί να σε ενδιαφέρουν</h3>
      <ul class="list-disc pl-6 text-blue">
        <li v-for="article in randomArticles" :key="article.href" class="mb-2">
          <NuxtLink
            :to="article.href"
            class="underline hover:bg-blue-deep hover:text-paper pr-0.5 py-0.5 rounded transition-colors duration-200"
          >
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div v-if="randomTools.length" class="mt-6">
      <h3 class="font-display text-lg font-semibold text-ink mb-3">Χρήσιμα εργαλεία για τον αγώνα σου</h3>
      <ul class="grid gap-px bg-line grid-cols-1 sm:grid-cols-2 list-none p-0">
        <li v-for="tool in randomTools" :key="tool.href" class="bg-paper p-5">
          <ToolIcon :name="tool.icon" class="w-5 h-5 text-blue mb-2" />
          <NuxtLink
            :to="tool.href"
            class="block font-display text-base font-semibold text-ink leading-snug hover:text-blue-deep transition-colors mb-1"
          >
            {{ tool.title }}
          </NuxtLink>
          <p class="text-sm text-grey leading-snug">{{ tool.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    articleCount: {
      type: Number,
      default: 3,
    },
    toolCount: {
      type: Number,
      default: 2,
    },
  });

  // Fisher-Yates shuffle, returns a new array
  const shuffle = (list) => {
    const result = [...list];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const { articles } = useArticles();
  const { tools } = useTools();

  const randomArticles = computed(() =>
    shuffle(articles).slice(0, props.articleCount),
  );
  const randomTools = computed(() => shuffle(tools).slice(0, props.toolCount));
</script>
