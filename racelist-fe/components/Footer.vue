<template>
  <footer class="bg-[#9BBEC4] text-white text-sm text-center py-6">
    <!-- Subfooter Section -->
    <div class="subfooter mb-6">
      <div class="section">
        <ul class="space-y-2">
          <li class="title text-lg font-bold mb-2">About</li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/about">Σχετικά με μας</NuxtLink></li>
          <li><NuxtLink to="/arthra">Άρθρα</NuxtLink></li>
          <li>
            <NuxtLink to="/agwnes"
              >Καλένταρι αγώνων δρόμου και βουνού ανα μήνα</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/cooper-test">Υπολογιστής Cooper Test</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pace-calculator">
              Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο (Pace Calculator)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gel-calculator">
              Υπολογιστής Ενεργειακών Gel
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
        class="text-[#00ffff] font-bold"
        target="_blank"
      >
        TechPals
      </a>
    </div>
  </footer>
</template>
