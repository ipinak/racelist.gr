<template>
  <header
    class="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line"
  >
    <nav
      class="flex items-center justify-between px-4 py-4 md:px-8 max-w-[1180px] mx-auto"
    >
      <NuxtLink to="/" class="font-display font-bold text-xl text-ink">
        racelist<span class="text-blue">.gr</span>
      </NuxtLink>

      <!-- Mobile burger button -->
      <button
        class="md:hidden text-ink"
        :aria-label="isMenuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
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
      <div class="hidden md:flex items-center gap-9">
        <div class="flex items-center gap-9 text-sm font-medium text-grey">
          <NuxtLink to="/agwnes" class="hover:text-blue-deep transition-colors">
            Αγώνες
          </NuxtLink>
          <NuxtLink to="/arthra" class="hover:text-blue-deep transition-colors">
            Άρθρα
          </NuxtLink>
          <NuxtLink
            to="/tools-for-runners"
            class="hover:text-blue-deep transition-colors"
          >
            Εργαλεία
          </NuxtLink>
        </div>
        <CtaButton href="mailto:hey@racelist.gr">
          Πρόσθεσε αγώνα
        </CtaButton>
      </div>
    </nav>

    <!-- Mobile nav -->
    <nav
      id="mobile-nav"
      v-show="isMenuOpen"
      class="md:hidden px-4 pb-4 space-y-1 text-sm font-medium text-grey border-t border-line"
    >
      <NuxtLink to="/agwnes" class="block py-2 hover:text-blue-deep">
        Αγώνες
      </NuxtLink>
      <NuxtLink to="/arthra" class="block py-2 hover:text-blue-deep">
        Άρθρα
      </NuxtLink>
      <NuxtLink to="/tools-for-runners" class="block py-2 hover:text-blue-deep">
        Εργαλεία
      </NuxtLink>
      <CtaButton href="mailto:hey@racelist.gr" block class="mt-2">
        Πρόσθεσε αγώνα
      </CtaButton>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import CtaButton from '~/components/CtaButton.vue';
  const isMenuOpen = ref(false);
</script>
