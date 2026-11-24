<template>
  <div class="prose-article blog-content max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-center text-blue my-6 font-bold">
      Μαραθώνιος Βαλένθιας 2026: Αποσύρθηκε ο κάτοχος του τίτλου John Korir
    </h1>

    <PublishedDate date="2026-11-26" :centered="true" />

    <div class="prose prose-lg max-w-none">
      <p class="text-lg mb-6">
        Ο Κενυάτης <strong>John Korir</strong> δεν θα λάβει μέρος στον Μαραθώνιο
        της Βαλένθιας στις <strong>6 Δεκεμβρίου</strong>. Οι διοργανωτές
        επιβεβαίωσαν τη Δευτέρα στο Instagram ότι ο κάτοχος του τίτλου
        αποσύρθηκε λόγω τραυματισμού, πράγμα που σημαίνει ότι φέτος θα δούμε νέο
        νικητή στον αγώνα.
      </p>

      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold text-blue mt-0 mb-4">Εν συντομία</h2>
        <ul class="list-disc pl-6 space-y-1">
          <li>
            <strong>Αγώνας:</strong> Μαραθώνιος Βαλένθιας, 6 Δεκεμβρίου 2026
          </li>
          <li>
            <strong>Αποχώρηση:</strong> John Korir (Κένυα), νικητής της
            προηγούμενης διοργάνωσης
          </li>
          <li>
            <strong>Αιτία:</strong> τραυματισμός (δεν έχει γίνει γνωστό ποιος)
          </li>
          <li><strong>Επίσης εκτός:</strong> Yomif Kejelcha (Αιθιοπία)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Η ανακοίνωση των διοργανωτών
      </h2>

      <blockquote class="border-l-4 border-blue pl-4 italic my-6 text-lg">
        «Δυστυχώς, ο νικητής του Μαραθωνίου της Βαλένθιας, John Korir, δεν θα
        μπορέσει να υπερασπιστεί τον τίτλο του το 2026. Το αστέρι της Κένυας
        αποφάσισε να αποσυρθεί από τον αγώνα της 6ης Δεκεμβρίου λόγω
        τραυματισμού.»
      </blockquote>

      <p class="text-lg mb-4">
        Οι διοργανωτές δεν διευκρίνισαν τη φύση του τραυματισμού ούτε έδωσαν
        χρονικό πλαίσιο για την ανάρρωση του αθλητή.
      </p>

      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Δεύτερη μεγάλη απώλεια για τον αγώνα
      </h2>

      <p class="text-lg mb-4">
        Η απόσυρση του Korir έρχεται μετά από εκείνη του Αιθίοπα
        <strong>Yomif Kejelcha</strong>, ο οποίος επίσης αποχώρησε λόγω
        τραυματισμού. Ο Kejelcha είχε τρέξει 1:59:41 στο μαραθώνιο ντεμπούτο του
        στον Μαραθώνιο του Λονδίνου 2026 και θεωρούνταν ένας από τους πιο
        αναμενόμενους συμμετέχοντες στη Βαλένθια.
      </p>

      <p class="text-lg mb-4">
        Με την απουσία και των δύο, το ανδρικό πεδίο είναι λιγότερο συναρπαστικό
        από ό,τι αναμενόταν. Από την άλλη, ο αγώνας θα έχει σίγουρα νέο νικητή
        και η μάχη για την κορυφή μένει ανοιχτή.
      </p>

      <div class="mt-8 text-center text-grey">
        <p class="text-sm">Τελευταία ενημέρωση: 24 Νοεμβρίου 2026</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const title =
    'Μαραθώνιος Βαλένθιας 2026: Αποσύρθηκε ο κάτοχος του τίτλου John Korir';
  const description =
    'Ο John Korir αποσύρθηκε από τον Μαραθώνιο της Βαλένθιας (6 Δεκεμβρίου 2026) λόγω τραυματισμού, μετά την αποχώρηση και του Yomif Kejelcha. Ο αγώνας θα έχει νέο νικητή.';
  const url =
    'https://racelist.gr/arthra/john-korir-valencia-marathon-2026-apoxorisi/';

  useHead({
    title: `${title} | racelist.gr`,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      {
        name: 'keywords',
        content:
          'john korir, yomif kejelcha, μαραθώνιος βαλένθιας, valencia marathon, 2026, τραυματισμός, απόσυρση, μαραθώνιος',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:title', content: `${title} | racelist.gr` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { name: 'twitter:title', content: `${title} | racelist.gr` },
      { name: 'twitter:description', content: description },
    ],
  });

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: 'https://racelist.gr/racelist-banner.jpg',
      url,
      author: {
        '@type': 'Organization',
        name: 'racelist.gr',
        url: 'https://racelist.gr',
      },
      publisher: {
        '@type': 'Organization',
        name: 'racelist.gr',
        url: 'https://racelist.gr',
      },
      datePublished: '2026-11-24',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Αρχική',
          item: 'https://racelist.gr/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Άρθρα',
          item: 'https://racelist.gr/arthra/',
        },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
  ]);
</script>
