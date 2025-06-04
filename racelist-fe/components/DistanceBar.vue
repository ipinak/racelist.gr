<template>
    <div 
        class="relative"
    >
        <div 
            class="absolute inset-0 bg-[#0057A0] rounded"
            :style="{ width: `${distance.barWidth}%` }"
        ></div>
        <div class="relative z-10 px-3 py-2 text-sm text-white font-medium">
            {{ distance.text }}
        </div>
    </div>
</template>

<script setup>
defineProps({
  distance: {
    type: Object,
    required: true
  }
});
</script>