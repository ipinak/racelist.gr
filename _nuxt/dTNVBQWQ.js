import{u as w,B as o,c as n,a as e,h,C as c,H as v,g as a,G as r,b as k,d as f,t as G,o as i}from"./CinPpprI.js";import{_ as A}from"./B_hRx9QA.js";const N={class:"flex items-center justify-center p-6"},V={class:"bg-white shadow-lg rounded-lg max-w-md w-full p-6"},C={class:"mb-4"},U={class:"flex border rounded-md overflow-hidden w-fit"},H={class:"mb-4"},B={class:"mb-4"},P={key:0,class:"mb-4"},j={key:1,class:"mb-4"},M={class:"mt-6"},_={key:2,class:"mt-6 p-4 bg-gray-100 rounded-lg shadow"},$={class:"text-lg font-semibold"},D={class:"text-blue-600"},I={__name:"gel-calculator",setup(S){w({title:"Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου",link:[{rel:"canonical",href:"https://racelist.gr/gel-calculator"}],meta:[{name:"description",content:"Υπολόγισε πόσα ενεργειακά gel χρειάζεσαι με βάση την απόσταση, τον ρυθμό σου και τη στρατηγική φόρτισης. Περιλαμβάνει άρθρο με λεπτομέρειες για το πότε και πώς να χρησιμοποιείς gel."},{name:"keywords",content:"υπολογιστής gel, ενέργεια για τρέξιμο, υδατάνθρακες δρομέων, gel μαραθωνίου, φόρτιση αντοχής, ενεργειακά gel"},{name:"author",content:"racelist.gr"},{property:"og:type",content:"website"},{property:"og:title",content:"Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου"},{property:"og:description",content:"Μάθε πώς και πότε να χρησιμοποιείς ενεργειακά gel για βέλτιστη απόδοση. Περιλαμβάνει υπολογιστή και επιστημονικές πληροφορίες."},{property:"og:image",content:"https://racelist.gr/racelist-banner.jpg"},{property:"og:url",content:"https://racelist.gr/gel-calculator"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Υπολογιστής Ενεργειακών Gel - Καύσιμα για το Τρέξιμό σου"},{name:"twitter:description",content:"Υπολόγισε πόσα gel χρειάζεσαι και μάθε να φορτίζεις σωστά πριν και κατά τη διάρκεια του τρεξίματος."},{name:"twitter:image",content:"https://racelist.gr/racelist-banner.jpg"}],link:[{rel:"canonical",href:"https://racelist.gr/gel-calculator"}]});const s=o(!1),d=o(0),u=o(6),m=o(60),p=o(30),b=o(null);function y(){const g=d.value*u.value/60,t=s.value?p.value:80,l=s.value?m.value:80,x=g*t/l;b.value=x>1?Math.floor(x):0}return(g,t)=>(i(),n("div",null,[t[13]||(t[13]=e("h1",{class:"text-3xl text-[#0057A0] font-bold mb-6 text-center"}," Πόσα gel χρειάζεσαι για ένα αγώνα; ",-1)),t[14]||(t[14]=e("div",{class:"max-w-4xl mx-auto px-4 py-8 text-gray-800 space-y-4"},[e("p",null," Η σωστή στρατηγική κατανάλωσης ενεργειακών gel μπορεί να κάνει τη διαφορά ανάμεσα σε έναν καλό αγώνα και μια δύσκολη εμπειρία. Ο γενικός κανόνας είναι να καταναλώνεις περίπου 30-60 γραμμάρια υδατανθράκων την ώρα, ή ακόμα και μέχρι 90 γρ. σε μαραθώνιους ή ultra αποστάσεις, αν το σώμα σου είναι προσαρμοσμένο. "),e("p",null," Θυμήσου: κάθε σώμα αντιδρά διαφορετικά. Πειραματίσου στην προπόνηση και βρες ποια gel και τι ποσότητα ταιριάζει σε εσένα. Και πάντα συνδύαζέ τα με αρκετό νερό για καλύτερη απορρόφηση! ")],-1)),t[15]||(t[15]=e("hr",{class:"text-gray-300 my-3"},null,-1)),e("div",N,[e("div",V,[t[12]||(t[12]=e("h2",{class:"text-3xl text-[#0057A0] font-bold mb-6"}," Υπολογιστής Ενεργειακών Gel ",-1)),e("div",C,[e("div",U,[e("button",{onClick:t[0]||(t[0]=l=>s.value=!1),class:v([s.value?"bg-white text-gray-700":"bg-[#0057A0] text-white","px-4 py-2 text-sm font-medium transition-colors"])}," Αυτόματο ",2),e("button",{onClick:t[1]||(t[1]=l=>s.value=!0),class:v([s.value?"bg-[#0057A0] text-white":"bg-white text-gray-700","px-4 py-2 text-sm font-medium transition-colors"])}," Χειροκίνητο ",2)])]),e("div",H,[t[6]||(t[6]=e("label",{class:"block mb-1"},"Απόσταση (χλμ)",-1)),a(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=l=>d.value=l),class:"border p-2 rounded w-full input-bordered w-full",min:"0"},null,512),[[r,d.value,void 0,{number:!0}]])]),e("div",B,[t[7]||(t[7]=e("label",{class:"block mb-1"},"Μέσος Ρυθμός (λεπτά/χλμ)",-1)),a(e("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=l=>u.value=l),class:"border p-2 rounded w-full input-bordered w-full",min:"1"},null,512),[[r,u.value,void 0,{number:!0}]])]),s.value?(i(),n("div",P,[t[8]||(t[8]=e("label",{class:"block mb-1"},"Υδατάνθρακες ανά gel (γρ.)",-1)),a(e("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=l=>m.value=l),class:"border p-2 rounded w-full input-bordered w-full",min:"1"},null,512),[[r,m.value,void 0,{number:!0}]])])):c("",!0),s.value?(i(),n("div",j,[t[9]||(t[9]=e("label",{class:"block mb-1"},"Υδατάνθρακες ανά ώρα (γρ.)",-1)),a(e("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=l=>p.value=l),class:"border p-2 rounded w-full input-bordered w-full",min:"1"},null,512),[[r,p.value,void 0,{number:!0}]])])):c("",!0),e("div",M,[k(A,{title:"Υπολογισμός Gel",onClick:y})]),b.value!==null?(i(),n("div",_,[e("p",$,[t[10]||(t[10]=f(" Χρειάζεστε περίπου ")),e("span",D,G(b.value),1),t[11]||(t[11]=f(" gel για τη δραστηριότητά σας. "))])])):c("",!0)])]),t[16]||(t[16]=h('<hr class="text-gray-300 my-3"><div class="max-w-4xl mx-auto px-4 py-8"><h2 class="text-3xl text-[#0057A0] font-bold mb-6"> Όλα Όσα Πρέπει να Ξέρεις για τα Ενεργειακά Gel στο Τρέξιμο </h2><p class="mb-6"> Αν έχεις «χτυπήσει τοίχο» σε μια μεγάλη προπόνηση ή αγώνα, είναι πιθανό ότι το σώμα σου είχε ξεμείνει από καύσιμα. Τα ενεργειακά gel είναι από τις πιο δημοφιλείς και αποτελεσματικές λύσεις για να παραμένεις ενεργοποιημένος και να αποφύγεις την εξάντληση. Αλλά τι ακριβώς είναι και πότε πρέπει να τα χρησιμοποιείς; </p><h3>Τι Είναι τα Ενεργειακά Gel;</h3><p class="mb-6"> Τα ενεργειακά gel είναι μικρά, εύκολα στη μεταφορά φακελάκια που περιέχουν απλούς υδατάνθρακες (κυρίως γλυκόζη και φρουκτόζη), σχεδιασμένα για να προσφέρουν άμεση ενέργεια κατά τη διάρκεια δραστηριοτήτων αντοχής. Πολλά gel περιέχουν επίσης ηλεκτρολύτες όπως νάτριο και κάλιο, ενώ μερικά περιέχουν και καφεΐνη για έξτρα ώθηση. </p><h3 class="text-xl font-semibold text-[#0057A0] mb-4"> Γιατί τα Χρειάζεσαι </h3><p class="mb-6"> Όταν τρέχεις, το σώμα σου βασίζεται στο γλυκογόνο — αποθηκευμένους υδατάνθρακες στους μύες και το συκώτι — ως κύρια πηγή ενέργειας. Ωστόσο, τα αποθέματα γλυκογόνου είναι περιορισμένα. Μετά από περίπου 60–90 λεπτά συνεχούς άσκησης, αυτά τα αποθέματα εξαντλούνται, οδηγώντας σε κόπωση, επιβράδυνση και τελικά την τρομακτική «κράμπα». </p><p class="mb-4"> Τα ενεργειακά gel βοηθούν στην αναπλήρωση των υδατανθράκων <em>πριν</em> χτυπήσεις τον τοίχο. Προσφέρουν γρήγορα απορροφήσιμα καύσιμα που το σώμα σου μπορεί να αξιοποιήσει άμεσα, διατηρώντας ενέργεια και συγκέντρωση κατά τη διάρκεια της άσκησης. </p><h3 class="text-xl font-semibold text-[#0057A0] mb-4"> Πότε τα Χρειάζεσαι </h3><ul class="list-disc list-inside space-y-2 mb-4"><li><strong>&lt; 60 λεπτά:</strong> Πιθανότατα δεν χρειάζεσαι gel. Τα αποθέματα σου επαρκούν. </li><li><strong>60–90 λεπτά:</strong> Ένα gel περίπου στη μέση μπορεί να βοηθήσει, ειδικά αν τρέχεις γρήγορα. </li><li><strong>90+ λεπτά:</strong> Σχεδίασε να καταναλώνεις ένα gel κάθε 30–45 λεπτά για να διατηρείς απόδοση. </li></ul><p class="mb-4"> Ξεκίνα τη φόρτιση νωρίς — μην περιμένεις να εξαντληθείς. Το σώμα απορροφά καλύτερα τους υδατάνθρακες όταν δεν είναι πλήρως εξαντλημένο. </p><h3 class="text-xl font-semibold text-[#0057A0] mb-4"> Πότε ΔΕΝ τα Χρειάζεσαι </h3><p class="mb-4">Τα gel δεν είναι απαραίτητα για:</p><ul class="list-disc list-inside space-y-2 mb-4"><li>Μικρές προπονήσεις κάτω της μιας ώρας.</li><li>Περίπατους ή ελαφρύ τρέξιμο.</li><li>Αναρρωτικές προπονήσεις όπου η απόδοση δεν είναι στόχος.</li><li>Καταστάσεις νηστείας ή low-carb προπονήσεις.</li></ul><p class="mb-4"> Αν δεν έχεις χρησιμοποιήσει ποτέ gel, απέφυγε να τα δοκιμάσεις για πρώτη φορά σε αγώνα. Πειραματίσου με αυτά στις προπονήσεις για να δεις πώς αντιδρά το στομάχι σου. </p><h3 class="text-xl font-semibold text-[#0057A0] mb-4"> Γιατί τα Gel Είναι Ιδανικά για Τρέξιμο </h3><ul class="list-disc list-inside space-y-2 mb-4"><li><strong>Φορητά:</strong> Μικρά και εύκολα στη μεταφορά σε ζώνες ή τσέπες. </li><li><strong>Αποτελεσματικά:</strong> Υψηλή αναλογία υδατανθράκων ανά μέγεθος. </li><li><strong>Άμεσης δράσης:</strong> Απορροφώνται γρήγορα, ειδικά με λίγο νερό. </li><li><strong>Βολικά:</strong> Εύκολα στο άνοιγμα και την κατανάλωση εν κινήσει. </li></ul><p class="mb-4"> Είναι ιδανικά για μεγάλες αποστάσεις όπως μαραθώνιους ή trail αγώνες, όπου η μεταφορά στερεών τροφών είναι δύσκολη. </p><h3 class="text-xl font-semibold text-[#0057A0] mb-4">Τελικές Σκέψεις</h3><p class="mb-4"> Τα ενεργειακά gel είναι το μυστικό όπλο του δρομέα — αν τα χρησιμοποιείς σωστά. Κατανόησε πότε και πώς να τα χρησιμοποιείς για να διατηρείς σταθερή ενέργεια και να αποφεύγεις την κατάρρευση. Δοκίμασε διαφορετικές μάρκες και γεύσεις κατά την προπόνηση, φρόντισε την ενυδάτωση και — πάνω απ’ όλα — άκου το σώμα σου. </p></div>',2))]))}};export{I as default};
