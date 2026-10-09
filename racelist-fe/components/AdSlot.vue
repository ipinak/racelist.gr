<template>
  <aside
    v-if="campaign"
    ref="el"
    class="mx-auto"
    :class="frameClass"
    :data-ad-campaign="campaign.id"
  >
    <div class="font-mono text-[10px] tracking-[0.12em] uppercase text-grey mb-1.5">
      Διαφήμιση
    </div>
    <a
      :href="href"
      target="_blank"
      rel="sponsored noopener"
      class="block bg-paper-dim border border-line overflow-hidden"
      :class="boxClass"
      @click="click()"
    >
      <picture v-if="size === 'leaderboard'">
        <source media="(min-width: 768px)" :srcset="campaign.creatives.leaderboard" />
        <img
          :src="campaign.creatives['mobile-banner']"
          :alt="campaign.alt || campaign.advertiser"
          width="320"
          height="100"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </picture>
      <img
        v-else
        :src="campaign.creatives[size]"
        :alt="campaign.alt || campaign.advertiser"
        :width="AD_SIZES[size].width"
        :height="AD_SIZES[size].height"
        loading="lazy"
        class="w-full h-full object-cover"
      />
    </a>
  </aside>

  <HouseAd
    v-else-if="fallback"
    :placement="fallback"
    :class="frameClass"
    class="mx-auto"
  />
</template>

<script setup>
  import { computed, ref } from 'vue';
  import HouseAd from '~/components/HouseAd.vue';
  import { AD_SIZES, adHref, findDisplayCampaign } from '~/shared/ads';
  import { useAdDate, useAdTracking } from '~/composables/useAds';

  const props = defineProps({
    // 'leaderboard' (728×90, 320×100 on mobile) | 'medium-rectangle' (300×250) | 'half-page' (300×600)
    size: {
      type: String,
      required: true,
      validator: (v) => ['leaderboard', 'medium-rectangle', 'half-page'].includes(v),
    },
    // where the slot is, matched against a campaign's "placements": 'article', 'race-page', …
    placement: {
      type: String,
      required: true,
    },
    // houseAdPlacements key to show when the slot is unsold; omitted = render nothing
    fallback: {
      type: String,
      default: null,
    },
  });

  const today = useAdDate();
  const campaign = computed(() =>
    findDisplayCampaign(props.size, props.placement, today.value),
  );
  const href = computed(() =>
    adHref(campaign.value.url, campaign.value.id, 'display', `${props.placement}-${props.size}`),
  );

  const frameClass = computed(
    () =>
      ({
        leaderboard: 'w-[320px] md:w-[728px] max-w-full',
        'medium-rectangle': 'w-[300px]',
        'half-page': 'w-[300px]',
      })[props.size],
  );
  const boxClass = computed(
    () =>
      ({
        leaderboard: 'h-[100px] md:h-[90px]',
        'medium-rectangle': 'h-[250px]',
        'half-page': 'h-[600px]',
      })[props.size],
  );

  const el = ref(null);
  const { click } = useAdTracking(el, () =>
    campaign.value
      ? {
          ad_type: 'display',
          campaign_id: campaign.value.id,
          ad_size: props.size,
          placement: props.placement,
        }
      : null,
  );
</script>
