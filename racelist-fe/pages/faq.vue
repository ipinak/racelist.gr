<template>
  <div>
    <h1 class="text-3xl text-center text-[#0057A0] my-6">Συχνές ερωτήσεις</h1>
    <div class="faq-container max-w-4xl mx-auto bg-[#f4f4f4] p-6 rounded-lg">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item border-b border-[#0057A0] py-4"
      >
        <div
          class="faq-question font-bold cursor-pointer hover:text-[#0057A0]/60"
          @click="toggle(index)"
        >
          {{ faq.question }}
        </div>
        <div v-show="faq.open" class="faq-answer mt-2 text-gray-700 pl-4">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  useHead({
    title: 'Συχνές Ερωτήσεις | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/faq/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Βρες απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με το racelist.gr, τη λίστα αγώνων στην Ελλάδα, τις εγγραφές και πώς να χρησιμοποιήσεις την πλατφόρμα.',
      },
      {
        name: 'keywords',
        content:
          'racelist, συχνές ερωτήσεις, FAQ, αγώνες δρόμου, αγώνες βουνού, εγγραφές αγώνων, πλατφόρμα αγώνων, Ελλάδα',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Συχνές Ερωτήσεις | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Όλα όσα χρειάζεται να ξέρεις για το racelist.gr — αγώνες, εγγραφές, και πληροφορίες χρήσης της πλατφόρμας.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/faq',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const faqs = reactive([
    {
      question: 'Τι είναι το racelist;',
      answer:
        'Μια λίστα με αγώνες στην Ελλάδα. Ανακάλυψε όλους τους αγώνες δρόμου, βουνού και πολλά περισσότερα, σε κάθε γωνιά της Ελλάδας!',
      open: false,
    },
    {
      question: 'Μπορείς να κάνεις εγγραφή απο το racelist.gr για τους αγώνες;',
      answer:
        'Όχι, κάθε αγώνας έχει δική του σελίδα εγγραφής. Εδώ θα βρείς τους αγώνες και συνδέσμους για την εγγραφή.',
      open: false,
    },
  ]);

  function toggle(index) {
    faqs[index].open = !faqs[index].open;
  }
</script>
