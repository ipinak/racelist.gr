<template>
  <button
    class="bg-[#0057A0] text-white p-3 rounded hover:bg-[#0057A0]/70 transition truncate"
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
