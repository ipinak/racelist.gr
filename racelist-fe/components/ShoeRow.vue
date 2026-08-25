<template>
  <div
    class="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl shadow-md bg-paper border border-line"
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
              ? 'border-blue'
              : 'border-line hover:border-grey'
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
      <h2 class="font-display text-2xl font-bold mb-2 text-ink">{{ name }}</h2>
      <p class="text-grey mb-1">
        <strong>Τιμή (ή εύρος):</strong> {{ price }}
      </p>
      <p class="text-grey italic mb-4">{{ description }}</p>

      <div class="flex flex-wrap gap-3">
        <CtaButton
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          target="_blank"
          size="sm"
        >
          {{ link.label }}
        </CtaButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import CtaButton from '~/components/CtaButton.vue';

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
