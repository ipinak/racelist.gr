<template>
  <li
    class="bg-[#f4f4f4] border-l-4 border-[#0057A0] p-4 my-2 rounded hover:bg-[#0057A0]/10"
  >
    <NuxtLink
      :to="`/agwnas/${race.Slug}`"
      class="text-[#0057A0] hover:text-[#0057A0]/60"
    >
      <strong>{{ race.Title }}</strong>
    </NuxtLink>
    - {{ format(race.Date) }} {{ race.Location }}
    <br />
    <div v-if="race.Distances?.length">
      <b>Αποστάσεις:</b> {{ race.Distances.join(', ') }}
    </div>
    <div v-if="race.SignupLink">
      <a
        :href="`${race.SignupLink}?utm_source=racelist.gr`"
        class="text-[#0057A0] hover:text-[#0057A0]/60"
        target="_blank"
      >
        Εγγραφή
      </a>
    </div>
  </li>
</template>

<script setup>
  import { formatDate } from '~/shared/formatters';

  defineProps({
    race: {
      type: Object,
      default: () => ({}),
    },
  });

  const format = formatDate;
</script>
