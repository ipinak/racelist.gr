<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink font-sans">
    <Header />
    <main class="flex-1 container mx-auto px-4 py-6">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>
