<template>
  <div class="relative">
    <div
      class="absolute inset-0 rounded"
      :class="getDistanceColor(distance.value)"
    ></div>
    <div
      class="relative z-10 px-3 py-2 text-sm font-medium"
      :class="getTextColor(distance.value)"
    >
      {{ distance.text }}
    </div>
  </div>
</template>

<script setup>
  defineProps({
    distance: {
      type: Object,
      required: true,
    },
  });

  const getDistanceColor = (distanceValue) => {
    if (distanceValue <= 1) return 'bg-blue-500'; // Blue for very short distances (up to 1km)
    if (distanceValue <= 5) return 'bg-green-500'; // Green for short distances (1-5km)
    if (distanceValue <= 10) return 'bg-yellow-500'; // Yellow for medium distances (5-10km)
    if (distanceValue <= 21.1) return 'bg-orange-500'; // Orange for long distances (10-21km)
    if (distanceValue <= 42.2) return 'bg-red-500'; // Red for marathon distances (21-42km)
    return 'bg-black'; // Black for ultra distances (42km+)
  };

  const getTextColor = (distanceValue) => {
    if (distanceValue <= 5) return 'text-white'; // white text for green background
    if (distanceValue <= 10) return 'text-black'; // Black text for blue, green, and yellow backgrounds
    return 'text-white'; // White text for orange, red, and black backgrounds
  };
</script>
