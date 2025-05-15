<template>
  <div class="blog-content max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 capitalize">
      Ο κατάλληλος καρδιακός παλμός στο τρέξιμο: Είναι 180 παλμοί φυσιολογικοί;
    </h1>

    <!-- Εισαγωγή -->
    <p class="mb-6">
      Το τρέξιμο είναι πρωτίστως άθλημα <strong>καρδιάς και πνευμόνων</strong>·
      κάθε βήμα ενεργοποιεί το καρδιαγγειακό σύστημα ώστε να μεταφέρει οξυγόνο
      στους μύες, ενώ οι πνεύμονες εργάζονται σκληρά για να καλύψουν την
      αυξημένη ζήτηση. Η παρακολούθηση του καρδιακού ρυθμού (pulse) αποτελεί
      έναν από τους πιο αξιόπιστους δείκτες έντασης και κόπωσης.
    </p>

    <!-- 1. Μέγιστος Καρδιακός Παλμός (MHR) -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
        1. Μέγιστος Καρδιακός Παλμός (MHR)
      </h2>
      <p class="mb-4">
        Ο <strong>Μέγιστος Καρδιακός Παλμός</strong> (MHR) εκφράζει τον
        υψηλότερο ρυθμό (σε bpm) που μπορεί να επιτύχει η καρδιά σας υπό απόλυτη
        κόπωση. Ένας απλός τρόπος υπολογισμού είναι:
      </p>
      <pre class="bg-gray-100 p-4 rounded mb-4">MHR ≈ 220 − ηλικία</pre>
      <p>
        Π.χ. για ηλικία 40 ετών → MHR ≈ 180 bpm. Αυτό σημαίνει ότι αν τρέχετε με
        180 bpm, είστε στο όριο της αντοχής σας.
      </p>

      <div class="flex flex-col items-center my-6">
        <h3 class="text-xl font-semibold text-[#0057A0] my-4">
          Υπολογίστε το MHR σας
        </h3>
        <input
          type="number"
          placeholder="Ηλικία"
          v-model="age"
          class="border border-gray-300 rounded p-2 mb-4"
        />
        <div class="text-lg font-semibold text-[#aa57A9]">
          MHR: {{ mhr }} bpm
        </div>

        <p class="text-xs text-gray-500 mt-2">
          Για ακριβέστερο αποτέλεσμα προτιμήστε εργομετρικό τεστ.
        </p>
      </div>
    </section>

    <!-- 2. Ζώνες Καρδιακού Ρυθμού -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
        2. Ζώνες καρδιακού ρυθμού
      </h2>
      <p class="mb-4">Με βάση το MHR, η ένταση χωρίζεται σε πέντε ζώνες:</p>
      <div class="overflow-x-auto mb-4">
        <table class="min-w-full text-sm text-left">
          <thead>
            <tr class="border-b">
              <th class="py-2 pr-4">Ζώνη</th>
              <th class="py-2 pr-4">% MHR</th>
              <th class="py-2 pr-4">Αίσθηση</th>
              <th class="py-2">Στόχος</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-2 pr-4">1</td>
              <td class="py-2 pr-4">50–60%</td>
              <td class="py-2 pr-4">Πολύ άνετη</td>
              <td class="py-2">Αποκατάσταση, ζέσταμα</td>
            </tr>
            <tr class="border-b">
              <td class="py-2 pr-4">2</td>
              <td class="py-2 pr-4">60–70%</td>
              <td class="py-2 pr-4">Άνετη «κουβέντας»</td>
              <td class="py-2">Καύση λίπους, αερόβια βάση</td>
            </tr>
            <tr class="border-b">
              <td class="py-2 pr-4">3</td>
              <td class="py-2 pr-4">70–80%</td>
              <td class="py-2 pr-4">Σταθερή/μέτρια</td>
              <td class="py-2">Βελτίωση αντοχής</td>
            </tr>
            <tr class="border-b">
              <td class="py-2 pr-4">4</td>
              <td class="py-2 pr-4">80–90%</td>
              <td class="py-2 pr-4">Δύσκολη</td>
              <td class="py-2">Ανάπτυξη ταχύτητας</td>
            </tr>
            <tr>
              <td class="py-2 pr-4">5</td>
              <td class="py-2 pr-4">90–100%</td>
              <td class="py-2 pr-4">Μέγιστη</td>
              <td class="py-2">Σπριντ, αγωνιστικό τέλος</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Οι περισσότεροι ερασιτέχνες τρέχουν κυρίως στις Ζώνες 2-3 για αντοχή και
        προσθέτουν προπονήσεις Ζώνης 4-5 για ταχύτητα.
      </p>
    </section>

    <!-- 3. Παρακολούθηση Παλμού -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
        3. Πώς να παρακολουθήσετε τον παλμό σας
      </h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Ζώνη στήθους:</strong> ακρίβεια ±1 bpm.</li>
        <li>
          <strong>Ρολόι καρπού:</strong> πρακτικό, ελαφρώς λιγότερο ακριβές.
        </li>
      </ul>
      <p>
        Ελέγχετε τον παλμό κάθε 1-2 χιλιόμετρα ή ρυθμίστε ειδοποιήσεις έντασης
        στο ρολόι.
      </p>
    </section>

    <!-- 4. Παράγοντες που επηρεάζουν τον παλμό -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
        4. Παράγοντες που επηρεάζουν τον καρδιακό παλμό
      </h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>Φυσική κατάσταση:</strong> χαμηλότερος παλμός σε ίδια
          ταχύτητα.
        </li>
        <li>
          <strong>Καιρός &amp; υψόμετρο:</strong> ζέστη/υγρασία τον αυξάνουν.
        </li>
        <li><strong>Ύπνος &amp; στρες:</strong> ανεβάζουν HR ηρεμίας.</li>
        <li>
          <strong>Φάρμακα &amp; καφεΐνη:</strong> β-αναστολείς ↓, καφεΐνη ↑.
        </li>
      </ul>
    </section>

    <!-- 6. Συχνές Ερωτήσεις -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">6. FAQ</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <strong>Είναι κακό να τρέχω με υψηλό παλμό;</strong> Μόνο αν
          παραμείνει ψηλά με συμπτώματα δυσφορίας.
        </li>
        <li>
          <strong>Τι κάνω αν ο παλμός εκτοξευθεί;</strong> Ελαττώστε ταχύτητα ή
          περπατήστε, ελέγξτε τον αισθητήρα, ενυδατωθείτε.
        </li>
        <li>
          <strong>Μπορώ να αγνοώ τον παλμό;</strong> Έμπειροι δρομείς μπορούν,
          αλλά για αρχάριους είναι βασικό εργαλείο.
        </li>
        <li>
          <strong>Ο παλμός μου είναι 180 bpm, είναι φυσιολογικό;</strong>
          Εξαρτάται από το MHR σας. Αν είναι 190 bpm, τότε είναι σε επιτρεπτά
          όρια. Αν είναι 160 bpm, τότε είναι πολύ υψηλός.
        </li>
      </ul>
    </section>

    <!-- Συμπέρασμα -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">Συμπέρασμα</h2>
      <p>
        Η σωστή διαχείριση καρδιακού ρυθμού μετατρέπει το τρέξιμο σε στοχευμένη,
        ασφαλή και αποδοτική προπόνηση. Εντοπίστε το MHR, δουλέψτε κυρίως στις
        Ζώνες 2–3 και ενσωματώστε συνετά προπονήσεις υψηλής έντασης για
        ταχύτητα.
      </p>
      <p>
        Αν η καρδιά σας χτυπάει με 180 παλμούς στο τρέξιμο, δεν χρειάζεται να
        ανησυχείτε, χωρίς αυτό να σημαίνει ότι δεν πρέπει να προσέξετε. Ο
        καρδιακός ρυθμός είναι σημαντικός δείκτης της φυσικής κατάστασης και της
        προόδου σου, αλλά δεν είναι ο μόνος. Αν το 180 αντιστοιχεί στο MHR σου,
        τότε είναι καλό να ρίξετε λίγο ρυθμό, γιατί δεν θα μπορείτε να
        συνεχίσετε για πολύ χρόνο με αυτόν τον ρυθμό.
      </p>
    </section>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-[#0057A0] mb-4">Αναφορές</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>
          <NuxtLink
            to="https://www.brownhealth.org/be-well/target-heart-rate-zones-safely-maximize-your-workouts"
            class="text-blue-600"
          >
            Target Heart Rate Zones: Safely Maximize Your Workouts
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise-intensity/art-20046887"
            class="text-blue-600"
          >
            Exercise intensity: How to measure it
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Καρδιακός Παλμός στο Τρέξιμο | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/arthra/kardiakos-palmos-sto-treksimo/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Εϊναι 180 παλμοί φυσιολογικοί; Μάθετε πώς να υπολογίζετε και να διαχειρίζεστε τον καρδιακό σας παλμό στο τρέξιμο.',
      },
      {
        property: 'og:title',
        content: 'Καρδιακός  στο Τρέξιμο | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Εϊναι 180 παλμοί φυσιολογικοί; Μάθετε πώς να υπολογίζετε και να διαχειρίζεστε τον καρδιακό σας παλμό στο τρέξιμο.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: 'https://racelist.gr/arthra/kardiakos-palmos-sto-treksimo/',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Καρδιακός Παλμός στο Τρέξιμο | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Εϊναι 180 παλμοί φυσιολογικοί; Μάθετε πώς να υπολογίζετε και να διαχειρίζεστε τον καρδιακό σας παλμό στο τρέξιμο.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const age = ref(null);
  const mhr = computed(() => {
    if (age.value) {
      return 220 - age.value;
    }
    return 0;
  });
</script>
