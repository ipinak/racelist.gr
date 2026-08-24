<template>
  <div class="max-w-xl mx-auto mb-8 space-y-3">
    <!-- Search Input -->
    <div class="relative">
      <label for="race-search" class="sr-only">
        Αναζήτηση αγώνα με όνομα, τοποθεσία, ή απόσταση
      </label>
      <input
        id="race-search"
        v-model="searchQuery"
        type="text"
        placeholder="Αναζήτηση αγώνα με όνομα, τοποθεσία, ή απόσταση..."
        class="w-full p-3 pl-4 pr-10 border border-line rounded-lg focus:outline-none focus:border-blue text-ink bg-paper"
        @input="handleSearch"
      />
      <svg
        class="absolute right-3 top-3.5 w-4 h-4 text-grey pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>

    <!-- Location Filters Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <!-- Area Filter -->
      <div class="relative">
        <label for="area-filter" class="sr-only">Περιοχή</label>
        <select
          id="area-filter"
          v-model="selectedArea"
          class="w-full p-3 pr-10 border border-line rounded-lg focus:outline-none focus:border-blue text-ink bg-paper appearance-none font-mono text-xs uppercase tracking-wide"
          @change="handleAreaChange"
        >
          <option value="">Όλες οι περιοχές</option>
          <option v-for="area in uniqueAreas" :key="area" :value="area">
            {{ area }}
          </option>
        </select>
        <svg
          class="absolute right-3 top-3.5 w-4 h-4 text-grey pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <!-- City Filter -->
      <div class="relative">
        <label for="city-filter" class="sr-only">Πόλη</label>
        <select
          id="city-filter"
          v-model="selectedCity"
          class="w-full p-3 pr-10 border border-line rounded-lg focus:outline-none focus:border-blue text-ink bg-paper appearance-none font-mono text-xs uppercase tracking-wide"
          @change="handleCityChange"
        >
          <option value="">Όλες οι πόλεις</option>
          <option v-for="city in uniqueCities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
        <svg
          class="absolute right-3 top-3.5 w-4 h-4 text-grey pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>

    <!-- Active Filters Display -->
    <div v-if="activeFilters.length > 0" class="flex flex-wrap gap-2">
      <div
        v-for="filter in activeFilters"
        :key="filter.type"
        class="flex items-center gap-1.5 border border-line rounded-full pl-3 pr-2 py-1 font-mono text-xs text-ink bg-paper"
      >
        <span>{{ filter.label }}: {{ filter.value }}</span>
        <button
          class="text-grey hover:text-blue transition-colors"
          :aria-label="`Αφαίρεση φίλτρου ${filter.label}`"
          @click="removeFilter(filter.type)"
        >
          <svg
            class="w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { getUniqueAreas, getUniqueCities } from '~/shared/location.js';

  const props = defineProps({
    races: {
      type: Array,
      default: () => [],
    },
  });

  const searchQuery = ref('');
  const selectedArea = ref('');
  const selectedCity = ref('');
  const selectedLocation = ref('');
  const emit = defineEmits([
    'search',
    'areaFilter',
    'cityFilter',
    'locationFilter',
  ]);

  // Extract unique areas from races
  const uniqueAreas = computed(() => {
    return getUniqueAreas(props.races);
  });

  // Extract unique cities from races
  const uniqueCities = computed(() => {
    return getUniqueCities(props.races);
  });

  // Track active filters for display
  const activeFilters = computed(() => {
    const filters = [];

    if (searchQuery.value.trim()) {
      filters.push({
        type: 'search',
        label: 'Αναζήτηση',
        value: searchQuery.value,
      });
    }

    if (selectedArea.value) {
      filters.push({
        type: 'area',
        label: 'Περιοχή',
        value: selectedArea.value,
      });
    }

    if (selectedCity.value) {
      filters.push({
        type: 'city',
        label: 'Πόλη',
        value: selectedCity.value,
      });
    }

    if (selectedLocation.value) {
      filters.push({
        type: 'location',
        label: 'Τοποθεσία',
        value: selectedLocation.value,
      });
    }

    return filters;
  });

  const handleSearch = () => {
    emit('search', searchQuery.value);
  };

  const handleAreaChange = () => {
    // Clear other location filters when area is selected
    if (selectedArea.value) {
      selectedCity.value = '';
      selectedLocation.value = '';
    }
    emit('areaFilter', selectedArea.value);
  };

  const handleCityChange = () => {
    // Clear other location filters when city is selected
    if (selectedCity.value) {
      selectedArea.value = '';
      selectedLocation.value = '';
    }
    emit('cityFilter', selectedCity.value);
  };

  const handleLocationChange = () => {
    // Clear other location filters when full location is selected
    if (selectedLocation.value) {
      selectedArea.value = '';
      selectedCity.value = '';
    }
    emit('locationFilter', selectedLocation.value);
  };

  const removeFilter = (filterType) => {
    if (filterType === 'search') {
      searchQuery.value = '';
      handleSearch();
    } else if (filterType === 'area') {
      selectedArea.value = '';
      handleAreaChange();
    } else if (filterType === 'city') {
      selectedCity.value = '';
      handleCityChange();
    } else if (filterType === 'location') {
      selectedLocation.value = '';
      handleLocationChange();
    }
  };
</script>
