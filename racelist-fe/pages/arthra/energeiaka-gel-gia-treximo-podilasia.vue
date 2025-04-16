<template>
  <div class="blog-content max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 capitalize">
      Μια λίστα με ενεργειακά gel για τρέξιμο και ποδηλασία
    </h1>

    <p class="mb-6">
      Τα ενεργειακά τζελ είναι μικρά φακελάκια με συμπυκνωμένους υδατάνθρακες,
      σχεδιασμένα για να προσφέρουν ενέργεια κατά τη διάρκεια έντονης άσκησης,
      όπως το τρέξιμο, το ποδήλατο ή οποιοδήποτε άλλο άθλημα αντοχής. Περιέχουν
      γρήγορα απορροφήσιμα σάκχαρα, ηλεκτρολύτες ή ακόμα και καφεΐνη, βοηθώντας
      στη διατήρηση της ενέργειας και της συγκέντρωσης όταν τα αποθέματα
      γλυκογόνου μειώνονται. Τα σακχαρα τους συνήθως είναι 2 ειδών, σακχαρα που
      γρήγορης απορρόφισης και σακχαρα πιο αργής απορρόφισης απο τον οργανισμό.
      Ο σκοπός είναι να σου δίνουν ενέργεια για αρκετή διάρκεια, αλλά ταυτόχρονα
      να σου δίνουν μια μικρή ώθηση (γρήγορα απορροφήσιμα σακχαρα).
    </p>

    <p class="mb-6">
      Τα σάκχαρα που περιέχουν είναι συνήθως δύο ειδών — ένας συνδυασμός
      γρήγορης και πιο αργής απορρόφησης από τον οργανισμό. Ο σκοπός είναι να
      προσφέρουν μια αρχική ώθηση αλλά και παρατεταμένη ενέργεια. Στην ουσία,
      μιλάμε για υδατάνθρακες όπως η μαλτοδεξτρίνη και η φρουκτόζη σε
      διαφορετικές αναλογίες (π.χ. 2:1 ή 1:0.8).
    </p>

    <p class="mb-6">
      Πέρα από τους υδατάνθρακες, τα περισσότερα gel περιέχουν και μια μικρή
      ποσότητα άλατος (νάτριο ή/και κάλιο) για την αναπλήρωση των ηλεκτρολυτών
      που χάνονται με τον ιδρώτα, και κάποιες φορές καφεΐνη για πνευματική
      διέγερση. Επίσης περιέχουν συχνά ένα ήπιο οξύ (όπως κιτρικό οξύ) ώστε να
      μπορούν να παστεριωθούν και να διατηρούνται για μεγάλο χρονικό διάστημα.
    </p>

    <p class="mb-6">
      Οι γεύσεις τους τείνουν να είναι ουδέτερες ή ελαφρώς γλυκές, ώστε να μην
      κουράζουν το στομάχι σε μεγάλες αποστάσεις. Αν και μερικά μπορεί να
      φαίνονται “γλυκά”, η πλειοψηφία δεν περιέχει επιπλέον ζάχαρη ή γλυκαντικά
      — απλά τους απαραίτητους υδατάνθρακες για ενέργεια.
    </p>

    <div class="mb-6 mt-12">
      <h2 class="text-3xl text-[#0057A0] font-bold mt-6 capitalize">
        {{ gels.length }} ενεργειακά τζελ για τρεξιμο και ποδηλασία για να
        επιλέξεις
      </h2>

      <Gel
        v-for="(row, index) in gels"
        :key="index"
        :gel="row"
        :image-left="index % 2 === 0"
        class="my-6"
      />
    </div>

    <div class="mb-6 mt-12">
      <h2 class="text-3xl text-[#0057A0] font-bold my-6 capitalize">
        Video με review των gel
      </h2>

      <p class="mb-6">
        Για κάποια από αυτά τα gel και όχι μόνο υπάρχουν video review παρακάτω,
        δες τα για να έχεις μια καλύτερη αποψη για να διαλεξεις.
      </p>

      <YoutubeVideo video-id="uJuZ29sTf2E" />
      <YoutubeVideo
        v-for="(v, idx) in videos"
        :key="idx"
        :video-id="v"
        class="mt-6"
      />
    </div>

    <section class="mb-6 mt-12">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4 capitalize">
        Ποιο να διαλέξεις;
      </h2>

      <p class="mb-4">
        Η επιλογή θα γίνει από εσένα και τις ανάγκες σου. Σε γενικές γραμμές όλα
        τα gel προσφερουν παρόμοια περιεκτικότητα σε υδατάνθρακες, όποτε η
        επιλογή γίνεται κυριως με βάσει τη γεύση, την υφή και κυρίως πόσους
        υδατάνθρακες χρειάζεσαι. Πολλά από τα gel εχουν συνήθως ρευστή υφή με
        μικρες εξαιρέσεις των gel της Maurten που είναι τα πιο πυχτά από ολα.
        Είναι συμαντικό να ξέρεις ότι όλα σχεδόν τα gel προσφέρονται σε 2
        εκδοχές με καφεΐνη και χωρίς.
      </p>

      <p class="mb-4 font-semibold text-center">
        Καλή προπόνηση — και καλά χιλιόμετρα!
      </p>
    </section>

    <hr class="mb-4 text-gray-300" />

    <div class="flex justify-center">
      <NuxtLink class="p-6 hover:underline" to="/gel-calculator">
        Μάθε πόσα gel χρειάζεσαι για τον αγώνα ή την προπόνηση σου
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Όλα τα ενεργειακά gel για τρέξιμο & ποδηλασία | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/arthra/energeiaka-gel-gia-treximo-podilasia',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Δες τη μεγαλύτερη λίστα με ενεργειακά gel για τρέξιμο και ποδηλασία. Τιμές, περιγραφή και υδατάνθρακες για κάθε gel.',
      },
      {
        property: 'og:title',
        content: 'Όλα τα ενεργειακά gel για τρέξιμο & ποδηλασία | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Σύγκρινε gel για αθλητές αντοχής: τιμές, υδατάνθρακες, υφή και χαρακτηριστικά. Το απόλυτο εργαλείο επιλογής gel.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://racelist.gr/arthra/energeiaka-gel-gia-treximo-podilasia',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Όλα τα ενεργειακά gel για τρέξιμο & ποδήλατο | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Βρες το gel που σου ταιριάζει: γεύση, τιμή, καφεΐνη, υδατάνθρακες και περισσότερα. Η πιο πλήρης λίστα στην Ελλάδα!',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const gels = [
    {
      name: 'Maurten Gel 100',
      description: `Ισως το πιο γνωστό gel της αγοράς, έχει μια ιδιέτερη πυκτή 
      μορφή και δίνει αρκετούς υδατάνθρακες. Δεν έχουν γεύση και βγαίνουν με καφεΐνη και χωρίς.`,
      price: '3.75',
      image: '/images/gels/maurten-gel.jpg',
      carbs: '25',
    },
    {
      name: 'SIS',
      description: `Αρκετοί υδατάνθρακες για 10Κ αλλά θα χρειαστείς 1-2 πακετα παραπάνω για ένα μαραθώνιο. 
        Η μορφή του είναι σχετικά αραιή σχεδόν ρευστή σαν σιρόπι για το λαιμό.`,
      price: '2.5',
      image: '/images/gels/sis-gel.webp',
      carbs: '22',
    },
    {
      name: 'GU',
      description: `Ισως τα πιο γνωστά gel στην Ελλάδα, διαθέτουν πάρα πολλές γεύσεις (ότι πιο περιεργό μπορείς να φανταστείς) με ή χωρις καφεΐνη. 
        Είναι πιο πυκτα από ένα σιρόπι και πιο αραιό από ζελέ.`,
      price: '2.2',
      image: '/images/gels/gu-gel.jpg',
      carbs: '22',
    },
    {
      name: 'Nutrend',
      description: '',
      price: '2',
      image: '/images/gels/nutrend-gel.jpg',
      carbs: '30.9',
    },
    {
      name: 'Biotech',
      description: '',
      price: '2.4',
      image: '/images/gels/biotech-gel.jpeg',
      carbs: '18',
    },
    {
      name: 'Neversecond',
      description: `2:1 γλυκόζη-φρουκτόζη. Η υφή του είναι μεταξύ υγρού και ζελε, τείνει περισσότερο στο υγρό. 
        Αρκέτοι υδατάνθρακες σε πολλές διαφορετικές γεύσεις για να καλύψει τους περισσότερους.`,
      price: '3.6',
      image: '/images/gels/neversecond-gel.webp',
      carbs: '30',
    },
    {
      name: 'Fit & Shape',
      description: '',
      price: '1.8',
      image: '/images/gels/fit-shape-gel.jpg',
      carbs: '26',
    },
    {
      name: 'Naak',
      description: '',
      price: '3.5',
      image: '/images/gels/naak-gel.webp',
      carbs: '27',
    },
    {
      name: '226ERS',
      description: '1:1 ratio for complex and simple carbohydrates',
      price: '3.5',
      image: '/images/gels/226ers-gel.jpg',
      carbs: '50',
    },
    {
      name: 'Squeezy',
      description: '',
      price: '2',
      image: '/images/gels/squeezy-gel.png',
      carbs: '50',
    },
    {
      name: 'Nutrixxion',
      description: '',
      price: '2.4',
      image: '/images/gels/NTX-gel.jpg',
      carbs: '28',
    },
    {
      name: 'Nduranz',
      description: '',
      price: '2.5',
      image: '/images/gels/nduranz-gel.webp',
      carbs: '45',
    },
  ];
  const videos = ['prtCryac8TE'];
</script>
