<template>
  <button
    :type="type"
    @click="onClick"
    class="bg-[#0057A0] text-white p-3 rounded hover:bg-[#0057A0]/70 transition"
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
