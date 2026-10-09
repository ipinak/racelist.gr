<template>
  <component
    :is="tag"
    v-if="ad && layout === 'card'"
    class="grid grid-cols-1 sm:grid-cols-[1fr_190px] bg-white border border-line rounded-[14px] overflow-hidden shadow-[0_8px_24px_-14px_rgba(15,31,46,0.35)]"
  >
    <div class="p-6">
      <span
        class="inline-block font-mono text-[10px] tracking-[0.12em] uppercase text-grey border border-line rounded-full px-2.5 py-0.5 mb-3.5"
      >
        {{ label }}
      </span>

      <div class="flex items-center gap-3.5 mb-3">
        <img
          v-if="ad.icon"
          :src="ad.icon"
          alt=""
          width="56"
          height="56"
          loading="lazy"
          class="w-14 h-14 rounded-[13px] shrink-0"
        />
        <div
          v-else
          class="w-14 h-14 rounded-[13px] shrink-0 bg-gradient-to-br from-blue to-blue-deep text-white font-display font-bold text-[22px] flex items-center justify-center"
          aria-hidden="true"
        >
          {{ monogram }}
        </div>
        <div>
          <div class="font-display font-semibold text-xl text-ink">{{ ad.name }}</div>
          <div class="text-xs text-grey">{{ meta }}</div>
        </div>
      </div>

      <p class="text-[15px] text-ink/80 leading-relaxed mb-4 max-w-[420px]">
        {{ ad.description }}
      </p>

      <div v-if="ad.type === 'app'" class="flex items-center gap-5 flex-wrap">
        <a
          :href="href"
          target="_blank"
          rel="noopener sponsored"
          class="inline-block p-2.5 -m-2.5"
          @click="track"
        >
          <img
            :src="APP_STORE_BADGE.src"
            :alt="APP_STORE_BADGE.alt"
            height="40"
            class="h-10 w-auto"
          />
        </a>
        <img
          v-if="ad.qrCode"
          :src="ad.qrCode"
          alt=""
          width="64"
          height="64"
          loading="lazy"
          class="hidden md:block w-16 h-16"
        />
      </div>
      <a
        v-else
        :href="href"
        target="_blank"
        rel="noopener sponsored"
        class="inline-block bg-blue-deep text-paper rounded-full font-semibold px-5 py-2.5 text-sm hover:bg-ink transition-colors"
        @click="track"
      >
        {{ ad.ctaLabel || 'Επισκέψου' }} →
      </a>
    </div>

    <div class="hidden sm:flex bg-paper-dim items-end justify-center pt-5 px-4">
      <img
        v-if="ad.screenshot"
        :src="ad.screenshot"
        alt=""
        loading="lazy"
        class="w-[118px] max-h-[200px] object-cover object-top rounded-t-[14px] border border-line border-b-0"
      />
      <div v-else class="self-center pb-5">
        <img
          v-if="ad.icon"
          :src="ad.icon"
          alt=""
          width="96"
          height="96"
          loading="lazy"
          class="w-24 h-24 rounded-[22px]"
        />
        <div
          v-else
          class="w-24 h-24 rounded-[22px] bg-gradient-to-br from-blue to-blue-deep text-white font-display font-bold text-4xl flex items-center justify-center"
          aria-hidden="true"
        >
          {{ monogram }}
        </div>
      </div>
    </div>
  </component>

  <component
    :is="tag"
    v-else-if="ad && layout === 'banner' && showBanner"
    class="bg-white border-b border-line"
  >
    <div class="max-w-[1180px] mx-auto px-4 md:px-8 py-2.5 flex items-center gap-3.5 text-[13px]">
      <img
        v-if="ad.icon"
        :src="ad.icon"
        alt=""
        width="32"
        height="32"
        class="w-8 h-8 rounded-lg shrink-0"
      />
      <div
        v-else
        class="w-8 h-8 rounded-lg shrink-0 bg-gradient-to-br from-blue to-blue-deep text-white font-display font-bold text-sm flex items-center justify-center"
        aria-hidden="true"
      >
        {{ monogram }}
      </div>
      <div class="flex-1 min-w-0 truncate">
        <span class="font-mono text-[10px] tracking-[0.1em] uppercase text-trail mr-2">{{ label }}</span>
        <b class="font-semibold">{{ ad.name }}</b>
        <span class="hidden sm:inline text-grey"> · {{ ad.description }}</span>
      </div>
      <span v-if="ad.type === 'app'" class="hidden md:inline text-xs text-grey whitespace-nowrap">
        Διαθέσιμο στο App Store
      </span>
      <a
        :href="href"
        target="_blank"
        rel="noopener sponsored"
        class="bg-blue-deep text-paper rounded-full font-semibold px-3.5 py-1.5 text-xs whitespace-nowrap hover:bg-ink transition-colors"
        @click="track"
      >
        {{ ad.type === 'app' ? 'Λήψη' : ad.ctaLabel || 'Επισκέψου' }}
      </a>
      <button
        type="button"
        class="text-grey hover:text-ink px-1"
        aria-label="Κλείσιμο διαφήμισης"
        @click="dismiss"
      >
        ✕
      </button>
    </div>
  </component>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue';
  import {
    APP_STORE_BADGE,
    findHouseAd,
    houseAdHref,
    houseAdPlacements,
  } from '~/shared/houseAds';
  import { useAnalytics } from '~/composables/useAnalytics';

  const props = defineProps({
    // key in houseAdPlacements; picks the ad and default layout
    placement: {
      type: String,
      required: true,
    },
    // overrides the placement's ad
    adId: {
      type: String,
      default: null,
    },
    layout: {
      type: String,
      default: null, // 'card' | 'banner', defaults to the placement's
    },
    label: {
      type: String,
      default: 'Χορηγούμενο',
    },
    tag: {
      type: String,
      default: 'aside',
    },
    // banner only: days to stay hidden after the visitor closes it
    dismissDays: {
      type: Number,
      default: 30,
    },
  });

  const config = computed(() => houseAdPlacements[props.placement] ?? {});
  const layout = computed(() => props.layout || config.value.layout || 'card');
  const ad = computed(() => {
    const id = props.adId || config.value.adId;
    return id ? findHouseAd(id) : null;
  });
  const href = computed(() => houseAdHref(ad.value, props.placement));
  const monogram = computed(() =>
    ad.value.name.trim().normalize('NFD').charAt(0).toUpperCase(),
  );

  // Apple: "App name for iPhone", never "iOS" or "iPhone App name"
  const meta = computed(() => {
    if (ad.value.type === 'app') {
      return `Για ${(ad.value.devices || ['iPhone']).join(' και ')} · App Store`;
    }
    return new URL(ad.value.url).hostname.replace(/^www\./, '');
  });

  const { triggerEvent } = useAnalytics();
  const track = () =>
    triggerEvent('house_ad_click', {
      ad_id: ad.value.id,
      placement: props.placement,
      layout: layout.value,
    });

  // The banner renders only after mount so a dismissed one never flashes on prerendered pages.
  const showBanner = ref(false);
  const storageKey = computed(() => `houseAd:dismissed:${ad.value?.id}`);

  onMounted(() => {
    if (layout.value !== 'banner' || !ad.value) return;
    try {
      const dismissedAt = Number(localStorage.getItem(storageKey.value));
      showBanner.value = !dismissedAt || Date.now() - dismissedAt > props.dismissDays * 864e5;
    } catch {
      showBanner.value = true;
    }
  });

  const dismiss = () => {
    showBanner.value = false;
    try {
      localStorage.setItem(storageKey.value, String(Date.now()));
    } catch {
      // storage unavailable: hidden for this page view only
    }
  };
</script>
