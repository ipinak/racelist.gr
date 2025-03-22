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
          <li><NuxtLink to="/agwnes">Καλένταρι αγώνων δρόμου και βουνού ανα μήνα</NuxtLink></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="copy text-xs">
      Copyright © {{ new Date().getFullYear() }} racelist.gr |
      Developed with ☕️ by
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


