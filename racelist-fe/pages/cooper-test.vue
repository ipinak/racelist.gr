<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl text-[#0057A0] font-bold mb-6">
        Τι είναι το Τεστ Cooper;
      </h1>

      <p class="mb-6">
        Το <strong>Τεστ Cooper</strong> είναι ένα απλό αλλά αποτελεσματικό
        εργαλείο για την αξιολόγηση της
        <strong>καρδιοαναπνευστικής αντοχής</strong>. Δημιουργήθηκε το 1968 από
        τον Dr. Kenneth H. Cooper για τις ανάγκες της Πολεμικής Αεροπορίας των
        ΗΠΑ και έκτοτε χρησιμοποιείται παγκοσμίως σε σχολεία, στρατό, αθλητικές
        ομάδες και προγράμματα φυσικής κατάστασης.
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          📏 Πώς γίνεται;
        </h2>
        <p class="mb-4">
          Ο συμμετέχων καλείται να τρέξει
          <strong>όσο το δυνατόν μεγαλύτερη απόσταση μέσα σε 12 λεπτά</strong>.
          Στο τέλος, μετριέται η απόσταση που διανύθηκε και, με βάση αυτή,
          γίνεται εκτίμηση της φυσικής κατάστασης.
        </p>
        <p>
          Το τεστ μπορεί να πραγματοποιηθεί σε στίβο (για ακρίβεια) ή σε
          οποιαδήποτε επίπεδη διαδρομή με τρόπο που να επιτρέπει την καταγραφή
          της απόστασης (π.χ. με GPS ρολόι).
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          ✅ Τι αξιολογεί;
        </h2>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Την <strong>καρδιοαναπνευστική ικανότητα</strong> (VO₂max)</li>
          <li>Την <strong>αντοχή</strong> σε μέσης διάρκειας προσπάθειες</li>
          <li>Την <strong>πρόοδο</strong> του αθλητή μέσα στο χρόνο</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          📊 Πώς ερμηνεύονται τα αποτελέσματα;
        </h2>
        <p class="mb-4">
          Η απόσταση που διανύεις μέσα στα 12 λεπτά συγκρίνεται με πρότυπες
          τιμές ανά ηλικία και φύλο. Όσο μεγαλύτερη η απόσταση, τόσο καλύτερη
          θεωρείται η φυσική κατάσταση.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-[#0057A0] mb-4">
          💡 Πότε να το χρησιμοποιήσεις
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Για να δεις πού βρίσκεσαι σε επίπεδο αντοχής</li>
          <li>Για να παρακολουθήσεις την πρόοδό σου μέσα στους μήνες</li>
          <li>Ως εργαλείο αξιολόγησης σε ομάδες ή μαθητές</li>
        </ul>
      </section>
    </div>

    <hr class="text-gray-300 my-3" />

    <div class="flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 class="text-2xl font-bold mb-4 text-center">
          Υπολογιστής Τεστ Cooper
        </h2>

        <form @submit.prevent="calculateResult" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Ηλικία</label>
            <input
              v-model.number="age"
              type="number"
              min="11"
              max="100"
              class="w-full border rounded px-3 py-2"
              placeholder="π.χ. 25"
              required
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Φύλο</label>
            <select
              v-model="gender"
              class="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Επιλέξτε φύλο</option>
              <option value="M">Άνδρας</option>
              <option value="F">Γυναίκα</option>
            </select>
          </div>

          <div>
            <label class="block mb-1 font-medium">Επίπεδο προπόνησης</label>
            <select
              v-model="athleteLevel"
              class="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Επιλέξτε επίπεδο</option>
              <option value="general">Γενικός πληθυσμός</option>
              <option value="athlete">Έμπειρος αθλητής</option>
            </select>
          </div>

          <div>
            <label class="block mb-1 font-medium"
              >Απόσταση που διανήθηκε σε 12 λεπτά</label
            >
            <input
              v-model.number="distance"
              type="number"
              step="1"
              min="0"
              class="w-full border rounded px-3 py-2"
              placeholder="π.χ. 2400"
              required
            />
            <span class="text-sm text-gray-500">Σε μέτρα (π.χ. 2400m)</span>
          </div>

          <Button title="Αξιολόγηση Αποτελέσματος" type="submit" />
        </form>

        <div
          v-if="result !== null"
          class="mt-6 p-4 rounded-lg"
          :class="getResultColor()"
        >
          <h3 class="text-lg font-semibold mb-2">Αποτέλεσμα:</h3>
          <p class="text-xl font-bold">{{ result.level }}</p>
          <p class="text-sm mt-2">{{ result.description }}</p>
          <div class="mt-3 text-xs">
            <p>
              <strong>Εύρος για {{ result.level }}:</strong> {{ result.range }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  useHead({
    title: 'Υπολογιστής Τεστ Cooper | Αξιολόγηση Φυσικής Κατάστασης',
    link: [
      {
        rel: 'canonical',
        href: 'https://racelist.gr/cooper-test/',
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          'Αξιολόγησε τη φυσική σου κατάσταση με το Τεστ Cooper βάσει ηλικίας και φύλου. Χρήσιμο εργαλείο για προπόνηση και αξιολόγηση αντοχής.',
      },
      {
        name: 'keywords',
        content:
          'τεστ Cooper, τεστ κουπερ, κουπερ τεστ, τεστ φυσικής κατάστασης, υπολογιστής Cooper, απόσταση σε 12 λεπτά, εργαλείο για δρομείς, cooper test calculator, ρυθμός, αντοχή',
      },
      {
        name: 'author',
        content: 'racelist.gr',
      },
      {
        property: 'og:title',
        content: 'Υπολογιστής Τεστ Cooper | racelist.gr',
      },
      {
        property: 'og:description',
        content:
          'Αξιολόγησε τη φυσική σου κατάσταση με το Τεστ Cooper βάσει ηλικίας και φύλου. Χρήσιμο εργαλείο για προπόνηση και αξιολόγηση αντοχής.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.racelist.gr/cooper-test/',
      },
      {
        property: 'og:image',
        content: 'https://racelist.gr/racelist-banner.jpg',
      },
    ],
  });

  const age = ref(null);
  const gender = ref('');
  const athleteLevel = ref('');
  const distance = ref(null);
  const result = ref(null);

  // Cooper Test standards for general population
  const cooperStandards = {
    general: [
      // Age 11-12
      {
        age: '11-12',
        gender: 'M',
        excellent: '> 2600m',
        good: '2250–2600m',
        fair: '2050–2250m',
        bad: '1950–2050m',
        veryBad: '< 1950m',
      },
      {
        age: '11-12',
        gender: 'F',
        excellent: '> 1950m',
        good: '1750–1950m',
        fair: '1500–1750m',
        bad: '1300–1500m',
        veryBad: '< 1300m',
      },
      // Age 13-14
      {
        age: '13-14',
        gender: 'M',
        excellent: '> 2700m',
        good: '2400–2700m',
        fair: '2200–2399m',
        bad: '2100–2199m',
        veryBad: '< 2100m',
      },
      {
        age: '13-14',
        gender: 'F',
        excellent: '> 2000m',
        good: '1900–2000m',
        fair: '1600–1899m',
        bad: '1500–1599m',
        veryBad: '< 1500m',
      },
      // Age 15-16
      {
        age: '15-16',
        gender: 'M',
        excellent: '> 2800m',
        good: '2500–2800m',
        fair: '2300–2499m',
        bad: '2200–2299m',
        veryBad: '< 2200m',
      },
      {
        age: '15-16',
        gender: 'F',
        excellent: '> 2100m',
        good: '2000–2100m',
        fair: '1700–1999m',
        bad: '1600–1699m',
        veryBad: '< 1600m',
      },
      // Age 17-19
      {
        age: '17-19',
        gender: 'M',
        excellent: '> 3000m',
        good: '2700–3000m',
        fair: '2500–2699m',
        bad: '2300–2499m',
        veryBad: '< 2300m',
      },
      {
        age: '17-19',
        gender: 'F',
        excellent: '> 2300m',
        good: '2100–2300m',
        fair: '1800–2099m',
        bad: '1700–1799m',
        veryBad: '< 1700m',
      },
      // Age 20-29
      {
        age: '20-29',
        gender: 'M',
        excellent: '> 2800m',
        good: '2400–2800m',
        fair: '2200–2399m',
        bad: '1600–2199m',
        veryBad: '< 1600m',
      },
      {
        age: '20-29',
        gender: 'F',
        excellent: '> 2700m',
        good: '2200–2700m',
        fair: '1800–2199m',
        bad: '1500–1799m',
        veryBad: '< 1500m',
      },
      // Age 30-39
      {
        age: '30-39',
        gender: 'M',
        excellent: '> 2700m',
        good: '2300–2700m',
        fair: '1900–2299m',
        bad: '1500–1899m',
        veryBad: '< 1500m',
      },
      {
        age: '30-39',
        gender: 'F',
        excellent: '> 2500m',
        good: '2000–2500m',
        fair: '1700–1999m',
        bad: '1400–1699m',
        veryBad: '< 1400m',
      },
      // Age 40-49
      {
        age: '40-49',
        gender: 'M',
        excellent: '> 2500m',
        good: '2100–2500m',
        fair: '1700–2099m',
        bad: '1400–1699m',
        veryBad: '< 1400m',
      },
      {
        age: '40-49',
        gender: 'F',
        excellent: '> 2300m',
        good: '1900–2300m',
        fair: '1500–1899m',
        bad: '1200–1499m',
        veryBad: '< 1200m',
      },
      // Age 50+
      {
        age: '50+',
        gender: 'M',
        excellent: '> 2400m',
        good: '2000–2400m',
        fair: '1600–1999m',
        bad: '1300–1599m',
        veryBad: '< 1300m',
      },
      {
        age: '50+',
        gender: 'F',
        excellent: '> 2200m',
        good: '1700–2200m',
        fair: '1400–1699m',
        bad: '1100–1399m',
        veryBad: '< 1100m',
      },
    ],
    athlete: [
      {
        age: 'Έμπειρος',
        gender: 'M',
        excellent: '> 3700m',
        good: '3400–3700m',
        fair: '3100–3399m',
        bad: '2800–3099m',
        veryBad: '< 2800m',
      },
      {
        age: 'Έμπειρος',
        gender: 'F',
        excellent: '> 3000m',
        good: '2700–3000m',
        fair: '2400–2699m',
        bad: '2100–2399m',
        veryBad: '< 2100m',
      },
    ],
  };

  function getAgeGroup(userAge) {
    if (userAge >= 11 && userAge <= 12) return '11-12';
    if (userAge >= 13 && userAge <= 14) return '13-14';
    if (userAge >= 15 && userAge <= 16) return '15-16';
    if (userAge >= 17 && userAge <= 19) return '17-19';
    if (userAge >= 20 && userAge <= 29) return '20-29';
    if (userAge >= 30 && userAge <= 39) return '30-39';
    if (userAge >= 40 && userAge <= 49) return '40-49';
    if (userAge >= 50) return '50+';
    return null;
  }

  function evaluateDistance(dist, standard) {
    // Parse the ranges and thresholds from the standard
    const excellentMatch = standard.excellent.match(/> (\d+)/);
    const goodMatch = standard.good.match(/(\d+)–(\d+)/);
    const fairMatch = standard.fair.match(/(\d+)–(\d+)/);
    const badMatch = standard.bad.match(/(\d+)–(\d+)/);
    const veryBadMatch = standard.veryBad.match(/< (\d+)/);

    if (excellentMatch && dist > parseInt(excellentMatch[1])) {
      return { level: 'Εξαιρετικό', range: standard.excellent, color: 'green' };
    }

    if (
      goodMatch &&
      dist >= parseInt(goodMatch[1]) &&
      dist <= parseInt(goodMatch[2])
    ) {
      return { level: 'Καλό', range: standard.good, color: 'blue' };
    }

    if (
      fairMatch &&
      dist >= parseInt(fairMatch[1]) &&
      dist <= parseInt(fairMatch[2])
    ) {
      return { level: 'Μέτριο', range: standard.fair, color: 'yellow' };
    }

    if (
      badMatch &&
      dist >= parseInt(badMatch[1]) &&
      dist <= parseInt(badMatch[2])
    ) {
      return { level: 'Κακό', range: standard.bad, color: 'orange' };
    }

    if (veryBadMatch && dist < parseInt(veryBadMatch[1])) {
      return { level: 'Πολύ Κακό', range: standard.veryBad, color: 'red' };
    }

    return { level: 'Μη καθορισμένο', range: '', color: 'gray' };
  }

  function calculateResult() {
    if (!age.value || !gender.value || !distance.value || !athleteLevel.value) {
      result.value = null;
      return;
    }

    let standards;
    let ageGroup;

    if (athleteLevel.value === 'athlete') {
      standards = cooperStandards.athlete;
      ageGroup = 'Έμπειρος';
    } else {
      standards = cooperStandards.general;
      ageGroup = getAgeGroup(age.value);
      if (!ageGroup) {
        result.value = {
          level: 'Μη έγκυρη ηλικία',
          description: 'Παρακαλώ εισάγετε ηλικία από 11 ετών και άνω.',
          range: '',
          color: 'gray',
        };
        return;
      }
    }

    const standard = standards.find(
      (s) => s.age === ageGroup && s.gender === gender.value
    );

    if (!standard) {
      result.value = {
        level: 'Δεν βρέθηκαν δεδομένα',
        description: 'Δεν υπάρχουν διαθέσιμα δεδομένα για αυτή την κατηγορία.',
        range: '',
        color: 'gray',
      };
      return;
    }

    const evaluation = evaluateDistance(distance.value, standard);

    const descriptions = {
      Εξαιρετικό:
        'Έχετε εξαιρετική φυσική κατάσταση! Συνεχίστε τις προπονήσεις σας.',
      Καλό: 'Έχετε καλή φυσική κατάσταση. Με συνέπεια μπορείτε να βελτιωθείτε περαιτέρω.',
      Μέτριο:
        'Η φυσική σας κατάσταση είναι μέτρια. Εστιάστε σε βελτίωση της αντοχής σας.',
      Κακό: 'Χρειάζεται βελτίωση. Ξεκινήστε ένα πρόγραμμα σταδιακής αύξησης της αντοχής.',
      'Πολύ Κακό':
        'Συνιστάται να ξεκινήσετε ένα δομημένο πρόγραμμα βελτίωσης της φυσικής κατάστασης.',
    };

    result.value = {
      level: evaluation.level,
      description: descriptions[evaluation.level] || '',
      range: evaluation.range,
      color: evaluation.color,
    };
  }

  function getResultColor() {
    if (!result.value) return '';

    const colorMap = {
      green: 'bg-green-100 border-green-300 text-green-800',
      blue: 'bg-blue-100 border-blue-300 text-blue-800',
      yellow: 'bg-yellow-100 border-yellow-300 text-yellow-800',
      orange: 'bg-orange-100 border-orange-300 text-orange-800',
      red: 'bg-red-100 border-red-300 text-red-800',
      gray: 'bg-gray-100 border-gray-300 text-gray-800',
    };

    return colorMap[result.value.color] || colorMap['gray'];
  }
</script>
