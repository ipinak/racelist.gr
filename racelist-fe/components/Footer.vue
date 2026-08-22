<template>
  <footer class="bg-ink text-paper">
    <div
      class="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid gap-8 grid-cols-1 md:grid-cols-4"
    >
      <div class="text-left md:col-span-1">
        <div class="font-display font-bold text-lg text-paper mb-2">
          racelist.gr
        </div>
        <p class="text-sm text-paper/60 leading-relaxed">
          Χαρτογραφούμε κάθε αγώνα δρόμου στην Ελλάδα. Βρείτε αγώνες
          τρεξίματος δρόμου και βουνού, άρθρα για το τρέξιμο και χρήσιμα
          εργαλεία για την προπόνησή σας.
        </p>
      </div>

      <div>
        <div
          class="font-mono text-xs uppercase tracking-wider text-flag mb-3"
        >
          About
        </div>
        <ul class="space-y-2 text-sm text-paper/60">
          <li>
            <NuxtLink to="/faq/" class="hover:text-paper transition-colors">
              FAQ
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/arthra/" class="hover:text-paper transition-colors">
              Άρθρα
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about/" class="hover:text-paper transition-colors">
              Σχετικά με μας
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/agwnes/" class="hover:text-paper transition-colors">
              Καλένταρι αγώνων δρόμου και βουνού ανα μήνα
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div
          class="font-mono text-xs uppercase tracking-wider text-flag mb-3"
        >
          Βοηθήματα Δρομέων
        </div>
        <ul class="space-y-2 text-sm text-paper/60">
          <li>
            <NuxtLink
              to="/tools-for-runners/"
              class="hover:text-paper transition-colors"
            >
              Όλα τα βοηθήματα
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/hydration-calculator/"
              class="hover:text-paper transition-colors"
            >
              Υπολογιστής Ενυδάτωσης
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/cooper-test/"
              class="hover:text-paper transition-colors"
            >
              Υπολογιστής Cooper Test
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/gel-calculator/"
              class="hover:text-paper transition-colors"
            >
              Υπολογιστής Ενεργειακών Gel
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pace-calculator/"
              class="hover:text-paper transition-colors"
            >
              Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο (Pace Calculator)
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div
        class="max-w-[1180px] mx-auto px-4 md:px-8 py-5 text-xs text-paper/60 font-mono text-center"
      >
        Copyright © {{ new Date().getFullYear() }} racelist.gr | Developed
        with ☕️ by
        <a
          href="https://www.techpals.eu/?utm_source=racelist.gr&utm_content=footer&utm_medium=referral"
          class="text-paper font-semibold hover:text-sky transition-colors"
          target="_blank"
        >
          TechPals
        </a>
      </div>
    </div>
  </footer>
</template>
