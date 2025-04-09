<template>
  <li
    class="bg-[#f4f4f4] border-l-4 border-[#00ffff] p-4 my-2 rounded hover:bg-[#e6faff]"
  >
    <strong>{{ race.Title }}</strong> - {{ race.Date }} {{ race.Location }}
    <br />
    <div v-if="race.Distances?.length">
      <b>Αποστάσεις:</b> {{ race.Distances.join(', ') }}
    </div>
    <div v-if="race.SignupLink">
      <a
        :href="`${race.SignupLink}?utm_src=racelist.gr`"
        class="text-[#9BBEC4] hover:text-[#a4c5ca]"
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
