<template>
  <aside class="bg-paper-dim border-l-4 border-blue rounded-lg p-6 my-8">
    <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div>
        <p class="font-mono text-xs tracking-[2px] uppercase text-blue mb-1">
          Η γνώμη μας
        </p>
        <p class="font-display text-2xl font-semibold text-ink">
          {{ product.name }}
        </p>
      </div>
      <div v-if="rating !== null" class="text-right">
        <span class="font-display text-4xl font-semibold text-blue-deep">
          {{ ratingLabel }}
        </span>
        <span class="text-grey">/{{ bestRating }}</span>
      </div>
    </div>

    <p v-if="summary" class="text-ink mb-5">{{ summary }}</p>

    <div class="grid gap-6 sm:grid-cols-2 mb-5">
      <div v-if="pros.length">
        <p class="font-semibold text-ink mb-2">Υπέρ</p>
        <ul class="space-y-1.5">
          <li v-for="item in pros" :key="item" class="flex gap-2">
            <span class="text-blue font-bold" aria-hidden="true">+</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div v-if="cons.length">
        <p class="font-semibold text-ink mb-2">Κατά</p>
        <ul class="space-y-1.5">
          <li v-for="item in cons" :key="item" class="flex gap-2">
            <span class="text-flag font-bold" aria-hidden="true">−</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <dl
      v-if="price || availability"
      class="border-t border-line pt-4 grid gap-x-6 gap-y-1 sm:grid-cols-[auto_1fr] text-sm"
    >
      <template v-if="price">
        <dt class="font-semibold text-ink">Τιμή</dt>
        <dd class="text-ink">{{ priceLabel }}</dd>
      </template>
      <template v-if="availability">
        <dt class="font-semibold text-ink">Διαθεσιμότητα στην Ελλάδα</dt>
        <dd class="text-ink">{{ availability }}</dd>
      </template>
    </dl>
    <p v-if="updated" class="text-xs text-grey mt-3">
      Τελευταία ενημέρωση: {{ updatedLabel }}
    </p>

    <div v-if="buyLinks.length" class="flex flex-wrap gap-3 mt-5">
      <CtaButton
        v-for="link in buyLinks"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="sponsored noopener"
        size="sm"
      >
        {{ link.label }}
      </CtaButton>
    </div>
  </aside>
</template>

<script setup>
  import { computed } from 'vue';

  // One source for both the visible verdict box and the Product/Review
  // JSON-LD, so the structured data always matches what readers see
  // (Google requires that). Only pass a rating, pros and cons the article
  // actually stands behind.
  const props = defineProps({
    // { name, brand, image } — image as an absolute URL
    product: {
      type: Object,
      required: true,
    },
    // Canonical URL of the review page
    url: {
      type: String,
      required: true,
    },
    // Our score, or null when the review doesn't give one. Without a score
    // no Review is emitted, because Google rejects a review without a rating.
    rating: {
      type: Number,
      default: null,
    },
    bestRating: {
      type: Number,
      default: 10,
    },
    summary: {
      type: String,
      default: '',
    },
    pros: {
      type: Array,
      default: () => [],
    },
    cons: {
      type: Array,
      default: () => [],
    },
    // { amount: 99.99, currency: 'EUR' }
    price: {
      type: Object,
      default: null,
    },
    availability: {
      type: String,
      default: '',
    },
    // YYYY-MM-DD the price/availability were last checked
    updated: {
      type: String,
      default: '',
    },
    // [{ label: 'Δες τιμή στο Skroutz', href: 'https://...' }]
    buyLinks: {
      type: Array,
      default: () => [],
    },
  });

  const ratingLabel = computed(() =>
    props.rating === null ? '' : props.rating.toLocaleString('el-GR'),
  );

  const priceLabel = computed(() =>
    props.price
      ? new Intl.NumberFormat('el-GR', {
          style: 'currency',
          currency: props.price.currency,
        }).format(props.price.amount)
      : '',
  );

  // "28 Οκτωβρίου 2026"; UTC so a plain YYYY-MM-DD never shifts a day
  const updatedLabel = computed(() =>
    props.updated
      ? new Date(props.updated).toLocaleDateString('el-GR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        })
      : '',
  );

  const itemList = (items) => ({
    '@type': 'ItemList',
    itemListElement: items.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
    })),
  });

  useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.product.name,
    ...(props.product.brand
      ? { brand: { '@type': 'Brand', name: props.product.brand } }
      : {}),
    ...(props.product.image ? { image: props.product.image } : {}),
    ...(props.summary ? { description: props.summary } : {}),
    ...(props.price
      ? {
          offers: {
            '@type': 'Offer',
            price: props.price.amount,
            priceCurrency: props.price.currency,
            url: props.url,
          },
        }
      : {}),
    ...(props.rating !== null
      ? {
          review: {
            '@type': 'Review',
            url: props.url,
            author: {
              '@type': 'Organization',
              name: 'racelist.gr',
              url: 'https://racelist.gr',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: props.rating,
              bestRating: props.bestRating,
              worstRating: 0,
            },
            ...(props.pros.length ? { positiveNotes: itemList(props.pros) } : {}),
            ...(props.cons.length ? { negativeNotes: itemList(props.cons) } : {}),
          },
        }
      : {}),
  });
</script>
