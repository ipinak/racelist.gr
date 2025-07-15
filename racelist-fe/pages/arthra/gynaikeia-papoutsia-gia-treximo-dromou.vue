<template>
  <div class="blog-content max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 capitalize">
      Βρες τα καλύτερα γυναικεία παπούτσια για τρέξιμο δρόμου
    </h1>

    <p class="mb-6">
      Η επιλογή του σωστού γυναικείου παπουτσιού για τρέξιμο είναι καθοριστική
      για κάθε δρομέα — γιατί μετά το σώμα σου, τα παπούτσια είναι ο πιο
      κρίσιμος σου σύμμαχος στο τρέξιμο. Τα γυναικεία παπούτσια έχουν ειδικό
      σχεδιασμό που λαμβάνει υπόψη την ανατομία του γυναικείου ποδιού, με
      στενότερη φτέρνα, διαφορετική στήριξη της καμάρας και προσαρμοσμένη
      γεωμετρία. Ένα καλό ζευγάρι γυναικεία παπούτσια δεν προσφέρει απλώς άνεση·
      παίζει καθοριστικό ρόλο στην πρόληψη τραυματισμών, στη βελτίωση της
      απόδοσης και στη μακροχρόνια απόλαυση του αθλήματος. Είτε είσαι έμπειρη
      δρομέας είτε ξεκινάς το πρώτο σου couch-to-5K, ένα λάθος παπούτσι μπορεί
      να οδηγήσει σε δυσφορία ειδικά όταν τα χιλιόμετρα ανεβαίνουν.
    </p>
    <p class="mb-6">
      Η αγορά γυναικείων παπουτσιών για τρέξιμο σήμερα είναι πιο πλούσια από
      ποτέ. Από μαλακά, απορροφητικά παπούτσια για αποκατάσταση και καθημερινές
      προπονήσεις, μέχρι προηγμένα carbon-plated μοντέλα που προσφέρουν
      εκρηκτική αίσθηση πρόωσης για αγώνες. Οι κατασκευάστριες εταιρείες
      αναπτύσσουν ειδικά γυναικεία μοντέλα με χρώματα, σχέδια και τεχνολογίες
      που απευθύνονται στις ανάγκες των γυναικών δρομέων. Παπούτσια με ψηλή σόλα
      (high-stack) προσφέρουν περισσότερη απορρόφηση κραδασμών, ενώ εκείνα με
      carbon πλάκες προσφέρουν δυναμική επιστροφή ενέργειας. Είτε προτεραιότητά
      σου είναι η στήριξη, η άνεση ή η ταχύτητα, η κατανόηση των διαφορετικών
      κατηγοριών θα σε βοηθήσει να βρεις τον δικό σου ρυθμό — κυριολεκτικά και
      μεταφορικά.
    </p>

    <div class="mb-6 mt-12">
      <h2 class="text-3xl text-[#0057A0] font-bold mt-6 capitalize">
        {{ shoes.length }} γυναικεία παπούτσια για οποιαδήποτε δρομέα
      </h2>

      <ShoeRow
        v-for="(row, index) in shoes"
        :key="index"
        :name="row.name"
        :price="row.price"
        :description="row.description"
        :image="row.image"
        :image-left="index % 2 === 0"
        :links="row.links"
        class="my-6"
      />
    </div>

    <section class="mb-6 mt-12">
      <h2 class="text-2xl font-semibold text-[#0057A0] mb-4 capitalize">
        Ποιο να διαλέξεις;
      </h2>
      <p class="mb-4">
        Η επιλογή θα γίνει από εσένα, τις ανάγκες σου και την τσέπη σου!
        Παρόλαυτα κάπως έτσι διαλέγω εγώ.
      </p>

      <ol class="list-decimal mb-4 px-6">
        <li>αυτο που ειναι ταιριάζει στο πορτοφολι σου</li>
        <li>
          αυτο που κάθεται καλύτερα στο πόδι σου - για να το μάθεις αυτο σου
          προτείνω να πας σε κατάστημα που να ειδικεύεται στο τρέξιμο και να
          τους ζητήσεις να το δοκιμασεις σε διάδρομο (συνήθως το δέχονται και
          συυήθως υπάρχουν διάδρομοι σε αυτα τα καταστήματα).
        </li>
        <li>Αφου το δοκιμασεις μπορεις να αποφασίσεις</li>
      </ol>
      <p class="mb-4">
        Αν ξεκινάς τώρα πάρε ένα μαλακό και απορροφητικό παπούτσι. Αν παλι έχεις
        γραψει αρκετα χιλιόμετρα και θες κατι νεο, θα σου προτεινα να παρεις ενα
        απορροφητικό και ενα carbon για τους αγώνες (τουλάχιστον αυτό κάνω εγώ).
        Επίσης καλό είναι να αλλάζουμε παπούτσια καθε 500-600 χιλιόμετρα,
        υπάρχουν εξαιρέσεις οπου τα παπούτσια χαλάνε νωρίτερα ή και αργότερα. Σε
        γενικές γραμμές στα 450 χιλιόμετρα ψαχνουμε το επόμενο παπουτσι πριν το
        προηγουμενο, για 2 λόγους πρωτον θα έχουμε 2 ζευγάρια και δεύτερον για
        να μην φτάσουμε στο σημείο που το τωρινό ζευγάρι θα μας κουράζει.
      </p>
      <p class="mb-4 font-semibold text-center">
        Καλή προπόνηση — και καλά χιλιόμετρα!
      </p>
    </section>

    <hr class="mb-4 text-gray-300" />

    <div class="flex justify-center">
      <span class="mr-1">Βρες πληροφορίες για </span>
      <NuxtLink
        class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
        to="/arthra/nike-running-shoes/"
      >
        Nike running shoes
      </NuxtLink>

      <span class="mr-0.5">,</span>

      <NuxtLink
        class="underline hover:bg-[#0057A0] hover:text-white pr-0.5 py-0.5"
        to="/arthra/adidas-running-shoes/"
      >
        Adidas running shoes
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import ShoeRow from '~/components/ShoeRow.vue';

  useHead({
    title:
      'Βρες τα καλύτερα γυναικεία παπούτσια για τρέξιμο δρόμου | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://www.racelist.gr/arthra/gynaikeia-papoutsia-gia-treximo-dromou/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα γυναικεία παπούτσια για τρέξιμο και ανακάλυψε 22 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        property: 'og:title',
        content:
          'Βρες τα καλύτερα γυναικεία παπούτσια για τρέξιμο δρόμου | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα γυναικεία παπούτσια για τρέξιμο και ανακάλυψε 22 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content:
          'https://racelist.gr/arthra/gynaikeia-papoutsia-gia-treximo-dromou/',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Βρες τα καλύτερα γυναικεία παπούτσια για τρέξιμο δρόμου | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα γυναικεία παπούτσια για τρέξιμο και ανακάλυψε 22 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        name: 'keywords',
        content:
          'γυναικεία παπούτσια για τρέξιμο, γυναικεία παπούτσια δρόμου, παπούτσια γυναικών δρομέων, women running shoes, carbon παπούτσια, παπούτσια με απορρόφηση κραδασμών, τα καλύτερα γυναικεία παπούτσια για τρέξιμο, review γυναικείων παπουτσιών τρεξίματος, Brooks running shoes women, Saucony running women, ASICS running shoes women, HOKA running shoes women, Adidas running shoes women, Nike women running, Altra παπούτσια τρεξίματος γυναικεία, Mizuno running shoes women, παπούτσια για αγώνες γυναικεία, παπούτσια για προπόνηση γυναικεία, παπούτσια για ημιμαραθώνιο γυναικεία, παπούτσια για αρχάριες δρομείς',
      },
    ],
  });

  const shoes = [
    {
      name: 'Nike Alphafly 3',
      price: '~320€',
      description: `Με βελτιστοποιημένη σχεδίαση για την ταχύτητα του μαραθωνίου, το Alphafly 3 σε βοηθά να πιέσεις τον εαυτό σου
          πέρα από οτιδήποτε θεωρούσες δυνατόν. Τρεις πρωτοποριακές τεχνολογίες: δύο μονάδες Air Zoom για ώθηση, επιφάνεια από
          ανθρακονήματα σε όλο το μήκος για ευκολία κίνησης, και ενδιάμεση σόλα από αφρό ZoomX για αίσθηση ξεκούρασης από το πρώτο
          μέχρι το τελευταίο χιλιόμετρο. Το πιο ελαφρύ Alphafly που έχει κατασκευαστεί ποτέ.`,
      image: [
        '/images/nike/nike-alphafly-wm.jpeg',
        '/images/nike/nike-alphafly-wm-1.jpeg',
      ],
      links: [
        {
          label: 'Nike Greece',
          url: 'https://www.nike.com/gr/t/%CE%B1%CE%BD%CE%B4%CF%81%CE%B9%CE%BA%CE%B1-%CF%80%CE%B1%CF%80%CE%BF%CF%85%CF%84%CF%83%CE%B9%CE%B1-%CE%B1%CE%B3%CF%89%CE%BD%CF%89%CE%BD-%CE%B4%CF%81%CE%BF%CE%BC%CE%BF%CF%85-alphafly-3-o19yH5bO/FD8311-600',
        },
      ],
      weight: '174 γρ.',
      offset: '8 mm',
    },
    {
      name: 'Puma Fast-r',
      price: '~130€',
      description: `Τα γυναικεία παπούτσια running Fast-r από την Puma είναι κατάλληλα για δρομείς που επιδιώκουν άνεση, στήριξη
          και απορρόφηση κραδασμών κατά τη διάρκεια του τρεξίματος. Η τεχνολογία ενδιάμεσης σόλας Nitro Elite προσφέρει κορυφαία
          απόκριση με μειωμένο συνολικό βάρος. Η εξωτερική σόλα από καουτσούκ παρέχει πρόσφυση και ανθεκτικότητα.`,
      image: [
        '/images/puma/puma-fastr-wm.jpeg',
        '/images/puma/puma-fastr-wm-1.jpeg',
        '/images/puma/puma-fastr-wm-2.jpeg',
      ],
      links: [
        {
          label: 'Puma Greece',
          url: 'https://eu.puma.com/gr/en/sports/running/fast-r',
        },
      ],
      offset: '8 mm',
    },
    {
      name: 'Adidas by Stella McCartney Prime x 2.0 STRUNG',
      price: '~180€',
      description: `Ξεπέρασε τα όριά σου με τα running παπούτσια Adidas By Stella McCartney Prime x 2.0 STRUNG, σχεδιασμένα για
          ταχύτητα και κορυφαία άνεση. Το STRUNG άνω μέρος από ανακυκλωμένα υλικά αγκαλιάζει το πόδι και χαρίζει αίσθηση κάλτσας
          με απόλυτη ευελιξία. Η τεχνολογία Adizero μειώνει το βάρος και διατηρεί την αντοχή. Χάρη στην σόλα Adizero Prime,
          παρέχουν δυναμική επιστροφή ενέργειας.`,
      image: [
        '/images/adidas/adidas-stella-mccartney-prime-x-wm.jpeg',
        '/images/adidas/adidas-stella-mccartney-prime-x-wm-1.jpeg',
        '/images/adidas/adidas-stella-mccartney-prime-x-wm-2.jpeg',
      ],
      links: [
        {
          label: 'Adidas Greece',
          url: 'https://www.adidas.gr/adidas-by-stella-mccartney-prime-x-2.0-strung-shoes/JS0260.html',
        },
      ],
    },
    {
      name: 'Saucony Endorphin Pro 4',
      price: '~280€',
      description: `Κομψό και ανταποκρινόμενο από την αρχή, αλλά ομαλό και αποτελεσματικό από τη φύση του. Με τη σύντηξη του αφρού
          PWRRUN HG και PWRRUN PB στην ενδιάμεση σόλα. Ο συνδυασμός τοποθετείται πάνω από μια πλάκα πλήρους άνθρακα, σχεδιασμένη για
          διαμήκη ακαμψία και μέγιστη μεταβολική απόδοση. Με την τεχνολογία Speedroll που έχει αποδειχθεί ότι βοηθά να κινείσαι με
          κύλιση προς τα εμπρός. Είναι vegan και περιέχει ανακυκλωμένα υλικά.`,
      image: [
        '/images/saucony/saucony-endorphin-pro-4-wm-1.jpeg',
        '/images/saucony/saucony-endorphin-pro-4-wm.jpeg',
        '/images/saucony/saucony-endorphin-pro-4-wm-2.jpeg',
      ],
      links: [
        {
          label: 'Saucony Greece',
          url: 'https://saucony.veto.gr/women/shoes/running/saucony-endorphin-pro-4-womens-shoes-s10939-340/',
        },
      ],
      weight: '212 γρ.',
      offset: '8 mm',
    },
    {
      name: 'CEP Omnispeed Bowtech Shoes women',
      price: '~120€',
      description: `Τα γυναικεία παπούτσια running από την CEP είναι κατάλληλα για δρομείς που επιδιώκουν άνεση, στήριξη και
          απορρόφηση κραδασμών. Το Μonomesh επάνω μέρος εξασφαλίζει διαπνοή και κρατά τα πόδια δροσερά σε όλη τη διάρκεια της
          προπόνησης. Η ενδιάμεση σόλα με αφρό EVA προσφέρει αποτελεσματικότερη αντικραδασμική προστασία και ξεκούραστο πάτημα.
          Η εξωτερική σόλα από καουτσούκ παρέχει πρόσφυση και ανθεκτικότητα.`,
      image: [
        '/images/cep/cep-running-shoes-wm.jpeg',
        '/images/cep/cep-running-shoes-wm-3.jpeg',
        '/images/cep/cep-running-shoes-wm-2.jpeg',
        '/images/cep/cep-running-shoes-wm-1.jpeg',
      ],
      links: [
        {
          label: 'CEP',
          url: 'https://www.cepsports.com/en/cep-omnispeed-bowtech-shoes-women.html',
        },
      ],
      offset: '7 mm',
    },
    {
      name: 'ASICS Superblast 2 (Women)',
      price: '~220€',
      description: `Το Superblast 2 είναι σχεδιασμένο για να συμβάλλει στην παροχή της πιο ευέλικτης, ενεργητικής αίσθησης
          σε σύγκριση με άλλα παπούτσια της σειράς αντικραδασμικής προστασίας της ASICS. Η ενδιάμεση σόλα διαθέτει συνδυασμό από
          FF BLAST PLUS ECO και FF TURBO PLUS μαξιλαράκι. Αυτός ο αφρός που χρησιμοποιείται στα αγωνιστικά μοντέλα METASPEED,
          βοηθά στη δημιουργία μιας από τις πιο ελαφριές και εύπλαστες εμπειρίες τρεξίματος.`,
      image: [
        '/images/asics/asics-superblast-2-women-2.jpeg',
        '/images/asics/asics-superblast-2-women.jpeg',
      ],
      links: [
        {
          label: 'ASICS Greece',
          url: 'https://www.asics.com/gb/en-gb/superblast-2/p/1013A142-401.html',
        },
      ],
      weight: '249 γρ.',
      offset: '8 mm',
    },
    {
      name: 'Adidas Adizero Adios Pro 3',
      price: '~280€',
      description: `Τα Adizero Adios Pro 3 είναι τα απόλυτα παπούτσια μακρινών αποστάσεων και βοηθούν τους δρομείς να σπάσουν
          τα προσωπικά τους ρεκόρ. Η ενδιάμεση σόλα αποτελείται από 2 στρώματα ανθεκτικού αφρού Lightstrike Pro που προσφέρει
          απορρόφηση κραδασμών. Τα εξελιγμένα Energyrods 2.0 στην ενδιάμεση σόλα προσφέρουν κορυφαία επιστροφή ενέργειας και
          σταθερότητα. Το 60% των νικητών του World Major Marathon του 2021 φορούσαν τα Adizero Adios Pro 2.`,
      image: [
        '/images/adidas/adidas-adizero-adios-pro-3-wm-1.jpeg',
        '/images/adidas/adidas-adizero-adios-pro-3-wm-2.jpeg',
        '/images/adidas/adidas-adizero-adios-pro-3-wm.jpeg',
      ],
      links: [
        {
          label: 'Adidas Greece',
          url: 'https://www.adidas.gr/adizero-adios-pro-3-shoes/ID3612.html',
        },
      ],
      weight: '230 γρ.',
      offset: '6.5 mm',
    },
    {
      name: 'Altra Vanish Carbon 2',
      price: '~250€',
      description: `Τα Αθλητικά Παπούτσια Altra Vanish Carbon 2 είναι υψηλής ανακούφισης και εξοπλισμένα με πλάκα από
          ανθρακονήματα, προσφέροντας μια μοναδική εμπειρία τρεξίματος με 0mm drop για γρήγορο και φυσικό βηματισμό. Το ύψος
          της σόλας έχει βελτιωθεί με επιπλέον 3mm από αφρό Altra EGO PRO, προσφέροντας ακόμα μεγαλύτερη προστασία και δυναμική
          αίσθηση. Ο σχεδιασμός της επάνω μεριάς είναι μίνιμαλ αλλά ασφαλής, με την Slim FootShape της Altra.`,
      image: [
        '/images/altra/altra-vanish-carbon-2-wm-1.jpeg',
        '/images/altra/altra-vanish-carbon-2-wm-2.jpeg',
        '/images/altra/altra-vanish-carbon-2-wm.jpeg',
      ],
      links: [
        {
          label: 'Altra',
          url: 'https://www.altrarunning.eu/eu/vanish-carbon-2-woman-al0a85pd161.html',
        },
      ],
      offset: '0 mm',
    },
  ];
</script>
