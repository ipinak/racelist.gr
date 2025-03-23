import{u as y,i,j as w,c as p,a as e,d as u,l as k,p as B,g as b,q as f,t as c,F as M,f as S,o as d}from"./H_j4A16d.js";const V={class:"flex items-center justify-center p-6"},j={class:"bg-white shadow-md rounded-lg max-w-md w-full p-6"},q={key:0,class:"mt-6 space-y-3"},C={class:"text-center text-lg font-semibold"},E={class:"text-blue-600"},N={class:"border-t pt-4"},h={class:"list-disc pl-5 space-y-1"},P={__name:"pace-calculator",setup(D){y({title:"Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο | Εργαλείο για Δρομείς",meta:[{name:"description",content:"Υπολόγισε εύκολα τον μέσο ρυθμό σου και δες τους ενδιάμεσους χρόνους ανά χιλιόμετρο. Ιδανικό εργαλείο για δρομείς που προπονούνται για αγώνες ή βελτίωση χρόνων."},{name:"keywords",content:"ρυθμός, υπολογιστής ρυθμού, χρόνος ανά χιλιόμετρο, running pace calculator, δρομείς, αγώνας δρόμου, splits, running splits, προπόνηση"},{name:"author",content:"racelist.gr"},{property:"og:title",content:"Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο"},{property:"og:description",content:"Βρες τον μέσο ρυθμό σου και δες αναλυτικά τους χρόνους ανά χιλιόμετρο με το εργαλείο του racelist.gr. Χρήσιμο για κάθε δρομέα."},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.racelist.gr/pace-calculator"},{property:"og:image",content:"https://racelist.gr/racelist-banner.jpg"}]});const s=i(null),a=i(null),n=i(null),r=i([]);function m(o){const t=Math.floor(o),l=Math.round((o-t)*60);return`${t}m ${l.toString().padStart(2,"0")}s`}const g=w(()=>n.value!==null?m(n.value):"");function x(){if(!s.value||!a.value||s.value<=0||a.value<=0){n.value=null,r.value=[];return}n.value=a.value/s.value;const o=Math.floor(s.value);r.value=[];for(let l=1;l<=o;l++)r.value.push(m(n.value*l));s.value-o>0&&r.value.push(m(n.value*s.value))}return(o,t)=>(d(),p("div",null,[t[11]||(t[11]=e("div",{class:"max-w-4xl mx-auto px-4 py-8"},[e("h2",{class:"text-3xl text-[#9BBEC4] font-bold mb-6"}," Γιατί να υπολογίσω τον ρυθμό και τα splits μου; "),e("p",{class:"mb-4"},[u(" Ο "),e("strong",null,"υπολογιστής ρυθμού και χρόνου ανά χιλιόμετρο"),u(" σου επιτρέπει να δεις με ακρίβεια τον μέσο ρυθμό σου και τους "),e("strong",null,"ενδιάμεσους χρόνους (splits)"),u(" για κάθε χιλιόμετρο, βάσει της συνολικής απόστασης και του χρόνου που έχεις καταγράψει. ")]),e("p",null," Τα splits σε βοηθούν να κατανοήσεις πώς κατανέμεται ο ρυθμός σου στη διάρκεια μιας διαδρομής, να βελτιώσεις τη στρατηγική σου και να ελέγχεις αν διατηρείς σταθερό τέμπο. Είναι ένα απαραίτητο εργαλείο για όσους προετοιμάζονται για αγώνες ή στοχεύουν σε νέα προσωπικά ρεκόρ! ")],-1)),t[12]||(t[12]=e("hr",{class:"text-gray-300 mb-3"},null,-1)),e("div",V,[e("div",j,[t[10]||(t[10]=e("h2",{class:"text-2xl font-bold text-center mb-4"}," Υπολογιστής Ρυθμού & Χρόνου ανά Χιλιόμετρο ",-1)),e("form",{onSubmit:B(x,["prevent"]),class:"space-y-4"},[e("div",null,[t[2]||(t[2]=e("label",{class:"block mb-1 font-medium"},"Απόσταση",-1)),b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),type:"number",min:"0",step:"0.01",class:"w-full border px-3 py-2 rounded",placeholder:"e.g. 5",required:""},null,512),[[f,s.value,void 0,{number:!0}]]),t[3]||(t[3]=e("span",{class:"text-sm text-gray-500"},"Σε χιλίομετρα",-1))]),e("div",null,[t[4]||(t[4]=e("label",{class:"block mb-1 font-medium"},"Χρόνος",-1)),b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l),type:"number",min:"0",step:"0.01",class:"w-full border px-3 py-2 rounded",placeholder:"e.g. 25.5",required:""},null,512),[[f,a.value,void 0,{number:!0}]]),t[5]||(t[5]=e("span",{class:"text-sm text-gray-500"},"Σε λεπτά",-1))]),t[6]||(t[6]=e("button",{type:"submit",class:"bg-[#9BBEC4] text-white p-3 rounded hover:bg-[#ff00ff]"}," Υπολόγισε Ρυθμό & Χρόνους ",-1))],32),n.value!==null?(d(),p("div",q,[e("p",C,[t[7]||(t[7]=u(" Μέσος ρυθμός: ")),e("span",E,c(g.value),1),t[8]||(t[8]=u(" ανα χλμ. "))]),e("div",N,[t[9]||(t[9]=e("h2",{class:"font-semibold mb-2"},"Χρόνος ανά χιλιόμετρο:",-1)),e("ul",h,[(d(!0),p(M,null,S(r.value,(l,v)=>(d(),p("li",{key:v},c(v+1)+" χλμ.: "+c(l),1))),128))])])])):k("",!0)])])]))}};export{P as default};
