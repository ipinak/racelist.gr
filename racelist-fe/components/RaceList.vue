<template>
  <div>
    <ul class="text-center">
      <li v-if="filteredRaces.length === 0">{{ messages.no_races }}</li>
      <RaceItem v-for="race in filteredRaces" :key="race.ID" :race="race" />
    </ul>
  </div>
</template>

<script setup>
  import RaceItem from './RaceItem.vue';
  import { computed } from 'vue';

  const props = defineProps({
    races: {
      type: Array,
      default: () => [],
    },
    currentDate: Date,
  });

  const messages = {
    no_races: 'Κανένας αγώνας',
  };

  const filteredRaces = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return props.races
      .filter((r) => new Date(r.Date) > today)
      .filter((r) => {
        const date = new Date(r.Date);
        return (
          date.getFullYear() === props.currentDate.getFullYear() &&
          date.getMonth() === props.currentDate.getMonth()
        );
      })
      .sort((a, b) => new Date(a.Date) - new Date(b.Date));
  });
</script>
