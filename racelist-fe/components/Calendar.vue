<template>
  <div class="text-center my-6">
    <div class="flex justify-center items-center gap-4 mb-4">
      <button
        @click="prevMonth"
        class="bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#ff00ff]"
      >
        ◀ Προηγούμενος
      </button>
      <span class="text-lg font-bold">{{ formattedMonth }}</span>
      <button
        @click="nextMonth"
        class="bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#ff00ff]"
      >
        Επόμενος ▶
      </button>
    </div>

    <table
      class="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded shadow"
    >
      <thead>
        <tr>
          <th
            v-for="day in days"
            :key="day"
            class="bg-[#9BBEC4] p-2 text-gray-800"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, i) in calendar" :key="i">
          <td
            v-for="(day, j) in week"
            :key="j"
            class="h-16 border border-gray-200 text-center relative"
          >
            <span v-if="day">{{ day }}</span>
            <div
              v-if="hasEvent(day)"
              class="w-2 h-2 bg-[#ff00ff] rounded-full absolute bottom-1 left-1/2 -translate-x-1/2"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';

  const emit = defineEmits(['updateDate']);
  const props = defineProps({ races: Array });

  const today = new Date();
  const currentDate = ref(new Date());

  const days = ['Κυρ.', 'Δευτ', 'Τρ.', 'Τετ.', 'Πεμ.', 'Παρ.', 'Σατ.'];

  const formattedMonth = computed(() =>
    currentDate.value.toLocaleString('el-GR', {
      month: 'long',
      year: 'numeric',
    })
  );

  const calendar = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const matrix = [];
    let dayCount = 1;

    for (let row = 0; row < 6; row++) {
      const week = [];
      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col < firstDay) || dayCount > daysInMonth) {
          week.push('');
        } else {
          week.push(dayCount);
          dayCount++;
        }
      }
      matrix.push(week);
    }

    return matrix;
  });

  const hasEvent = (day) => {
    if (!day) return false;
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth() + 1;
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`;
    return props.races?.some((r) => r.Date === dateStr);
  };

  const prevMonth = () => {
    currentDate.value.setMonth(currentDate.value.getMonth() - 1);
    currentDate.value = new Date(currentDate.value);
  };

  const nextMonth = () => {
    currentDate.value.setMonth(currentDate.value.getMonth() + 1);
    currentDate.value = new Date(currentDate.value);
  };

  watch(
    currentDate,
    () => {
      emit('updateDate', currentDate.value);
    },
    { immediate: true }
  );
</script>
