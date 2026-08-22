<template>
  <div>
    <!-- HERO -->
    <section class="pt-16 md:pt-20 pb-0 px-4 md:px-8">
      <div class="max-w-[1180px] mx-auto">
        <div
          class="font-mono text-xs tracking-[2px] uppercase text-blue mb-5 flex items-center gap-2.5"
        >
          <span class="w-6 h-px bg-blue inline-block" />
          {{ races.length }} ΔΙΑΔΡΟΜΕΣ ΧΑΡΤΟΓΡΑΦΗΜΕΝΕΣ ΓΙΑ ΤΟ {{ currentDate.getFullYear() }}
        </div>
        <h1
          class="font-display font-semibold text-4xl md:text-[60px] leading-[1.05] tracking-[-1.5px] max-w-3xl mb-5"
        >
          Κάθε αγώνας έχει<br />
          ένα προφίλ. <span class="text-blue italic font-medium">Διάβασέ το</span><br />
          πριν τρέξεις.
        </h1>
        <p class="text-[17px] text-grey max-w-lg leading-relaxed mb-8">
          Ημερολόγιο αγώνων δρόμου και βουνού σε όλη την Ελλάδα, με δεδομένα
          διαδρομής και εργαλεία προπόνησης — για να ξέρεις τι σε περιμένει.
        </p>
        <div class="flex flex-wrap gap-4 mb-14">
          <NuxtLink
            to="/agwnes"
            class="bg-blue-deep text-paper px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:bg-ink transition-colors"
          >
            Εξερεύνησε αγώνες →
          </NuxtLink>
          <NuxtLink
            to="/tools-for-runners"
            class="border-[1.5px] border-blue-deep text-blue-deep px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-paper-dim transition-colors"
          >
            Εργαλεία δρομέα
          </NuxtLink>
        </div>
      </div>
    </section>

    <ElevationSpine />

    <!-- RACES -->
    <section class="px-4 md:px-8 py-14">
      <div class="max-w-[1180px] mx-auto">
        <div class="flex flex-wrap justify-between items-baseline gap-4 mb-9">
          <div>
            <div class="font-mono text-[11px] uppercase tracking-wide text-blue mb-1">
              Ημερολόγιο
            </div>
            <div class="font-display font-semibold text-2xl tracking-[-0.5px]">
              Επερχόμενοι αγώνες
            </div>
          </div>
          <NuxtLink
            to="/agwnes"
            class="font-mono text-xs font-medium text-blue border-b border-blue pb-0.5"
          >
            ΟΛΟ ΤΟ ΗΜΕΡΟΛΟΓΙΟ →
          </NuxtLink>
        </div>

        <RaceCalendar :races="races" />
      </div>
    </section>

    <!-- TOOLS -->
    <section class="bg-blue-deep text-paper px-4 md:px-8 py-14">
      <div class="max-w-[1180px] mx-auto">
        <div class="flex flex-wrap justify-between items-baseline gap-4 mb-8">
          <div>
            <div class="font-mono text-[11px] uppercase tracking-wide text-sky mb-1">
              Δεδομένα δρομέα
            </div>
            <div class="font-display font-semibold text-2xl tracking-[-0.5px] text-paper">
              Εργαλεία προπόνησης
            </div>
          </div>
          <NuxtLink
            to="/tools-for-runners"
            class="font-mono text-xs font-medium text-flag border-b border-flag pb-0.5"
          >
            ΟΛΑ ΤΑ ΕΡΓΑΛΕΙΑ →
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-7">
          <NuxtLink
            v-for="tool in tools"
            :key="tool.href"
            :to="tool.href"
            class="border-t-2 border-white/25 pt-4 hover:border-flag transition-colors"
          >
            <div class="font-mono text-xs text-flag mb-2.5">{{ tool.code }}</div>
            <div class="text-base sm:text-[17px] font-semibold mb-2">{{ tool.name }}</div>
            <div class="text-[13px] text-paper/70 leading-relaxed">{{ tool.desc }}</div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ARTICLES -->
    <section class="px-4 md:px-8 pt-14">
      <div class="max-w-[1180px] mx-auto">
        <div class="flex flex-wrap justify-between items-baseline gap-4 mb-9">
          <div>
            <div class="font-mono text-[11px] uppercase tracking-wide text-blue mb-1">
              Γνώση
            </div>
            <div class="font-display font-semibold text-2xl tracking-[-0.5px]">
              Πρόσφατα άρθρα
            </div>
          </div>
          <NuxtLink
            to="/arthra"
            class="font-mono text-xs font-medium text-blue border-b border-blue pb-0.5"
          >
            ΟΛΑ ΤΑ ΑΡΘΡΑ →
          </NuxtLink>
        </div>
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line max-w-[1180px] mx-auto">
        <ArticleComponent
          v-for="(article, i) in latestArticles"
          :key="article.href"
          :article="article"
          :latest="i === 0"
        />
      </ul>
    </section>

    <section class="px-4 md:px-8 py-14">
      <div class="max-w-[1180px] mx-auto">
        <h2 class="font-display text-xl font-semibold text-center my-6">
          Ενημερωθείτε για νέους αγώνες &amp; άρθρα
        </h2>
        <div class="flex justify-center">
          <NewsletterSubmissionForm />
        </div>

        <div class="flex justify-center mt-10 max-w-xl mx-auto">
          <SubmitRaceInfo />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import SubmitRaceInfo from '@/components/SubmitRaceInfo.vue';
  import NewsletterSubmissionForm from '@/components/NewsletterSubmissionForm.vue';
  import RaceCalendar from '@/components/RaceCalendar.vue';
  import ElevationSpine from '@/components/ElevationSpine.vue';
  import ArticleComponent from '@/components/ArticleComponent.vue';
  import { ref, onMounted } from 'vue';

  const races = ref([]);
  const currentDate = ref(new Date());

  const { articles } = useArticles();
  const latestArticles = articles.slice(0, 3);

  const tools = [
    { code: 'PACE', name: 'Υπολογιστής ρυθμού', desc: 'Στόχευσε τον χρόνο τερματισμού και δες τον ρυθμό ανά χιλιόμετρο.', href: '/pace-calculator' },
    { code: 'H₂O', name: 'Πλάνο ενυδάτωσης', desc: 'Ανάλογα με απόσταση, θερμοκρασία και υψόμετρο διαδρομής.', href: '/hydration-calculator' },
    { code: 'FUEL', name: 'Πλάνο gel αγώνα', desc: 'Πότε και πόσα gel να πάρεις στη διαδρομή σου.', href: '/gel-calculator' },
    { code: 'VO₂', name: 'Τεστ Cooper', desc: 'Εκτίμησε την αερόβια ικανότητά σου σε 12 λεπτά.', href: '/cooper-test' },
    { code: 'TIME', name: 'Πρόβλεψη χρόνου αγώνα', desc: 'Υπολόγισε τον αναμενόμενο χρόνο σου σε νέα απόσταση.', href: '/race-time-predictor' },
    { code: 'SHOE', name: 'Κόστος παπουτσιών', desc: 'Παρακολούθησε το κόστος ανά χιλιόμετρο των παπουτσιών σου.', href: '/shoe-cost-tracker' },
  ];

  onMounted(async () => {
    const res = await fetch('/min.races.json');
    races.value = await res.json();
  });
</script>
