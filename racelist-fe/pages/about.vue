<template>
  <div>
    <h1 class="text-3xl text-center text-[#0057A0] my-6">Σχετικά με εμάς</h1>
    <div
      class="faq-container max-w-3xl mx-auto bg-[#f4f4f4] p-6 rounded-lg leading-7"
    >
      <p class="mb-4">
        Όταν δεν γράφουμε κώδικα, τρέχουμε... στους δρόμους, στα βουνά, παντού!
        Γιατί όπως κάθε γραμμή κώδικα μας φέρνει πιο κοντά στη λύση, κάθε βήμα
        μας φέρνει πιο κοντά στον στόχο. Προγραμματισμός και τρέξιμο: δύο τρόποι
        να ξεπερνάμε τα όριά μας.
      </p>
      <p class="mb-2">👉 Για το τρέξιμο, θα μας βρείτε εδώ.</p>
      <p class="mb-2">
        👉 Για τον προγραμματισμό, στο
        <a
          href="https://www.techpals.eu/?utm_source=racelist.gr&utm_content=footer&utm_medium=referral"
          class="text-[#0057A0] hover:text-[#0057A0]/60 font-semibold"
          target="_blank"
        >
          techpals </a
        >.
      </p>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Σχετικά με εμάς | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/about/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Γνωρίστε την ομάδα πίσω από το racelist.gr — ανθρώπους που τρέχουν με πάθος και γράφουν κώδικα με ενθουσιασμό. Running + coding = ζωή!',
      },
      {
        name: 'keywords',
        content:
          'σχετικά με εμάς, racelist, ομάδα, προγραμματισμός, τρέξιμο, techpals, δρόμοι, βουνά, δρομείς',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Σχετικά με εμάς | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Μάθε ποιοι είμαστε πίσω από το racelist.gr. Είμαστε δρομείς και προγραμματιστές, που αγαπάμε τόσο το τρέξιμο όσο και την τεχνολογία.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/about',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });
</script>
