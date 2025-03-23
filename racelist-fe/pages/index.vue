<template>
  <div>
    <h2 class="text-3xl text-center text-[#9BBEC4] my-6">
      Ημερολόγιο Αγώνων για το {{ currentDate.getFullYear() }}
    </h2>
    <Calendar :races="races" @updateDate="updateDate" />

    <h2 class="text-2xl text-center my-6 text-[#9BBEC4]">Ερχόμενοι αγώνες</h2>
    <RaceList :races="races" :currentDate="currentDate" />

    <h2 class="text-xl text-center my-6 text-[#9BBEC4]">
      Ενημερωθείτε για νέους αγώνες
    </h2>
    <div class="flex justify-center">
      <NewsletterSubmissionForm />
    </div>
  </div>
</template>

<script setup>
  import NewsletterSubmissionForm from '@/components/NewsletterSubmissionForm.vue';
  import Calendar from '@/components/Calendar.vue';
  import RaceList from '@/components/RaceList.vue';
  import { ref, onMounted } from 'vue';

  const races = ref([]);
  const currentDate = ref(new Date());

  const updateDate = (date) => {
    currentDate.value = date;
  };

  onMounted(async () => {
    const res = await fetch('https://racelist.gr/min.races.json');
    races.value = await res.json();
  });
</script>
