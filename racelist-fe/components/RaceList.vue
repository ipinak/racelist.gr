<template>
  <div>
    <RaceSearch @search="handleSearch" />

    <ul class="text-center">
      <li v-if="displayedRaces.length === 0">{{ messages.no_races }}</li>
      <RaceItem v-for="race in displayedRaces" :key="race.ID" :race="race" />
    </ul>
  </div>
</template>

<script setup>
  import RaceItem from './RaceItem.vue';
  import RaceSearch from './SearchInput.vue';
  import { computed, ref, watchEffect } from 'vue';
  import Fuse from 'fuse.js';

  const props = defineProps({
    races: {
      type: Array,
      default: () => [],
    },
    currentDate: Date,
  });

  const searchTerm = ref('');
  const fuse = ref(null);

  const messages = {
    no_races: 'Κανένας αγώνας',
  };

  // Initialize Fuse instance with search options
  watchEffect(() => {
    const fuseOptions = {
      keys: ['Title', 'Location', 'Distances'],
      threshold: 0.3,
      ignoreLocation: true,
      shouldSort: true,
    };
    fuse.value = new Fuse(props.races, fuseOptions);
  });

  const handleSearch = (query) => {
    searchTerm.value = query.toLowerCase();
  };

  const displayedRaces = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // First filter future races
    let filtered = props.races.filter((r) => new Date(r.Date) > today);

    // Apply date filter if currentDate is set
    if (props.currentDate) {
      filtered = filtered.filter((r) => {
        const date = new Date(r.Date);
        return (
          date.getFullYear() === props.currentDate.getFullYear() &&
          date.getMonth() === props.currentDate.getMonth()
        );
      });
    }

    // Apply fuzzy search if there's a search term
    if (searchTerm.value && fuse.value) {
      const searchResults = fuse.value.search(searchTerm.value);
      filtered = searchResults
        .map((result) => result.item)
        .filter((race) => new Date(race.Date) > today);
    }

    return filtered.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  });
</script>
