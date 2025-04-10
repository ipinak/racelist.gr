<template>
  <div class="w-full aspect-video rounded-xl overflow-hidden shadow-md">
    <iframe
      class="w-full h-full"
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
  defineProps({
    videoId: {
      type: String,
      required: true,
    },
  });
</script>
