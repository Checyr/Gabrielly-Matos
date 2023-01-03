var i = 0;
var l = 0;
var txt = 'GABRIELLY MATOS';
var txt2 = 'FULLSTACK DEVELOPER' 
var speed = 150; 

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