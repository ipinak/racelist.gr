<template>
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
    <div class="flex items-start space-x-3">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-blue-600 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-[#0057A0] mb-2">
          Στείλτε μας τον αγώνα σας!
        </h3>
        <p class="text-gray-700 mb-3">
          Γνωρίζετε για έναν αγώνα που δεν υπάρχει στο racelist.gr; Στείλτε μας
          τα στοιχεία και θα τον προσθέσουμε στο κατάλογό μας.
        </p>
        <div class="bg-white rounded-md p-4 border border-blue-200">
          <div class="flex items-center space-x-2 mb-2">
            <span class="text-sm font-medium text-gray-600">Email:</span>
            <a
              href="mailto:info@racelist.gr"
              class="text-[#0057A0] hover:text-[#0057A0]/70 font-medium transition-colors"
            >
              hey@racelist.gr
            </a>
          </div>
          <p class="text-sm text-gray-600">
            Παρακαλώ συμπεριλάβετε: τίτλο αγώνα, ημερομηνία, τοποθεσία,
            αποστάσεις, και σύνδεσμο εγγραφής.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed for this informational component
</script>
