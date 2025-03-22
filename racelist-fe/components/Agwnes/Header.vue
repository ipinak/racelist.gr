<template>
  <h1 class="text-3xl text-[#9BBEC4] font-bold text-center mb-6">
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
