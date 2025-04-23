<template>
  <div>
    <ul class="space-y-4">
      <li v-if="races.length === 0">{{ messages.no_races }}</li>
      <RaceItem v-for="race in races" :key="race.ID" :race="race" />
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    races: {
      type: Array,
      required: true,
      default: () => [],
    },
  });

  const messages = {
    no_races: 'Κανένας αγώνας',
  };
</script>
