<template>
  <div>
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 text-center">
      Προβλέψτε τους Χρόνους σας με τον Τύπο Riegel
    </h1>
    <div class="max-w-4xl mx-auto px-4 py-8 text-gray-800 space-y-4">
      <p>
        Έχετε αναρωτηθεί ποτέ, "Αν έτρεξα 5 χιλιόμετρα σε 24 λεπτά, τι χρόνο
        μπορώ να κάνω σε στον ημιμαραθώνιο;" Ο τύπος του Peter Riegel είναι ένα
        επιστημονικά τεκμηριωμένο εργαλείο που σας βοηθά να προβλέψετε τους
        χρόνους σας σε διαφορετικές αποστάσεις με βάση την τρέχουσα φυσική σας
        κατάσταση.
      </p>
      <p>
        Χρησιμοποιήστε την παρακάτω φόρμουλα για να υπολογίσετε ρεαλιστικούς
        στόχους και να αποφύγετε το συχνότερο λάθος των δρομέων, δηλαδη να
        ξεκινήσετε πολυ γρήγορα ή πολύ αργά!
      </p>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 class="text-3xl text-[#0057A0] font-bold mb-6">
          Υπολογιστής Προβλέψεων Χρόνων Για Δρομείς
        </h2>

        <div class="mb-4">
          <label class="block mb-1 font-medium">Απόσταση Αγώνα</label>
          <select
            v-model="selectedDistance"
            class="border p-2 rounded w-full input-bordered"
          >
            <option value="5">5K</option>
            <option value="10">10K</option>
            <option value="21.1">Ημιμαραθώνιος (21.1K)</option>
            <option value="42.2">Μαραθώνιος (42.2K)</option>
            <option value="custom">Προσαρμοσμένη Απόσταση</option>
          </select>
        </div>

        <div v-if="selectedDistance === 'custom'" class="mb-4">
          <label class="block mb-1 font-medium">Απόσταση (χλμ)</label>
          <input
            type="number"
            v-model.number="customDistance"
            class="border p-2 rounded w-full input-bordered"
            min="0.1"
            step="0.1"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-medium">Χρόνος Αγώνα</label>
          <div class="flex gap-2">
            <div class="flex-1">
              <input
                type="number"
                v-model.number="hours"
                class="border p-2 rounded w-full input-bordered"
                placeholder="Ώρες"
                min="0"
              />
            </div>
            <div class="flex-1">
              <input
                type="number"
                v-model.number="minutes"
                class="border p-2 rounded w-full input-bordered"
                placeholder="Λεπτά"
                min="0"
                max="59"
              />
            </div>
            <div class="flex-1">
              <input
                type="number"
                v-model.number="seconds"
                class="border p-2 rounded w-full input-bordered"
                placeholder="Δευτ."
                min="0"
                max="59"
              />
            </div>
          </div>
        </div>

        <div class="mt-6">
          <Button
            title="Υπολογισμός Προβλέψεων"
            @click="calculatePredictions"
          />
        </div>

        <div
          v-if="predictions.length > 0"
          class="mt-6 p-4 bg-gray-100 rounded-lg shadow"
        >
          <h3 class="text-lg font-semibold mb-4 text-[#0057A0]">
            Προβλεπόμενοι Χρόνοι
          </h3>
          <div class="space-y-2">
            <div
              v-for="pred in predictions"
              :key="pred.distance"
              class="flex justify-between items-center py-2 border-b border-gray-300 last:border-b-0"
            >
              <span class="font-medium">{{ pred.label }}:</span>
              <span class="text-blue-600 font-semibold">{{ pred.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="max-w-4xl mx-auto px-4 py-8">
      <h2 class="text-3xl text-[#0057A0] font-bold mb-6">
        Τι είναι ο Τύπος του Riegel και Πώς Λειτουργεί;
      </h2>
      <p class="mb-6">
        Ο τύπος του Peter Riegel είναι ένα μαθηματικό μοντέλο που
        χρησιμοποιείται για να προβλέψει την απόδοση ενός δρομέα σε διαφορετικές
        αποστάσεις. Ο τύπος βασίζεται στην παρατήρηση ότι οι δρομείς
        επιβραδύνονται σταδιακά καθώς αυξάνεται η απόσταση του αγώνα, λόγω
        κόπωσης και εξάντλησης των ενεργειακών αποθεμάτων.
      </p>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Ο Μαθηματικός Τύπος
      </h3>
      <div class="bg-gray-100 p-4 rounded-lg mb-6">
        <p class="text-center text-lg">
          <img
            src="/images/peter-riegel-formula.png"
            alt="Riegel's Formula"
            class="mx-auto"
          />
        </p>
      </div>
      <p class="mb-6">Όπου:</p>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>T1 = Ο χρόνος ενός πρόσφατου αγώνα</li>
        <li>D1 = Η απόσταση του πρόσφατου αγώνα</li>
        <li>T2 = Ο προβλεπόμενος χρόνος</li>
        <li>D2 = Η απόσταση στόχος</li>
        <li>1.06 = Ο εκθέτης κόπωσης (fatigue factor)</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Γιατί Λειτουργεί αυτός ο Τύπος;
      </h3>
      <p class="mb-6">
        Ο εκθέτης 1.06 αντιπροσωπεύει τον τρόπο με τον οποίο η κόπωση επηρεάζει
        την απόδοση. Αν απλά πολλαπλασιάζαμε γραμμικά τον ρυθμό επί την
        απόσταση, θα υπερεκτιμούσαμε την ικανότητα αντοχής. Ο τύπος του Riegel
        λαμβάνει υπόψη ότι οι δρομείς επιβραδύνονται περισσότερο όσο αυξάνεται η
        απόσταση.
      </p>
      <p class="mb-6">
        Για παράδειγμα, αν μπορείτε να διατηρήσετε ρυθμό 5:00 λεπτά/χλμ σε ενα
        πεντάρι (5Κ), δεν σημαίνει οτι θα διατηρήσετε τον ίδιο ρυθμό για 42
        χιλιόμετρα. Ο τύπος προσαρμόζει την πρόβλεψη για να λάβει υπόψη αυτή τη
        φυσική επιβράδυνση.
      </p>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Πότε είναι Χρήσιμος ο Υπολογιστής;
      </h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Καθορισμός Ρεαλιστικών Στόχων:</strong> Χρησιμοποιήστε έναν
          πρόσφατο χρόνο αγώνα για να ορίσετε ρεαλιστικούς στόχους για τον
          επόμενο αγώνα σας.
        </li>
        <li>
          <strong>Σχεδιασμός Ρυθμού:</strong> Αποφύγετε το συχνό λάθος του
          ξεκινήματος πολύ γρήγορα. Ο υπολογιστής σας δείχνει τον κατάλληλο
          ρυθμό.
        </li>
        <li>
          <strong>Παρακολούθηση Προόδου:</strong> Συγκρίνετε τις προβλέψεις με
          τους πραγματικούς χρόνους σας για να δείτε πώς βελτιώνεστε.
        </li>
        <li>
          <strong>Εκπαίδευση:</strong> Κατανοήστε πώς η απόσταση επηρεάζει τον
          ρυθμό και την απόδοσή σας.
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Περιορισμοί και Σημειώσεις
      </h3>
      <p class="mb-4">
        Ενώ ο τύπος του Riegel είναι εξαιρετικά χρήσιμος, έχει κάποιους
        περιορισμούς:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Εξειδίκευση:</strong> Αν είστε εξειδικευμένοι σε μικρές
          αποστάσεις (π.χ. 1500μ), οι προβλέψεις για μαραθώνιο μπορεί να είναι
          υπερβολικά αισιόδοξες.
        </li>
        <li>
          <strong>Συνθήκες Αγώνα:</strong> Ο τύπος δεν λαμβάνει υπόψη καιρικές
          συνθήκες, ανηφορικότητα ή άλλους εξωτερικούς παράγοντες.
        </li>
        <li>
          <strong>Τρέχουσα Φόρμα:</strong> Χρησιμοποιήστε πρόσφατους χρόνους
          αγώνων (εντός 2-3 μηνών) για καλύτερη ακρίβεια.
        </li>
        <li>
          <strong>Εμπειρία:</strong> Νέοι δρομείς ή όσοι δεν έχουν εμπειρία σε
          μεγάλες αποστάσεις μπορεί να μην επιτύχουν τις προβλέψεις.
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">
        Συμβουλές Χρήσης
      </h3>
      <ol class="list-decimal list-inside space-y-2 mb-6">
        <li>
          Χρησιμοποιήστε τον καλύτερο πρόσφατο χρόνο σας από έναν αγώνα όπου
          προσπαθήσατε με όλη σας τη δύναμη.
        </li>
        <li>
          Λάβετε υπόψη την εμπειρία και την εξειδίκευσή σας στην απόσταση στόχο.
        </li>
        <li>
          Για μεγάλες αποστάσεις (ημιμαραθώνιος, μαραθώνιος), βεβαιωθείτε ότι
          έχετε κάνει την κατάλληλη προπόνηση αντοχής.
        </li>
        <li>
          Χρησιμοποιήστε τις προβλέψεις ως οδηγό,
          <strong>όχι ως απόλυτο στόχο</strong>. Το σώμα σας και οι συνθήκες του
          αγώνα έχουν τον τελικό λόγο.
        </li>
      </ol>

      <h3 class="text-xl font-semibold text-[#0057A0] mb-4">Τελικές Σκέψεις</h3>
      <p class="mb-4">
        Να έχετε πάντα υποψιν σας οτι οι αριθμοί είναι οδηγοί, όχι εγγυήσεις.
        Παράγοντες όπως η σωστή προπόνηση, η διατροφή, η ανάρρωση και η
        νοοτροπία παίζουν σημαντικοτερο λογο στην επίτευξη των στόχων σας.
        Χρησιμοποιήστε αυτό το εργαλείο ως μέρος της συνολικής σας στρατηγικής
        προπόνησης!
      </p>

      <hr class="text-gray-300 my-3" />

      <div>
        Εκτός από την πρόβλεψη χρόνων, είναι σημαντικό να γνωρίζετε και τον
        ρυθμό σας. Δείτε τον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/pace-calculator/"
        >
          υπολογιστή ρυθμού
        </NuxtLink>
        για να σχεδιάσετε την προπόνησή σας. Επίσης, μην ξεχνάτε τη σωστή
        διατροφή και ενυδάτωση, ρίξτε μια ματιά στον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/gel-calculator/"
        >
          υπολογιστή ενεργειακών gel
        </NuxtLink>
        και τον
        <NuxtLink
          class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
          to="/hydration-calculator/"
        >
          υπολογιστή ενυδάτωσης.
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
      'Υπολογιστής Προβλέψεων Χρόνων Για Δρομείς - Τύπος Riegel | Racelist.gr',
    meta: [
      {
        name: 'description',
        content:
          'Προβλέψτε τους χρόνους σας σε 5K, 10K, ημιμαραθώνιο και μαραθώνιο με τον τύπο του Peter Riegel. Ορίστε ρεαλιστικούς στόχους και βελτιώστε την απόδοσή σας.',
      },
      {
        name: 'keywords',
        content:
          'υπολογιστής χρόνων αγώνα, τύπος Riegel, πρόβλεψη χρόνων, 5K χρόνος, 10K χρόνος, μαραθώνιος χρόνος, ημιμαραθώνιος, ρυθμός αγώνα, στόχοι τρεξίματος',
      },
      { name: 'author', content: 'racelist.gr' },

      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Υπολογιστής Προβλέψεων Χρόνων - Τύπος Riegel',
      },
      {
        property: 'og:description',
        content:
          'Μάθε τι χρόνο μπορείς να κάνεις σε διάφορες αποστάσεις με βάση την τρέχουσα φόρμα σου. Χρησιμοποιεί τον επιστημονικό τύπο του Peter Riegel.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/race-time-predictor/',
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Υπολογιστής Προβλέψεων Χρόνων - Τύπος Riegel',
      },
      {
        name: 'twitter:description',
        content:
          'Προβλέψτε τους χρόνους σας σε διάφορες αποστάσεις και ορίστε ρεαλιστικούς στόχους για τον επόμενο αγώνα σας.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://racelist.gr/race-time-predictor/' },
    ],
  });

  const selectedDistance = ref('5');
  const customDistance = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const predictions = ref([]);

  const raceDistances = [
    { distance: 5, label: '5K' },
    { distance: 10, label: '10K' },
    { distance: 21.1, label: 'Ημιμαραθώνιος' },
    { distance: 42.2, label: 'Μαραθώνιος' },
  ];

  function getInputDistance() {
    if (selectedDistance.value === 'custom') {
      return customDistance.value;
    }
    return parseFloat(selectedDistance.value);
  }

  function getInputTimeInSeconds() {
    return hours.value * 3600 + minutes.value * 60 + seconds.value;
  }

  function formatTime(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(
        2,
        '0'
      )}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
  }

  function calculatePredictedTime(
    currentDistance,
    currentTime,
    targetDistance
  ) {
    // Riegel's Formula: T2 = T1 * (D2/D1)^1.06
    return currentTime * Math.pow(targetDistance / currentDistance, 1.06);
  }

  function calculatePredictions() {
    const inputDistance = getInputDistance();
    const inputTime = getInputTimeInSeconds();

    if (!inputDistance || inputDistance <= 0) {
      alert('Παρακαλώ εισάγετε μια έγκυρη απόσταση.');
      return;
    }

    if (!inputTime || inputTime <= 0) {
      alert('Παρακαλώ εισάγετε έναν έγκυρο χρόνο.');
      return;
    }

    predictions.value = raceDistances.map((race) => {
      const predictedTimeSeconds = calculatePredictedTime(
        inputDistance,
        inputTime,
        race.distance
      );
      return {
        distance: race.distance,
        label: race.label,
        time: formatTime(predictedTimeSeconds),
      };
    });
  }
</script>
