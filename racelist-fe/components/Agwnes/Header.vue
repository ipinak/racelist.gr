<template>
  <h1 class="text-3xl text-[#0057A0] font-bold text-center mb-6">
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
