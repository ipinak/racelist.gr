<template>
  <div>
    <RaceFilters
      :races="races"
      @search="handleSearch"
      @area-filter="handleAreaFilter"
      @city-filter="handleCityFilter"
      @location-filter="handleLocationFilter"
    />

    <ul class="text-center">
      <li v-if="displayedRaces.length === 0">{{ messages.no_races }}</li>
      <RaceItem v-for="race in displayedRaces" :key="race.ID" :race="race" />
    </ul>
  </div>
</template>

<script setup>
  import RaceItem from './RaceItem.vue';
  import RaceFilters from './RaceFilters.vue';
  import { computed, ref, watchEffect } from 'vue';
  import Fuse from 'fuse.js';
  import { parseLocation } from '~/shared/location.js';

  const props = defineProps({
    races: {
      type: Array,
      default: () => [],
    },
    currentDate: Date,
  });

  const searchTerm = ref('');
  const selectedArea = ref('');
  const selectedCity = ref('');
  const selectedLocation = ref('');
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

  const handleAreaFilter = (area) => {
    selectedArea.value = area;
    selectedCity.value = '';
    selectedLocation.value = '';
  };

  const handleCityFilter = (city) => {
    selectedCity.value = city;
    selectedArea.value = '';
    selectedLocation.value = '';
  };

  const handleLocationFilter = (location) => {
    selectedLocation.value = location;
    selectedArea.value = '';
    selectedCity.value = '';
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

    // Apply location filters
    if (selectedArea.value) {
      filtered = filtered.filter((race) => {
        if (!race.Location) return false;
        const parsedLocation = parseLocation(race.Location);
        return parsedLocation.area === selectedArea.value;
      });
    }

    if (selectedCity.value) {
      filtered = filtered.filter((race) => {
        if (!race.Location) return false;
        const parsedLocation = parseLocation(race.Location);
        return parsedLocation.city === selectedCity.value;
      });
    }

    if (selectedLocation.value) {
      filtered = filtered.filter(
        (race) => race.Location && race.Location === selectedLocation.value
      );
    }

    // Apply fuzzy search if there's a search term
    if (searchTerm.value && fuse.value) {
      const searchResults = fuse.value.search(searchTerm.value);
      const searchFilteredRaces = searchResults.map((result) => result.item);

      // Combine search results with other filters
      filtered = filtered.filter((race) =>
        searchFilteredRaces.some((searchRace) => searchRace.ID === race.ID)
      );
    }

    return filtered.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  });
</script>
