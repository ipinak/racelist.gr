<template>
  <div>
    <h1 class="font-display text-3xl font-semibold text-center text-ink my-6">Συχνές ερωτήσεις</h1>
    <div class="faq-container max-w-4xl mx-auto bg-paper-dim border border-line p-6 rounded-lg">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item border-b border-line py-4"
      >
        <div
          class="faq-question font-semibold cursor-pointer hover:text-blue-deep transition-colors"
          @click="toggle(index)"
        >
          {{ faq.question }}
        </div>
        <div v-show="faq.open" class="faq-answer mt-2 text-grey pl-4">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  useHead({
    title: 'Συχνές Ερωτήσεις | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/faq/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Βρες απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με το racelist.gr, τη λίστα αγώνων στην Ελλάδα, τις εγγραφές και πώς να χρησιμοποιήσεις την πλατφόρμα.',
      },
      {
        name: 'keywords',
        content:
          'racelist, συχνές ερωτήσεις, FAQ, αγώνες τρεξίματος δρόμου, αγώνες βουνού, εγγραφές αγώνων, πλατφόρμα αγώνων, Ελλάδα',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Συχνές Ερωτήσεις | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Όλα όσα χρειάζεται να ξέρεις για το racelist.gr — αγώνες, εγγραφές, και πληροφορίες χρήσης της πλατφόρμας.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://racelist.gr/faq',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const faqs = reactive([
    {
      question: 'Τι είναι το racelist;',
      answer:
        'Μια λίστα με αγώνες στην Ελλάδα. Ανακάλυψε όλους τους αγώνες τρεξίματος δρόμου, βουνού και πολλά περισσότερα, σε κάθε γωνιά της Ελλάδας!',
      open: false,
    },
    {
      question: 'Μπορείς να κάνεις εγγραφή απο το racelist.gr για τους αγώνες;',
      answer:
        'Όχι, κάθε αγώνας έχει δική του σελίδα εγγραφής. Εδώ θα βρείς τους αγώνες και συνδέσμους για την εγγραφή.',
      open: false,
    },
    {
      question: 'Είσαι διοργανωτής αγώνα και θες να διαδόσεις τον αγώνα σου;',
      answer:
        'Στείλε την προκύρηξη του αγώνα στο email: hey@racelist.gr και εμεις θα την ανεβασουμε στην σελίδα μας.',
      open: false
    },
    {
      question: 'Το racelist.gr καλύπτει μόνο αγώνες δρόμου;',
      answer:
        'Όχι, θα βρεις αγώνες δρόμου, βουνού (trail) και πολλές άλλες διοργανώσεις σε όλη την Ελλάδα.',
      open: false
    },
    {
      question: 'Πώς μπορώ να δω τους αγώνες ανά μήνα;',
      answer:
        'Στη σελίδα «Καλεντάρι Αγώνων» θα βρεις όλους τους αγώνες χωρισμένους ανά μήνα, ώστε να βλέπεις εύκολα τι διοργανώνεται όποτε θέλεις να τρέξεις.',
      open: false
    },
    {
      question: 'Είναι δωρεάν η χρήση του racelist.gr;',
      answer:
        'Ναι, η περιήγηση στη λίστα αγώνων και η καταχώρηση αγώνα από διοργανωτές είναι εντελώς δωρεάν.',
      open: false
    },
    {
      question: 'Τι πληροφορίες πρέπει να στείλω για να καταχωρηθεί ο αγώνας μου;',
      answer:
        'Στείλε μας την προκήρυξη ή τα βασικά στοιχεία του αγώνα (όνομα, ημερομηνία, τοποθεσία, αποστάσεις, σύνδεσμο εγγραφής) στο hey@racelist.gr και θα τα προσθέσουμε στη λίστα.',
      open: false
    },
    {
      question: 'Βρήκα λάθος ή παλιά στοιχεία σε έναν αγώνα, πώς το αναφέρω;',
      answer:
        'Στείλε μας email στο hey@racelist.gr με τα σωστά στοιχεία και θα κάνουμε την διόρθωση το συντομότερο δυνατό.',
      open: false
    },
    {
      question: 'Τι γίνεται αν ένας αγώνας ακυρωθεί ή αλλάξει ημερομηνία;',
      answer:
        'Ενημέρωσέ μας στο hey@racelist.gr μόλις το μάθεις, ώστε να ενημερώσουμε άμεσα την καταχώρηση και να μην μπερδευτούν οι δρομείς.',
      open: false
    },
    {
      question: 'Έχετε εργαλεία χρήσιμα για δρομείς εκτός από τη λίστα αγώνων;',
      answer:
        'Ναι, στη σελίδα «Εργαλεία για δρομείς» θα βρεις υπολογιστές για pace, ενυδάτωση, gel και πρόβλεψη χρόνου αγώνα, καθώς και άρθρα με συμβουλές προπόνησης και εξοπλισμού.',
      open: false
    },
    {
      question: 'Πώς μπορώ να επικοινωνήσω μαζί σας;',
      answer:
        'Μπορείς να μας γράψεις οποιαδήποτε στιγμή στο hey@racelist.gr για ό,τι χρειαστείς.',
      open: false
    }
  ]);

  function toggle(index) {
    faqs[index].open = !faqs[index].open;
  }
</script>
