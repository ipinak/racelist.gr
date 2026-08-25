<template>
  <div class="prose-article blog-content max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-3xl text-center text-blue my-6 font-bold">
      Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ; Η Ταχύτητα Πίσω από τους Χρόνους
    </h1>

    <PublishedDate date="2026-08-13" :centered="true" />

    <div class="prose prose-lg max-w-none">
      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold text-blue mt-0 mb-4">Με μια Ματιά</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="mb-2">
              <strong>Θέμα:</strong> Ταχύτητα παγκόσμιων ρεκόρ σε 5χλμ, 10χλμ,
              ημιμαραθώνιο, μαραθώνιο
            </p>
            <p class="mb-2">
              <strong>Αφορμή:</strong> Το ρεκόρ του Jakob Ingebrigtsen στα 5χλμ
              δρόμου
            </p>
          </div>
          <div>
            <p class="mb-2">
              <strong>Μονάδα μέτρησης:</strong> Μέση ταχύτητα σε χλμ/ώρα
            </p>
            <p class="mb-2"><strong>Ενημέρωση:</strong> Αύγουστος 2026</p>
          </div>
        </div>
      </div>

      <p class="text-lg mb-6">
        Όταν βλέπουμε έναν χρόνο σαν <strong>2:00:35</strong> σε μαραθώνιο ή
        <strong>13:15.29</strong> σε 5χλμ δρόμου, είναι δύσκολο να καταλάβουμε
        πραγματικά πόσο γρήγορο είναι. Ο πιο εύκολος τρόπος να το «νιώσουμε»
        είναι να μετατρέψουμε τον χρόνο σε μέση ταχύτητα — πόσα χιλιόμετρα την
        ώρα τρέχει ένας κορυφαίος αθλητής, από την πρώτη μέχρι την τελευταία
        στιγμή του αγώνα. Ας δούμε πώς συγκρίνονται τα σημερινά παγκόσμια ρεκόρ
        στις πιο δημοφιλείς αποστάσεις του δρόμου.
      </p>

      <!-- Ingebrigtsen highlight -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Το Ρεκόρ: Ingebrigtsen στα 5χλμ
      </h2>

      <p class="text-lg mb-4">
        Ο Νορβηγός <strong>Jakob Ingebrigtsen</strong>, ένας από τους
        καλύτερους, γρηγορότερους και πιο ολοκληρωμενους δρομεας της γενιάς του,
        έτρεξε τα <strong>5 χιλιόμετρα δρόμου</strong> σε
        <strong>13:15.29</strong>. Αυτό μεταφράζεται σε μέσο ρυθμό περίπου
        <strong>2:39 ανά χιλιόμετρο</strong>, δηλαδή μέση ταχύτητα γύρω στα
        <strong>22,6 χλμ/ώρα</strong> — για 13 ολόκληρα λεπτά, χωρίς παύση,
        χωρίς αλλαγή ρυθμού. Για σύγκριση, ένας καλά προπονημένος ερασιτέχνης
        δρομέας τρέχει συνήθως 10-12 χλμ/ώρα σε μια προπόνηση αντοχής — ο
        Ingebrigtsen πηγαίνει σχεδόν διπλάσια ταχύτητα, για μεγαλύτερη απόσταση.
      </p>

      <div class="bg-flag/10 border-l-4 border-flag p-6 rounded-lg mb-8">
        <p class="mb-0">
          💡 <strong>Πώς το υπολογίζουμε:</strong> Ταχύτητα (χλμ/ώρα) = Απόσταση
          (χλμ) ÷ Χρόνος (ώρες). Για τα 5χλμ σε 13:15.29, ο χρόνος σε ώρες είναι
          περίπου 0,2209 — άρα 5 ÷ 0,2209 ≈ 22,6 χλμ/ώρα.
        </p>
      </div>

      <!-- Comparison table -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Σύγκριση Ταχύτητας ανά Απόσταση
      </h2>

      <p class="text-lg mb-4">
        Όσο μεγαλώνει η απόσταση, τόσο πέφτει η μέση ταχύτητα, είναι λογικό,
        αφού το σώμα δεν μπορεί να διατηρήσει την ίδια ένταση για ώρες όσο για
        λεπτά. Παρ' όλα αυτά, η πτώση είναι εντυπωσιακά μικρή στην κορυφή του
        αθλήματος.
      </p>

      <div class="overflow-x-auto mb-8">
        <table class="min-w-full bg-paper border border-line">
          <thead class="bg-blue-deep text-white">
            <tr>
              <th class="py-3 px-4 text-left">Απόσταση</th>
              <th class="py-3 px-4 text-left">Ρεκόρ</th>
              <th class="py-3 px-4 text-left">Αθλητής</th>
              <th class="py-3 px-4 text-left">Μέσος Ρυθμός</th>
              <th class="py-3 px-4 text-left">Μέση Ταχύτητα</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-line">
            <tr class="bg-flag/10 font-semibold">
              <td class="py-3 px-4">5 χλμ (δρόμος)</td>
              <td class="py-3 px-4">13:15.29</td>
              <td class="py-3 px-4">Jakob Ingebrigtsen 🇳🇴</td>
              <td class="py-3 px-4">2:39/χλμ</td>
              <td class="py-3 px-4">~22,6 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">10 χλμ (δρόμος)</td>
              <td class="py-3 px-4">26:24</td>
              <td class="py-3 px-4">Yomif Kejelcha 🇪🇹</td>
              <td class="py-3 px-4">2:38/χλμ</td>
              <td class="py-3 px-4">~22,7 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">Ημιμαραθώνιος (21,0975 χλμ)</td>
              <td class="py-3 px-4">56:42</td>
              <td class="py-3 px-4">Jacob Kiplimo 🇺🇬</td>
              <td class="py-3 px-4">2:41/χλμ</td>
              <td class="py-3 px-4">~22,3 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">Μαραθώνιος (42,195 χλμ)</td>
              <td class="py-3 px-4">2:00:35</td>
              <td class="py-3 px-4">Kelvin Kiptum 🇰🇪</td>
              <td class="py-3 px-4">2:52/χλμ</td>
              <td class="py-3 px-4">~21,0 χλμ/ώρα</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-lg mb-4">
        Παρατηρήστε κάτι εντυπωσιακό: από τα 5χλμ μέχρι τον ημιμαραθώνιο, η μέση
        ταχύτητα των κορυφαίων αθλητών πέφτει ελάχιστα — γύρω στο 1-2%. Η
        πραγματική «κατάρρευση» ταχύτητας έρχεται στον μαραθώνιο, όπου η
        απόσταση είναι διπλάσια του ημιμαραθωνίου και το σώμα πρέπει να
        διαχειριστεί ενεργειακά αποθέματα, θερμορύθμιση και μυϊκή κόπωση για
        πάνω από δύο ώρες.
      </p>

      <!-- Women's records -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Και στις Γυναίκες, η Ταχύτητα Εντυπωσιάζει Εξίσου
      </h2>

      <div class="overflow-x-auto mb-8">
        <table class="min-w-full bg-paper border border-line">
          <thead class="bg-blue-deep text-white">
            <tr>
              <th class="py-3 px-4 text-left">Απόσταση</th>
              <th class="py-3 px-4 text-left">Ρεκόρ</th>
              <th class="py-3 px-4 text-left">Αθλήτρια</th>
              <th class="py-3 px-4 text-left">Μέση Ταχύτητα</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-line">
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">5 χλμ (δρόμος)</td>
              <td class="py-3 px-4">14:29</td>
              <td class="py-3 px-4">Beatrice Chebet 🇰🇪</td>
              <td class="py-3 px-4">~20,7 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">10 χλμ (δρόμος)</td>
              <td class="py-3 px-4">28:46</td>
              <td class="py-3 px-4">Agnes Ngetich 🇰🇪</td>
              <td class="py-3 px-4">~20,9 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">Ημιμαραθώνιος</td>
              <td class="py-3 px-4">62:52</td>
              <td class="py-3 px-4">Agnes Ngetich 🇰🇪</td>
              <td class="py-3 px-4">~20,1 χλμ/ώρα</td>
            </tr>
            <tr class="hover:bg-paper-dim">
              <td class="py-3 px-4">Μαραθώνιος</td>
              <td class="py-3 px-4">2:09:56</td>
              <td class="py-3 px-4">Brigid Kosgei 🇰🇪 (Σικάγο 2023)</td>
              <td class="py-3 px-4">~19,5 χλμ/ώρα</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-lg mb-4">
        Η <strong>Brigid Kosgei</strong>, που είδαμε πρόσφατα να θριαμβεύει και
        στον
        <NuxtLink to="/arthra/marathon-tokio-2026/" class="text-blue underline">
          Μαραθώνιο Τόκιο 2026 </NuxtLink
        >, παραμένει σημείο αναφοράς στον γυναικείο μαραθώνιο, διατηρώντας μέση
        ταχύτητα σχεδόν 20 χλμ/ώρα για πάνω από δύο ώρες τρεξίματος.
      </p>

      <!-- Why speed drops -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Γιατί Πέφτει η Ταχύτητα Όσο Μεγαλώνει η Απόσταση;
      </h2>

      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg mb-8">
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <span class="text-blue font-bold text-lg">⚡</span>
            <span>
              <strong>Ενεργειακά συστήματα:</strong> Στα 5-10χλμ, το σώμα
              λειτουργεί κοντά στο ανώτατο όριο πρόσληψης οξυγόνου (VO2max).
              Στον μαραθώνιο, ο οργανισμός πρέπει να «οικονομήσει» ενέργεια για
              ώρες, γι' αυτό ο ρυθμός είναι πιο συντηρητικός.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue font-bold text-lg">🔥</span>
            <span>
              <strong>Καύσιμα:</strong> Τα αποθέματα γλυκογόνου αρκούν για
              περίπου 90-120 λεπτά έντονης προσπάθειας. Στον μαραθώνιο, η
              διαχείριση ενεργειακών γελ και υδατανθράκων γίνεται καθοριστικός
              παράγοντας ταχύτητας.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue font-bold text-lg">🌡️</span>
            <span>
              <strong>Θερμορύθμιση:</strong> Όσο διαρκεί περισσότερο ο αγώνας,
              τόσο πιο πολύ ανεβαίνει η θερμοκρασία σώματος, κάτι που αναγκάζει
              τον αθλητή να μειώσει ελαφρώς την ένταση.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue font-bold text-lg">🦵</span>
            <span>
              <strong>Μυϊκή κόπωση:</strong> Η επαναλαμβανόμενη κρούση στο
              έδαφος για δεκάδες χιλιάδες βήματα προκαλεί σταδιακή μείωση της
              μυϊκής απόδοσης — το γνωστό «τείχος» των μαραθωνοδρόμων γύρω στο
              30-35ό χιλιόμετρο.
            </span>
          </li>
        </ul>
      </div>

      <!-- Evolution over time -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Πόσο Γρήγορα Εξελίσσονται τα Ρεκόρ
      </h2>

      <p class="text-lg mb-4">
        Το εντυπωσιακό δεν είναι μόνο πόσο γρήγορα τρέχουν οι σημερινοί
        πρωταθλητές, αλλά και πόσο γρήγορα «σπάνε» τα ρεκόρ τα τελευταία χρόνια.
        Ο μαραθώνιος είναι χαρακτηριστικό παράδειγμα: από τα 2:03:23 του Wilson
        Kipsang το 2013, φτάσαμε στο 2:00:35 του Kelvin Kiptum το 2023 — μια
        βελτίωση σχεδόν <strong>3 λεπτών</strong> μέσα σε μία δεκαετία, χάρη σε
        συνδυασμό καλύτερης προπόνησης, διατροφής, τεχνολογίας υποδημάτων
        (καρβοφόρα πέλματα) και πιο επιστημονικής οργάνωσης αγώνων-ρεκόρ.
      </p>

      <p class="text-lg mb-4">
        Στα 5χλμ δρόμου, η πρόοδος είναι εξίσου εντυπωσιακή: μέσα σε λίγα χρόνια
        οι κορυφαίοι χρόνοι έπεσαν κατά δεκάδες δευτερόλεπτα, καθώς ολοένα και
        περισσότεροι αθλητές του στίβου (1.500μ, 5.000μ) στρέφονται σε αγώνες
        δρόμου εκτός σταδίου, φέρνοντας μαζί τους ταχύτητα και τεχνική
        πρωτόγνωρη για την απόσταση.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-paper-dim border border-blue/20 p-6 rounded-lg">
          <div class="text-3xl font-bold text-blue mb-2">22,6</div>
          <div class="text-ink/80">χλμ/ώρα στα 5χλμ (Ingebrigtsen)</div>
        </div>
        <div class="bg-paper-dim border border-flag/20 p-6 rounded-lg">
          <div class="text-3xl font-bold text-blue mb-2">21,0</div>
          <div class="text-ink/80">χλμ/ώρα σε ολόκληρο μαραθώνιο (Kiptum)</div>
        </div>
        <div class="bg-paper-dim border border-line p-6 rounded-lg">
          <div class="text-3xl font-bold text-blue mb-2">~2:52</div>
          <div class="text-ink/80">ανά χιλιόμετρο, για 42,195 χλμ</div>
        </div>
      </div>

      <!-- For everyday runners -->
      <h2 class="text-2xl font-bold text-blue mt-8 mb-4">
        Τι Σημαίνει αυτό για τον Ερασιτέχνη Δρομέα;
      </h2>

      <p class="text-lg mb-4">
        Δεν χρειάζεται να τρέχετε 22 χλμ/ώρα για να απολαύσετε το τρέξιμο, αυτοί
        οι χρόνοι είναι το απόλυτο όριο της ανθρώπινης αντοχής. Αλλά η λογική
        πίσω από την πτώση ταχύτητας με την απόσταση ισχύει εξίσου και για εσάς:
        αν τρέχετε 5χλμ σε ρυθμό Χ, ο ρεαλιστικός στόχος για μαραθώνιο είναι
        συνήθως 15-20% πιο αργός ρυθμός, όχι ο ίδιος.
      </p>

      <p class="text-lg mb-4">
        Θέλετε να δείτε τα δικά σας νούμερα; Με τον
        <NuxtLink to="/pace-calculator/" class="text-blue underline"
          >υπολογιστή ρυθμού</NuxtLink
        >
        μπορείτε να βρείτε τον μέσο ρυθμό και τα splits σας ανά χιλιόμετρο, ενώ
        με τον
        <NuxtLink to="/race-time-predictor/" class="text-blue underline"
          >υπολογιστή πρόβλεψης χρόνων</NuxtLink
        >
        (βασισμένο στον τύπο του Riegel) μπορείτε να δείτε τι χρόνο θα
        μπορούσατε ρεαλιστικά να πετύχετε σε 10χλμ, ημιμαραθώνιο ή μαραθώνιο,
        ξεκινώντας από μια πρόσφατη επίδοσή σας.
      </p>

      <div class="bg-paper-dim border-l-4 border-blue p-6 rounded-lg mt-8">
        <h3 class="text-xl font-semibold mb-4">Χρήσιμοι Σύνδεσμοι</h3>
        <div class="space-y-3">
          <a
            href="https://worldathletics.org/records/all-time-toplists"
            target="_blank"
            rel="noopener noreferrer"
            class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
          >
            <div class="font-semibold text-blue">
              🏅 World Athletics – All-Time Records
            </div>
            <div class="text-sm text-grey mt-1">worldathletics.org</div>
          </a>
          <NuxtLink
            to="/arthra/marathon-tokio-2026/"
            class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
          >
            <div class="font-semibold text-blue">
              🏃 Μαραθώνιος Τόκιο 2026 – Αποτελέσματα & Νικητές
            </div>
            <div class="text-sm text-grey mt-1">
              Δείτε πώς τα σημερινά ρεκόρ διαμορφώνονται στην πράξη
            </div>
          </NuxtLink>
          <NuxtLink
            to="/arthra/proetoimasia-gia-marathonio/"
            class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
          >
            <div class="font-semibold text-blue">
              📋 Προετοιμασία για το Αυθεντικό Μαραθώνιο της Αθήνας
            </div>
            <div class="text-sm text-grey mt-1">
              Χτίστε τη δική σας στρατηγική ρυθμού
            </div>
          </NuxtLink>
          <NuxtLink
            to="/pace-calculator/"
            class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
          >
            <div class="font-semibold text-blue">
              ⏱️ Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο
            </div>
            <div class="text-sm text-grey mt-1">
              Δείτε τον μέσο ρυθμό και τα splits σας
            </div>
          </NuxtLink>
          <NuxtLink
            to="/race-time-predictor/"
            class="block p-4 bg-paper rounded-md hover:bg-paper-dim transition-colors border border-line"
          >
            <div class="font-semibold text-blue">
              🎯 Υπολογιστής Πρόβλεψης Χρόνων (Τύπος Riegel)
            </div>
            <div class="text-sm text-grey mt-1">
              Προβλέψτε τον χρόνο σας σε 10χλμ, ημιμαραθώνιο ή μαραθώνιο
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-8 text-center text-grey">
        <p class="text-sm">Τελευταία ενημέρωση: 13 Αυγούστου 2026</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ; | racelist.gr',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/arthra/poso-grigora-pigainoun-ta-pagosmia-rekor/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Πόσο γρήγορα τρέχουν οι κορυφαίοι δρομείς του κόσμου; Ανάλυση ταχύτητας των παγκόσμιων ρεκόρ σε 5χλμ, 10χλμ, ημιμαραθώνιο και μαραθώνιο, με αφορμή το ρεκόρ του Jakob Ingebrigtsen στα 5χλμ.',
      },
      {
        name: 'keywords',
        content:
          'παγκοσμιο ρεκορ, ταχυτητα τρεξιματος, ingebrigtsen, 5km, 10km, ημιμαραθωνιος, μαραθωνιος, χλμ ανα ωρα, ρυθμος τρεξιματος',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ; | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Από τα 22,6 χλμ/ώρα του Ingebrigtsen στα 5χλμ μέχρι τα 21 χλμ/ώρα του Kiptum στον μαραθώνιο — δείτε πώς συγκρίνεται η ταχύτητα των παγκόσμιων ρεκόρ.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        property: 'og:url',
        content:
          'https://racelist.gr/arthra/poso-grigora-pigainoun-ta-pagosmia-rekor/',
      },
      {
        name: 'twitter:title',
        content: 'Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ; | racelist.gr',
      },
      {
        name: 'twitter:description',
        content:
          'Από τα 22,6 χλμ/ώρα του Ingebrigtsen στα 5χλμ μέχρι τα 21 χλμ/ώρα του Kiptum στον μαραθώνιο — δείτε πώς συγκρίνεται η ταχύτητα των παγκόσμιων ρεκόρ.',
      },
    ],
  });

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ;',
      description:
        'Πόσο γρήγορα τρέχουν οι κορυφαίοι δρομείς του κόσμου; Ανάλυση ταχύτητας των παγκόσμιων ρεκόρ σε 5χλμ, 10χλμ, ημιμαραθώνιο και μαραθώνιο, με αφορμή το ρεκόρ του Jakob Ingebrigtsen στα 5χλμ.',
      image: 'https://racelist.gr/racelist-banner.jpg',
      url: 'https://racelist.gr/arthra/poso-grigora-pigainoun-ta-pagosmia-rekor/',
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
      datePublished: '2026-08-13',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Πόσο Γρήγορα Πάνε τα Παγκόσμια Ρεκόρ;',
          item: 'https://racelist.gr/arthra/poso-grigora-pigainoun-ta-pagosmia-rekor/',
        },
      ],
    },
  ]);
</script>

<style scoped>
  .blog-content {
    font-family: 'Inter', system-ui, sans-serif;
  }

  .prose {
    color: #0f1f2e;
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

  .prose a {
    color: #1f5fa8;
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
