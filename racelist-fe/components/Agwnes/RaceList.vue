<template>
  <ul class="space-y-4">
    <li
      v-for="race in races"
      :key="race.title"
      class="bg-[#f4f4f4] border-l-4 border-[#00ffff] p-4 rounded hover:bg-[#e6faff] transition"
    >
      <p>
        <strong>{{ race.title }}</strong> - {{ race.date }} {{ race.location }}
        <br />
        <span v-if="race.distances?.length">
          <b>Αποστάσεις</b>: {{ race.distances.join(', ') }}
        </span>
        <span v-if="race.link">
          -
          <a
            :href="race.link"
            class="text-[#9BBEC4] hover:text-[#ff00ff]"
            target="_blank"
          >
            Εγγραφή
          </a>
        </span>
      </p>
    </li>
  </ul>
</template>

<script setup>
  defineProps({
    races: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
</script>
