<template>
  <li
    class="grid grid-cols-1 sm:grid-cols-[130px_1fr_100px] items-center gap-2 sm:gap-5 py-5 border-b border-line"
  >
    <div class="font-mono">
      <div class="text-xs text-grey">{{ format(race.Date) }}</div>
      <div class="text-[11px] text-blue uppercase tracking-wide">
        {{ dayOfWeek(race.Date) }}
      </div>
    </div>

    <div>
      <NuxtLink
        :to="`/agwnas/${race.Slug}`"
        class="text-base sm:text-[17px] font-display font-semibold text-ink hover:text-blue-deep transition-colors"
      >
        {{ race.Title }}
      </NuxtLink>
      <div class="text-sm text-grey mt-0.5">{{ race.Location }}</div>
      <div v-if="race.Distances?.length" class="text-sm text-grey mt-0.5">
        <span class="font-medium text-ink">Αποστάσεις:</span>
        {{ race.Distances.join(', ') }}
      </div>
      <div v-if="race.SignupLink" class="mt-1">
        <a
          :href="`${race.SignupLink}?utm_source=racelist.gr`"
          class="text-sm text-blue hover:text-blue-deep transition-colors"
          target="_blank"
        >
          Εγγραφή →
        </a>
      </div>
      <Countdown :date="race.Date" />
    </div>

    <div class="hidden sm:flex justify-end">
      <span
        class="text-[11px] font-semibold px-3 py-1.5 rounded-full text-center whitespace-nowrap"
        :class="
          trail
            ? 'bg-flag/20 text-trail'
            : 'bg-blue/15 text-blue-deep'
        "
      >
        {{ trail ? 'Ορεινός' : 'Οδικός' }}
      </span>
    </div>
  </li>
</template>

<script setup>
  import { computed } from 'vue';
  import { formatDate } from '~/shared/formatters';
  import { isTrail } from '~/shared/raceType';

  const props = defineProps({
    race: {
      type: Object,
      default: () => ({}),
    },
  });

  const format = formatDate;
  const trail = computed(() => isTrail(props.race));

  const dayOfWeek = (dateString) =>
    new Date(dateString).toLocaleDateString('el-GR', { weekday: 'long' });
</script>
