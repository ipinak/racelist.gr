<template>
  <div class="max-w-xl mx-auto mb-8">
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
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const searchQuery = ref('');
  const emit = defineEmits(['search']);

  const handleSearch = () => {
    emit('search', searchQuery.value);
  };
</script>
