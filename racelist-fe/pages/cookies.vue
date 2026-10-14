<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="font-display text-3xl font-semibold text-center text-ink my-6">
      Πολιτική cookies
    </h1>

    <div class="space-y-6 text-ink/90 leading-relaxed">
      <p>
        Το racelist.gr χρησιμοποιεί cookies και παρόμοιες τεχνολογίες μόνο όπου
        χρειάζεται για να λειτουργεί ο ιστότοπος και, εφόσον συμφωνήσετε, για
        στατιστικά επισκεψιμότητας. Μπορείτε να αλλάξετε την επιλογή σας
        οποιαδήποτε στιγμή.
      </p>

      <div class="text-center">
        <button
          type="button"
          class="bg-blue-deep text-paper rounded-full font-semibold px-5 py-2.5 text-sm hover:bg-ink transition-colors"
          @click="openSettings"
        >
          Ρυθμίσεις cookies
        </button>
      </div>

      <section>
        <h2 class="font-display text-xl font-semibold text-ink mb-3">
          Απαραίτητα
        </h2>
        <p>
          Αποθηκεύονται στον browser σας (localStorage) και δεν στέλνονται πουθενά.
        </p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>
            <code>consent:v1</code>: η επιλογή σας για τα cookies. Διάρκεια 12
            μήνες.
          </li>
          <li>
            <code>houseAd:dismissed:*</code>: θυμάται ότι κλείσατε μια
            ανακοίνωση, ώστε να μην εμφανιστεί ξανά. Διάρκεια 30 ημέρες.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="font-display text-xl font-semibold text-ink mb-3">
          Στατιστικά (Google Analytics)
        </h2>
        <p>
          Μόνο με τη συγκατάθεσή σας. Μας δείχνουν ποιες σελίδες, αγώνες και
          άρθρα διαβάζονται, ώστε να βελτιώνουμε το περιεχόμενο.
        </p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li><code>_ga</code>: ξεχωρίζει τους επισκέπτες. Διάρκεια 2 χρόνια.</li>
          <li>
            <code>_ga_*</code>: διατηρεί την κατάσταση της επίσκεψης. Διάρκεια 2
            χρόνια.
          </li>
        </ul>
        <p class="mt-2">
          Χωρίς συγκατάθεση δεν αποθηκεύεται κανένα cookie. Η Google λαμβάνει
          μόνο ανώνυμα σήματα χωρίς αναγνωριστικά (Google Consent Mode).
        </p>
      </section>

      <section>
        <h2 class="font-display text-xl font-semibold text-ink mb-3">
          Διαφήμιση (Google Signals)
        </h2>
        <p>
          Μόνο με τη συγκατάθεσή σας. Επιτρέπει στη Google να συνδέει
          επισκέψεις με λογαριασμούς Google, για συγκεντρωτικά δημογραφικά
          στοιχεία και στοιχεία ενδιαφερόντων. Οι διαφημίσεις στο racelist.gr
          προβάλλονται από εμάς και δεν σας παρακολουθούν.
        </p>
      </section>

      <section>
        <h2 class="font-display text-xl font-semibold text-ink mb-3">
          Βίντεο YouTube
        </h2>
        <p>
          Τα βίντεο φορτώνονται από το youtube-nocookie.com, που δεν αποθηκεύει
          cookies μέχρι να πατήσετε αναπαραγωγή. Από εκεί και πέρα ισχύει η
          πολιτική απορρήτου της Google.
        </p>
      </section>

      <p class="text-sm text-grey">
        Για ερωτήσεις σχετικά με τα δεδομένα σας, επικοινωνήστε μαζί μας μέσω της
        σελίδας
        <NuxtLink to="/about/" class="text-blue hover:text-blue-deep underline">
          Σχετικά</NuxtLink
        >.
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useConsent } from '~/composables/useConsent';

  const { openSettings } = useConsent();

  useHead({
    title: 'Πολιτική cookies | racelist.gr',
    link: [{ rel: 'canonical', href: 'https://racelist.gr/cookies/' }],
    meta: [
      {
        name: 'description',
        content:
          'Ποια cookies χρησιμοποιεί το racelist.gr, για ποιο σκοπό και πώς μπορείτε να αλλάξετε τις επιλογές σας.',
      },
    ],
  });
</script>
