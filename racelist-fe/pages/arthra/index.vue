<template>
  <div>
    <h2 class="text-3xl text-center text-[#9BBEC4] my-6">Άρθρα</h2>
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
          class="text-lg font-semibold text-[#9BBEC4] hover:text-[#ff00ff]"
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
    meta: [
      {
        name: 'description',
        content:
          'Διάβασε άρθρα για τρέξιμο, αποθεραπεία, προετοιμασία πριν τον αγώνα και ό,τι αφορά τη ζωή του δρομέα. Συμβουλές, έμπνευση και εμπειρίες από την ομάδα του racelist.gr.',
      },
      {
        name: 'keywords',
        content:
          'άρθρα, τρέξιμο, αποθεραπεία, προπόνηση, διατροφή, δρομείς, ημιμαραθώνιος, προετοιμασία αγώνα, συμβουλές τρεξίματος',
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
      href: '/arthra/o-termatismos-enos-agwna',
    },
    {
      title: '3 Τρόποι Αποθεραπείας από Ημιμαραθώνιο',
      href: '/arthra/3-tropoi-apotherapies-apo-hmimarathonio',
    },
    {
      title: 'Τι τρώμε πριν από έναν αγώνα τρεξίματος',
      href: '/arthra/ti-trwme-prin-enan-agwna-treximatos',
    },
    {
      title:
        'Τι να φας πριν από το τρέξιμο; 4 Ιδέες για ενέργεια & ευχάριστη πέψη',
      href: '/arthra/ti-fame-gia-prwino-prin-tin-proponisi',
    },
  ];
</script>
