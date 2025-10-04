<template>
  <div class="max-w-xl mx-auto mb-8 space-y-4">
    <!-- Search Input -->
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Αναζήτηση αγώνα με όνομα, τοποθεσία, ή απόσταση..."
        class="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057A0] text-gray-700"
        @input="handleSearch"
      />
      <span class="absolute right-3 top-3 text-gray-400">🔍</span>
    </div>

    <!-- Location Filters Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Area Filter -->
      <div class="relative">
        <select
          v-model="selectedArea"
          class="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057A0] text-gray-700 bg-white appearance-none"
          @change="handleAreaChange"
        >
          <option value="">Όλες οι περιοχές</option>
          <option v-for="area in uniqueAreas" :key="area" :value="area">
            {{ area }}
          </option>
        </select>
        <span class="absolute right-3 top-3 text-gray-400 pointer-events-none"
          >🏙️</span
        >
      </div>

      <!-- City Filter -->
      <div class="relative">
        <select
          v-model="selectedCity"
          class="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0057A0] text-gray-700 bg-white appearance-none"
          @change="handleCityChange"
        >
          <option value="">Όλες οι πόλεις</option>
          <option v-for="city in uniqueCities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
        <span class="absolute right-3 top-3 text-gray-400 pointer-events-none"
          >🌆</span
        >
      </div>
    </div>

    <!-- Active Filters Display -->
    <div v-if="activeFilters.length > 0" class="flex flex-wrap gap-2">
      <div
        v-for="filter in activeFilters"
        :key="filter.type"
        class="flex items-center bg-[#0057A0] text-white px-3 py-1 rounded-full text-sm"
      >
        <span>{{ filter.label }}: {{ filter.value }}</span>
        <button
          class="ml-2 text-white hover:text-gray-200"
          @click="removeFilter(filter.type)"
        >
          ✕
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
