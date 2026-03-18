<template>
  <div
    v-if="remaining"
    class="flex justify-center items-center gap-1.5 sm:gap-4 my-6"
  >
    <div v-if="remaining.days > 0" class="flip-unit">
      <div :key="'d-' + remaining.days" class="flip-card">
        <div class="flip-card-inner">
          <span class="flip-value">{{ pad(remaining.days) }}</span>
        </div>
      </div>
      <span class="flip-label">Μέρες</span>
    </div>

    <div v-if="remaining.days > 0" class="flip-separator">:</div>

    <div class="flip-unit">
      <div :key="'h-' + remaining.hours" class="flip-card">
        <div class="flip-card-inner">
          <span class="flip-value">{{ pad(remaining.hours) }}</span>
        </div>
      </div>
      <span class="flip-label">Ώρες</span>
    </div>

    <div class="flip-separator">:</div>

    <div class="flip-unit">
      <div :key="'m-' + remaining.minutes" class="flip-card">
        <div class="flip-card-inner">
          <span class="flip-value">{{ pad(remaining.minutes) }}</span>
        </div>
      </div>
      <span class="flip-label">Λεπτά</span>
    </div>

    <div class="flip-separator">:</div>

    <div class="flip-unit">
      <div :key="'s-' + remaining.seconds" class="flip-card">
        <div class="flip-card-inner">
          <span class="flip-value">{{ pad(remaining.seconds) }}</span>
        </div>
      </div>
      <span class="flip-label">Δευτ/α</span>
    </div>
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

  const pad = (n) => String(n).padStart(2, '0');

  onMounted(() => {
    timer = setInterval(() => {
      now.value = new Date();
    }, 1000);
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
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  });
</script>

<style scoped>
  .flip-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flip-card {
    position: relative;
    width: 52px;
    height: 58px;
    perspective: 300px;
  }

  .flip-card-inner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #003d73 50%, #00325e 50%);
    border-radius: 8px;
    box-shadow:
      0 2px 8px rgba(0, 57, 100, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    animation: flip-drop 0.5s ease-in-out;
  }

  .flip-card-inner::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.3);
  }

  .flip-value {
    font-family: 'Courier New', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    color: #e0f0ff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    letter-spacing: 2px;
  }

  .flip-label {
    margin-top: 4px;
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #003d73;
    letter-spacing: 1px;
  }

  .flip-separator {
    font-size: 1.2rem;
    font-weight: 700;
    color: #003d73;
    margin-bottom: 16px;
  }

  @keyframes flip-drop {
    0% {
      transform: rotateX(90deg);
      opacity: 0;
    }
    50% {
      transform: rotateX(-10deg);
      opacity: 1;
    }
    70% {
      transform: rotateX(5deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @media (min-width: 640px) {
    .flip-card {
      width: 90px;
      height: 100px;
    }

    .flip-value {
      font-size: 2.5rem;
    }

    .flip-separator {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    .flip-label {
      font-size: 0.75rem;
      margin-top: 6px;
    }
  }
</style>
