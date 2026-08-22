<template>
  <button
    class="bg-blue-deep text-paper px-6 py-3 rounded-full font-semibold text-sm hover:bg-ink transition-colors truncate"
    :type="type"
    @click="onClick"
  >
    {{ title }}
  </button>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: null,
    },
    type: {
      type: String,
      default: 'button',
    },
  });
</script>
