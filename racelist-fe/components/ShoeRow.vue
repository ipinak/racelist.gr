<template>
  <div
    class="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl shadow-md bg-white"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <img
      :src="image"
      :alt="name"
      class="w-full md:w-1/3 object-cover rounded-2xl"
    />

    <div class="w-full md:w-2/3">
      <h2 class="text-2xl font-bold mb-2">{{ name }}</h2>
      <p class="text-gray-600 mb-1">
        <strong>Τιμή (ή εύρος):</strong> {{ price }}
      </p>
      <p class="text-gray-700 italic mb-4">{{ description }}</p>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="(link, index) in links"
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
    name: String,
    price: String,
    description: String,
    image: String,
    imageLeft: {
      type: Boolean,
      default: true,
    },
    links: {
      type: Array,
      default: () => [],
    },
  });
</script>
