let i = 0;
let l = 0;
const txt = 'GABRIELLY MATOS';
const txt2 = 'FULLSTACK DEVELOPER'
const speed = 150;

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("write-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
   }

   if (l < txt2.length) {
   document.getElementById("write-name2").innerHTML += txt2.charAt(l);
   l++;
   setTimeout(typeWriter, speed);
   }

}

