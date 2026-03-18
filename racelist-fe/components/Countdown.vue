<template>
  <div
    v-if="remaining"
    class="flex items-center justify-center gap-1.5 mt-2 text-xs font-medium text-[#003d73]"
  >
    <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
        clip-rule="evenodd"
      />
    </svg>
    <span>Απομένουν</span>
    <span
      v-if="remaining.days > 0"
      class="inline-flex items-center rounded bg-[#003d73] text-white px-1.5 py-0.5"
    >
      {{ remaining.days }}μ
    </span>
    <span
      v-if="remaining.hours > 0"
      class="inline-flex items-center rounded bg-[#003d73]/80 text-white px-1.5 py-0.5"
    >
      {{ remaining.hours }}ω
    </span>
    <span
      class="inline-flex items-center rounded bg-[#003d73]/60 text-white px-1.5 py-0.5"
    >
      {{ remaining.minutes }}λ
    </span>
  </div>
</template>

<script setup>
  const props = defineProps({
    date: {
      type: String,
      required: true,
    },
  });

  const now = ref(new Date());
  let timer = null;

  onMounted(() => {
    timer = setInterval(() => {
      now.value = new Date();
    }, 60_000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  const remaining = computed(() => {
    const target = new Date(`${props.date}T00:00:00`);
    const diff = target.getTime() - now.value.getTime();

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  });
</script>
