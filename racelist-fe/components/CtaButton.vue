<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    class="bg-blue-deep text-paper rounded-full font-semibold hover:bg-ink transition-colors"
    :class="[sizeClasses, block ? 'block text-center' : 'inline-block']"
  >
    <slot />
  </a>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: null,
    },
    rel: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md', // 'sm' | 'md' | 'lg'
    },
  });

  const sizeClasses = computed(() => {
    if (props.size === 'sm') return 'px-4 py-3 text-sm';
    if (props.size === 'lg') return 'px-7 py-3 text-sm';
    return 'px-5 py-2.5 text-sm';
  });
</script>
