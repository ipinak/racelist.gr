<template>
  <div
    class="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl shadow-md bg-white"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <img
      :src="gel.image"
      :alt="gel.name"
      class="w-full md:w-1/3 object-cover rounded-2xl"
    />

    <div class="w-full md:w-2/3">
      <h2 class="text-2xl font-bold mb-2">{{ gel.name }}</h2>
      <p class="text-gray-600 mb-1">
        <strong>Τιμή (ή εύρος):</strong> {{ gel.price }} €
      </p>
      <p class="text-gray-700 italic mb-4">{{ gel.description }}</p>
      <p class="text-gray-700 mb-4">Υδατάνθρακες: {{ gel.carbs }} γρ.</p>

      <div
        class="flex flex-wrap gap-3"
        v-if="gel.links && gel.links.length > 0"
      >
        <a
          v-for="(link, index) in gel.links"
          :key="index"
          :href="link.url"
          target="_blank"
          class="bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#a4c5ca] transition"
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
