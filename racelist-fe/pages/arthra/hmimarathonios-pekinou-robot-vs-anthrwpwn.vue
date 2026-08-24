<template>
  <div class="prose-article blog-content max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-center text-blue my-6 font-bold">
      Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους στη διαδρομή των 21
      χλμ.
    </h1>

    <PublishedDate date="2026-04-19" :centered="true" />

    <div class="prose prose-lg max-w-none">
      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold text-blue mt-0 mb-4">
          Πληροφορίες Αγώνα
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="mb-2"><strong>Τοποθεσία:</strong> Πεκίνο, Κίνα</p>
            <p class="mb-2">
              <strong>Απόσταση:</strong> 21 χλμ. (Ημιμαραθώνιος)
            </p>
            <p class="mb-2">
              <strong>Ανθρώπινοι συμμετέχοντες:</strong> ~12.000
            </p>
          </div>
          <div>
            <p class="mb-2"><strong>Ρομπότ συμμετέχοντες:</strong> 100+</p>
            <p class="mb-2"><strong>Νικητήριος χρόνος ρομπότ:</strong> 50:26</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Ιστορική Αναμέτρηση: Ρομπότ εναντίον Ανθρώπων
      </h2>

      <p class="text-lg mb-4">
        Ανθρωποειδή ρομπότ κατάφεραν να νικήσουν ανθρώπινους δρομείς σε έναν
        ημιμαραθώνιο στο Πεκίνο, σημειώνοντας ένα ορόσημο για τη ραγδαία
        εξελισσόμενη ρομποτική βιομηχανία της Κίνας. Περισσότερα από 100 ρομπότ
        αγωνίστηκαν δίπλα σε 12.000 ανθρώπους στη διαδρομή των 21 χιλιομέτρων,
        με τρία από αυτά να τερματίζουν πριν από οποιονδήποτε άνθρωπο.
      </p>

      <p class="text-lg mb-4">
        Το νικητήριο ρομπότ ολοκλήρωσε τη διαδρομή σε
        <strong>50 λεπτά και 26 δευτερόλεπτα</strong> — χρόνος ταχύτερος από το
        παγκόσμιο ρεκόρ ημιμαραθωνίου, αν και το ρομπότ χρειάστηκε καθοδήγηση
        προς το τέλος της διαδρομής.
      </p>

      <div class="bg-flag/10 border-l-4 border-flag p-6 rounded-lg mb-8">
        <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
          🤖 Τα Κορυφαία Ρομπότ του Αγώνα
        </h3>
        <p class="text-ink/80 mb-2">
          Τρία ανθρωποειδή ρομπότ τερμάτισαν μπροστά από τον πρώτο άνθρωπο
          δρομέα. Το πρωταθλητή-ρομπότ κατάφερε να διατηρήσει σταθερό ρυθμό για
          το μεγαλύτερο μέρος της διαδρομής, επιδεικνύοντας εντυπωσιακή αντοχή
          και ισορροπία για μηχανή.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Στατιστικά Αγώνα
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-paper-dim border border-blue/20 p-6 rounded-lg">
          <div class="text-3xl font-bold text-blue mb-2">100+</div>
          <div class="text-ink/80">Ρομπότ συμμετέχοντες</div>
        </div>
        <div
          class="bg-paper-dim border border-flag/20 p-6 rounded-lg"
        >
          <div class="text-3xl font-bold text-blue mb-2">~12.000</div>
          <div class="text-ink/80">Άνθρωποι δρομείς</div>
        </div>
        <div
          class="bg-paper-dim border border-line p-6 rounded-lg"
        >
          <div class="text-3xl font-bold text-blue mb-2">50:26</div>
          <div class="text-ink/80">Νικητήριος χρόνος ρομπότ</div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Βίντεο του Αγώνα
      </h2>

      <div class="mb-8">
        <a
          href="https://www.youtube.com/watch?v=1vUnusbzNMQ"
          target="_blank"
          rel="noopener noreferrer"
          class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
        >
          <div class="font-semibold text-blue">
            📺 Ημιμαραθώνιος Πεκίνου: Ρομπότ vs Άνθρωποι
          </div>
          <div class="text-sm text-grey mt-1">
            Δείτε το βίντεο του ιστορικού αγώνα στο YouTube
          </div>
        </a>
      </div>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Η Κίνα και η Ρομποτική Επανάσταση
      </h2>

      <p class="text-lg mb-4">
        Η διοργάνωση αυτή αντικατοπτρίζει την εθνική στρατηγική της Κίνας για
        την ανάπτυξη αυτόνομων μηχανών με προορισμό τα εργοστάσια, τις υπηρεσίες
        και τα σπίτια. Κάθε αγώνας παράγει πολύτιμα δεδομένα που
        χρησιμοποιούνται για την εκπαίδευση της επόμενης γενιάς ανθρωποειδούς
        τεχνολογίας.
      </p>

      <p class="text-lg mb-4">
        Η ρομποτική βιομηχανία της Κίνας βρίσκεται σε τροχιά ταχείας ανάπτυξης,
        με δεκάδες εταιρείες να επενδύουν σε ανθρωποειδή ρομπότ που μπορούν να
        εκτελούν πολύπλοκες εργασίες. Αυτός ο ημιμαραθώνιος αποτελεί μια δημόσια
        επίδειξη των δυνατοτήτων τους σε πραγματικές συνθήκες.
      </p>

      <div class="mb-6 mt-12">
        <h2 class="text-3xl text-blue font-bold my-6 capitalize">
          Robots vs Humans: The Beijing Half Marathon
        </h2>
        <YoutubeVideo video-id="1vUnusbzNMQ" class="mb-3" />
      </div>

      <div class="mt-8 text-center text-grey">
        <p class="text-sm">Τελευταία ενημέρωση: 22 Απριλίου 2026</p>
      </div>
    </div>
  </div>
  
</template>

<script setup>
  useHead({
    title:
      'Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/arthra/hmimarathonios-pekinou-robot-vs-anthrwpwn/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Ανθρωποειδή ρομπότ νίκησαν ανθρώπινους δρομείς στον ημιμαραθώνιο του Πεκίνου. Πάνω από 100 ρομπότ αγωνίστηκαν με 12.000 ανθρώπους στη διαδρομή 21 χλμ., με το νικητήριο ρομπότ να τερματίζει σε 50 λεπτά και 26 δευτερόλεπτα.',
      },
      {
        property: 'og:title',
        content:
          'Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Ανθρωποειδή ρομπότ νίκησαν ανθρώπους στον ημιμαραθώνιο Πεκίνου. 100+ ρομπότ, 12.000 άνθρωποι, νικητήριος χρόνος 50:26.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:title',
        content:
          'Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Ανθρωποειδή ρομπότ νίκησαν ανθρώπους στον ημιμαραθώνιο Πεκίνου. 100+ ρομπότ, 12.000 άνθρωποι, νικητήριος χρόνος 50:26.',
      },
      {
        name: 'keywords',
        content:
          'ημιμαραθωνιος πεκινου, ρομποτ vs ανθρωποι, ανθρωποειδη ρομποτ, κινα ρομποτικη, τεχνητη νοημοσυνη, δρομος, αγωνες δρομου, ρομποτ αγωνας',
      },
    ],
  });

  useJsonld([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους",
      "description": "Ανθρωποειδή ρομπότ νίκησαν ανθρώπινους δρομείς στον ημιμαραθώνιο του Πεκίνου. Πάνω από 100 ρομπότ αγωνίστηκαν με 12.000 ανθρώπους στη διαδρομή 21 χλμ., με το νικητήριο ρομπότ να τερματίζει σε 50 λεπτά και 26 δευτερόλεπτα.",
      "image": "https://racelist.gr/racelist-banner.jpg",
      "url": "https://racelist.gr/arthra/hmimarathonios-pekinou-robot-vs-anthrwpwn/",
      "author": {
        "@type": "Organization",
        "name": "racelist.gr",
        "url": "https://racelist.gr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "racelist.gr",
        "url": "https://racelist.gr"
      },
      "datePublished": "2026-04-19"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Αρχική",
          "item": "https://racelist.gr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Άρθρα",
          "item": "https://racelist.gr/arthra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ημιμαραθώνιος Πεκίνου: Ρομπότ κέρδισαν τους ανθρώπους",
          "item": "https://racelist.gr/arthra/hmimarathonios-pekinou-robot-vs-anthrwpwn/"
        }
      ]
    },
  ]);

</script>

<style scoped>
  .blog-content {
    font-family: 'Inter', system-ui, sans-serif;
  }

  .prose {
    color: #0F1F2E;
    line-height: 1.75;
  }

  .prose h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .prose h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .prose p {
    margin-bottom: 1rem;
  }

  .prose ul {
    margin-bottom: 1rem;
  }

  .prose a {
    color: #1F5FA8;
    text-decoration: none;
  }

  .prose a:hover {
    text-decoration: underline;
  }

  table {
    border-collapse: collapse;
  }

  th {
    font-weight: 600;
  }
</style>
