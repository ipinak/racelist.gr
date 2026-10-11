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
        <li aria-current="page" class="text-ink">Χρόνος αγώνα βουνού</li>
      </ol>
    </nav>

    <h1 class="font-display text-3xl md:text-4xl text-blue font-bold mb-3">
      Υπολογιστής Χρόνου Αγώνα Βουνού (Trail)
    </h1>
    <p class="text-grey mb-6 md:text-lg">
      Πες μας έναν πρόσφατο χρόνο σου στον δρόμο και τα στοιχεία του ορεινού
      αγώνα. Θα δεις αμέσως σε πόσο χρόνο θα τερματίσεις. Δωρεάν, χωρίς εγγραφή.
    </p>

    <section
      aria-labelledby="calc-title"
      class="grid gap-4 md:grid-cols-2 md:gap-6 mb-10"
    >
      <h2 id="calc-title" class="sr-only">Εκτίμηση χρόνου αγώνα trail</h2>

      <form
        class="bg-paper border border-line rounded-xl p-5 space-y-5 shadow-sm"
        @submit.prevent
        @input="onFirstInput"
      >
        <fieldset class="space-y-3">
          <legend class="font-mono text-xs uppercase tracking-wider text-flag mb-1">
            Ο αγώνας βουνού
          </legend>
          <div class="grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block font-medium mb-1">Απόσταση (km)</span>
              <input
                v-model.number="raceKm"
                type="number"
                inputmode="decimal"
                min="1"
                step="0.1"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
            </label>
            <label class="block">
              <span class="block font-medium mb-1">Θετική υψ. (m)</span>
              <input
                v-model.number="gain"
                type="number"
                inputmode="numeric"
                min="0"
                step="50"
                class="w-full text-lg p-3 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-blue"
              />
            </label>
          </div>
          <div>
            <span class="block font-medium mb-1">Έδαφος</span>
            <div class="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Έδαφος">
              <button
                v-for="t in terrains"
                :key="t.value"
                type="button"
                role="radio"
                :aria-checked="terrain === t.value"
                class="px-2 py-2 text-sm rounded-lg border transition-colors leading-tight"
                :class="
                  terrain === t.value
                    ? 'bg-blue-deep text-paper border-blue-deep'
                    : 'border-line text-ink hover:border-blue'
                "
                @click="terrain = t.value; onFirstInput()"
              >
                <span class="block font-medium">{{ t.label }}</span>
                <span
                  class="block text-xs"
                  :class="terrain === t.value ? 'text-paper/70' : 'text-grey'"
                >{{ t.hint }}</span>
              </button>
            </div>
          </div>
        </fieldset>

        <fieldset class="space-y-3 border-t border-line pt-4">
          <legend class="font-mono text-xs uppercase tracking-wider text-flag mb-1">
            Ο πρόσφατος χρόνος σου στον δρόμο
          </legend>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="d in referenceDistances"
              :key="d.km"
              type="button"
              class="px-3 py-1.5 text-sm rounded-full border transition-colors"
              :class="
                refKm === d.km
                  ? 'bg-blue-deep text-paper border-blue-deep'
                  : 'border-line text-ink hover:border-blue'
              "
              @click="refKm = d.km; onFirstInput()"
            >
              {{ d.label }}
            </button>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <label class="block">
              <span class="sr-only">Ώρες</span>
              <input
                v-model.number="refH"
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
                v-model.number="refM"
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
                v-model.number="refS"
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
      </form>

      <div
        class="bg-blue-deep text-paper rounded-xl p-5 md:p-6 flex flex-col"
        aria-live="polite"
      >
        <template v-if="result">
          <p class="font-mono text-xs uppercase tracking-wider text-sky mb-1">
            Εκτιμώμενος χρόνος τερματισμού
          </p>
          <p class="font-display font-bold leading-none text-6xl mb-2">
            {{ formatDuration(result.minutes) }}
          </p>
          <p class="text-sm text-paper/70 mb-5">
            Ρεαλιστικό εύρος: {{ formatDuration(result.fast) }} –
            {{ formatDuration(result.slow) }}
          </p>

          <dl class="grid grid-cols-3 gap-2 text-center mb-5">
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">ρυθμός/km</dt>
              <dd class="font-display text-lg font-semibold">{{ result.pace }}</dd>
            </div>
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">km-effort</dt>
              <dd class="font-display text-lg font-semibold">
                {{ formatDecimal(result.effortKm) }}
              </dd>
            </div>
            <div class="bg-white/10 rounded-lg p-2">
              <dt class="text-xs text-paper/70">κατηγ. ITRA</dt>
              <dd class="font-display text-lg font-semibold">{{ result.category }}</dd>
            </div>
          </dl>

          <p class="text-sm text-paper/80 mb-5">
            Η διαδρομή «κοστίζει» όσο {{ formatDecimal(result.effortKm) }} km σε
            επίπεδο έδαφος.
            <template v-if="result.minutes > 90">
              Για τόσες ώρες θα χρειαστείς ενέργεια: δες τον
              <NuxtLink to="/gel-calculator/" class="underline text-paper hover:text-sky">
                υπολογιστή gel
              </NuxtLink>.
            </template>
          </p>

          <div class="mt-auto pt-2 border-t border-white/15">
            <p class="text-sm text-paper/80 my-3">
              Έτοιμος να το δοκιμάσεις; Δες όλους τους αγώνες βουνού στην
              Ελλάδα.
            </p>
            <NuxtLink
              to="/agwnes/"
              class="block text-center bg-flag text-ink rounded-full font-semibold px-6 py-3 hover:bg-paper transition-colors"
              @click="trackCta"
            >
              Βρες αγώνα βουνού →
            </NuxtLink>
          </div>
        </template>
        <p v-else class="text-paper/80 my-auto text-center">
          Συμπλήρωσε απόσταση, υψομετρική και έναν χρόνο σου στον δρόμο για να
          δεις την εκτίμηση.
        </p>
      </div>
    </section>

    <article class="space-y-8 leading-relaxed">
      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Πώς υπολογίζεται ο χρόνος σε αγώνα βουνού
        </h2>
        <p class="mb-3">
          Στο trail ο ρυθμός ανά χιλιόμετρο λέει λίγα, γιατί ένα χιλιόμετρο
          ανηφόρας δεν έχει καμία σχέση με ένα χιλιόμετρο στην άσφαλτο. Γι' αυτό
          ο υπολογιστής κάνει τρία βήματα:
        </p>
        <ol class="list-decimal ml-6 space-y-2">
          <li>
            <strong>Μετατρέπει τη διαδρομή σε χιλιόμετρα-προσπάθειας
            (km-effort):</strong> απόσταση + θετική υψομετρική / 100. Κάθε 100
            μέτρα ανάβασης «μετράνε» όσο ένα επιπλέον χιλιόμετρο. Είναι ο ίδιος
            δείκτης που χρησιμοποιεί η ITRA για να κατατάσσει τους αγώνες.
          </li>
          <li>
            <strong>Προβλέπει τον χρόνο σου για αυτή την απόσταση</strong> από
            τον χρόνο σου στον δρόμο, με τον
            <NuxtLink to="/race-time-predictor/" class="underline hover:text-blue-deep">
              τύπο του Riegel
            </NuxtLink>
            (T₂ = T₁ × (D₂/D₁)<sup>1,06</sup>). Για προσπάθειες πάνω από 42
            km-effort ο εκθέτης ανεβαίνει στο 1,15, γιατί στα ultra η κόπωση,
            οι στάσεις στους σταθμούς και η νύχτα ρίχνουν περισσότερο τον ρυθμό.
          </li>
          <li>
            <strong>Προσθέτει το έδαφος:</strong> +0% για χωματόδρομο, +12% για
            τυπικό μονοπάτι, +25% για τεχνικό, πετρώδες έδαφος με απότομες
            κατηφόρες.
          </li>
        </ol>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Παραδείγματα χρόνων σε ορεινούς αγώνες
        </h2>
        <p class="mb-3 text-sm text-grey">
          Εκτιμώμενος χρόνος σε μονοπάτι μέτριας δυσκολίας, ανάλογα με τον χρόνο
          στα 10 km δρόμου.
        </p>
        <div class="overflow-x-auto -mx-4 px-4">
          <table class="w-full min-w-[320px] text-sm border-collapse">
            <thead>
              <tr class="bg-paper-dim text-left">
                <th scope="col" class="p-2 font-semibold">Αγώνας</th>
                <th
                  v-for="t in exampleTenKTimes"
                  :key="t"
                  scope="col"
                  class="p-2 font-semibold text-right"
                >
                  10K σε {{ t }}′
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in exampleTable" :key="row.label" class="border-b border-line">
                <th scope="row" class="p-2 text-left font-medium">
                  {{ row.label }}
                </th>
                <td
                  v-for="(minutes, i) in row.values"
                  :key="i"
                  class="p-2 text-right font-mono"
                >
                  {{ formatDuration(minutes) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Κατηγορίες ITRA ανά km-effort
        </h2>
        <div class="overflow-x-auto -mx-4 px-4">
          <table class="w-full min-w-[280px] text-sm border-collapse">
            <thead>
              <tr class="bg-paper-dim text-left">
                <th scope="col" class="p-2 font-semibold">Κατηγορία</th>
                <th scope="col" class="p-2 font-semibold">km-effort</th>
                <th scope="col" class="p-2 font-semibold">Τυπικός αγώνας</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c in itraCategories" :key="c.name" class="border-b border-line">
                <th scope="row" class="p-2 text-left font-mono">{{ c.name }}</th>
                <td class="p-2">{{ c.range }}</td>
                <td class="p-2 text-grey">{{ c.example }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="font-display text-2xl font-semibold text-blue mb-3">
          Τι δεν μπορεί να προβλέψει κανένας υπολογιστής
        </h2>
        <ul class="list-disc ml-6 space-y-1">
          <li>
            <strong>Ζέστη και υψόμετρο:</strong> πάνω από 25°C ή πάνω από τα
            2.000 μέτρα, υπολόγισε 5-15% πιο αργά.
          </li>
          <li>
            <strong>Εμπειρία στις κατηφόρες:</strong> ένας δρομέας δρόμου χάνει
            συνήθως περισσότερο χρόνο στις τεχνικές κατηφόρες απ' ό,τι στις
            ανηφόρες.
          </li>
          <li>
            <strong>Διατροφή και υγρά:</strong> σε αγώνες πάνω από 2 ώρες, ένα
            λάθος στην ενέργεια κοστίζει περισσότερο από κάθε ανηφόρα. Δες τον
            <NuxtLink to="/hydration-calculator/" class="underline hover:text-blue-deep">
              υπολογιστή ενυδάτωσης
            </NuxtLink>.
          </li>
          <li>
            <strong>Στάσεις και νύχτα:</strong> στα ultra οι στάσεις στους
            σταθμούς τροφοδοσίας μπορεί να προσθέσουν 30-60 λεπτά.
          </li>
        </ul>
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

  const pageUrl = 'https://racelist.gr/ypologistis-xronou-agona-vounou/';
  const pageTitle =
    'Υπολογιστής Χρόνου Αγώνα Βουνού (Trail) - Δωρεάν | racelist.gr';
  const pageDescription =
    'Πόσο θα κάνεις σε αγώνα βουνού; Βάλε απόσταση, θετική υψομετρική, έδαφος και τον χρόνο σου στον δρόμο, και δες αμέσως τον εκτιμώμενο χρόνο, km-effort και κατηγορία ITRA.';

  const raceKm = ref(21);
  const gain = ref(1000);
  const terrain = ref('moderate');
  const refKm = ref(10);
  const refH = ref(0);
  const refM = ref(55);
  const refS = ref(0);

  const terrains = [
    { value: 'easy', label: 'Εύκολο', hint: 'χώμα', factor: 1.0 },
    { value: 'moderate', label: 'Μέτριο', hint: 'μονοπάτι', factor: 1.12 },
    { value: 'technical', label: 'Τεχνικό', hint: 'πέτρα', factor: 1.25 },
  ];

  const referenceDistances = [
    { km: 5, label: '5K' },
    { km: 10, label: '10K' },
    { km: 21.1, label: 'Ημιμαραθώνιος' },
    { km: 42.2, label: 'Μαραθώνιος' },
  ];

  const itraCategories = [
    { name: 'XXS', min: 0, max: 24, range: '0–24', example: 'Trail 10-15 km' },
    { name: 'XS', min: 25, max: 44, range: '25–44', example: 'Trail 20-30 km' },
    { name: 'S', min: 45, max: 74, range: '45–74', example: 'Ορεινός μαραθώνιος' },
    { name: 'M', min: 75, max: 114, range: '75–114', example: 'Ultra 50-80 km' },
    { name: 'L', min: 115, max: 154, range: '115–154', example: 'Ultra 80-110 km' },
    { name: 'XL', min: 155, max: 209, range: '155–209', example: 'Ultra 100 μιλίων' },
    { name: 'XXL', min: 210, max: Infinity, range: '210+', example: 'Πολυήμερα ultra' },
  ];

  const ULTRA_THRESHOLD_KM = 42.2;

  // km-effort (ITRA): distance + D+/100. Time from a road reference via
  // Riegel (exponent 1.06), steeper 1.15 beyond marathon-equivalent effort,
  // then scaled by terrain technicality.
  function estimateTrailMinutes(km, gainMeters, terrainFactor, refDistanceKm, refMinutes) {
    const effortKm = km + gainMeters / 100;
    let minutes;
    if (effortKm <= ULTRA_THRESHOLD_KM) {
      minutes = refMinutes * Math.pow(effortKm / refDistanceKm, 1.06);
    } else {
      const marathonMinutes = refMinutes * Math.pow(ULTRA_THRESHOLD_KM / refDistanceKm, 1.06);
      minutes = marathonMinutes * Math.pow(effortKm / ULTRA_THRESHOLD_KM, 1.15);
    }
    return { effortKm, minutes: minutes * terrainFactor };
  }

  function itraCategory(effortKm) {
    const rounded = Math.round(effortKm);
    return itraCategories.find((c) => rounded >= c.min && rounded <= c.max)?.name ?? '–';
  }

  const result = computed(() => {
    const km = Number(raceKm.value);
    const gainMeters = Math.max(0, Number(gain.value) || 0);
    const refMinutes =
      Number(refH.value || 0) * 60 + Number(refM.value || 0) + Number(refS.value || 0) / 60;
    const factor = terrains.find((t) => t.value === terrain.value)?.factor ?? 1;

    if (!(km > 0) || !(refMinutes > 0)) return null;

    const { effortKm, minutes } = estimateTrailMinutes(
      km,
      gainMeters,
      factor,
      refKm.value,
      refMinutes
    );
    const paceSeconds = (minutes * 60) / km;

    return {
      minutes,
      fast: minutes * 0.92,
      slow: minutes * 1.1,
      effortKm,
      category: itraCategory(effortKm),
      pace: `${Math.floor(paceSeconds / 60)}:${String(Math.round(paceSeconds % 60)).padStart(2, '0')}`,
    };
  });

  const exampleTenKTimes = [45, 55, 65];
  const exampleRaces = [
    { label: '12 km · 500 m', km: 12, gain: 500 },
    { label: '21 km · 1.200 m', km: 21, gain: 1200 },
    { label: '42 km · 2.500 m', km: 42, gain: 2500 },
    { label: '65 km · 4.000 m', km: 65, gain: 4000 },
  ];
  const exampleTable = exampleRaces.map((race) => ({
    label: race.label,
    values: exampleTenKTimes.map(
      (t) => estimateTrailMinutes(race.km, race.gain, 1.12, 10, t).minutes
    ),
  }));

  function formatDuration(totalMinutes) {
    const rounded = Math.round(totalMinutes);
    const h = Math.floor(rounded / 60);
    const m = rounded % 60;
    return `${h}:${String(m).padStart(2, '0')}`;
  }

  function formatDecimal(value) {
    return (Math.round(value * 10) / 10).toLocaleString('el-GR');
  }

  const { triggerEvent } = useAnalytics();
  let tracked = false;
  function onFirstInput() {
    if (tracked) return;
    tracked = true;
    triggerEvent('trail_time_calculator_used');
  }
  function trackCta() {
    triggerEvent('trail_time_calculator_cta_click', { destination: '/agwnes/' });
  }

  const faq = [
    {
      q: 'Πώς υπολογίζω τον χρόνο μου σε αγώνα βουνού;',
      a: 'Μετατρέπεις τη διαδρομή σε χιλιόμετρα-προσπάθειας (απόσταση + θετική υψομετρική / 100), προβλέπεις τον χρόνο σου για αυτή την απόσταση από έναν πρόσφατο χρόνο σου στον δρόμο με τον τύπο του Riegel και προσθέτεις 0-25% ανάλογα με το πόσο τεχνικό είναι το έδαφος. Ο υπολογιστής της σελίδας κάνει όλα αυτά αυτόματα.',
    },
    {
      q: 'Τι είναι τα χιλιόμετρα-προσπάθειας (km-effort);',
      a: 'Είναι ένας δείκτης που ενώνει απόσταση και ανάβαση σε έναν αριθμό: km-effort = χιλιόμετρα + θετική υψομετρική / 100. Ένας αγώνας 20 km με 1.000 m ανάβαση αντιστοιχεί σε 30 km-effort. Τον χρησιμοποιεί η ITRA για να κατατάσσει τους αγώνες σε κατηγορίες από XXS έως XXL.',
    },
    {
      q: 'Πόσο πιο αργό είναι το trail από το τρέξιμο στον δρόμο;',
      a: 'Κάθε 100 μέτρα θετικής υψομετρικής κοστίζουν περίπου όσο ένα επιπλέον χιλιόμετρο σε επίπεδο έδαφος. Επιπλέον, το έδαφος προσθέτει περίπου 10-15% σε τυπικό μονοπάτι και 20-30% σε τεχνικό. Ένας ορεινός ημιμαραθώνιος με 1.200 m ανάβαση παίρνει συνήθως σχεδόν τον διπλάσιο χρόνο από έναν ημιμαραθώνιο δρόμου.',
    },
    {
      q: 'Τι σημαίνουν οι κατηγορίες ITRA XXS, XS, S, M, L, XL, XXL;',
      a: 'Δείχνουν τη συνολική δυσκολία ενός αγώνα με βάση τα km-effort: XXS έως 24, XS 25-44, S 45-74, M 75-114, L 115-154, XL 155-209 και XXL από 210 και πάνω. Αγώνες από S και πάνω θεωρούνται συνήθως ultra trail.',
    },
    {
      q: 'Υπολογίζονται οι κατηφόρες;',
      a: 'Ο δείκτης km-effort μετρά μόνο την ανάβαση. Οι κατηφόρες λαμβάνονται υπόψη μέσω της επιλογής εδάφους: αν η διαδρομή έχει απότομες, πετρώδεις κατηφόρες, διάλεξε «Τεχνικό». Εκεί οι δρομείς χωρίς εμπειρία στο βουνό χάνουν τον περισσότερο χρόνο.',
    },
    {
      q: 'Θα προλάβω το όριο χρόνου (cut-off) του αγώνα;',
      a: 'Σύγκρινε το αργό άκρο του εύρους που σου δείχνει ο υπολογιστής με το όριο χρόνου του αγώνα. Αν η διαφορά είναι μικρότερη από 10-15%, είναι οριακό, ειδικά στον πρώτο σου αγώνα βουνού ή αν οι ενδιάμεσοι σταθμοί έχουν δικά τους όρια.',
    },
    {
      q: 'Τι χρόνο να βάλω αν δεν έχω τρέξει αγώνα δρόμου;',
      a: 'Χρησιμοποίησε τον καλύτερο πρόσφατο χρόνο σου σε 5 ή 10 χιλιόμετρα σε επίπεδη διαδρομή, τρεγμένα με γεμάτη προσπάθεια. Αν έχεις μόνο χρόνο από χαλαρό τρέξιμο, η εκτίμηση θα βγει πιο αργή από όσο μπορείς πραγματικά.',
    },
    {
      q: 'Πόσο ακριβής είναι η εκτίμηση χρόνου για trail;',
      a: 'Για τους περισσότερους δρομείς ο πραγματικός χρόνος πέφτει μέσα στο εύρος -8% έως +10% που δείχνει ο υπολογιστής. Ζέστη, νύχτα, λάσπη, υψόμετρο πάνω από τα 2.000 m και η εμπειρία σου στο βουνό μπορούν να αλλάξουν το αποτέλεσμα.',
    },
  ];

  const relatedLinks = [
    {
      to: '/race-time-predictor/',
      title: 'Πρόβλεψη χρόνου αγώνα δρόμου',
      description: 'Ο τύπος του Riegel για 5K, 10K, ημιμαραθώνιο, μαραθώνιο.',
    },
    {
      to: '/gel-calculator/',
      title: 'Υπολογιστής ενεργειακών gel',
      description: 'Πόση ενέργεια χρειάζεσαι για πολλές ώρες στο βουνό.',
    },
    {
      to: '/hydration-calculator/',
      title: 'Υπολογιστής ενυδάτωσης',
      description: 'Πόσα υγρά να κουβαλάς ανάλογα με τη διάρκεια και τη ζέστη.',
    },
    {
      to: '/poses-thermides-kaime-sto-treximo/',
      title: 'Πόσες θερμίδες καίμε στο τρέξιμο',
      description: 'Με υψομετρική, για να δεις πόσο «καίει» το βουνό.',
    },
    {
      to: '/pace-calculator/',
      title: 'Υπολογιστής ρυθμού',
      description: 'Ρυθμός ανά χιλιόμετρο και splits.',
    },
    {
      to: '/arthra/beyond-kerkini-2026/',
      title: 'Beyond Kerkini 2026: αποτελέσματα',
      description: 'Σύγκρινε την εκτίμησή σου με πραγματικούς χρόνους trail.',
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
          'υπολογιστής χρόνου αγώνα βουνού, εκτίμηση χρόνου trail, πρόβλεψη χρόνου trail, trail race time estimator, km-effort, κατηγορίες ITRA, χρόνος ορεινού αγώνα, ypologistis xronou trail',
      },
      { name: 'author', content: 'racelist.gr' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Πόσο θα κάνεις σε αγώνα βουνού; Υπολογιστής χρόνου trail' },
      {
        property: 'og:description',
        content:
          'Απόσταση, υψομετρική, έδαφος και ο χρόνος σου στον δρόμο: δες αμέσως τον εκτιμώμενο χρόνο σου σε αγώνα trail.',
      },
      { property: 'og:image', content: 'https://racelist.gr/racelist-banner.jpg' },
      { property: 'og:url', content: pageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Πόσο θα κάνεις σε αγώνα βουνού; Υπολογιστής χρόνου trail' },
      {
        name: 'twitter:description',
        content: 'Δωρεάν εκτίμηση χρόνου για αγώνες trail με km-effort και κατηγορία ITRA.',
      },
      { name: 'twitter:image', content: 'https://racelist.gr/racelist-banner.jpg' },
    ],
  });

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Υπολογιστής Χρόνου Αγώνα Βουνού (Trail)',
      alternateName: 'Trail race time estimator',
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
      { name: 'Υπολογιστής χρόνου αγώνα βουνού', url: pageUrl },
    ]),
  ]);
</script>
