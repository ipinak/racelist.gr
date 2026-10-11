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
        <li aria-current="page" class="text-ink">VDOT Calculator</li>
      </ol>
    </nav>

    <h1 class="font-display text-3xl md:text-4xl text-blue font-bold mb-3">
      VDOT Calculator: Υπολογιστής Ρυθμών Προπόνησης
    </h1>
    <p class="text-grey mb-6 md:text-lg">
      Βάλε έναν πρόσφατο χρόνο αγώνα και πάρε αμέσως το VDOT σου και τους
      ρυθμούς προπόνησης κατά Jack Daniels: εύκολο, μαραθωνίου, κατωφλίου,
      διαλειμματικό και επαναλήψεων. Δωρεάν, χωρίς εγγραφή.
    </p>

    <section aria-labelledby="calc-title" class="grid gap-4 md:grid-cols-2 md:gap-6 mb-10">
      <h2 id="calc-title" class="sr-only">Υπολογισμός VDOT</h2>

      <form
        class="bg-paper border border-line rounded-xl p-5 space-y-4 shadow-sm md:self-start"
        @submit.prevent
        @input="onFirstInput"
      >
        <div>
          <span class="block font-medium mb-2">Απόσταση αγώνα</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="d in distances"
              :key="d.label"
              type="button"
              class="px-3 py-1.5 text-sm rounded-full border transition-colors"
              :class="
                selected === d.label
                  ? 'bg-blue-deep text-paper border-blue-deep'
                  : 'border-line text-ink hover:border-blue'
              "
              @click="selected = d.label; onFirstInput()"
            >
              {{ d.label }}
            </button>
          </div>
          <label v-if="selected === CUSTOM" class="block mt-3">
            <span class="block text-sm mb-1">Απόσταση (km)</span>
            <input
              v-model.number="customKm"
              type="number"
              inputmode="decimal"
              min="1"
              step="0.1"
              class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
            />
          </label>
        </div>

        <fieldset>
          <legend class="block font-medium mb-1">Χρόνος αγώνα</legend>
          <div class="grid grid-cols-3 gap-2">
            <label class="block">
              <span class="sr-only">Ώρες</span>
              <input
                v-model.number="h"
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
                v-model.number="m"
                type="number"
                inputmode="numeric"
                min="0"
                max="59"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
              <span class="text-xs text-grey">λεπτά</span>
            </label>
            <label class="block">
              <span class="sr-only">Δευτερόλεπτα</span>
              <input
                v-model.number="s"
                type="number"
                inputmode="numeric"
                min="0"
                max="59"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
              <span class="text-xs text-grey">δευτ.</span>
            </label>
          </div>
        </fieldset>

        <p class="text-sm text-grey">
          Χρησιμοποίησε αγώνα των τελευταίων 4-6 εβδομάδων, τρεγμένο με γεμάτη
          προσπάθεια σε επίπεδη διαδρομή.
        </p>
      </form>

      <div class="bg-blue-deep text-paper rounded-xl p-5 md:p-6 flex flex-col" aria-live="polite">
        <template v-if="result">
          <p class="font-mono text-xs uppercase tracking-wider text-sky mb-1">Το VDOT σου</p>
          <p class="font-display font-bold leading-none text-6xl mb-4">
            {{ formatDecimal(result.vdot) }}
          </p>

          <p class="font-mono text-xs uppercase tracking-wider text-sky mb-2">
            Ρυθμοί προπόνησης / km
          </p>
          <ul class="space-y-1.5 mb-5">
            <li
              v-for="zone in result.zones"
              :key="zone.code"
              class="flex items-center justify-between gap-3 bg-white/10 rounded-lg px-3 py-2"
            >
              <span class="flex items-center gap-2 min-w-0">
                <span class="font-mono text-sm font-semibold text-flag w-4">{{ zone.code }}</span>
                <span class="text-sm truncate">{{ zone.name }}</span>
              </span>
              <span class="text-right shrink-0">
                <span class="font-display font-semibold">{{ zone.pace }}</span>
                <span v-if="zone.per400" class="block text-xs text-paper/60">
                  {{ zone.per400 }}/400m
                </span>
              </span>
            </li>
          </ul>

          <p class="font-mono text-xs uppercase tracking-wider text-sky mb-2">
            Ισοδύναμοι χρόνοι αγώνα
          </p>
          <dl class="grid grid-cols-4 gap-2 text-center mb-5">
            <div v-for="race in result.equivalents" :key="race.label" class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">{{ race.short }}</dt>
              <dd class="font-display text-sm font-semibold">{{ race.time }}</dd>
            </div>
          </dl>

          <div class="mt-auto pt-2 border-t border-white/15">
            <p class="text-sm text-paper/80 my-3">
              Το VDOT ανεβαίνει μόνο με νέο αγώνα. Βρες τον επόμενο στόχο σου.
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
          Διάλεξε απόσταση και συμπλήρωσε έναν ρεαλιστικό χρόνο αγώνα για να
          δεις το VDOT σου.
        </p>
      </div>
    </section>

    <article class="space-y-8 leading-relaxed">
      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Τι είναι το VDOT
        </h2>
        <p class="mb-3">
          Το <strong>VDOT</strong> είναι ένας δείκτης απόδοσης που δημιούργησε ο
          προπονητής και φυσιολόγος <strong>Jack Daniels</strong>, συγγραφέας
          του βιβλίου <em>Daniels' Running Formula</em>. Εκφράζει σε έναν αριθμό
          πόσο γρήγορος είσαι σήμερα, με βάση έναν πραγματικό χρόνο αγώνα.
        </p>
        <p>
          Η ονομασία προέρχεται από το «V-dot-O₂max», αλλά το VDOT δεν είναι το
          εργαστηριακό σου
          <NuxtLink to="/arthra/vo2-max-ti-einai-pos-metrietai/" class="underline hover:text-blue-deep">
            VO₂max
          </NuxtLink>. Είναι ένα «λειτουργικό» VO₂max που ενσωματώνει και την
          οικονομία τρεξίματος. Δύο δρομείς με το ίδιο VDOT τρέχουν τον ίδιο χρόνο
          στο 5K, ακόμα κι αν στο εργαστήριο έχουν διαφορετικό VO₂max.
        </p>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Οι 5 ρυθμοί προπόνησης κατά Daniels
        </h2>
        <dl class="space-y-3">
          <div v-for="zone in zoneInfo" :key="zone.code" class="border-l-4 border-blue pl-3">
            <dt class="font-semibold">
              <span class="font-mono text-blue mr-1">{{ zone.code }}</span>{{ zone.title }}
            </dt>
            <dd class="text-ink/90">{{ zone.text }}</dd>
          </div>
        </dl>
        <p class="mt-3">
          Τα διαστήματα I και R περιγράφονται αναλυτικά στον οδηγό μας για τη
          <NuxtLink to="/arthra/ti-einai-dialeimmatiki-proponisi/" class="underline hover:text-blue-deep">
            διαλειμματική προπόνηση
          </NuxtLink>.
        </p>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πίνακας VDOT: χρόνοι αγώνα ανά επίπεδο
        </h2>
        <div class="overflow-x-auto -mx-4 px-4">
          <table class="w-full min-w-[320px] text-sm border-collapse">
            <thead>
              <tr class="bg-paper-dim text-left">
                <th scope="col" class="p-2 font-semibold">VDOT</th>
                <th
                  v-for="d in raceDistances"
                  :key="d.short"
                  scope="col"
                  class="p-2 font-semibold text-right"
                >
                  {{ d.short }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in vdotTable" :key="row.vdot" class="border-b border-line">
                <th scope="row" class="p-2 text-left font-mono">{{ row.vdot }}</th>
                <td v-for="(t, i) in row.times" :key="i" class="p-2 text-right font-mono">
                  {{ t }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πώς υπολογίζεται το VDOT
        </h2>
        <p class="mb-3">
          Ο υπολογιστής χρησιμοποιεί τις εξισώσεις των Daniels και Gilbert. Η
          πρώτη εκτιμά πόσο οξυγόνο χρειάζεσαι για την ταχύτητα που έτρεξες. Η
          δεύτερη εκτιμά τι ποσοστό του μέγιστου μπορείς να κρατήσεις για τη
          διάρκεια του αγώνα:
        </p>
        <div class="bg-paper-dim rounded-lg p-4 font-mono text-sm mb-3 overflow-x-auto space-y-1">
          <p>VO₂ = −4,60 + 0,182258·v + 0,000104·v²</p>
          <p>%max = 0,8 + 0,1894·e<sup>−0,0128·t</sup> + 0,2990·e<sup>−0,1933·t</sup></p>
          <p>VDOT = VO₂ / %max</p>
        </div>
        <p>
          Όπου v η ταχύτητα σε μέτρα/λεπτό και t ο χρόνος σε λεπτά. Οι ρυθμοί
          προπόνησης βγαίνουν από το αντίστροφο: για κάθε ζώνη υπολογίζουμε την
          ταχύτητα που αντιστοιχεί σε ένα ποσοστό του VDOT σου. Για μια πιο απλή
          πρόβλεψη χρόνου υπάρχει και ο
          <NuxtLink to="/race-time-predictor/" class="underline hover:text-blue-deep">
            υπολογιστής πρόβλεψης χρόνων (Riegel)
          </NuxtLink>.
        </p>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">Συχνές ερωτήσεις</h2>
        <div class="divide-y divide-line border-y border-line">
          <details v-for="item in faq" :key="item.q" class="group py-3">
            <summary class="cursor-pointer list-none flex justify-between items-start gap-4 font-medium">
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
        <h2 class="font-display text-xl font-semibold text-blue mb-3">Συνέχισε με</h2>
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

  const pageUrl = 'https://racelist.gr/vdot-calculator/';
  const pageTitle = 'VDOT Calculator: Ρυθμοί Προπόνησης κατά Daniels | racelist.gr';
  const pageDescription =
    'Δωρεάν VDOT calculator: βάλε έναν χρόνο αγώνα και πάρε αμέσως το VDOT σου, τους ρυθμούς προπόνησης (εύκολο, μαραθωνίου, κατωφλίου, διαλειμματικό, επαναλήψεις) και ισοδύναμους χρόνους.';

  const CUSTOM = 'Άλλη';
  const distances = [
    { label: '5K', km: 5 },
    { label: '10K', km: 10 },
    { label: 'Ημιμαραθώνιος', km: 21.0975 },
    { label: 'Μαραθώνιος', km: 42.195 },
    { label: CUSTOM, km: null },
  ];
  const raceDistances = [
    { short: '5K', meters: 5000 },
    { short: '10K', meters: 10000 },
    { short: '21,1K', meters: 21097.5 },
    { short: '42,2K', meters: 42195 },
  ];

  const selected = ref('10K');
  const customKm = ref(8);
  const h = ref(0);
  const m = ref(50);
  const s = ref(0);

  // Daniels & Gilbert: oxygen cost of running at v m/min, and the fraction of
  // VO2max sustainable for t minutes. VDOT = cost / fraction.
  function oxygenCost(v) {
    return -4.6 + 0.182258 * v + 0.000104 * v * v;
  }
  function sustainableFraction(t) {
    return 0.8 + 0.1894393 * Math.exp(-0.012778 * t) + 0.2989558 * Math.exp(-0.1932605 * t);
  }
  function computeVdot(meters, minutes) {
    return oxygenCost(meters / minutes) / sustainableFraction(minutes);
  }
  // Inverse of oxygenCost: speed (m/min) that costs the given VO2.
  function velocityAt(vo2) {
    const a = 0.000104;
    const b = 0.182258;
    const c = -(4.6 + vo2);
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  }
  // Race time (minutes) for a distance at a given VDOT, by bisection.
  function raceMinutes(vdot, meters) {
    let lo = meters / 1000;
    let hi = (meters / 1000) * 20;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      if (computeVdot(meters, mid) > vdot) lo = mid;
      else hi = mid;
    }
    return (lo + hi) / 2;
  }

  // %VDOT per zone, calibrated against Daniels' published tables.
  const ZONES = {
    easy: [0.62, 0.72],
    threshold: 0.88,
    interval: 0.975,
    repetition: 1.05,
  };

  function formatClock(totalSeconds) {
    const rounded = Math.round(totalSeconds);
    const hh = Math.floor(rounded / 3600);
    const mm = Math.floor((rounded % 3600) / 60);
    const ss = rounded % 60;
    const pad = (n) => String(n).padStart(2, '0');
    return hh > 0 ? `${hh}:${pad(mm)}:${pad(ss)}` : `${mm}:${pad(ss)}`;
  }
  function paceFromVelocity(v) {
    return formatClock(60000 / v);
  }
  function per400FromVelocity(v) {
    return `${Math.round((400 / v) * 60)}″`;
  }
  function formatDecimal(value) {
    return (Math.round(value * 10) / 10).toLocaleString('el-GR');
  }

  const result = computed(() => {
    const dist = distances.find((d) => d.label === selected.value);
    const km = dist?.km ?? Number(customKm.value);
    const minutes = Number(h.value || 0) * 60 + Number(m.value || 0) + Number(s.value || 0) / 60;
    if (!(km >= 1) || !(minutes > 0)) return null;

    const vdot = computeVdot(km * 1000, minutes);
    if (!(vdot >= 20 && vdot <= 90)) return null;

    const marathonVelocity = 42195 / raceMinutes(vdot, 42195);
    const vT = velocityAt(vdot * ZONES.threshold);
    const vI = velocityAt(vdot * ZONES.interval);
    const vR = velocityAt(vdot * ZONES.repetition);

    return {
      vdot,
      zones: [
        {
          code: 'E',
          name: 'Εύκολο',
          pace: `${paceFromVelocity(velocityAt(vdot * ZONES.easy[1]))}–${paceFromVelocity(velocityAt(vdot * ZONES.easy[0]))}`,
        },
        { code: 'M', name: 'Μαραθωνίου', pace: paceFromVelocity(marathonVelocity) },
        { code: 'T', name: 'Κατωφλίου', pace: paceFromVelocity(vT), per400: per400FromVelocity(vT) },
        { code: 'I', name: 'Διαλειμματικό', pace: paceFromVelocity(vI), per400: per400FromVelocity(vI) },
        { code: 'R', name: 'Επαναλήψεις', pace: paceFromVelocity(vR), per400: per400FromVelocity(vR) },
      ],
      equivalents: raceDistances.map((d) => ({
        short: d.short,
        time: formatClock(raceMinutes(vdot, d.meters) * 60),
      })),
    };
  });

  const vdotTable = [30, 35, 40, 45, 50, 55, 60, 65, 70].map((vdot) => ({
    vdot,
    times: raceDistances.map((d) => formatClock(raceMinutes(vdot, d.meters) * 60)),
  }));

  const zoneInfo = [
    {
      code: 'E',
      title: 'Εύκολο τρέξιμο (Easy)',
      text: 'Το μεγαλύτερο μέρος της εβδομάδας (περίπου 70-80%). Χτίζει αερόβια βάση, ενδυναμώνει καρδιά και τένοντες. Πρέπει να μπορείς να μιλάς άνετα.',
    },
    {
      code: 'M',
      title: 'Ρυθμός μαραθωνίου (Marathon)',
      text: 'Ο ρυθμός που αντιστοιχεί στον μαραθώνιο που θα έτρεχες σήμερα. Χρησιμοποιείται σε μεγάλα τρεξίματα για προετοιμασία μαραθωνίου.',
    },
    {
      code: 'T',
      title: 'Ρυθμός κατωφλίου (Threshold)',
      text: '«Άνετα δύσκολο». Ένας ρυθμός που θα μπορούσες να κρατήσεις περίπου μία ώρα σε αγώνα. Tempo 20 λεπτών ή επαναλήψεις 5-10 λεπτών ανεβάζουν το γαλακτικό κατώφλι.',
    },
    {
      code: 'I',
      title: 'Διαλειμματικό (Interval)',
      text: 'Κοντά στο VO₂max. Επαναλήψεις 3-5 λεπτών (π.χ. 5 × 1000 m) με ισόχρονη χαλαρή αποκατάσταση. Δεν ξεπερνάει το 8% του εβδομαδιαίου όγκου.',
    },
    {
      code: 'R',
      title: 'Επαναλήψεις ταχύτητας (Repetition)',
      text: 'Γρήγορα, σύντομα κομμάτια 200-400 m με πλήρη αποκατάσταση. Βελτιώνουν ταχύτητα και οικονομία τρεξίματος. Μέχρι το 5% του όγκου.',
    },
  ];

  const { triggerEvent } = useAnalytics();
  let tracked = false;
  function onFirstInput() {
    if (tracked) return;
    tracked = true;
    triggerEvent('vdot_calculator_used');
  }
  function trackCta() {
    triggerEvent('vdot_calculator_cta_click', { destination: '/agwnes/' });
  }

  const faq = [
    {
      q: 'Τι είναι το VDOT;',
      a: 'Το VDOT είναι ένας δείκτης απόδοσης δρομέα που δημιούργησε ο Jack Daniels. Υπολογίζεται από έναν πραγματικό χρόνο αγώνα και δείχνει το τρέχον επίπεδό σου. Από αυτό προκύπτουν οι ρυθμοί προπόνησης και οι ισοδύναμοι χρόνοι σε άλλες αποστάσεις.',
    },
    {
      q: 'Είναι το VDOT ίδιο με το VO2max;',
      a: 'Όχι. Το VO₂max μετριέται στο εργαστήριο και δείχνει πόσο οξυγόνο μπορεί να χρησιμοποιήσει ο οργανισμός. Το VDOT βγαίνει από χρόνο αγώνα και περιλαμβάνει και την οικονομία τρεξίματος, γι’ αυτό προβλέπει καλύτερα την πραγματική σου απόδοση.',
    },
    {
      q: 'Ποιοι είναι οι ρυθμοί προπόνησης κατά Daniels;',
      a: 'Πέντε: E (εύκολο), M (ρυθμός μαραθωνίου), T (κατωφλίου, περίπου ο ρυθμός που κρατάς για μία ώρα), I (διαλειμματικό, κοντά στο VO₂max) και R (επαναλήψεις ταχύτητας). Ο VDOT calculator της σελίδας τους υπολογίζει όλους από έναν χρόνο αγώνα.',
    },
    {
      q: 'Τι VDOT έχει ένας μέσος δρομέας;',
      a: 'Οι περισσότεροι ερασιτέχνες δρομείς έχουν VDOT μεταξύ 30 και 45. VDOT 40 αντιστοιχεί σε περίπου 24 λεπτά στο 5K, VDOT 50 σε περίπου 20 λεπτά και VDOT 60 σε περίπου 17 λεπτά. Οι κορυφαίοι μαραθωνοδρόμοι του κόσμου ξεπερνούν το 80.',
    },
    {
      q: 'Ποιον χρόνο αγώνα να χρησιμοποιήσω;',
      a: 'Έναν πρόσφατο αγώνα (τελευταίες 4-6 εβδομάδες), τρεγμένο με γεμάτη προσπάθεια σε επίπεδη διαδρομή. Αποστάσεις από 5K έως ημιμαραθώνιο δίνουν την πιο αξιόπιστη εκτίμηση. Ο μαραθώνιος συχνά βγάζει χαμηλότερο VDOT αν δεν είχες ειδική προετοιμασία.',
    },
    {
      q: 'Πόσο συχνά πρέπει να ενημερώνω το VDOT μου;',
      a: 'Μετά από κάθε αγώνα ή κάθε 4-6 εβδομάδες. Αν δεν έχεις αγώνα, ο Daniels προτείνει να ανεβάζεις το VDOT κατά 1 μονάδα μόνο αφού έχεις κάνει 3-4 εβδομάδες προπόνηση στο ίδιο επίπεδο χωρίς δυσκολία.',
    },
    {
      q: 'Γιατί ο ρυθμός μαραθωνίου μου φαίνεται πολύ γρήγορος;',
      a: 'Ο ισοδύναμος χρόνος μαραθωνίου προϋποθέτει ότι έχεις κάνει ειδική προπόνηση αντοχής, με μεγάλα τρεξίματα και επαρκή εβδομαδιαία χιλιόμετρα. Αν ο όγκος σου είναι χαμηλός, στόχευσε 3-5% πιο αργά από τον ρυθμό M.',
    },
    {
      q: 'Μπορώ να χρησιμοποιήσω το VDOT για αγώνες βουνού;',
      a: 'Οι ρυθμοί VDOT ισχύουν για επίπεδο έδαφος. Για αγώνες trail με υψομετρική χρησιμοποίησε τον υπολογιστή χρόνου αγώνα βουνού, που λαμβάνει υπόψη την ανάβαση και το έδαφος.',
    },
  ];

  const relatedLinks = [
    {
      to: '/pace-calculator/',
      title: 'Υπολογιστής ρυθμού',
      description: 'Ρυθμός ανά χιλιόμετρο και splits για τον αγώνα σου.',
    },
    {
      to: '/race-time-predictor/',
      title: 'Πρόβλεψη χρόνων αγώνα',
      description: 'Ο τύπος του Riegel για 5K έως μαραθώνιο.',
    },
    {
      to: '/ypologistis-xronou-agona-vounou/',
      title: 'Υπολογιστής χρόνου αγώνα βουνού',
      description: 'Εκτίμηση χρόνου για trail με υψομετρική.',
    },
    {
      to: '/arthra/pws-na-ayksiseis-to-vo2-max/',
      title: 'Πώς να αυξήσεις το VO₂max',
      description: 'Προπονήσεις που ανεβάζουν και το VDOT σου.',
    },
    {
      to: '/arthra/krisimi-taxytita-sto-treximo/',
      title: 'Κρίσιμη ταχύτητα στο τρέξιμο',
      description: 'Ένας άλλος τρόπος να βρεις τις ζώνες σου.',
    },
    {
      to: '/arthra/proetoimasia-gia-marathonio/',
      title: 'Προετοιμασία για μαραθώνιο',
      description: 'Πώς να στήσεις το πρόγραμμά σου με ρυθμούς M και T.',
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
          'vdot calculator, vdot, ρυθμοί προπόνησης, υπολογιστής ρυθμών προπόνησης, Jack Daniels, ρυθμός κατωφλίου, ρυθμός διαλειμματικής, training pace calculator, ζώνες ρυθμού τρεξίματος',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'VDOT Calculator: Οι ρυθμοί προπόνησής σου σε δευτερόλεπτα' },
      {
        property: 'og:description',
        content:
          'Βάλε έναν χρόνο αγώνα και πάρε VDOT, ρυθμούς E, M, T, I, R και ισοδύναμους χρόνους για 5K έως μαραθώνιο.',
      },
      { property: 'og:image', content: 'https://racelist.gr/racelist-banner.jpg' },
      { property: 'og:url', content: pageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'VDOT Calculator: Οι ρυθμοί προπόνησής σου σε δευτερόλεπτα' },
      {
        name: 'twitter:description',
        content: 'Δωρεάν VDOT calculator με ρυθμούς προπόνησης κατά Jack Daniels.',
      },
      { name: 'twitter:image', content: 'https://racelist.gr/racelist-banner.jpg' },
    ],
  });

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'VDOT Calculator',
      alternateName: 'Υπολογιστής Ρυθμών Προπόνησης',
      url: pageUrl,
      description: pageDescription,
      applicationCategory: 'SportsApplication',
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
      { name: 'VDOT Calculator', url: pageUrl },
    ]),
  ]);
</script>
