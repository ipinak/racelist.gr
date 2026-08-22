<template>
  <div class="bg-paper-dim border border-line rounded-lg p-6 mb-8">
    <div class="flex items-start space-x-3">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-blue mt-0.5"
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
        <h3 class="font-display text-lg font-semibold text-ink mb-2">
          Στείλτε μας τον αγώνα σας!
        </h3>
        <p class="text-grey mb-3">
          Γνωρίζετε για έναν αγώνα που δεν υπάρχει στο racelist.gr; Στείλτε μας
          τα στοιχεία και θα τον προσθέσουμε στο κατάλογό μας.
        </p>
        <div class="bg-paper rounded-md p-4 border border-line">
          <div class="flex items-center space-x-2 mb-2">
            <span class="text-sm font-medium text-grey">Email:</span>
            <a
              href="mailto:hey@racelist.gr"
              class="text-blue hover:text-blue-deep font-medium transition-colors"
            >
              hey@racelist.gr
            </a>
          </div>
          <p class="text-sm text-grey">
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
