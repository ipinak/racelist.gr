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
      <div class="mt-6 p-4">
        <h2 class="text-xl font-semibold mb-3 text-[#0057A0]">
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

      <div class="p-4">
        <h2 class="text-xl font-semibold mb-3 text-[#0057A0]">
          Οδηγός ενυδάτωσης για δρομείς και αθλητές
        </h2>

        <h3 class="text-lg font-medium mt-4 mb-2">
          Γιατί η σωστή ενυδάτωση είναι τόσο σημαντική;
        </h3>
        <p class="mb-3">
          Η επαρκής ενυδάτωση επηρεάζει θετικά σχεδόν κάθε σύστημα του σώματός
          σας. Διατηρεί την καρδιά σας να λειτουργεί αποτελεσματικά, λιπαίνει
          τις αρθρώσεις σας, και ρυθμίζει τη θερμοκρασία του σώματος - όλα
          κρίσιμα για τους δρομείς. Επιπλέον, μπορεί να βελτιώσει τη γνωστική
          λειτουργία και τη διάθεσή σας, βοηθώντας σας να διατηρείτε την
          αυτοσυγκέντρωση κατά τη διάρκεια μεγάλων προπονήσεων και αγώνων.
        </p>

        <h3 class="text-lg font-medium mt-4 mb-2">
          Παράγοντες που επηρεάζουν τις ανάγκες ενυδάτωσης στο τρέξιμο
        </h3>
        <ul class="list-disc ml-6 mb-3">
          <li>
            <strong>Ένταση προπόνησης:</strong> Οι υψηλότερες εντάσεις προκαλούν
            περισσότερη εφίδρωση και απαιτούν μεγαλύτερη πρόσληψη υγρών.
          </li>
          <li>
            <strong>Διάρκεια:</strong> Οι μεγαλύτερες αποστάσεις απαιτούν
            στρατηγική ενυδάτωση για να αποφευχθεί η αφυδάτωση.
          </li>
          <li>
            <strong>Θερμοκρασία:</strong> Σε θερμοκρασίες άνω των 20°C, οι
            ανάγκες σε υγρά αυξάνονται σημαντικά.
          </li>
          <li>
            <strong>Σωματικό βάρος:</strong> Οι μεγαλύτεροι δρομείς συνήθως
            χρειάζονται περισσότερα υγρά λόγω μεγαλύτερης επιφάνειας σώματος.
          </li>
          <li>
            <strong>Ρυθμός εφίδρωσης:</strong> Κάθε δρομέας ιδρώνει με
            διαφορετικό ρυθμό - ορισμένοι χάνουν 2-3 φορές περισσότερα υγρά από
            άλλους στις ίδιες συνθήκες.
          </li>
        </ul>

        <h3 class="text-lg font-medium mt-4 mb-2">
          Υπερβολική ενυδάτωση: Προσοχή στην τοξίκωση από νερό
        </h3>
        <p class="mb-3">
          Ενώ η αφυδάτωση είναι συχνότερη, οι δρομείς αντοχής πρέπει επίσης να
          γνωρίζουν τους κινδύνους της <strong>υπονατριαιμίας</strong> (γνωστή
          και ως "τοξίκωση από νερό"). Αυτή η σπάνια αλλά σοβαρή κατάσταση
          συμβαίνει όταν καταναλώνετε υπερβολικά πολύ νερό, αραιώνοντας τα
          επίπεδα νατρίου στο αίμα σας.
        </p>
        <p class="mb-3">
          Η κατανάλωση μεγάλων ποσοτήτων νερού σε σύντομο χρονικό διάστημα χωρίς
          επαρκή πρόσληψη ηλεκτρολυτών, ιδιαίτερα κατά τη διάρκεια μαραθωνίων ή
          αγώνων ultra, μπορεί να οδηγήσει σε συμπτώματα όπως:
        </p>
        <ul class="list-disc ml-6 mb-3">
          <li>Ναυτία και εμετός</li>
          <li>Πονοκέφαλος</li>
          <li>Σύγχυση ή αποπροσανατολισμός</li>
          <li>Μυϊκές κράμπες ή αδυναμία</li>
          <li>Κόπωση</li>
          <li>Σε σοβαρές περιπτώσεις, σπασμοί ή και κώμα</li>
        </ul>

        <h3 class="text-lg font-medium mt-4 mb-2">
          Στρατηγικές βέλτιστης ενυδάτωσης για δρομείς
        </h3>
        <ol class="list-decimal ml-6 mb-3">
          <li>
            <strong>Σταδιακή κατανάλωση:</strong> Πίνετε μικρές ποσότητες νερού
            σε τακτά διαστήματα κατά τη διάρκεια της προπόνησης αντί για μεγάλες
            ποσότητες μια φορά.
          </li>
          <li>
            <strong>Προσθέστε ηλεκτρολύτες:</strong> Για τρέξιμο πάνω από 60-90
            λεπτά, χρησιμοποιήστε αθλητικά ποτά ή συμπληρώματα ηλεκτρολυτών για
            να αναπληρώσετε το νάτριο.
          </li>
          <li>
            <strong>Παρακολουθήστε το χρώμα των ούρων:</strong> Στοχεύστε σε
            ανοιχτό κίτρινο χρώμα - πολύ σκούρα ούρα υποδηλώνουν αφυδάτωση, ενώ
            εντελώς διαφανή ούρα ενδέχεται να υποδηλώνουν υπερ-ενυδάτωση.
          </li>
          <li>
            <strong>Προσαρμόστε βάσει των συνθηκών:</strong> Αυξήστε την
            πρόσληψη υγρών σε ζεστό ή υγρό καιρό.
          </li>
          <li>
            <strong>Ακούστε το σώμα σας:</strong> Η δίψα είναι ένας σημαντικός
            δείκτης, αλλά μάθετε επίσης να αναγνωρίζετε άλλα σημάδια αφυδάτωσης
            όπως κόπωση, ζαλάδα ή δυσκολία συγκέντρωσης.
          </li>
        </ol>

        <p class="font-medium mt-3">
          Χρησιμοποιήστε τον υπολογιστή ενυδάτωσης παραπάνω ως αφετηρία, και
          προσαρμόστε με βάση τις προσωπικές σας ανάγκες. Θυμηθείτε ότι η
          βέλτιστη ενυδάτωση δεν είναι "ένα μέγεθος για όλους" - η ιδανική
          στρατηγική ενυδάτωσης είναι τόσο προσωπική όσο το πρόγραμμα προπόνησής
          σας.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '~/components/Button.vue';

  useHead({
    title: 'Υπολογιστής Ενυδάτωσης - Υγρά καύσιμα για την άσκησή σας',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/hydration-calculator/',
      },
    ],
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
        content: 'https://racelist.gr/hydration-calculator/',
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
