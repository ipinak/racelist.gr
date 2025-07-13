<template>
  <div>
    <div class="flex justify-center">
      <p class="sm:px-48 sm:py-10 md:px-24 p-2 text-center text-lg">
        Το <strong>racelist.gr</strong> είναι το μοναδικό σημείο με όλους τους
        αγώνες σε όλη την Ελλάδα! Εδώ θα βρεις το πλήρες ημερολόγιο αγώνων
        δρόμου και trail running από κάθε γωνιά της χώρας μας. Χρησιμοποίησε τα
        εργαλεία που θα σου κάνουν την προπόνηση πιο εύκολη και διάβασε άρθρα
        γεμάτα έμπνευση και χρήσιμες συμβουλές για δρομείς κάθε επιπέδου.
      </p>
    </div>
    <h1 class="text-3xl text-center text-[#0057A0] my-6">
      Ημερολόγιο Αγώνων για το {{ currentDate.getFullYear() }}
    </h1>
    <Calendar :races="races" @updateDate="updateDate" />

    <h2 class="text-2xl text-center my-6 text-[#0057A0]">Ερχόμενοι αγώνες</h2>
    <RaceList :races="races" :currentDate="currentDate" />

    <!-- Latest Articles Carousel -->
    <ArticleCarousel :count="12" :slides-to-show="3" title="Τελευταία Άρθρα" />

    <h2 class="text-xl text-center my-6 text-text">
      Ενημερωθείτε για νέους αγώνες & άρθρα
    </h2>
    <div class="flex justify-center">
      <NewsletterSubmissionForm />
    </div>

    <div class="flex justify-center my-8">
      <SubmitRaceInfo />
    </div>
  </div>
</template>

<script setup>
  import SubmitRaceInfo from '@/components/SubmitRaceInfo.vue';
  import NewsletterSubmissionForm from '@/components/NewsletterSubmissionForm.vue';
  import Calendar from '@/components/Calendar.vue';
  import RaceList from '@/components/RaceList.vue';
  import ArticleCarousel from '@/components/ArticleCarousel.vue';
  import { ref, onMounted } from 'vue';

  const races = ref([]);
  const currentDate = ref(new Date());

  const updateDate = (date) => {
    currentDate.value = date;
  };

  onMounted(async () => {
    const res = await fetch('/min.races.json');
    races.value = await res.json();
  });
</script>
