<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl text-[#0057A0] font-bold mb-6">
        Γιατί να υπολογίσω τον ρυθμό και τα splits μου;
      </h1>

      <p class="mb-4">
        Ο <strong>υπολογιστής ρυθμού και χρόνου ανά χιλιόμετρο</strong> σου
        επιτρέπει να δεις με ακρίβεια τον μέσο ρυθμό σου και τους
        <strong>ενδιάμεσους χρόνους (splits)</strong> για κάθε χιλιόμετρο, βάσει
        της συνολικής απόστασης και του χρόνου που έχεις καταγράψει.
      </p>

      <p>
        Τα splits σε βοηθούν να κατανοήσεις πώς κατανέμεται ο ρυθμός σου στη
        διάρκεια μιας διαδρομής, να βελτιώσεις τη στρατηγική σου και να ελέγχεις
        αν διατηρείς σταθερό τέμπο. Είναι ένα απαραίτητο εργαλείο για όσους
        προετοιμάζονται για αγώνες ή στοχεύουν σε νέα προσωπικά ρεκόρ!
      </p>
    </div>

    <hr class="text-gray-300 mb-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <h2 class="text-2xl font-bold text-center mb-4">
          Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο
        </h2>

        <form @submit.prevent="calculatePace" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Απόσταση</label>
            <input
              v-model.number="distance"
              type="number"
              min="0"
              step="0.01"
              class="w-full border px-3 py-2 rounded"
              placeholder="e.g. 5"
              required
            />
            <span class="text-sm text-gray-500">Σε χιλίομετρα</span>
          </div>

          <div>
            <label class="block mb-1 font-medium">Χρόνος</label>
            <input
              v-model.number="time"
              type="number"
              min="0"
              step="0.01"
              class="w-full border px-3 py-2 rounded"
              placeholder="e.g. 25.5"
              required
            />
            <span class="text-sm text-gray-500">Σε λεπτά</span>
          </div>

          <Button title="Υπολόγισε Ρυθμό & Χρόνους" type="submit" />
        </form>

        <div v-if="pace !== null" class="mt-6 space-y-3">
          <p class="text-center text-lg font-semibold">
            Μέσος ρυθμός:
            <span class="text-blue-600">{{ formattedPace }}</span> ανα χλμ.
          </p>

          <div class="border-t pt-4">
            <h2 class="font-semibold mb-2">Χρόνος ανά χιλιόμετρο:</h2>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(split, index) in splits" :key="index">
                {{ index + 1 }} χλμ.: {{ split }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  useHead({
    title: 'Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο | Εργαλείο για Δρομείς',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/pace-calculator/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Υπολόγισε εύκολα τον μέσο ρυθμό σου και δες τους ενδιάμεσους χρόνους ανά χιλιόμετρο. Ιδανικό εργαλείο για δρομείς που προπονούνται για αγώνες ή βελτίωση χρόνων.',
      },
      {
        name: 'keywords',
        content:
          'ρυθμός, υπολογιστής ρυθμού, χρόνος ανά χιλιόμετρο, running pace calculator, δρομείς, αγώνας δρόμου, splits, running splits, προπόνηση',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο',
      },
      {
        property: 'og:description',
        content:
          'Βρες τον μέσο ρυθμό σου και δες αναλυτικά τους χρόνους ανά χιλιόμετρο με το εργαλείο του racelist.gr. Χρήσιμο για κάθε δρομέα.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/pace-calculator/',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const distance = ref(null);
  const time = ref(null);
  const pace = ref(null);
  const splits = ref([]);

  function formatMinutes(mins) {
    const minutes = Math.floor(mins);
    const seconds = Math.round((mins - minutes) * 60);
    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  }

  const formattedPace = computed(() => {
    return pace.value !== null ? formatMinutes(pace.value) : '';
  });

  function calculatePace() {
    if (
      !distance.value ||
      !time.value ||
      distance.value <= 0 ||
      time.value <= 0
    ) {
      pace.value = null;
      splits.value = [];
      return;
    }

    pace.value = time.value / distance.value;

    const totalSplits = Math.floor(distance.value);
    splits.value = [];

    for (let i = 1; i <= totalSplits; i++) {
      splits.value.push(formatMinutes(pace.value * i));
    }

    const remaining = distance.value - totalSplits;
    if (remaining > 0) {
      splits.value.push(formatMinutes(pace.value * distance.value));
    }
  }
</script>
