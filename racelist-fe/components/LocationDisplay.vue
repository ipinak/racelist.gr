<template>
  <div class="bg-paper-dim p-4 rounded-lg border border-line">
    <h3 class="font-display text-lg font-semibold mb-3 text-ink">Τοποθεσία</h3>
    <div class="space-y-2">
      <!-- Full location -->
      <div class="text-ink">
        <span class="font-medium">Πλήρης:</span> {{ race.Location }}
      </div>

      <!-- Parsed area and city if available -->
      <div
        v-if="parsedLocation.area || parsedLocation.city"
        class="text-sm text-grey"
      >
        <div v-if="parsedLocation.area" class="flex items-center">
          <span class="inline-block w-2 h-2 bg-blue rounded-full mr-2" />
          <span class="font-medium">Περιοχή:</span> {{ parsedLocation.area }}
        </div>
        <div v-if="parsedLocation.city" class="flex items-center">
          <span class="inline-block w-2 h-2 bg-flag rounded-full mr-2" />
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
