<template>
  <div>
    <h1 class="text-3xl text-center text-[#9BBEC4] my-6">
      Ημερολόγιο Αγώνων για το {{ currentDate.getFullYear() }}
    </h1>
    <Calendar :races="races" @updateDate="updateDate" />
    <RaceList :races="races" :currentDate="currentDate" />
    <h2 class="text-xl text-center my-6 text-[#9BBEC4]">
      Ενημερωθείτε για νέους αγώνες
    </h2>
    <div class="flex justify-center">
      <iframe
        width="540"
        height="770"
        src="https://5c522626.sibforms.com/serve/MUIFANOGXj0DR-zKSPHa6q1z37Z-tauYG4yy-n7ULu9apEpfztwdFzvSvD_DCsWzUhvY0egAnsbaJQ5CfQqkWrUEdQEx9jHCSnhMAd-MWWgu-7OpR2RHnwM3mres1sD7pSC1_TpLpEVluwwpVhn5Nbmi0x2cApjFo4QyyV05eFuRgBn2G7N_HlGGDX6YO86fPZkZH-4LSrkWR7gO"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        class="w-full max-w-[540px]"
      />
    </div>
  </div>
</template>

<script setup>
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
