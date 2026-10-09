<template>
  <section v-if="products.length" ref="el" class="mt-10" :data-ad-type="'gear'">
    <div class="flex flex-wrap items-baseline justify-between gap-3 mb-5">
      <div>
        <div class="font-mono text-[11px] uppercase tracking-wide text-blue mb-1">
          Εξοπλισμός · Διαφήμιση
        </div>
        <h2 class="font-display font-semibold text-2xl tracking-[-0.5px] text-ink">
          Για {{ trail ? 'ορεινό' : 'οδικό' }}{{ longest ? ` ${longest}` : '' }}
        </h2>
      </div>
    </div>

    <ul
      class="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:mx-0 md:px-0 list-none"
    >
      <li
        v-for="product in products"
        :key="`${product.campaignId}-${product.id}`"
        class="snap-start shrink-0 w-[200px] h-[280px] md:w-[240px] md:h-[300px]"
      >
        <a
          :href="adHref(product.url, product.campaignId, 'gear_shelf', product.id)"
          target="_blank"
          rel="sponsored noopener"
          class="flex flex-col h-full bg-white border border-line rounded-[10px] overflow-hidden hover:border-blue transition-colors"
          @click="click({ product_id: product.id })"
        >
          <img
            :src="product.image"
            :alt="product.title"
            width="240"
            height="170"
            loading="lazy"
            class="w-full h-[150px] md:h-[170px] object-cover bg-paper-dim border-b border-line"
          />
          <div class="flex flex-col gap-1 p-3.5 flex-1">
            <div class="font-mono text-[10px] uppercase tracking-[0.08em] text-grey">
              {{ product.shop }}
            </div>
            <div class="font-display font-semibold text-sm text-ink leading-snug line-clamp-2">
              {{ product.title }}
            </div>
            <div class="mt-auto flex items-center justify-between">
              <span class="font-semibold text-ink">{{ price(product.price) }}</span>
              <span class="font-mono text-[11px] text-blue">ΔΕΣ →</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { adHref, distanceKm, findGearProducts } from '~/shared/ads';
  import { isTrail } from '~/shared/raceType';
  import { useAdDate, useAdTracking } from '~/composables/useAds';

  const props = defineProps({
    race: {
      type: Object,
      required: true,
    },
  });

  const today = useAdDate();
  const products = computed(() => findGearProducts(props.race, today.value));
  const trail = computed(() => isTrail(props.race));

  const longest = computed(() => {
    const km = (props.race.Distances || []).map(distanceKm).filter((d) => d);
    return km.length ? `${Math.max(...km)}km` : '';
  });

  const formatter = new Intl.NumberFormat('el-GR', { style: 'currency', currency: 'EUR' });
  const price = (value) => (value == null ? '' : formatter.format(value));

  const el = ref(null);
  const { click } = useAdTracking(el, () =>
    products.value.length
      ? {
          ad_type: 'gear_shelf',
          campaign_id: [...new Set(products.value.map((p) => p.campaignId))].join(','),
          placement: 'race-page',
          race: props.race.Slug,
        }
      : null,
  );
</script>
