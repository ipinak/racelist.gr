<template>
  <li
    class="bg-[#f4f4f4] border-l-4 border-[#0057A0] p-4 my-2 rounded hover:bg-[#0057A0]/10"
  >
    <strong>{{ race.Title }}</strong> - {{ race.Date }} {{ race.Location }}
    <br />
    <div v-if="race.Distances?.length">
      <b>Αποστάσεις:</b> {{ race.Distances.join(', ') }}
    </div>
    <div v-if="race.SignupLink">
      <a
        :href="`${race.SignupLink}?utm_src=racelist.gr`"
        class="text-[#0057A0] hover:text-[#0057A0]/60"
        target="_blank"
      >
        Εγγραφή
      </a>
    </div>
  </li>
</template>

<script setup>
  defineProps({ race: Object });
</script>
