<template>
  <button
    :type="type"
    @click="onClick"
    class="bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#a4c5ca] transition"
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
