<template>
  <h1 class="font-display text-3xl text-ink font-semibold text-center mb-6">
    {{ title }}
  </h1>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>
