<template>
  <div>
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 text-center">
      Υπολογιστής Κόστους & Διάρκειας Ζωής Αθλητικών Παπουτσιών
    </h1>
    <div class="max-w-4xl mx-auto px-4 py-8 text-gray-800 space-y-4">
      <p>
        Τα παπούτσια για τρέξιμο αποτελούν ισως το μεγαλύτερο και σημαντικότερο
        έξοδο (μετά τις εγγραφές σε αγώνες). Αλλά εχετε ποτέ αναρρωτηθεί πόσο
        κοστίζει πραγματικά κάθε χιλιόμετρο που τρέχετε; ή πότε πρέπει να
        αντικαταστήσετε τα παπούτσια σας για να αποφύγετε τραυματισμούς;
      </p>
      <p>
        Με τον παρακάτω υπολογιστή μπορείτε να υπολογίσετε το κόστος ανά
        χιλιόμετρο, την προβλεπόμενη ημερομηνία "απόσυρσης" των παπουτσιών σας
        από την ενεργό δράση, και σας βοηθά να παρακολουθήσετε τη φθορά τους για
        βέλτιστη απόδοση και ασφάλεια.
      </p>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 class="text-3xl text-[#0057A0] font-bold mb-6">
          Υπολογιστής Κόστους Παπουτσιών
        </h2>

        <div class="mb-4">
          <label class="block mb-1 font-medium">Τιμή Παπουτσιών (€)</label>
          <input
            type="number"
            v-model.number="shoePrice"
            class="border p-2 rounded w-full input-bordered"
            min="0"
            step="0.01"
            placeholder="π.χ. 150"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-medium">
            Μέσα Εβδομαδιαία Χιλιόμετρα
          </label>
          <input
            type="number"
            v-model.number="weeklyMileage"
            class="border p-2 rounded w-full input-bordered"
            min="0"
            step="1"
            placeholder="π.χ. 40"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-medium">
            Τρέχοντα Χιλιόμετρα Παπουτσιών (προαιρετικό)
          </label>
          <input
            type="number"
            v-model.number="currentMileage"
            class="border p-2 rounded w-full input-bordered"
            min="0"
            step="1"
            placeholder="π.χ. 150"
          />
          <p class="text-sm text-gray-600 mt-1">
            Αν τα παπούτσια σας είναι καινούρια, αφήστε το στο 0.
          </p>
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-medium">
            Διάρκεια Ζωής Παπουτσιών (χλμ)
          </label>
          <input
            type="number"
            v-model.number="shoeLifespan"
            class="border p-2 rounded w-full input-bordered"
            min="100"
            step="50"
            placeholder="600-800"
          />
          <p class="text-sm text-gray-600 mt-1">
            Συνήθως 600-800 χλμ. Προσαρμόστε ανάλογα με το βάρος και το στυλ
            τρεξίματός σας.
          </p>
        </div>

        <div class="mt-6">
          <Button title="Υπολογισμός" @click="calculateCosts" />
        </div>

        <div
          v-if="results.costPerKm !== null"
          class="mt-6 p-4 bg-gray-100 rounded-lg shadow space-y-3"
        >
          <div class="border-b border-gray-300 pb-3">
            <p class="text-sm text-gray-600">Κόστος ανά Χιλιόμετρο</p>
            <p class="text-2xl font-bold text-[#0057A0]">
              {{ results.costPerKm }}
            </p>
          </div>

          <div class="border-b border-gray-300 pb-3">
            <p class="text-sm text-gray-600">Συνολικό Κόστος Ζωής</p>
            <p class="text-lg font-semibold text-gray-800">
              €{{ shoePrice.toFixed(2) }} για {{ shoeLifespan }} χλμ,
            </p>
          </div>

          <div class="border-b border-gray-300 pb-3">
            <p class="text-sm text-gray-600">Εναπομείναντα Χιλιόμετρα</p>
            <p class="text-lg font-semibold text-gray-800">
              {{ results.remainingKm }} χλμ
            </p>
            <div class="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                class="bg-[#0057A0] h-2 rounded-full transition-all"
                :style="{ width: results.usagePercentage + '%' }"
              ></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">
              {{ results.usagePercentage }}% χρησιμοποιημένα
            </p>
          </div>

          <div v-if="results.retirementDate">
            <p class="text-sm text-gray-600">Εκτιμώμενη Ημερομηνία Αλλαγής</p>
            <p class="text-lg font-semibold text-blue-600">
              {{ results.retirementDate }}
            </p>
            <p class="text-xs text-gray-600 mt-1">
              ({{ results.weeksRemaining }} εβδομάδες από σήμερα)
            </p>
          </div>

          <div
            v-if="results.usagePercentage >= 80"
            class="bg-yellow-100 border-l-4 border-yellow-500 p-3 mt-3"
          >
            <p class="text-sm font-semibold text-yellow-800">
              ⚠️ Τα παπούτσια σας πλησιάζουν το τέλος της διάρκειας ζωής τους!
            </p>
            <p class="text-xs text-yellow-700 mt-1">
              Αρχίστε να σκέφτεστε την αντικατάστασή τους για να αποφύγετε
              τραυματισμούς.
            </p>
          </div>

          <div
            v-if="results.usagePercentage >= 100"
            class="bg-red-100 border-l-4 border-red-500 p-3 mt-3"
          >
            <p class="text-sm font-semibold text-red-800">
              🛑 Ώρα για καινούρια παπούτσια!
            </p>
            <p class="text-xs text-red-700 mt-1">
              Η συνέχιση χρήσης μπορεί να οδηγήσει σε τραυματισμούς.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="max-w-4xl mx-auto px-4 py-8">
      <h2 class="text-3xl text-[#0057A0] font-bold mb-6">
        Πότε Πρέπει να Αντικαταστήσετε τα Παπούτσια σας;
      </h2>
      <p class="mb-6">
        Τα παπούτσια για τρέξιμο δεν διαρκούν για πάντα. Όσο τα χρησιμοποιείτε,
        η μεσαία σόλα (midsole) συμπιέζεται και χάνει την ικανότητα απορρόφησης
        κραδασμών. Αυτό μπορεί να οδηγήσει σε τραυματισμούς ή πόνους.
      </p>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Τυπική Διάρκεια Ζωής
      </h3>
      <p class="mb-6">
        Τα περισσότερα παπούτσια για τρέξιμο έχουν διάρκεια ζωής περίπου
        <strong>600-800 χιλιόμετρα</strong>. Ωστόσο, αυτό εξαρτάται από
        διάφορους παράγοντες:
      </p>

      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Σωματικό Βάρος:</strong> Βαρύτεροι δρομείς φθείρουν τα
          παπούτσια πιο γρήγορα.
        </li>
        <li>
          <strong>Στυλ Τρεξίματος:</strong> Η προσγείωση στη φτέρνα φθείρει πιο
          γρήγορα από τη μεσοπόδια προσγείωση.
        </li>
        <li>
          <strong>Επιφάνεια:</strong> Άσφαλτος και σκληρές επιφάνειες
          επιταχύνουν τη φθορά.
        </li>
        <li>
          <strong>Ποιότητα Παπουτσιού:</strong> Τα premium παπούτσια συνήθως
          διαρκούν περισσότερο.
        </li>
        <li>
          <strong>Φροντίδα:</strong> Η σωστή αποθήκευση και καθαρισμός μπορούν
          να παρατείνουν τη ζωή τους.
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Σημάδια ότι Χρειάζεστε Νέα Παπούτσια
      </h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Φθορά της Σόλας:</strong> Φαίνονται τα στρώματα του υλικού ή η
          σόλα είναι ανώμαλα φθαρμένη.
        </li>
        <li>
          <strong>Μειωμένη Απόσβεση:</strong> Το τρέξιμο αισθάνεται πιο σκληρό
          και λιγότερο άνετο.
        </li>
        <li>
          <strong>Πόνοι και Ενοχλήσεις:</strong> Νέοι πόνοι στα πόδια, γόνατα ή
          ισχία που δεν υπήρχαν πριν.
        </li>
        <li>
          <strong>Αίσθημα Αστάθειας:</strong> Τα παπούτσια δεν σας υποστηρίζουν
          όπως πριν.
        </li>
        <li>
          <strong>Ορατή Βλάβη:</strong> Ρήξεις στο ύφασμα, αποκόλληση σόλας ή
          άλλα προβλήματα.
        </li>
        <li>
          <strong>Συμπίεση Μεσαίας Σόλας:</strong> Πιέστε τη μεσαία σόλα με το
          δάχτυλο - αν δεν επανέρχεται γρήγορα, έχει χάσει την ελαστικότητά της.
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Το Οικονομικό Όφελος της Παρακολούθησης
      </h3>
      <p class="mb-6">
        Αν και τα παπούτσια για τρέξιμο μπορεί να φαίνονται ακριβά, όταν
        υπολογίζετε το κόστος ανά χιλιόμετρο, η επένδυση γίνεται πιο λογική. Για
        παράδειγμα:
      </p>

      <div class="bg-blue-50 p-4 rounded-lg mb-6">
        <p class="mb-2">
          <strong>Παράδειγμα 1:</strong> Παπούτσια €150 / 700 χλμ = €0.21 ανά
          χλμ
        </p>
        <p class="mb-2">
          <strong>Παράδειγμα 2:</strong> Παπούτσια €100 / 500 χλμ = €0.20 ανά
          χλμ
        </p>
        <p class="text-sm text-gray-700 mt-3">
          Τα ακριβότερα παπούτσια συχνά διαρκούν περισσότερο και προσφέρουν
          καλύτερη προστασία, κάνοντας την επιπλέον επένδυση να αξίζει.
        </p>
      </div>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Συμβουλές για Μεγαλύτερη Διάρκεια Ζωής
      </h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Εναλλαγή Παπουτσιών:</strong> Αν τρέχετε συχνά, έχετε δύο
          ζευγάρια και εναλλάσσετε. Αυτό δίνει χρόνο στη μεσαία σόλα να
          "επανέλθει".
        </li>
        <li>
          <strong>Χρησιμοποιήστε τα Μόνο για Τρέξιμο:</strong> Μη φοράτε τα
          παπούτσια τρεξίματος για καθημερινές δραστηριότητες.
        </li>
        <li>
          <strong>Αποθηκεύστε Σωστά:</strong> Κρατήστε τα σε δροσερό, στεγνό
          μέρος μακριά από άμεση ηλιακή ακτινοβολία.
        </li>
        <li>
          <strong>Καθαρίστε Προσεκτικά:</strong> Αφαιρέστε τη λάσπη και το χώμα
          με χέρι ή μαλακή βούρτσα. Μη βάζετε στο πλυντήριο.
        </li>
        <li>
          <strong>Στεγνώστε Φυσικά:</strong> Ποτέ μη στεγνώνετε κοντά σε πηγές
          θερμότητας όπως καλοριφέρ ή στεγνωτήριο.
        </li>
        <li>
          <strong>Έκθεση στον Ήλιο:</strong> Ειδικά στην Ελλάδα μην παρατάτε τα
          παπούτσια σας στον ήλιο για πολλές ώρες. Αυτό καταστρέφει τα υλικά.
          Αποθηκεύστε τα σε σκιερό μέρος.
        </li>
        <li>
          <strong>Λύστε τα Κορδόνια:</strong> Μη βγάζετε τα παπούτσια
          σπρώχνοντας με το άλλο πόδι - αυτό καταστρέφει το πίσω μέρος.
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Η Σημασία της Έγκαιρης Αντικατάστασης
      </h3>
      <p class="mb-6">
        Η συνέχιση χρήσης φθαρμένων παπουτσιών δεν είναι απλά ασυμφέρουσα, αλλά
        μπορεί να είναι και επικίνδυνη. Η μειωμένη απόσβεση σημαίνει περισσότερη
        καταπόνηση στις αρθρώσεις σας, ενώ η μειωμένη υποστήριξη μπορεί να
        οδηγήσει σε κακή στάση και τεχνική. Οι τραυματισμοί από φθαρμένα
        παπούτσια μπορούν να σας κοστίσουν εβδομάδες εκτός από το τρέξιμο και
        πιθανώς ιατρικά έξοδα που ξεπερνούν κατά πολύ το κόστος ενός νέου
        ζευγαριού.
      </p>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">Τελικές Σκέψεις</h3>
      <p class="mb-4">
        Η παρακολούθηση των χιλιομέτρων στα παπούτσια σας είναι ένας απλός
        τρόπος να προλάβετε τραυματισμούς και να εξασφαλίσετε βέλτιστη απόδοση.
        Χρησιμοποιήστε τον υπολογιστή μας για να παρακολουθείτε τη φθορά, να
        κατανοείτε το κόστος της επένδυσής σας, και να γνωρίζετε πότε είναι ώρα
        για καινούρια παπούτσια.
      </p>
      <p class="mb-4">
        Θυμηθείτε: τα παπούτσια σας είναι ο σημαντικός εξοπλισμός σας ως
        δρομέας. Αξίζει να επενδύσετε σε ποιοτικά παπούτσια και να τα
        αντικαταστήσετε εγκαίρως για να απολαμβάνετε το τρέξιμο με ασφάλεια και
        άνεση για πολλά χρόνια! Μην ξεχνάτε οτι τα παπουτσια αυτά μπορούν να
        χρησιμοποιηθούν στην καθημερινότητα σας, όχι μόνο για τρέξιμο, οποτε δεν
        πάνε χαμένα οταν γεμίσουν τα χιλιόμετρα τους.
      </p>

      <hr class="text-gray-300 my-3" />

      <div>
        Για να βελτιστοποιήσετε την απόδοσή σας, εκτός από τα σωστά παπούτσια,
        χρειάζεστε και σωστό σχεδιασμό. Δείτε τον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/race-time-predictor/"
        >
          υπολογιστή προβλέψεων χρόνων
        </NuxtLink>
        για να ορίσετε ρεαλιστικούς στόχους, τον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/pace-calculator/"
        >
          υπολογιστή ρυθμού
        </NuxtLink>
        για την προπόνηση, και μην ξεχνάτε τη σωστή διατροφή με τον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/gel-calculator/"
        >
          υπολογιστή ενεργειακών gel.
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '~/components/Button.vue';

  useHead({
    title:
      'Υπολογιστής Κόστους & Διάρκειας Ζωής Παπουτσιών Τρεξίματος | Racelist.gr',
    meta: [
      {
        name: 'description',
        content:
          'Υπολογίστε το κόστος ανά χιλιόμετρο των παπουτσιών σας και μάθετε πότε πρέπει να τα αντικαταστήσετε. Παρακολουθήστε τη φθορά και προλάβετε τραυματισμούς.',
      },
      {
        name: 'keywords',
        content:
          'παπούτσια τρεξίματος, κόστος παπουτσιών, διάρκεια ζωής παπουτσιών, πότε να αλλάξω παπούτσια, φθορά παπουτσιών, running shoes, shoe retirement',
      },
      { name: 'author', content: 'racelist.gr' },

      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Υπολογιστής Κόστους & Διάρκειας Ζωής Παπουτσιών Τρεξίματος',
      },
      {
        property: 'og:description',
        content:
          'Μάθε πόσο κοστίζει κάθε χιλιόμετρο και πότε πρέπει να αλλάξεις τα παπούτσια σου. Προστάτεψε τον εαυτό σου από τραυματισμούς!',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/shoe-cost-tracker/',
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Υπολογιστής Κόστους & Διάρκειας Ζωής Παπουτσιών',
      },
      {
        name: 'twitter:description',
        content:
          'Υπολόγισε το κόστος ανά χιλιόμετρο και μάθε πότε να αλλάξεις παπούτσια για βέλτιστη απόδοση.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://racelist.gr/shoe-cost-tracker/' },
    ],
  });

  const shoePrice = ref(150);
  const weeklyMileage = ref(40);
  const currentMileage = ref(0);
  const shoeLifespan = ref(700);

  const results = ref({
    costPerKm: null,
    remainingKm: null,
    usagePercentage: null,
    retirementDate: null,
    weeksRemaining: null,
  });

  function calculateCosts() {
    if (!shoePrice.value || shoePrice.value <= 0) {
      alert('Παρακαλώ εισάγετε μια έγκυρη τιμή παπουτσιών.');
      return;
    }

    if (!weeklyMileage.value || weeklyMileage.value <= 0) {
      alert('Παρακαλώ εισάγετε έγκυρα εβδομαδιαία χιλιόμετρα.');
      return;
    }

    if (!shoeLifespan.value || shoeLifespan.value <= 0) {
      alert('Παρακαλώ εισάγετε έγκυρη διάρκεια ζωής παπουτσιών.');
      return;
    }

    // Calculate cost per kilometer
    const costPerKm = (shoePrice.value / shoeLifespan.value).toFixed(3);

    // Calculate remaining kilometers
    const remainingKm = Math.max(0, shoeLifespan.value - currentMileage.value);

    // Calculate usage percentage
    const usagePercentage = Math.min(
      100,
      Math.round((currentMileage.value / shoeLifespan.value) * 100)
    );

    // Calculate retirement date
    let retirementDate = null;
    let weeksRemaining = null;
    if (remainingKm > 0 && weeklyMileage.value > 0) {
      weeksRemaining = Math.ceil(remainingKm / weeklyMileage.value);
      const today = new Date();
      const retirement = new Date(
        today.getTime() + weeksRemaining * 7 * 24 * 60 * 60 * 1000
      );
      retirementDate = retirement.toLocaleDateString('el-GR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }

    results.value = {
      costPerKm: `€${costPerKm}`,
      remainingKm,
      usagePercentage,
      retirementDate,
      weeksRemaining,
    };
  }
</script>
