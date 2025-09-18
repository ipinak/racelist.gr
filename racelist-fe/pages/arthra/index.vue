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
      <ArticleComponent
        v-for="(article, index) in articles"
        :key="article.href"
        :article="article"
        :latest="index === 0"
      />
    </ul>
  </div>
</template>

<script setup>
  const { articles } = useArticles();

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
</script>
