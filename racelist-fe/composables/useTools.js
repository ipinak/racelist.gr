export const useTools = () => {
  const tools = [
    {
      title: 'Υπολογιστής Ενεργειακών Gel',
      href: '/gel-calculator/',
      description:
        'Πόσα gel χρειάζεσαι για τα χιλιόμετρα και τη διάρκεια του αγώνα σου.',
      icon: 'zap',
    },
    {
      title: 'Υπολογιστής Ενυδάτωσης',
      href: '/hydration-calculator/',
      description:
        'Πόσο νερό και ηλεκτρολύτες χρειάζεσαι ανά ώρα προπόνησης.',
      icon: 'droplets',
    },
    {
      title: 'Υπολογιστής Τεστ Cooper',
      href: '/cooper-test/',
      description:
        'Εκτίμησε το επίπεδο φυσικής σου κατάστασης σε 12 λεπτά τρέξιμο.',
      icon: 'timer',
    },
    {
      title: 'Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο',
      href: '/pace-calculator/',
      description:
        'Βρες τον ρυθμό σου ανά χιλιόμετρο και τα splits σου για τον αγώνα.',
      icon: 'gauge',
    },
    {
      title: 'VDOT Calculator - Ρυθμοί Προπόνησης',
      href: '/vdot-calculator/',
      description:
        'Το VDOT σου και οι ρυθμοί E, M, T, I, R κατά Jack Daniels από έναν χρόνο αγώνα.',
      icon: 'activity',
    },
    {
      title: 'Υπολογιστής Προβλέψεων Χρόνων',
      href: '/race-time-predictor/',
      description:
        'Βάσει ενός πρόσφατου χρόνου σου, δες τι χρόνο μπορείς να πετύχεις.',
      icon: 'trending-up',
    },
    {
      title: 'Υπολογιστής Χρόνου Αγώνα Βουνού',
      href: '/ypologistis-xronou-agona-vounou/',
      description:
        'Πόσο θα κάνεις σε αγώνα trail, με βάση υψομετρική, έδαφος και τον χρόνο σου στον δρόμο.',
      icon: 'mountain',
    },
    {
      title: 'Υπολογιστής Θερμίδων Τρεξίματος',
      href: '/poses-thermides-kaime-sto-treximo/',
      description:
        'Πόσες θερμίδες καις ανάλογα με το βάρος, την απόσταση και τον χρόνο.',
      icon: 'flame',
    },
    {
      title: 'Υπολογιστής Κόστους Παπουτσιών Τρεξίματος',
      href: '/shoe-cost-tracker/',
      description:
        'Καταχώρισε τα χιλιόμετρα και το κόστος και μάθε πότε να τα αλλάξεις.',
      icon: 'footprints',
    },
  ];

  return {
    tools,
  };
};
