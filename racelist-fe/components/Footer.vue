<template>
  <footer class="bg-[#0057A0] text-white text-sm text-center py-6">
    <!-- Subfooter Section -->
    <div
      class="subfooter mb-6 grid gap-4 grid-cols-1 md:grid-cols-4 justify-center"
    >
      <div class="text-left pl-4 py-2">
        <h3 class="text-3xl py-2">Racelist</h3>
        <hr class="p-1" />
        <p>
          Βρείτε αγώνες δρόμου και βουνού, άρθρα για το τρέξιμο και διάφορα
          χρήσιμα εργαλεία για να βελτιώσετε την προπονησή σας.
        </p>
      </div>

      <div>
        <ul class="space-y-2">
          <li class="title text-xl font-bold mb-2">About</li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/arthra">Άρθρα</NuxtLink></li>
          <li><NuxtLink to="/about">Σχετικά με μας</NuxtLink></li>
          <li>
            <NuxtLink to="/agwnes">
              Καλένταρι αγώνων δρόμου και βουνού ανα μήνα
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <ul class="space-y-2">
          <li class="title text-xl font-bold mb-2">Βοηθήματα Δρομέων</li>
          <li>
            <NuxtLink to="/tools-for-runners">Όλα τα βοηθήματα</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hydration-calculator">
              Υπολογιστής Ενυδάτωσης
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cooper-test">Υπολογιστής Cooper Test</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/gel-calculator">
              Υπολογιστής Ενεργειακών Gel
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/pace-calculator">
              Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο (Pace Calculator)
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <hr class="py-2 text-gray-200/30" />

    <!-- Copyright -->
    <div class="copy text-xs p-4">
      Copyright © {{ new Date().getFullYear() }} racelist.gr | Developed with
      ☕️ by
      <a
        href="https://www.techpals.eu/?utm_source=racelist.gr&utm_content=footer&utm_medium=referral"
        class="text-white font-bold"
        target="_blank"
      >
        TechPals
      </a>
    </div>
  </footer>
</template>
