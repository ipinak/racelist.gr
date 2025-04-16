import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

export function useBreakpoint() {
  const { width } = useWindowSize();

  return computed(() => {
    if (width.value < 640) return 'sm';
    if (width.value < 1024) return 'md';
    return 'lg';
  })
}