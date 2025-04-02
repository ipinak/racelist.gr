<template>
  <div>
    <h2 class="text-3xl text-[#9BBEC4] font-bold mb-6 text-center">
      Πόσα gel χρειάζεσαι για ένα αγώνα;
    </h2>
    <div class="max-w-4xl mx-auto px-4 py-8 text-gray-800 space-y-4">
      <p>
        Η σωστή στρατηγική κατανάλωσης ενεργειακών gel μπορεί να κάνει τη
        διαφορά ανάμεσα σε έναν καλό αγώνα και μια δύσκολη εμπειρία. Ο γενικός
        κανόνας είναι να καταναλώνεις περίπου 30-60 γραμμάρια υδατανθράκων την
        ώρα, ή ακόμα και μέχρι 90 γρ. σε μαραθώνιους ή ultra αποστάσεις, αν το
        σώμα σου είναι προσαρμοσμένο.
      </p>
      <p>
        Θυμήσου: κάθε σώμα αντιδρά διαφορετικά. Πειραματίσου στην προπόνηση και
        βρες ποια gel και τι ποσότητα ταιριάζει σε εσένα. Και πάντα συνδύαζέ τα
        με αρκετό νερό για καλύτερη απορρόφηση!
      </p>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 class="text-3xl text-[#9BBEC4] font-bold mb-6">
          Υπολογιστής Ενεργειακών Gel
        </h2>

        <div class="mb-4">
          <div class="flex border rounded-md overflow-hidden w-fit">
            <button
              @click="isManual = false"
              :class="
                isManual ? 'bg-white text-gray-700' : 'bg-[#9BBEC4] text-white'
              "
              class="px-4 py-2 text-sm font-medium transition-colors"
            >
              Αυτόματο
            </button>
            <button
              @click="isManual = true"
              :class="
                isManual ? 'bg-[#9BBEC4] text-white' : 'bg-white text-gray-700'
              "
              class="px-4 py-2 text-sm font-medium transition-colors"
            >
              Χειροκίνητο
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block mb-1">Απόσταση (χλμ)</label>
          <input
            type="number"
            v-model.number="distance"
            class="border p-2 rounded w-full input-bordered w-full"
            min="0"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1">Μέσος Ρυθμός (λεπτά/χλμ)</label>
          <input
            type="number"
            v-model.number="pace"
            class="border p-2 rounded w-full input-bordered w-full"
            min="1"
          />
        </div>

        <div v-if="isManual" class="mb-4">
          <label class="block mb-1">Υδατάνθρακες ανά gel (γρ.)</label>
          <input
            type="number"
            v-model.number="carbsPerGel"
            class="border p-2 rounded w-full input-bordered w-full"
            min="1"
          />
        </div>

        <div v-if="isManual" class="mb-4">
          <label class="block mb-1">Υδατάνθρακες ανά ώρα (γρ.)</label>
          <input
            type="number"
            v-model.number="carbsPerHour"
            class="border p-2 rounded w-full input-bordered w-full"
            min="1"
          />
        </div>

        <div class="mt-6">
          <button
            class="bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#ff00ff]"
            @click="calculateGels"
          >
            Υπολογισμός Gel
          </button>
        </div>

        <div
          v-if="gelsNeeded !== null"
          class="mt-6 p-4 bg-gray-100 rounded-lg shadow"
        >
          <p class="text-lg font-semibold">
            Χρειάζεστε περίπου
            <span class="text-blue-600">{{ gelsNeeded }}</span> gel για τη
            δραστηριότητά σας.
          </p>
        </div>
      </div>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="max-w-4xl mx-auto px-4 py-8">
      <h2 class="text-3xl text-[#9BBEC4] font-bold mb-6">
        Όλα Όσα Πρέπει να Ξέρεις για τα Ενεργειακά Gel στο Τρέξιμο
      </h2>
      <p class="mb-6">
        Αν έχεις «χτυπήσει τοίχο» σε μια μεγάλη προπόνηση ή αγώνα, είναι πιθανό
        ότι το σώμα σου είχε ξεμείνει από καύσιμα. Τα ενεργειακά gel είναι από
        τις πιο δημοφιλείς και αποτελεσματικές λύσεις για να παραμένεις
        ενεργοποιημένος και να αποφύγεις την εξάντληση. Αλλά τι ακριβώς είναι
        και πότε πρέπει να τα χρησιμοποιείς;
      </p>

      <h3>Τι Είναι τα Ενεργειακά Gel;</h3>
      <p class="mb-6">
        Τα ενεργειακά gel είναι μικρά, εύκολα στη μεταφορά φακελάκια που
        περιέχουν απλούς υδατάνθρακες (κυρίως γλυκόζη και φρουκτόζη),
        σχεδιασμένα για να προσφέρουν άμεση ενέργεια κατά τη διάρκεια
        δραστηριοτήτων αντοχής. Πολλά gel περιέχουν επίσης ηλεκτρολύτες όπως
        νάτριο και κάλιο, ενώ μερικά περιέχουν και καφεΐνη για έξτρα ώθηση.
      </p>

      <h3 class="text-xl font-semibold text-[#9BBEC4] mb-4">
        Γιατί τα Χρειάζεσαι
      </h3>
      <p class="mb-6">
        Όταν τρέχεις, το σώμα σου βασίζεται στο γλυκογόνο — αποθηκευμένους
        υδατάνθρακες στους μύες και το συκώτι — ως κύρια πηγή ενέργειας. Ωστόσο,
        τα αποθέματα γλυκογόνου είναι περιορισμένα. Μετά από περίπου 60–90 λεπτά
        συνεχούς άσκησης, αυτά τα αποθέματα εξαντλούνται, οδηγώντας σε κόπωση,
        επιβράδυνση και τελικά την τρομακτική «κράμπα».
      </p>
      <p class="mb-4">
        Τα ενεργειακά gel βοηθούν στην αναπλήρωση των υδατανθράκων
        <em>πριν</em> χτυπήσεις τον τοίχο. Προσφέρουν γρήγορα απορροφήσιμα
        καύσιμα που το σώμα σου μπορεί να αξιοποιήσει άμεσα, διατηρώντας
        ενέργεια και συγκέντρωση κατά τη διάρκεια της άσκησης.
      </p>

      <h3 class="text-xl font-semibold text-[#9BBEC4] mb-4">
        Πότε τα Χρειάζεσαι
      </h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>&lt; 60 λεπτά:</strong> Πιθανότατα δεν χρειάζεσαι gel. Τα
          αποθέματα σου επαρκούν.
        </li>
        <li>
          <strong>60–90 λεπτά:</strong> Ένα gel περίπου στη μέση μπορεί να
          βοηθήσει, ειδικά αν τρέχεις γρήγορα.
        </li>
        <li>
          <strong>90+ λεπτά:</strong> Σχεδίασε να καταναλώνεις ένα gel κάθε
          30–45 λεπτά για να διατηρείς απόδοση.
        </li>
      </ul>
      <p class="mb-4">
        Ξεκίνα τη φόρτιση νωρίς — μην περιμένεις να εξαντληθείς. Το σώμα
        απορροφά καλύτερα τους υδατάνθρακες όταν δεν είναι πλήρως εξαντλημένο.
      </p>

      <h3 class="text-xl font-semibold text-[#9BBEC4] mb-4">
        Πότε ΔΕΝ τα Χρειάζεσαι
      </h3>
      <p class="mb-4">Τα gel δεν είναι απαραίτητα για:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Μικρές προπονήσεις κάτω της μιας ώρας.</li>
        <li>Περίπατους ή ελαφρύ τρέξιμο.</li>
        <li>Αναρρωτικές προπονήσεις όπου η απόδοση δεν είναι στόχος.</li>
        <li>Καταστάσεις νηστείας ή low-carb προπονήσεις.</li>
      </ul>
      <p class="mb-4">
        Αν δεν έχεις χρησιμοποιήσει ποτέ gel, απέφυγε να τα δοκιμάσεις για πρώτη
        φορά σε αγώνα. Πειραματίσου με αυτά στις προπονήσεις για να δεις πώς
        αντιδρά το στομάχι σου.
      </p>

      <h3 class="text-xl font-semibold text-[#9BBEC4] mb-4">
        Γιατί τα Gel Είναι Ιδανικά για Τρέξιμο
      </h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>Φορητά:</strong> Μικρά και εύκολα στη μεταφορά σε ζώνες ή
          τσέπες.
        </li>
        <li>
          <strong>Αποτελεσματικά:</strong> Υψηλή αναλογία υδατανθράκων ανά
          μέγεθος.
        </li>
        <li>
          <strong>Άμεσης δράσης:</strong> Απορροφώνται γρήγορα, ειδικά με λίγο
          νερό.
        </li>
        <li>
          <strong>Βολικά:</strong> Εύκολα στο άνοιγμα και την κατανάλωση εν
          κινήσει.
        </li>
      </ul>
      <p class="mb-4">
        Είναι ιδανικά για μεγάλες αποστάσεις όπως μαραθώνιους ή trail αγώνες,
        όπου η μεταφορά στερεών τροφών είναι δύσκολη.
      </p>

      <h3 class="text-xl font-semibold text-[#9BBEC4] mb-4">Τελικές Σκέψεις</h3>
      <p class="mb-4">
        Τα ενεργειακά gel είναι το μυστικό όπλο του δρομέα — αν τα χρησιμοποιείς
        σωστά. Κατανόησε πότε και πώς να τα χρησιμοποιείς για να διατηρείς
        σταθερή ενέργεια και να αποφεύγεις την κατάρρευση. Δοκίμασε διαφορετικές
        μάρκες και γεύσεις κατά την προπόνηση, φρόντισε την ενυδάτωση και — πάνω
        απ’ όλα — άκου το σώμα σου.
      </p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  useHead({
    title: 'Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου',
    meta: [
      {
        name: 'description',
        content:
          'Υπολόγισε πόσα ενεργειακά gel χρειάζεσαι με βάση την απόσταση, τον ρυθμό σου και τη στρατηγική φόρτισης. Περιλαμβάνει άρθρο με λεπτομέρειες για το πότε και πώς να χρησιμοποιείς gel.',
      },
      {
        name: 'keywords',
        content:
          'υπολογιστής gel, ενέργεια για τρέξιμο, υδατάνθρακες δρομέων, gel μαραθωνίου, φόρτιση αντοχής',
      },
      { name: 'author', content: 'racelist.gr' },

      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου',
      },
      {
        property: 'og:description',
        content:
          'Μάθε πώς και πότε να χρησιμοποιείς ενεργειακά gel για βέλτιστη απόδοση. Περιλαμβάνει υπολογιστή και επιστημονικές πληροφορίες.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/gel-calculator',
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου',
      },
      {
        name: 'twitter:description',
        content:
          'Υπολόγισε πόσα gel χρειάζεσαι και μάθε να φορτίζεις σωστά πριν και κατά τη διάρκεια του τρεξίματος.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://racelist.gr/gel-calculator' }],
  });

  const isManual = ref(false);
  const distance = ref(0);
  const pace = ref(6); // minutes per km
  const carbsPerGel = ref(60);
  const carbsPerHour = ref(30);
  const gelsNeeded = ref(null);

  function calculateGels() {
    const timeInHours = (distance.value * pace.value) / 60;

    const carbsPerHourUsed = isManual.value ? carbsPerHour.value : 80;
    const carbsPerGelUsed = isManual.value ? carbsPerGel.value : 80;

    const totalCarbsNeeded = timeInHours * carbsPerHourUsed;
    const totalGelsNeeded = totalCarbsNeeded / carbsPerGelUsed;
    gelsNeeded.value = totalGelsNeeded > 1 ? Math.floor(totalGelsNeeded) : 0;
  }
</script>
