<template>
  <div class="blog-content max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-[#0057A0] font-bold mb-6 capitalize">
      Βρες τα καλύτερα παπούτσια για τρέξιμο δρόμου
    </h1>

    <p class="mb-6">
      Η επιλογή του σωστού παπουτσιού για τρέξιμο είναι σχεδόν εξίσου σημαντική
      με την εκγύμναση των μυών σου — γιατί μετά το σώμα σου, τα παπούτσια είναι
      ο πιο κρίσιμος σου σύμμαχος στο τρέξιμο. Ένα καλό ζευγάρι παπούτσια δεν
      προσφέρει απλώς άνεση· παίζει καθοριστικό ρόλο στην πρόληψη τραυματισμών,
      στη βελτίωση της απόδοσης και στη μακροχρόνια απόλαυση του αθλήματος. Είτε
      είσαι έμπειρος δρόμεας είτε ξεκινάς το πρώτο σου couch-to-5K, ένα λάθος
      παπούτσι μπορεί να οδηγήσει σε δυσφορία ειδικά όταν τα χιλιόμετρα
      ανεβαίνουν.
    </p>
    <p class="mb-6">
      Η αγορά παπουτσιών για τρέξιμο σήμερα είναι πιο πλούσια από ποτέ. Από
      μαλακά, απορροφητικά παπούτσια για αποκατάσταση, μέχρι low-profile μοντέλα
      που φέρνουν το πόδι πιο κοντά στο έδαφος για φυσική κίνηση — υπάρχουν
      επιλογές για κάθε τύπο δρομέα. Παπούτσια με ψηλή σόλα (high-stack)
      προσφέρουν περισσότερη απορρόφηση κραδασμών, ενώ εκείνα με carbon πλάκες
      προσφέρουν εκρηκτική αίσθηση πρόωσης, ιδανική για αγώνες. Είτε
      προτεραιότητά σου είναι η στήριξη, η αίσθηση ή η ταχύτητα, η κατανόηση των
      διαφορετικών κατηγοριών θα σε βοηθήσει να βρεις τον δικό σου ρυθμό —
      κυριολεκτικά και μεταφορικά.
    </p>

    <div class="mb-6 mt-12">
      <h2 class="text-3xl text-[#0057A0] font-bold mt-6 capitalize">
        {{ shoes.length }} παπούτσια για οποιοδήποτε δρομέα
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

    <div class="mb-6 mt-12">
      <h2 class="text-3xl text-[#0057A0] font-bold my-6 capitalize">
        Video με review παπουτσιών
      </h2>
      <YoutubeVideo video-id="elH6CAfKcu4" />
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
  import YoutubeVideo from '~/components/YoutubeVideo.vue';

  useHead({
    title: 'Βρες τα καλύτερα παπούτσια για τρέξιμο δρόμου | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://www.racelist.gr/arthra/papoutsia-gia-treximo-dromou/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα παπούτσια για τρέξιμο και ανακάλυψε 13 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        property: 'og:title',
        content: 'Βρες τα καλύτερα παπούτσια για τρέξιμο δρόμου | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα παπούτσια για τρέξιμο και ανακάλυψε 13 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: 'https://racelist.gr/arthra/papoutsia-gia-treximo-dromou/',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Βρες τα καλύτερα παπούτσια για τρέξιμο δρόμου | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Δες πώς να διαλέξεις τα καλύτερα παπούτσια για τρέξιμο και ανακάλυψε 13 επιλογές για κάθε τύπο δρομέα.',
      },
      {
        name: 'twitter:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
      {
        name: 'keywords',
        content:
          'παπούτσια για τρέξιμο, παπούτσια δρόμου, παπούτσια δρομέων, running shoes, carbon παπούτσια, παπούτσια με απορρόφηση κραδασμών, τα καλύτερα παπούτσια για τρέξιμο, review παπουτσιών τρεξίματος, Brooks running shoes, Saucony running, ASICS running shoes, HOKA running shoes, Adidas running shoes, Altra παπούτσια τρεξίματος, Mizuno running shoes, παπούτσια για αγώνες, παπούτσια για προπόνηση, παπούτσια για ημιμαραθώνιο, παπούτσια για αρχάριους δρομείς',
      },
    ],
  });

  const shoes = [
    {
      name: 'Brooks Ghost 16',
      price: '~150€',
      description: `Ομαλή, αξιόπιστη αντικραδασμική προστασία για διαδρομές χωρίς περισπασμούς. Μετατρέψτε τα καθημερινά χιλιόμετρα σε καθημερινές ενδορφίνες με το δημοφιλέστερο Ghost 16 — τώρα με τεχνολογία DNA LOFT V3 nitrogen infused.
  Νομίζετε ότι ξέρετε τα πάντα για το Ghost;`,
      image: '/images/brooks-ghost-16.jpg',
      links: [
        {
          label: 'Brooks Running Greece',
          url: 'https://brooksrunning.gr/product/ghost-16/',
        },
      ],
    },
    {
      name: 'Brooks Glycerin Max',
      price: '~200€',
      description: `Κατάλληλο για αγώνες και προπονήσεις. Σχετικά βαρή παπούτσι με μικρή υψομετρική διαφορα (μεταξύ φτέρνας και μύτης.
        Διαθέτει τεχνολογία αφρού DNA Tuned. Έχει πολύ καλή γεωμετρία λόγω της τεχνολογίας GlideRoll Rocker. Κατασκευασμένο με σκοπό να
        μειωθούν οι τραυματισμοί στο πέλμα.`,
      image: '/images/brooks-glycerin-max.jpg',
      links: [
        {
          label: 'Brooks Running Greece',
          url: 'https://brooksrunning.gr/product/glycerin-max/',
        },
      ],
      weight: '298 γρ.',
      offset: '6 mm',
    },
    {
      name: 'Brooks Hyperion Elite 4 PB',
      price: '250€',
      description: `Κατάλληλο για αγώνες, με πλάκα από ανθρακονήματα (carbon fiber) δίνει μια έξτρα δυναμική όταν τρέχεις.
        Ταυτόχρονα είναι μαλακό και το πάνω μέρος αναπνέει αρκετα καλά λόγω πλέγματος που καλύπτει το πέλμα.
        Σχετικά ελαφρύ και γρήγορο.`,
      image: '/images/brooks-hyperion-elite.jpg',
      links: [
        {
          label: 'Brooks Running Greece',
          url: 'https://brooksrunning.gr/product/hyperion-elite-4-pb/',
        },
      ],
    },
    {
      name: 'Saucony Endorphin Elite 2',
      price: '300€',
      description: `Το Endorphin Elite 2 είναι πολύ ελαφρύ παπούτσι κατάλληλο για αγώνες.
        Διαθέτει τη τεχνολογία SpeedRoll, μαζί με τη αφρώδη τεχνολογία incrediRUN.
        Διαθέτει πλάκα από ανθρακονήματα (carbon fiber), για καλύτερη επιστροφή και μεγαλύτερες ταχύτητες για την ημέρα του αγώνα.
        Πολύ ελαφρύ, αεροδυναμικό άνω μέρος για βελτιωμένη αναπνοή στις μεγάλες αποστάσεις.`,
      image: '/images/saucony-endorphin-2.webp',
      links: [
        {
          label: 'Saucony Greece',
          url: 'https://saucony.veto.gr/men/shoes/running/saucony-endorphin-elite-2-s30994-130/',
        },
      ],
      weight: '199 γρ.',
      offset: '8 mm',
    },
    {
      name: 'Saucony Triumph 22',
      price: '~150€',
      description: `Το τελευταίο Triumph 22, το οποιο συνεχίζει στα βήματα των προηγούμενων. Σταθερό και ανθεκτικό παπούτσι για κάθε διαδρομή, ιδανικό για
        προπονήσεις. Σε γενικές γραμμές αρκετά βαρή σε σχέση με τα υπόλοιπα.`,
      image: '/images/saucony-triumph-22.webp',
      links: [
        {
          label: 'Saucony Greece',
          url: 'https://saucony.veto.gr/men/shoes/running/saucony-triumph-22-mens-shoes-s20964-144/',
        },
      ],
      weight: '286 γρ.',
      offset: '10 mm',
    },
    {
      name: 'Saucony Kinvara Pro',
      price: '~140€',
      description: `Πολύ καλό καθημερινό παπούτσι για τις προπονήσεις και αγώνες. Δεν είναι ούτε βαρή ούτε ελαφρύ, με 8 mm υψομετρική διαφορά μεταξυ φτέρνας και
        μύτης του ποδιού. Διαθέτει αντικραδασμική προστασία και πλάκα από ανθρακονήματα (carbon fiber) για έξτρα ταχύτητα.`,
      image: '/images/saucony-kimvara-pro.webp',
      links: [
        {
          label: 'Saucony Greece',
          url: 'https://saucony.veto.gr/men/shoes/running/saucony-kinvara-pro-andrika-papoytsia/',
        },
      ],
      weight: '269 γρ.',
      offset: '8 mm',
    },
    {
      name: 'ASICS METASPEED EDGE PARIS',
      price: '~250€',
      description: `Τα METASPEED EDGE PARIS είναι αγωνιστικά παπούτσια σχεδιασμένα για δρομείς που βασίζονται
        στον ρυθμό τους και επιδιώκουν σταθερή απόδοση σε όλη τη διάρκεια του αγώνα. Η σχεδίαση τους στοχεύει
        στη βελτιστοποίηση του διασκελισμού, ενισχύοντας τον ρυθμό μέσα από αυξημένα βήματα και πιο αποδοτική
        χρήση της ενέργειας. Ο αφρός στην ενδιάμεση σόλα, σε συνδυασμό με την πλάκα άνθρακα, συμβάλλει στη
        διατήρηση του ρυθμού ακόμη και στα τελευταία χιλιόμετρα, βοηθώντας τους δρομείς να αντιμετωπίσουν
        ευκολότερα την πρόκληση τις μεγάλες αποστάσεις.`,
      image: '/images/asics-metaspeed-paris.webp',
      links: [
        {
          label: 'ASICS',
          url: 'https://www.asics.com/de/en-de/metaspeed-edge-paris/p/1013A124-400.html',
        },
      ],
      weight: '185 γρ.',
      offset: '5 mm',
    },
    {
      name: 'ASICS Superblast 2',
      price: '~220€',
      description: `Το SUPERBLAST™ είναι παπούτσι για τρέξιμο με έμφαση στην υψηλή αντικραδασμική προστασία,
        προσφέροντας άνεση και απόκριση σε κάθε βήμα. Η ενδιάμεση σόλα συνδυάζει τα υλικά FF BLAST™ PLUS ECO και
        FF TURBO™ PLUS, με στόχο πιο μαλακή και ελαφριά αίσθηση σε σχέση με προηγούμενες εκδόσεις. Η εξωτερική
        σόλα, εμπνευσμένη από την κίνηση τραμπολίνου, συμβάλλει σε μια αίσθηση ελαστικότητας κατά το πάτημα.
        Το μοντέλο αυτό απευθύνεται σε δρομείς που επιθυμούν ένα παπούτσι με υψηλά επίπεδα απορρόφησης κραδασμών
        και ευελιξίας για μεγαλύτερες αποστάσεις ή πιο απαιτητικές προπονήσεις.`,
      image: '/images/asics-superblast-2.webp',
      links: [
        {
          label: 'ASICS',
          url: 'https://www.asics.com/gb/en-gb/superblast-2/p/1013A142-400.html',
        },
      ],
      weight: '249 γρ.',
      offset: '8 mm',
    },
    {
      name: 'ASICS Novablast 5',
      price: '~150€',
      description: `Το NOVABLAST™ 5 είναι παπούτσι για τρέξιμο που δίνει έμφαση στην αίσθηση ελαστικότητας
        και στην αποδοτική επιστροφή ενέργειας. Η νέα έκδοση είναι πιο ελαφριά από την προηγούμενη και προσφέρει
        μεγαλύτερη απόκριση, καθιστώντας το κατάλληλο για δρομείς που αναζητούν δυναμική αίσθηση κατά την προπόνηση.
        Χάρη στον σχεδιασμό της ενδιάμεσης σόλας, κάθε βήμα συνοδεύεται από μια αίσθηση «αναπήδησης» που ενισχύει
        τη ροή της κίνησης.`,
      image: '/images/asics-novablast-5.webp',
      links: [
        {
          label: 'ASICS',
          url: 'https://www.asics.com/gb/en-gb/novablast-5-lite-show/p/1011C032-750.html',
        },
      ],
      weight: '260 γρ.',
      offset: '8 mm',
    },
    {
      name: 'Altra Experience Flow',
      price: '~140€',
      description: `Ελαφρύ παπούτσι με φαρδύ μπροστινό πέλμα για μεγαλύτερο άνεση. Σταθερό και δεν γλιστράει,
        το πέλμα αναπνέει καλά αφου τα πλαινο έχουν ένα δίχτυ. Γενικά είναι αρκετά οικονομικό για την ποιότητα του.`,
      image: '/images/altra-experience-flow.avif',
      links: [
        {
          label: 'Altra',
          url: 'https://www.altrarunning.eu/eu/experience-flow-man-al0a85nv440.html',
        },
      ],
      weight: '238 γρ.',
      offset: '4 mm',
    },
    {
      name: 'Adizero Boston 12',
      price: '~160€',
      description: `Τα Adizero Boston 12 είναι παπούτσια σχεδιασμένα για προπονήσεις μεσαίων και μεγάλων αποστάσεων.
        Ενσωματώνουν την τεχνολογία ENERGYRODS 2.0 με ίνες γυαλιού, η οποία στοχεύει στη βελτίωση της ώθησης και στη
        μείωση απώλειας ενέργειας κατά τη διάρκεια του τρεξίματος. Η ενδιάμεση σόλα συνδυάζει το υλικό LIGHTSTRIKE PRO
        για αποτελεσματική απορρόφηση κραδασμών με το πιο ανθεκτικό LIGHTSTRIKE 2.0 EVA, προσφέροντας ισορροπία μεταξύ
        απόκρισης και αντοχής.`,
      image: '/images/adizero-boston-12.avif',
      links: [
        {
          label: 'Adidas Greece',
          url: 'https://www.adidas.gr/adizero-boston-12-shoes/JI4475.html',
        },
      ],
      weight: '280 γρ.',
      offset: '7 mm',
    },
    {
      name: 'Clifton 9',
      price: '~150€',
      description: `Το Clifton 9 είναι η ένατη έκδοση της σειράς και έχει υποστεί αλλαγές με στόχο τη βελτίωση της
        συνολικής εμπειρίας για τον δρομέα. Είναι ελαφρύτερο από το προηγούμενο μοντέλο, ενώ το ύψος της σόλας έχει
        αυξηθεί κατά 3 χιλιοστά. Ο νέος αφρός στην ενδιάμεση σόλα προσφέρει μεγαλύτερη απόκριση, ενώ η εξωτερική σόλα
        έχει επανασχεδιαστεί για καλύτερη απόδοση. Το επάνω μέρος έχει απλοποιηθεί, αφαιρώντας επικαλύψεις και θερμοκολλήσεις,
        και περιλαμβάνει βελούδινο κολάρο στη φτέρνα, ανακλαστικό στοιχείο και νέα γλώσσα με πλευρική ενίσχυση για πιο
        σταθερή εφαρμογή.`,
      image: '/images/hoka-clifton-9.webp',
      links: [
        {
          label: 'HOKA Greece',
          url: 'https://www.hoka.com/en/gr/men-road/clifton-9/1127895.html',
        },
      ],
      weight: '248 γρ.',
      offset: '5 mm',
    },
    {
      name: 'Mizuno Wave Rebellion Pro 3',
      price: '~240€',
      description: `Το Mizuno Wave Rebellion Pro 3 είναι ένα αγωνιστικό παπούτσι που απευθύνεται σε δρομείς με στόχο
        τις υψηλές επιδόσεις. Ενσωματώνει carbon plate για βελτιωμένη ώθηση και ενεργειακή απόδοση, ενώ αξιοποιεί
        σύγχρονες τεχνολογίες σχεδίασης ώστε να προσφέρει στήριξη και ανταπόκριση σε γρήγορους ρυθμούς. Κατάλληλο για
        αθλητές που συμμετέχουν σε αγώνες και αναζητούν ένα παπούτσι με έμφαση στην ταχύτητα και την αποδοτικότητα.`,
      image: '/images/mizuno-wave-rebellion-pro-3.jpg',
      links: [
        {
          label: 'MZN Hellas',
          url: 'https://www.mzn.gr/el-gr/papoutsia/wave-rebellion-pro-3-1250595',
        },
      ],
      weight: '225 γρ.',
      offset: '4 mm',
    },
  ];

  const videos = [
    'qMfTkhupf0E',
    'NiDiUEVjx3A',
    'uBJppG8J84Q',
    'QnlOJFTfOFs',
    'jcqEwm9xMvc',
  ];
</script>
