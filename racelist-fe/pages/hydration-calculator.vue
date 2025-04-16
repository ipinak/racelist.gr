<template>
  <div>
    <div class="p-6 max-w-md mx-auto">
      <h1 class="text-3xl text-[#0057A0] font-bold mb-6 text-center">
        Υπολογιστής Ενυδάτωσης
      </h1>

      <form @submit.prevent="calculateHydration">
        <div class="mb-4">
          <label class="block text-sm font-medium">Τύπος Άσκησης</label>
          <select
            v-model="exerciseType"
            class="mt-1 block w-full p-2 border rounded"
          >
            <option value="race">Αγώνας</option>
            <option value="training">Προπόνηση</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Απόσταση (km)</label>
          <input
            v-model.number="distance"
            type="number"
            class="mt-1 block w-full p-2 border rounded"
            placeholder="Εισάγετε απόσταση"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium"
            >Διάρκεια (ώρες και λεπτά)</label
          >
          <div class="flex space-x-2">
            <input
              v-model.number="hours"
              type="number"
              min="0"
              class="mt-1 block w-1/2 p-2 border rounded"
              placeholder="Ώρες"
            />
            <input
              v-model.number="minutes"
              type="number"
              min="0"
              max="59"
              class="mt-1 block w-1/2 p-2 border rounded"
              placeholder="Λεπτά"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Θερμοκρασία (°C)</label>
          <input
            v-model.number="temperature"
            type="number"
            class="mt-1 block w-full p-2 border rounded"
            placeholder="Εισάγετε θερμοκρασία"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Βάρος (kg)</label>
          <input
            v-model.number="weight"
            type="number"
            class="mt-1 block w-full p-2 border rounded"
            placeholder="Εισάγετε βάρος"
          />
        </div>

        <Button title="Υπολογισμός" type="submit" />
      </form>

      <div v-if="hydration" class="mt-4 p-4 bg-green-100 rounded">
        <p>
          Η προτεινόμενη ενυδάτωση σας είναι:
          <span class="font-bold">{{ hydration }} λίτρα</span>
        </p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="mt-6 p-4 bg-gray-100 rounded">
        <h2 class="text-xl font-semibold mb-2">
          Η σημασία της ενυδάτωσης στην άσκηση
        </h2>
        <p>
          Η ενυδάτωση είναι κρίσιμη για την απόδοση και την αποφυγή προβλημάτων,
          όπως οι κραμπες, κατά τη διάρκεια της άσκησης. Κατά τη διάρκεια
          προπονήσεων ή αγώνων, το σώμα σας χάνει υγρά μέσω του ιδρώτα, ειδικά
          σε υψηλές θερμοκρασίες. Η σωστή ενυδάτωση βοηθά στη διατήρηση της
          ενέργειας, στην αποτροπή κραμπών και στη βελτίωση της απόδοσης.
        </p>
        <p>
          Η ποσότητα υγρών που χρειάζεστε εξαρτάται από το βάρος σας, τη
          διάρκεια της άσκησης, τον τύπο της δραστηριότητας και τις
          περιβαλλοντικές συνθήκες. Χρησιμοποιήστε τον υπολογιστή ενυδάτωσης για
          να υπολογίσετε τις ανάγκες σας και φροντίστε να πίνετε υγρά πριν, κατά
          τη διάρκεια και μετά την άσκηση.
        </p>
        <p>Μετά απο κάθε προπόνηση πείτε αρκετό νερό, δεν κάνει πότε κακό.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '~/components/Button.vue';

  useHead({
    title: 'Υπολογιστής Ενυδάτωσης - Υγρά καύσιμα για την άσκησή σας',
    meta: [
      {
        name: 'description',
        content:
          'Υπολογίστε την ενυδάτωσή σας με βάση τον τύπο άσκησης, την απόσταση, τη διάρκεια, τη θερμοκρασία και το βάρος. Απαραίτητο εργαλείο για δρομείς και ποδηλάτες.',
      },
      {
        name: 'keywords',
        content:
          'ενυδάτωση άσκησης, υπολογιστής ενυδάτωσης, τρέξιμο, ποδηλασία, κατανάλωση υγρών',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Υπολογιστής Ενυδάτωσης - Καύσιμα για την Άσκησή σας',
      },
      {
        property: 'og:description',
        content:
          'Μάθετε πόση ενυδάτωση χρειάζεστε για την προπόνηση ή τον αγώνα σας. Υπολογίστε ανάλογα με την απόσταση, τη διάρκεια, το βάρος και τη θερμοκρασία.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/hydration-calculator',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Υπολογιστής Ενυδάτωσης - Καύσιμα για την Άσκησή σας',
      },
      {
        name: 'twitter:description',
        content:
          'Υπολογίστε πόση ενυδάτωση χρειάζεστε για το τρέξιμο ή την ποδηλασία σας.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://racelist.gr/hydration-calculator' },
    ],
  });

  const exerciseType = ref('race');
  const distance = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const temperature = ref(20);
  const weight = ref(70);
  const hydration = ref(null);

  function calculateHydration() {
    const baseRate = exerciseType.value === 'race' ? 0.5 : 0.4;
    const tempAdjustment =
      temperature.value > 20 ? 0.1 * ((temperature.value - 20) / 5) : 0;
    const totalHours = hours.value + minutes.value / 60;
    const baseHydration = (baseRate + tempAdjustment) * totalHours;
    const distanceAdjustment =
      distance.value >= 10 ? (distance.value / 50) * 0.1 : 0;
    hydration.value = (baseHydration * (1 + distanceAdjustment)).toFixed(2);
  }
</script>

<style scoped>
  input,
  select {
    border: 1px solid #ccc;
  }
</style>
