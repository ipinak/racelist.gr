<template>
  <div>
    <ul class="space-y-4">
      <li v-if="races.length === 0">{{ messages.no_races }}</li>
      <template v-for="(race, i) in races" :key="race.ID">
        <RaceItem :race="race" />
        <HouseAd v-if="i === houseAdIndex" tag="li" placement="race-list" />
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import HouseAd from '~/components/HouseAd.vue';
  import { houseAdIndexFor } from '~/shared/houseAds';

  const props = defineProps({
    races: {
      type: Array,
      required: true,
      default: () => [],
    },
  });

  const houseAdIndex = computed(() => houseAdIndexFor(props.races.length));

  const messages = {
    no_races: 'Κανένας αγώνας',
  };
</script>
