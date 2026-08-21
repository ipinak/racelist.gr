<template>
  <time
    :datetime="date"
    class="block text-sm text-gray-500 mb-6"
    :class="{ 'text-center': centered }"
  >
    Δημοσιεύτηκε στις {{ formatDate(date) }}
  </time>
</template>

<script setup>
  import { formatDate } from '~/shared/formatters';

  defineProps({
    date: {
      type: String,
      required: true,
    },
    centered: {
      type: Boolean,
      default: false,
    },
  });
</script>
