<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink font-sans">
    <HouseAd placement="sitewide" />
    <Header />
    <main class="flex-1 container mx-auto px-4 py-6">
      <AdSlot v-if="isArticle" size="leaderboard" placement="article" class="mb-6" />
      <div :class="isArticle ? 'xl:grid xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-10' : ''">
        <div class="min-w-0">
          <NuxtPage />
          <HouseAd
            v-if="isArticle"
            placement="article"
            class="max-w-4xl mx-auto mt-10"
          />
        </div>
        <div v-if="isArticle" class="hidden xl:block">
          <AdSlot
            size="half-page"
            placement="article"
            fallback="sidebar"
            class="sticky top-24 mt-8"
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import HouseAd from '@/components/HouseAd.vue';
  import AdSlot from '@/components/AdSlot.vue';

  const route = useRoute();
  const isArticle = computed(() => /^\/arthra\/.+/.test(route.path));
</script>
