<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div class="inline-flex border border-ink rounded-full overflow-hidden">
        <button
          class="font-mono text-xs font-medium tracking-wide px-5 py-2 transition-colors"
          :class="
            viewMode === 'calendar'
              ? 'bg-ink text-paper'
              : 'bg-transparent text-ink'
          "
          @click="viewMode = 'calendar'"
        >
          Ημερολόγιο
        </button>
        <button
          class="font-mono text-xs font-medium tracking-wide px-5 py-2 transition-colors"
          :class="
            viewMode === 'list'
              ? 'bg-ink text-paper'
              : 'bg-transparent text-ink'
          "
          @click="viewMode = 'list'"
        >
          Λίστα
        </button>
      </div>

      <div v-if="viewMode === 'calendar'" class="flex items-center gap-5 text-xs text-grey">
        <span class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-blue inline-block" />
          Οδικός
        </span>
        <span class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-flag inline-block" />
          Ορεινός
        </span>
      </div>
    </div>

    <!-- CALENDAR VIEW -->
    <div v-if="viewMode === 'calendar'">
      <div class="flex items-center gap-4 mb-6">
        <button
          class="w-8 h-8 rounded-full border border-line bg-paper text-grey flex items-center justify-center hover:border-blue hover:text-blue transition-colors"
          aria-label="Προηγούμενος μήνας"
          @click="prevMonth"
        >
          ‹
        </button>
        <div class="font-display font-semibold text-[17px] min-w-[170px] text-center">
          {{ formattedMonth }}
        </div>
        <button
          class="w-8 h-8 rounded-full border border-line bg-paper text-grey flex items-center justify-center hover:border-blue hover:text-blue transition-colors"
          aria-label="Επόμενος μήνας"
          @click="nextMonth"
        >
          ›
        </button>
      </div>

      <div class="grid grid-cols-7 border border-line rounded-lg overflow-hidden">
        <div
          v-for="day in dayLabels"
          :key="day"
          class="font-mono text-[11px] uppercase tracking-wide text-grey text-center py-3 bg-paper-dim border-b border-line"
        >
          {{ day }}
        </div>

        <div
          v-for="(cell, i) in cells"
          :key="i"
          class="min-h-[76px] sm:min-h-[104px] p-1.5 sm:p-2.5 border-b border-r border-line relative"
          :class="[
            (i + 1) % 7 === 0 ? 'border-r-0' : '',
            cell.dim ? 'bg-paper-dim' : 'bg-paper',
          ]"
        >
          <span
            v-if="cell.day"
            class="font-mono text-xs"
            :class="[
              cell.dim ? 'text-grey/50' : 'text-grey',
              cell.today
                ? 'bg-blue-deep text-paper w-[22px] h-[22px] rounded-full inline-flex items-center justify-center'
                : '',
            ]"
          >
            {{ cell.day }}
          </span>
          <NuxtLink
            v-for="race in cell.races"
            :key="race.ID"
            :to="`/agwnas/${race.Slug}`"
            class="block text-[9px] sm:text-[11px] font-semibold px-1.5 py-1 sm:px-1.5 sm:py-1 rounded mt-1 leading-tight overflow-hidden text-ellipsis whitespace-nowrap"
            :class="
              isTrail(race)
                ? 'bg-flag/20 text-trail'
                : 'bg-blue/15 text-blue-deep'
            "
          >
            {{ race.Title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- LIST VIEW -->
    <ul v-else>
      <RaceFilters
        :races="races"
        @search="handleSearch"
        @area-filter="handleAreaFilter"
        @city-filter="handleCityFilter"
        @location-filter="handleLocationFilter"
      />
      <li v-if="displayedRaces.length === 0" class="text-center text-grey py-8">
        Κανένας αγώνας
      </li>
      <RaceItem v-for="race in displayedRaces" :key="race.ID" :race="race" />
    </ul>
  </div>
</template>

<script setup>
  import { ref, computed, watchEffect } from 'vue';
  import Fuse from 'fuse.js';
  import RaceItem from './RaceItem.vue';
  import RaceFilters from './RaceFilters.vue';
  import { isTrail } from '~/shared/raceType';
  import { parseLocation } from '~/shared/location.js';

  const props = defineProps({
    races: {
      type: Array,
      default: () => [],
    },
  });

  const viewMode = ref('calendar');
  const currentDate = ref(new Date());

  const dayLabels = ['Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα', 'Κυ'];

  const formattedMonth = computed(() =>
    currentDate.value.toLocaleString('el-GR', {
      month: 'long',
      year: 'numeric',
    }),
  );

  const prevMonth = () => {
    const d = new Date(currentDate.value);
    d.setMonth(d.getMonth() - 1);
    currentDate.value = d;
  };

  const nextMonth = () => {
    const d = new Date(currentDate.value);
    d.setMonth(d.getMonth() + 1);
    currentDate.value = d;
  };

  const racesByDate = computed(() => {
    const map = new Map();
    for (const race of props.races) {
      if (!race.Date) continue;
      const list = map.get(race.Date) || [];
      list.push(race);
      map.set(race.Date, list);
    }
    return map;
  });

  // Monday-first 6x7 grid, including the leading/trailing days of adjacent
  // months (dimmed) so every week row is fully populated, matching the mockup.
  const cells = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    // JS getDay(): 0=Sun..6=Sat. Convert to Monday-first index (0=Mon..6=Sun).
    const firstDayIdx = (firstOfMonth.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    const todayKey = today.toISOString().slice(0, 10);

    const list = [];
    const totalCells = 42; // 6 weeks x 7 days, matches mockup grid

    for (let i = 0; i < totalCells; i++) {
      const offset = i - firstDayIdx;
      let cellDate;
      let dim = false;

      if (offset < 0) {
        cellDate = new Date(year, month - 1, daysInPrevMonth + offset + 1);
        dim = true;
      } else if (offset >= daysInMonth) {
        cellDate = new Date(year, month + 1, offset - daysInMonth + 1);
        dim = true;
      } else {
        cellDate = new Date(year, month, offset + 1);
      }

      const key = `${cellDate.getFullYear()}-${String(cellDate.getMonth() + 1).padStart(2, '0')}-${String(cellDate.getDate()).padStart(2, '0')}`;

      list.push({
        day: cellDate.getDate(),
        dim,
        today: key === todayKey,
        races: racesByDate.value.get(key) || [],
      });
    }

    return list;
  });

  // --- List view filtering/search (ported from the former RaceList.vue) ---
  const searchTerm = ref('');
  const selectedArea = ref('');
  const selectedCity = ref('');
  const selectedLocation = ref('');
  const fuse = ref(null);

  watchEffect(() => {
    fuse.value = new Fuse(props.races, {
      keys: ['Title', 'Location', 'Distances'],
      threshold: 0.3,
      ignoreLocation: true,
      shouldSort: true,
    });
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

    let filtered = props.races.filter((r) => new Date(r.Date) > today);

    if (selectedArea.value) {
      filtered = filtered.filter((race) => {
        if (!race.Location) return false;
        return parseLocation(race.Location).area === selectedArea.value;
      });
    }

    if (selectedCity.value) {
      filtered = filtered.filter((race) => {
        if (!race.Location) return false;
        return parseLocation(race.Location).city === selectedCity.value;
      });
    }

    if (selectedLocation.value) {
      filtered = filtered.filter(
        (race) => race.Location && race.Location === selectedLocation.value,
      );
    }

    if (searchTerm.value && fuse.value) {
      const searchResults = fuse.value.search(searchTerm.value);
      const searchFilteredRaces = searchResults.map((result) => result.item);
      filtered = filtered.filter((race) =>
        searchFilteredRaces.some((sr) => sr.ID === race.ID),
      );
    }

    return filtered.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  });
</script>
