<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink font-sans">
    <HouseAd placement="sitewide" />
    <Header />
    <main class="flex-1 container mx-auto px-4 py-6">
      <NuxtPage />
      <HouseAd
        v-if="isArticle"
        placement="article"
        class="max-w-4xl mx-auto mt-10"
      />
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import HouseAd from '@/components/HouseAd.vue';

  const route = useRoute();
  const isArticle = computed(() => /^\/arthra\/.+/.test(route.path));
</script>
