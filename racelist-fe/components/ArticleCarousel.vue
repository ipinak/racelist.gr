<template>
  <div class="relative w-full max-w-6xl mx-auto px-4">
    <h2 class="text-2xl text-center my-6 text-[#0057A0]">{{ title }}</h2>

    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
      >
        <div
          v-for="article in displayedArticles"
          :key="article.href"
          class="flex-shrink-0 px-2"
          :style="{ width: `${slideWidth}%` }"
        >
          <div
            class="border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-gray-100 transition h-full"
          >
            <NuxtLink
              :to="article.href"
              class="text-lg font-semibold text-[#0057A0] hover:text-[#0057A0]/60 capitalize block h-full flex items-center justify-center"
            >
              {{ article.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button
        v-if="showPrevious"
        @click="previousSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Previous articles"
      >
        <svg
          class="w-6 h-6 text-[#0057A0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        v-if="showNext"
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Next articles"
      >
        <svg
          class="w-6 h-6 text-[#0057A0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Dots indicator -->
    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(dot, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="
          currentSlide === index
            ? 'bg-[#0057A0]'
            : 'bg-gray-300 hover:bg-gray-400'
        "
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- View All Articles Link -->
    <div class="flex justify-center mt-6">
      <NuxtLink
        to="/arthra"
        class="inline-flex items-center px-6 py-3 text-[#0057A0] font-medium rounded-lg hover:text-[#0057A0]/80 transition-colors duration-200"
      >
        Δείτε όλα τα άρθρα
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const props = defineProps({
    count: {
      type: Number,
      default: 9,
    },
    title: {
      type: String,
      default: 'Τελευταία Άρθρα',
    },
    slidesToShow: {
      type: Number,
      default: 3,
    },
  });

  const { articles } = useArticles();

  const currentSlide = ref(0);
  const slideWidth = computed(() => 100 / props.slidesToShow);

  const displayedArticles = computed(() => {
    return articles.toReversed().slice(0, props.count);
  });

  const totalSlides = computed(() => {
    return Math.ceil(displayedArticles.value.length / props.slidesToShow);
  });

  const showPrevious = computed(() => currentSlide.value > 0);
  const showNext = computed(() => currentSlide.value < totalSlides.value - 1);

  const nextSlide = () => {
    if (showNext.value) {
      currentSlide.value++;
    }
  };

  const previousSlide = () => {
    if (showPrevious.value) {
      currentSlide.value--;
    }
  };

  const goToSlide = (index) => {
    currentSlide.value = index;
  };

  // Auto-play functionality (optional)
  const autoPlayInterval = ref(null);

  const startAutoPlay = () => {
    autoPlayInterval.value = setInterval(() => {
      if (showNext.value) {
        nextSlide();
      } else {
        currentSlide.value = 0;
      }
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
      clearInterval(autoPlayInterval.value);
      autoPlayInterval.value = null;
    }
  };

  onMounted(() => {
    startAutoPlay();
  });

  onUnmounted(() => {
    stopAutoPlay();
  });
</script>
