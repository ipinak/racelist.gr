<template>
  <div>
    <h1 class="text-3xl text-center text-[#0057A0] my-6">Άρθρα</h1>
    <p class="text-gray-700 text-center max-w-3xl mx-auto mb-8 px-4">
      Ανακαλύψτε χρήσιμα άρθρα για το τρέξιμο, την προπόνηση και τη διατροφή.
      Από συμβουλές για αρχάριους μέχρι προχωρημένες τεχνικές προπόνησης, εδώ θα
      βρείτε όλες τις πληροφορίες που χρειάζεστε για να βελτιώσετε την απόδοσή
      σας και να απολαύσετε περισσότερο το τρέξιμο.
    </p>
    <ul
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 list-none p-0"
    >
      <li
        v-for="article in articles"
        :key="article.href"
        class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition"
      >
        <NuxtLink
          :to="article.href"
          class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60 capitalize"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  useHead({
    title: 'Άρθρα για Τρέξιμο & Προπόνηση | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/arthra/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Διάβασε άρθρα για τρέξιμο, αποθεραπεία, παπούτσια, προετοιμασία πριν τον αγώνα και ό,τι αφορά τη ζωή του δρομέα. Συμβουλές, έμπνευση και εμπειρίες από την ομάδα του racelist.gr.',
      },
      {
        name: 'keywords',
        content:
          'άρθρα, τρέξιμο, αποθεραπεία, προπόνηση, διατροφή, δρομείς, ημιμαραθώνιος, προετοιμασία αγώνα, συμβουλές τρεξίματος, παπούτσια',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Άρθρα για Τρέξιμο & Προπόνηση | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Μπες στον κόσμο του τρεξίματος με άρθρα για προπόνηση, αποθεραπεία και έμπνευση για τον επόμενο σου αγώνα!',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/arthra',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const articles = [
    {
      title: 'Ο Τερματισμός Ενός Αγώνα',
      href: '/arthra/o-termatismos-enos-agwna/',
    },
    {
      title: '3 Τρόποι Αποθεραπείας από Ημιμαραθώνιο',
      href: '/arthra/3-tropoi-apotherapies-apo-hmimarathonio/',
    },
    {
      title: 'Τι τρώμε πριν από έναν αγώνα τρεξίματος',
      href: '/arthra/ti-trwme-prin-enan-agwna-treximatos/',
    },
    {
      title:
        'Τι να φας πριν από το τρέξιμο; 4 Ιδέες για ενέργεια & ευχάριστη πέψη',
      href: '/arthra/ti-fame-gia-prwino-prin-tin-proponisi/',
    },
    {
      title: 'Βρες τα καλύτερα παπούτσια για τρέξιμο δρόμου',
      href: '/arthra/papoutsia-gia-treximo-dromou/',
    },
    {
      title: 'Ενεργειακά Gel Για Την Προπόνηση ή Τον Αγώνα Σου!',
      href: '/arthra/energeiaka-gel-gia-treximo-podilasia/',
    },
    {
      title: 'Τα πιο γνωστά προβλήματα των δρομέων',
      href: '/arthra/ta-pio-gnwsto-problimata-dromewn/',
    },
    {
      title: 'Καρδιακός Παλμός στο Τρέξιμο',
      href: '/arthra/kardiakos-palmos-sto-treximo/',
    },
    {
      title: 'Πώς να βρείτε χρόνο για τρέξιμο',
      href: '/arthra/pws-na-vreis-xrono-gia-treximo/',
    },
    {
      title: 'Nike Running Shoes',
      href: '/arthra/nike-running-shoes/',
    },
    {
      title: 'Οφέλη Από Το Τρέξιμο',
      href: '/arthra/ofeli-treximatos/',
    },
    {
      title: 'Adidas Running Shoes',
      href: '/arthra/adidas-running-shoes/',
    },
    {
      title: 'Smartwatches για Δρομείς και Ποδηλάτες',
      href: '/arthra/smartwatches-gia-dromeis-kai-podilates/',
    },
    {
      title: 'Suunto Peak 9 Pro',
      href: '/arthra/suunto-peak-9-pro/',
    },
    {
      title: 'Garmin Fenix 8',
      href: '/arthra/garmin-fenix-8/',
    },
  ];
</script>
