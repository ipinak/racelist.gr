<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl text-[#0057A0] font-bold mb-6">
        Τι είναι το Τεστ Cooper;
      </h1>

      <p class="mb-6">
        Το <strong>Τεστ Cooper</strong> είναι ένα απλό αλλά αποτελεσματικό
        εργαλείο για την αξιολόγηση της
        <strong>καρδιοαναπνευστικής αντοχής</strong>. Δημιουργήθηκε το 1968 από
        τον Dr. Kenneth H. Cooper για τις ανάγκες της Πολεμικής Αεροπορίας των
        ΗΠΑ και έκτοτε χρησιμοποιείται παγκοσμίως σε σχολεία, στρατό, αθλητικές
        ομάδες και προγράμματα φυσικής κατάστασης.
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          📏 Πώς γίνεται;
        </h2>
        <p class="mb-4">
          Ο συμμετέχων καλείται να τρέξει
          <strong>όσο το δυνατόν μεγαλύτερη απόσταση μέσα σε 12 λεπτά</strong>.
          Στο τέλος, μετριέται η απόσταση που διανύθηκε και, με βάση αυτή,
          γίνεται εκτίμηση της φυσικής κατάστασης.
        </p>
        <p>
          Το τεστ μπορεί να πραγματοποιηθεί σε στίβο (για ακρίβεια) ή σε
          οποιαδήποτε επίπεδη διαδρομή με τρόπο που να επιτρέπει την καταγραφή
          της απόστασης (π.χ. με GPS ρολόι).
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          ✅ Τι αξιολογεί;
        </h2>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Την <strong>καρδιοαναπνευστική ικανότητα</strong> (VO₂max)</li>
          <li>Την <strong>αντοχή</strong> σε μέσης διάρκειας προσπάθειες</li>
          <li>Την <strong>πρόοδο</strong> του αθλητή μέσα στο χρόνο</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          📊 Πώς ερμηνεύονται τα αποτελέσματα;
        </h2>
        <p class="mb-4">
          Η απόσταση που διανύεις μέσα στα 12 λεπτά συγκρίνεται με πρότυπες
          τιμές ανά ηλικία και φύλο. Όσο μεγαλύτερη η απόσταση, τόσο καλύτερη
          θεωρείται η φυσική κατάσταση.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          💡 Πότε να το χρησιμοποιήσεις
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Για να δεις πού βρίσκεσαι σε επίπεδο αντοχής</li>
          <li>Για να παρακολουθήσεις την πρόοδό σου μέσα στους μήνες</li>
          <li>Ως εργαλείο αξιολόγησης σε ομάδες ή μαθητές</li>
        </ul>
      </section>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 class="text-2xl font-bold mb-4 text-center">
          Υπολογιστής Τεστ Cooper
        </h2>

        <form @submit.prevent="calculateDistance" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Απόσταση που διανήθηκε</label>
            <input
              v-model.number="distance"
              type="number"
              step="0.01"
              min="0"
              class="w-full border rounded px-3 py-2"
              placeholder="e.g. 1.61"
              required
            />
            <span class="text-sm text-gray-500"
              >Σε χιλίομετρα (π.χ. 1.61 χλμ.)</span
            >
          </div>

          <div>
            <label class="block mb-1 font-medium">Χρονος</label>
            <input
              v-model.number="time"
              type="number"
              step="0.01"
              min="0"
              class="w-full border rounded px-3 py-2"
              placeholder="e.g. 7.3"
              required
            />
            <span class="text-sm text-gray-500">Σε λεπτά (π.χ. 7.3 λεπτό)</span>
          </div>

          <Button title="Υπολογισμός Απόστασης σε 12 Λεπτά" type="submit" />
        </form>

        <div v-if="result !== null" class="mt-6 text-center">
          <p class="text-lg font-semibold">
            Εκτιμόμενη απόσταση σε 12 λεπτά:
            <span class="text-blue-600">{{ result.toFixed(2) }} χλμ.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  useHead({
    title: 'Υπολογιστής Τεστ Cooper | Εκτίμηση Απόστασης σε 12 Λεπτά',
    meta: [
      {
        name: 'description',
        content:
          'Υπολόγισε πόση απόσταση μπορείς να διανύσεις σε 12 λεπτά με βάση το ρυθμό σου. Ιδανικό εργαλείο για το τεστ Cooper και προπόνηση φυσικής κατάστασης.',
      },
      {
        name: 'keywords',
        content:
          'τεστ Cooper, τεστ κουπερ, τεστ φυσικής κατάστασης, υπολογιστής Cooper, απόσταση σε 12 λεπτά, εργαλείο για δρομείς, cooper test calculator, ρυθμός, αντοχή',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Υπολογιστής Τεστ Cooper | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Μάθε πόσα χιλιόμετρα μπορείς να τρέξεις σε 12 λεπτά χρησιμοποιώντας τον Υπολογιστή Τεστ Cooper. Χρήσιμο για προπόνηση και αξιολόγηση αντοχής.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/cooper-test',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const distance = ref(null);
  const time = ref(null);
  const result = ref(null);

  function calculateDistance() {
    if (!distance.value || !time.value || time.value <= 0) {
      result.value = null;
      return;
    }

    const pace = distance.value / time.value;
    result.value = pace * 12;
  }
</script>
