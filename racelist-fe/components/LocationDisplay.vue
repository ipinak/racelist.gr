<template>
  <div class="bg-gray-50 p-4 rounded-lg">
    <h3 class="text-lg font-semibold mb-3 text-gray-800">Τοποθεσία</h3>
    <div class="space-y-2">
      <!-- Full location -->
      <div class="text-gray-700">
        <span class="font-medium">Πλήρης:</span> {{ race.Location }}
      </div>

      <!-- Parsed area and city if available -->
      <div
        v-if="parsedLocation.area || parsedLocation.city"
        class="text-sm text-gray-600"
      >
        <div v-if="parsedLocation.area" class="flex items-center">
          <span class="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" />
          <span class="font-medium">Περιοχή:</span> {{ parsedLocation.area }}
        </div>
        <div v-if="parsedLocation.city" class="flex items-center">
          <span class="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
          <span class="font-medium">Πόλη:</span> {{ parsedLocation.city }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { parseLocation } from '~/shared/location.js';

  const props = defineProps({
    race: {
      type: Object,
      required: true,
    },
  });

  const parsedLocation = computed(() => {
    return parseLocation(props.race.Location);
  });
</script>
