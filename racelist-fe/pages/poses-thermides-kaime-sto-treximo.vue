<template>
  <div class="max-w-4xl mx-auto px-4 py-6 md:py-8">
    <nav aria-label="breadcrumb" class="text-sm text-grey mb-4">
      <ol class="flex flex-wrap items-center gap-1">
        <li><NuxtLink to="/" class="hover:text-blue-deep underline">Αρχική</NuxtLink></li>
        <li aria-hidden="true">›</li>
        <li>
          <NuxtLink to="/tools-for-runners/" class="hover:text-blue-deep underline">
            Εργαλεία για δρομείς
          </NuxtLink>
        </li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" class="text-ink">Θερμίδες τρεξίματος</li>
      </ol>
    </nav>

    <h1 class="font-display text-3xl md:text-4xl text-blue font-bold mb-3">
      Πόσες θερμίδες καίμε στο τρέξιμο;
    </h1>
    <p class="text-grey mb-6 md:text-lg">
      Βάλε το βάρος σου, την απόσταση και τον χρόνο, και δες αμέσως πόσες
      θερμίδες έκαψες. Δωρεάν υπολογιστής, χωρίς εγγραφή.
    </p>

    <section
      aria-labelledby="calc-title"
      class="grid gap-4 md:grid-cols-2 md:gap-6 mb-10"
    >
      <h2 id="calc-title" class="sr-only">Υπολογιστής θερμίδων τρεξίματος</h2>

      <form
        class="bg-paper border border-line rounded-xl p-5 space-y-4 shadow-sm"
        @submit.prevent
        @input="onFirstInput"
      >
        <div>
          <label for="weight" class="block font-medium mb-1">Βάρος (kg)</label>
          <input
            id="weight"
            v-model.number="weight"
            type="number"
            inputmode="decimal"
            min="30"
            max="200"
            step="0.5"
            class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
          />
        </div>

        <div>
          <label for="distance" class="block font-medium mb-1">Απόσταση (km)</label>
          <input
            id="distance"
            v-model.number="distance"
            type="number"
            inputmode="decimal"
            min="0"
            step="0.1"
            class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
          />
          <div class="flex flex-wrap gap-2 mt-2">
            <button
              v-for="preset in distancePresets"
              :key="preset.km"
              type="button"
              class="px-3 py-1.5 text-sm rounded-full border transition-colors"
              :class="
                distance === preset.km
                  ? 'bg-blue-deep text-paper border-blue-deep'
                  : 'border-line text-ink hover:border-blue'
              "
              @click="distance = preset.km; onFirstInput()"
            >
              {{ preset.label }}
            </button>
          </div>
        </div>

        <fieldset>
          <legend class="block font-medium mb-1">Χρόνος</legend>
          <div class="grid grid-cols-2 gap-2">
            <label class="block">
              <span class="sr-only">Ώρες</span>
              <input
                v-model.number="hours"
                type="number"
                inputmode="numeric"
                min="0"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
              <span class="text-xs text-grey">ώρες</span>
            </label>
            <label class="block">
              <span class="sr-only">Λεπτά</span>
              <input
                v-model.number="minutes"
                type="number"
                inputmode="numeric"
                min="0"
                max="59"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
              <span class="text-xs text-grey">λεπτά</span>
            </label>
          </div>
        </fieldset>

        <div>
          <label for="elevation" class="block font-medium mb-1">
            Θετική υψομετρική (m)
            <span class="font-normal text-grey text-sm">· προαιρετικό</span>
          </label>
          <input
            id="elevation"
            v-model.number="elevation"
            type="number"
            inputmode="numeric"
            min="0"
            step="10"
            placeholder="π.χ. 300 για ανηφορικό / trail"
            class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
          />
        </div>
      </form>

      <div
        class="bg-blue-deep text-paper rounded-xl p-5 md:p-6 flex flex-col"
        aria-live="polite"
      >
        <template v-if="result">
          <p class="font-mono text-xs uppercase tracking-wider text-sky mb-1">
            Έκαψες περίπου
          </p>
          <p class="font-display font-bold leading-none mb-1">
            <span class="text-6xl">{{ formatNumber(result.total) }}</span>
            <span class="text-2xl ml-1">kcal</span>
          </p>
          <p class="text-sm text-paper/70 mb-5">
            εκ των οποίων ~{{ formatNumber(result.net) }} kcal οφείλονται
            αποκλειστικά στο τρέξιμο
          </p>

          <dl class="grid grid-cols-3 gap-2 text-center mb-5">
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">ανά km</dt>
              <dd class="font-display text-lg font-semibold">
                {{ formatNumber(result.perKm) }}
              </dd>
            </div>
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">ανά ώρα</dt>
              <dd class="font-display text-lg font-semibold">
                {{ formatNumber(result.perHour) }}
              </dd>
            </div>
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">ρυθμός</dt>
              <dd class="font-display text-lg font-semibold">
                {{ result.pace }}
              </dd>
            </div>
          </dl>

          <p class="text-sm text-paper/80 mb-1">Αυτό αντιστοιχεί σε περίπου:</p>
          <ul class="text-sm space-y-0.5 mb-5">
            <li v-for="item in equivalents" :key="item.label">
              <strong>{{ item.count }}</strong> {{ item.label }}
            </li>
          </ul>

          <p v-if="result.slow" class="text-xs text-paper/70 mb-4">
            Σε ρυθμό πιο αργό από 7:30/km (γρήγορο περπάτημα) η εκτίμηση
            μπορεί να είναι λίγο αυξημένη.
          </p>

          <div class="mt-auto pt-2 border-t border-white/15">
            <p class="text-sm text-paper/80 my-3">
              Κάψε τις επόμενες θερμίδες σε αγώνα. Δες όλους τους αγώνες δρόμου
              και βουνού στην Ελλάδα.
            </p>
            <NuxtLink
              to="/agwnes/"
              class="block text-center bg-flag text-ink rounded-full font-semibold px-6 py-3 hover:bg-paper transition-colors"
              @click="trackCta"
            >
              Βρες τον επόμενο αγώνα →
            </NuxtLink>
          </div>
        </template>
        <p v-else class="text-paper/80 my-auto text-center">
          Συμπλήρωσε βάρος, απόσταση και χρόνο για να δεις τις θερμίδες σου.
        </p>
      </div>
    </section>

    <article class="space-y-8 leading-relaxed">
      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πόσες θερμίδες καίει το τρέξιμο: η σύντομη απάντηση
        </h2>
        <p class="mb-3">
          Ένας κανόνας που ισχύει για τους περισσότερους δρομείς:
          <strong>καίμε περίπου 1 θερμίδα ανά κιλό σωματικού βάρους για κάθε
          χιλιόμετρο τρεξίματος.</strong>
          Ένας δρομέας 70 κιλών καίει δηλαδή γύρω στις 70-80 θερμίδες ανά
          χιλιόμετρο, περίπου 400 θερμίδες σε ένα 5άρι και περίπου 770 θερμίδες
          σε ένα 10άρι.
        </p>
        <p>
          Το βάρος και η απόσταση μετράνε περισσότερο από όλα. Η ταχύτητα
          αλλάζει πόσες θερμίδες καις <em>ανά ώρα</em>, αλλά ελάχιστα πόσες
          καις <em>ανά χιλιόμετρο</em>. Όσο πιο γρήγορα τρέχεις, τόσο νωρίτερα
          τελειώνεις, οπότε το σύνολο βγαίνει σχεδόν ίδιο.
        </p>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πίνακας θερμίδων ανά απόσταση και βάρος
        </h2>
        <p class="mb-3 text-sm text-grey">
          Συνολικές θερμίδες (kcal) με ρυθμό 6:00/km σε επίπεδο έδαφος.
        </p>
        <div class="overflow-x-auto -mx-4 px-4">
          <table class="w-full min-w-[320px] text-sm border-collapse">
            <thead>
              <tr class="bg-paper-dim text-left">
                <th scope="col" class="p-2 font-semibold">Βάρος</th>
                <th
                  v-for="d in tableDistances"
                  :key="d.km"
                  scope="col"
                  class="p-2 font-semibold text-right"
                >
                  {{ d.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in referenceTable"
                :key="row.weight"
                class="border-b border-line"
              >
                <th scope="row" class="p-2 text-left font-medium">
                  {{ row.weight }} kg
                </th>
                <td
                  v-for="(kcal, i) in row.values"
                  :key="i"
                  class="p-2 text-right font-mono"
                >
                  {{ formatNumber(kcal) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πώς υπολογίζουμε τις θερμίδες
        </h2>
        <p class="mb-3">
          Ο υπολογιστής χρησιμοποιεί την <strong>εξίσωση τρεξίματος του ACSM</strong>
          (American College of Sports Medicine). Η εξίσωση εκτιμά την
          κατανάλωση οξυγόνου από την ταχύτητα και την κλίση και τη μετατρέπει
          σε θερμίδες (περίπου 5 kcal ανά λίτρο οξυγόνου):
        </p>
        <div class="bg-paper-dim rounded-lg p-4 font-mono text-sm mb-3 overflow-x-auto">
          VO₂ = 0,2 × ταχύτητα + 0,9 × ταχύτητα × κλίση + 3,5
        </div>
        <p class="mb-3">
          Η ταχύτητα μετριέται σε μέτρα/λεπτό και το VO₂ σε ml/kg/λεπτό. Το
          σταθερό 3,5 είναι ο μεταβολισμός ηρεμίας, δηλαδή οι θερμίδες που θα
          έκαιγες ούτως ή άλλως. Γι' αυτό σου δείχνουμε δύο νούμερα: τις
          <strong>συνολικές</strong> θερμίδες, που είναι αυτό που δείχνουν τα
          περισσότερα ρολόγια, και τις <strong>καθαρές</strong> θερμίδες που
          οφείλονται μόνο στο τρέξιμο.
        </p>
        <h3 class="font-display text-lg font-semibold mt-5 mb-2">
          Τι επηρεάζει τις θερμίδες που καις
        </h3>
        <ul class="list-disc ml-6 space-y-1">
          <li>
            <strong>Βάρος:</strong> ένας δρομέας 90 κιλών καίει περίπου 30%
            περισσότερο από έναν δρομέα 70 κιλών στην ίδια διαδρομή.
          </li>
          <li>
            <strong>Απόσταση:</strong> είναι ο σημαντικότερος παράγοντας μαζί με
            το βάρος.
          </li>
          <li>
            <strong>Ανηφόρα:</strong> κάθε 100 μέτρα θετικής υψομετρικής
            προσθέτουν περίπου 30 kcal για δρομέα 70 κιλών. Γι' αυτό οι αγώνες
            βουνού «καίνε» πολύ περισσότερο από έναν αγώνα δρόμου ίδιας
            απόστασης.
          </li>
          <li>
            <strong>Ταχύτητα:</strong> αυξάνει τις θερμίδες ανά ώρα, όχι ανά
            χιλιόμετρο.
          </li>
          <li>
            <strong>Φυσική κατάσταση και τεχνική:</strong> οι έμπειροι δρομείς
            είναι πιο οικονομικοί και μπορεί να καίνε 5-10% λιγότερο.
          </li>
        </ul>
        <p class="mt-3">
          Αν θέλεις πιο εξατομικευμένη εικόνα της έντασης, δες τον οδηγό μας για
          τον
          <NuxtLink to="/arthra/kardiakos-palmos-sto-treximo/" class="underline hover:text-blue-deep">
            καρδιακό παλμό στο τρέξιμο
          </NuxtLink>.
        </p>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Συχνές ερωτήσεις
        </h2>
        <div class="divide-y divide-line border-y border-line">
          <details v-for="item in faq" :key="item.q" class="group py-3">
            <summary
              class="cursor-pointer list-none flex justify-between items-start gap-4 font-medium"
            >
              <h3 class="text-base">{{ item.q }}</h3>
              <span
                class="text-blue text-xl leading-none transition-transform group-open:rotate-45"
                aria-hidden="true"
              >+</span>
            </summary>
            <p class="mt-2 text-ink/90">{{ item.a }}</p>
          </details>
        </div>
      </section>

      <section class="border-t border-line pt-6">
        <h2 class="font-display text-xl font-semibold text-blue mb-3">
          Συνέχισε με
        </h2>
        <ul class="grid gap-2 sm:grid-cols-2">
          <li v-for="link in relatedLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block border border-line rounded-lg p-3 hover:border-blue transition-colors"
            >
              <span class="font-medium text-ink">{{ link.title }}</span>
              <span class="block text-sm text-grey">{{ link.description }}</span>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';

  const pageUrl = 'https://racelist.gr/poses-thermides-kaime-sto-treximo/';
  const pageTitle =
    'Πόσες Θερμίδες Καίμε στο Τρέξιμο; Δωρεάν Υπολογιστής | racelist.gr';
  const pageDescription =
    'Υπολόγισε αμέσως πόσες θερμίδες καις στο τρέξιμο με βάση το βάρος, την απόσταση, τον χρόνο και την ανηφόρα. Δωρεάν, χωρίς εγγραφή, με πίνακα για 5K έως μαραθώνιο.';

  const weight = ref(70);
  const distance = ref(5);
  const hours = ref(0);
  const minutes = ref(30);
  const elevation = ref(null);

  const distancePresets = [
    { km: 5, label: '5K' },
    { km: 10, label: '10K' },
    { km: 21.1, label: 'Ημιμαραθώνιος' },
    { km: 42.2, label: 'Μαραθώνιος' },
  ];

  // ACSM running equation: VO2 (ml/kg/min) = 0.2·v + 0.9·v·grade + 3.5,
  // with v in m/min. Integrated over the run, v·t is the distance and
  // v·t·grade is the elevation gain. ~5 kcal per litre of O2.
  function estimateCalories(kg, km, totalMinutes, gainMeters = 0) {
    const meters = km * 1000;
    const netVo2 = 0.2 * meters + 0.9 * gainMeters;
    const restingVo2 = 3.5 * totalMinutes;
    return {
      total: ((netVo2 + restingVo2) * kg * 5) / 1000,
      net: (netVo2 * kg * 5) / 1000,
    };
  }

  const result = computed(() => {
    const kg = Number(weight.value);
    const km = Number(distance.value);
    const totalMinutes = Number(hours.value || 0) * 60 + Number(minutes.value || 0);
    const gain = Math.max(0, Number(elevation.value) || 0);

    if (!(kg >= 30 && kg <= 250) || !(km > 0) || !(totalMinutes > 0)) {
      return null;
    }

    const { total, net } = estimateCalories(kg, km, totalMinutes, gain);
    const paceSeconds = (totalMinutes * 60) / km;

    return {
      total,
      net,
      perKm: total / km,
      perHour: (total / totalMinutes) * 60,
      pace: `${Math.floor(paceSeconds / 60)}:${String(Math.round(paceSeconds % 60)).padStart(2, '0')}`,
      slow: paceSeconds > 450,
    };
  });

  const equivalents = computed(() => {
    if (!result.value) return [];
    const kcal = result.value.total;
    return [
      { count: Math.round(kcal / 105), label: 'μπανάνες' },
      { count: Math.round(kcal / 100), label: 'ενεργειακά gel' },
      { count: (kcal / 550).toFixed(1).replace('.', ','), label: 'πίτες γύρο' },
    ];
  });

  const tableDistances = [
    { km: 5, label: '5K' },
    { km: 10, label: '10K' },
    { km: 21.1, label: '21,1K' },
    { km: 42.2, label: '42,2K' },
  ];
  const referenceTable = [55, 65, 75, 85, 95].map((kg) => ({
    weight: kg,
    values: tableDistances.map((d) => estimateCalories(kg, d.km, d.km * 6).total),
  }));

  function formatNumber(value) {
    return Math.round(value).toLocaleString('el-GR');
  }

  const { triggerEvent } = useAnalytics();
  let tracked = false;
  function onFirstInput() {
    if (tracked) return;
    tracked = true;
    triggerEvent('calorie_calculator_used');
  }
  function trackCta() {
    triggerEvent('calorie_calculator_cta_click', { destination: '/agwnes/' });
  }

  const faq = [
    {
      q: 'Πόσες θερμίδες καίμε σε 30 λεπτά τρέξιμο;',
      a: 'Ένας δρομέας 70 κιλών που τρέχει 30 λεπτά με ρυθμό 6:00/km (5 χιλιόμετρα) καίει περίπου 390 θερμίδες. Με ρυθμό 5:00/km (6 χιλιόμετρα) καίει περίπου 460. Όσο περισσότερο ζυγίζεις και όσο περισσότερα χιλιόμετρα καλύπτεις, τόσο αυξάνονται οι θερμίδες.',
    },
    {
      q: 'Πόσες θερμίδες καίει 1 χιλιόμετρο τρέξιμο;',
      a: 'Περίπου 1 θερμίδα ανά κιλό σωματικού βάρους. Ένας δρομέας 60 κιλών καίει περίπου 60-70 θερμίδες ανά χιλιόμετρο και ένας δρομέας 80 κιλών περίπου 80-90.',
    },
    {
      q: 'Καίμε περισσότερες θερμίδες αν τρέχουμε πιο γρήγορα;',
      a: 'Ανά ώρα ναι, ανά χιλιόμετρο σχεδόν όχι. Τρέχοντας πιο γρήγορα καις περισσότερες θερμίδες κάθε λεπτό, αλλά τελειώνεις και νωρίτερα, οπότε για την ίδια απόσταση το σύνολο είναι σχεδόν ίδιο.',
    },
    {
      q: 'Τρέξιμο ή περπάτημα: τι καίει περισσότερες θερμίδες;',
      a: 'Για την ίδια απόσταση, το τρέξιμο καίει περίπου διπλάσιες καθαρές θερμίδες από το περπάτημα σε επίπεδο έδαφος. Επειδή είναι και πιο γρήγορο, στον ίδιο χρόνο η διαφορά είναι ακόμα μεγαλύτερη.',
    },
    {
      q: 'Πόσες θερμίδες καίει ένας μαραθώνιος;',
      a: 'Ένας δρομέας 70 κιλών καίει περίπου 3.000-3.300 θερμίδες σε έναν μαραθώνιο 42,2 χιλιομέτρων. Αυτό είναι περισσότερο από όσο γλυκογόνο αποθηκεύει το σώμα, γι’ αυτό χρειάζεται ενέργεια (gel, ισοτονικά) κατά τη διάρκεια του αγώνα.',
    },
    {
      q: 'Πόσες θερμίδες καίει το τρέξιμο σε ανηφόρα ή σε αγώνα βουνού;',
      a: 'Κάθε 100 μέτρα θετικής υψομετρικής προσθέτουν περίπου 0,45 θερμίδες ανά κιλό σωματικού βάρους, δηλαδή περίπου 30 θερμίδες για δρομέα 70 κιλών. Ένα trail 20 χιλιομέτρων με 1.000 μέτρα ανάβαση καίει περίπου 300 θερμίδες περισσότερες από μια επίπεδη διαδρομή ίδιας απόστασης.',
    },
    {
      q: 'Πόσο ακριβής είναι ο υπολογιστής θερμίδων;',
      a: 'Η εξίσωση του ACSM δίνει εκτίμηση με απόκλιση περίπου ±10-15% για τους περισσότερους δρομείς. Τα smartwatch χρησιμοποιούν παρόμοια μοντέλα σε συνδυασμό με τον καρδιακό παλμό, οπότε κι εκείνα δίνουν εκτίμηση και όχι ακριβή μέτρηση.',
    },
    {
      q: 'Πόσο τρέξιμο χρειάζεται για να χάσω ένα κιλό;',
      a: 'Ένα κιλό λίπους αντιστοιχεί περίπου σε 7.700 θερμίδες, δηλαδή περίπου 100-110 χιλιόμετρα τρεξίματος για δρομέα 70 κιλών. Στην πράξη η απώλεια βάρους εξαρτάται κυρίως από τη συνολική διατροφή, γιατί το τρέξιμο ανοίγει και την όρεξη.',
    },
  ];

  const relatedLinks = [
    {
      to: '/gel-calculator/',
      title: 'Υπολογιστής ενεργειακών gel',
      description: 'Πόση ενέργεια χρειάζεσαι για να μην «χτυπήσεις τοίχο».',
    },
    {
      to: '/hydration-calculator/',
      title: 'Υπολογιστής ενυδάτωσης',
      description: 'Πόσα υγρά χρειάζεσαι ανάλογα με τη διάρκεια και τη ζέστη.',
    },
    {
      to: '/pace-calculator/',
      title: 'Υπολογιστής ρυθμού',
      description: 'Βρες τον ρυθμό ανά χιλιόμετρο και τα splits σου.',
    },
    {
      to: '/arthra/ofeli-treximatos/',
      title: 'Τα οφέλη του τρεξίματος',
      description: 'Τι κερδίζεις πέρα από τις θερμίδες.',
    },
    {
      to: '/arthra/pos-na-ksekiniseis-treximo/',
      title: 'Πώς να ξεκινήσεις τρέξιμο',
      description: 'Ένας απλός οδηγός για τις πρώτες εβδομάδες.',
    },
    {
      to: '/arthra/ti-trwme-prin-enan-agwna-treximatos/',
      title: 'Τι τρώμε πριν από έναν αγώνα',
      description: 'Η σωστή διατροφή πριν από τη μεγάλη μέρα.',
    },
  ];

  useHead({
    title: pageTitle,
    link: [{ rel: 'canonical', href: pageUrl }],
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content:
          'πόσες θερμίδες καίμε στο τρέξιμο, θερμίδες τρέξιμο, υπολογιστής θερμίδων τρεξίματος, θερμίδες ανά χιλιόμετρο, ποσες θερμιδες καιει το τρεξιμο, θερμίδες 5km, θερμίδες μαραθώνιος',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Πόσες θερμίδες καίμε στο τρέξιμο; Υπολόγισέ το αμέσως' },
      {
        property: 'og:description',
        content:
          'Βάλε βάρος, απόσταση και χρόνο και δες πόσες θερμίδες έκαψες. Δωρεάν υπολογιστής για δρομείς από το racelist.gr.',
      },
      { property: 'og:image', content: 'https://racelist.gr/racelist-banner.jpg' },
      { property: 'og:url', content: pageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Πόσες θερμίδες καίμε στο τρέξιμο; Υπολόγισέ το αμέσως' },
      {
        name: 'twitter:description',
        content: 'Δωρεάν υπολογιστής θερμίδων τρεξίματος: βάρος, απόσταση, χρόνος, ανηφόρα.',
      },
      { name: 'twitter:image', content: 'https://racelist.gr/racelist-banner.jpg' },
    ],
  });

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Υπολογιστής θερμίδων τρεξίματος',
      url: pageUrl,
      description: pageDescription,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      inLanguage: 'el',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      publisher: { '@type': 'Organization', name: 'racelist.gr', url: 'https://racelist.gr' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    buildBreadcrumbJsonld([
      { name: 'Αρχική', url: 'https://racelist.gr/' },
      { name: 'Εργαλεία για δρομείς', url: 'https://racelist.gr/tools-for-runners/' },
      { name: 'Πόσες θερμίδες καίμε στο τρέξιμο', url: pageUrl },
    ]),
  ]);
</script>
