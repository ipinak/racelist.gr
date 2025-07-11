<template>
  <div
    class="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl shadow-md bg-white"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <!-- Single Image Display -->
    <img
      v-if="!Array.isArray(image)"
      :src="image"
      :alt="name"
      class="w-full md:w-1/3 object-cover rounded-2xl"
    />

    <!-- Multiple Images Display -->
    <div v-else class="w-full md:w-1/3">
      <!-- Main Image -->
      <img
        :src="images[activeImageIndex]"
        :alt="`${name} - Image ${activeImageIndex + 1}`"
        class="w-full object-cover rounded-2xl mb-2"
      />

      <!-- Thumbnail Navigation (if more than 1 image) -->
      <div v-if="images.length > 1" class="flex gap-2 justify-center">
        <button
          v-for="(img, index) in images"
          :key="index"
          class="w-12 h-12 border-2 rounded-lg overflow-hidden transition-all duration-200"
          :class="
            activeImageIndex === index
              ? 'border-[#0057A0]'
              : 'border-gray-300 hover:border-gray-400'
          "
          @click="activeImageIndex = index"
        >
          <img
            :src="img"
            :alt="`${name} thumbnail ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>

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
          class="bg-[#0057A0] text-white p-3 rounded hover:bg-[#0057A0]/60 transition"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String, Array],
      required: true,
    },
    imageLeft: {
      type: Boolean,
      default: true,
    },
    links: {
      type: Array,
      default: () => [],
    },
  });

  const activeImageIndex = ref(0);

  // Computed property to normalize image(s) to array format
  const images = computed(() => {
    return Array.isArray(props.image) ? props.image : [props.image];
  });
</script>
