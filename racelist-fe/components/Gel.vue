<template>
  <div
    class="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl shadow-md bg-paper border border-line"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <img
      :src="gel.image"
      :alt="gel.name"
      class="w-full md:w-1/3 object-cover rounded-2xl"
    />

    <div class="w-full md:w-2/3">
      <h2 class="font-display text-2xl font-bold mb-2 text-ink">{{ gel.name }}</h2>
      <p class="text-grey mb-1">
        <strong>Τιμή (ή εύρος):</strong> {{ gel.price }} €
      </p>
      <p class="text-grey italic mb-4">{{ gel.description }}</p>
      <p class="text-grey mb-4">Υδατάνθρακες: {{ gel.carbs }} γρ.</p>

      <div
        v-if="gel.links && gel.links.length > 0"
        class="flex flex-wrap gap-3"
      >
        <a
          v-for="(link, index) in gel.links"
          :key="index"
          :href="link.url"
          target="_blank"
          class="bg-blue-deep text-paper px-4 py-3 rounded-full font-semibold text-sm hover:bg-ink transition-colors"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    gel: {
      type: Object,
      default: () => {},
    },
    imageLeft: {
      type: Boolean,
      default: true,
    },
  });
</script>
