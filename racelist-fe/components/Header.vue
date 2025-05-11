<template>
  <header class="bg-[#0057A0] text-white p-4">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">RL</NuxtLink>
      <!-- Mobile burger button -->
      <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center space-x-4 font-bold">
        <NuxtLink to="/arthra" class="hover:text-gray-200">Άρθρα</NuxtLink>
        <NuxtLink to="/tools-for-runners" class="hover:text-gray-200">
          Βοηθήματα Δρομέων
        </NuxtLink>
      </nav>
    </div>
    <!-- Mobile nav -->
    <nav v-show="isMenuOpen" class="md:hidden pt-4 space-y-2 font-bold">
      <NuxtLink to="/arthra" class="block hover:text-gray-200 py-2">
        Άρθρα
      </NuxtLink>
      <NuxtLink to="/tools-for-runners" class="block hover:text-gray-200 py-2">
        Βοηθήματα Δρομέων
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  const isMenuOpen = ref(false);
</script>
