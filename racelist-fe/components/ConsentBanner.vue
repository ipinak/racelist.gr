<template>
  <div
    v-if="mounted && bannerOpen"
    role="dialog"
    aria-labelledby="consent-title"
    aria-describedby="consent-text"
    class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6 pointer-events-none"
  >
    <div
      class="pointer-events-auto max-w-2xl mx-auto bg-paper border border-line rounded-xl shadow-lg p-5 sm:p-6 text-sm text-ink"
    >
      <div
        id="consent-title"
        class="font-mono text-[11px] uppercase tracking-wide text-blue mb-2"
      >
        Cookies
      </div>
      <p id="consent-text" class="text-ink/80 leading-relaxed">
        Χρησιμοποιούμε cookies του Google Analytics για να καταλάβουμε ποιοι
        αγώνες και άρθρα σας ενδιαφέρουν και να βελτιώνουμε το racelist.gr. Τα
        ενεργοποιούμε μόνο αν συμφωνήσετε. Δείτε την
        <NuxtLink to="/cookies/" class="text-blue hover:text-blue-deep underline">
          πολιτική cookies</NuxtLink
        >.
      </p>

      <fieldset v-if="showPrefs" class="mt-4 space-y-3 border-t border-line pt-4">
        <legend class="sr-only">Προτιμήσεις cookies</legend>
        <label class="flex items-start gap-3 opacity-70">
          <input type="checkbox" checked disabled class="mt-1" />
          <span>
            <b class="font-semibold">Απαραίτητα</b><br />
            <span class="text-grey">
              Αποθηκεύουν την επιλογή σας για τα cookies. Είναι πάντα ενεργά.
            </span>
          </span>
        </label>
        <label class="flex items-start gap-3 cursor-pointer">
          <input v-model="prefs.analytics" type="checkbox" class="mt-1" />
          <span>
            <b class="font-semibold">Στατιστικά</b><br />
            <span class="text-grey">
              Google Analytics: ανώνυμα στατιστικά επισκεψιμότητας.
            </span>
          </span>
        </label>
        <label class="flex items-start gap-3 cursor-pointer">
          <input v-model="prefs.ads" type="checkbox" class="mt-1" />
          <span>
            <b class="font-semibold">Διαφήμιση</b><br />
            <span class="text-grey">
              Google Signals: δημογραφικά στοιχεία και στοιχεία ενδιαφερόντων από
              λογαριασμούς Google.
            </span>
          </span>
        </label>
      </fieldset>

      <!-- Accept and reject carry equal weight, as the HDPA requires -->
      <div class="mt-5 flex flex-wrap gap-2.5">
        <button type="button" :class="buttonClass" @click="rejectAll">
          Απόρριψη όλων
        </button>
        <button type="button" :class="buttonClass" @click="acceptAll">
          Αποδοχή όλων
        </button>
        <button
          v-if="showPrefs"
          type="button"
          class="px-4 py-2.5 text-sm font-semibold text-blue hover:text-blue-deep"
          @click="save(prefs)"
        >
          Αποθήκευση επιλογών
        </button>
        <button
          v-else
          type="button"
          class="px-4 py-2.5 text-sm font-semibold text-blue hover:text-blue-deep"
          @click="showPrefs = true"
        >
          Ρυθμίσεις
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, watch, onMounted } from 'vue';
  import { useConsent } from '~/composables/useConsent';

  const { choice, bannerOpen, save, acceptAll, rejectAll } = useConsent();

  const buttonClass =
    'bg-blue-deep text-paper rounded-full font-semibold px-5 py-2.5 text-sm hover:bg-ink transition-colors';

  const showPrefs = ref(false);
  const prefs = reactive({ analytics: false, ads: false });

  // Reopening from the footer starts from the current choice, with the
  // category toggles already visible
  watch(bannerOpen, (open) => {
    if (!open) return;
    prefs.analytics = !!choice.value?.analytics;
    prefs.ads = !!choice.value?.ads;
    showPrefs.value = !!choice.value;
  });

  // Prerendered pages never show the banner; it appears after hydration
  const mounted = ref(false);
  onMounted(() => (mounted.value = true));
</script>
