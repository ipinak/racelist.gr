<template>
  <div>
    <h1 class="text-3xl text-center text-[#9BBEC4] my-6">Frequently Asked Questions</h1>
    <div class="faq-container max-w-4xl mx-auto bg-[#f4f4f4] p-6 rounded-lg">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item border-b border-[#9BBEC4] py-4"
      >
        <div
          class="faq-question font-bold cursor-pointer hover:text-[#ff00ff]"
          @click="toggle(index)"
        >
          {{ faq.question }}
        </div>
        <div
          v-show="faq.open"
          class="faq-answer mt-2 text-gray-700 pl-4"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    question: 'Τι είναι το racelist;',
    answer: 'Μια λίστα με αγώνες στην Ελλάδα. Ανακάλυψε όλους τους αγώνες δρόμου, βουνού και πολλά περισσότερα, σε κάθε γωνιά της Ελλάδας!',
    open: false
  },
  {
    question: 'Μπορείς να κάνεις εγγραφή απο το racelist.gr για τους αγώνες;',
    answer: 'Όχι, κάθε αγώνας έχει δική του σελίδα εγγραφής. Εδώ θα βρείς τους αγώνες και συνδέσμους για την εγγραφή.',
    open: false
  }
])

function toggle(index) {
  faqs[index].open = !faqs[index].open
}
</script>

