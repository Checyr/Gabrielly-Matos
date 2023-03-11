let i = 0;
let l = 0;
const txt = 'GABRIELLY MATOS';
const txt2 = 'FULLSTACK DEVELOPER'
const speed = 150;
let first = true;

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
let index = 0;
function style(){
  document.getElementById("skill-bar").style.marginTop = "160px";
  document.getElementById("HTML").style.marginTop = "140px";
  document.getElementById("CSS").style.visibility = "hidden";
  document.getElementById("skill-bar2").style.visibility = "hidden";
}

function arrowSide(side) {
  var skillname = ["HTML", "JAVASCRIPT", "C#", "PYTHON", "KOTLIN", "JAVA", "PHP"];
  var url = ["./src/img/skillslogo/htmlandcss.png", "./src/img/skillslogo/js.png" , "./src/img/skillslogo/csharp.png", "./src/img/skillslogo/python.png", "./src/img/skillslogo/kotlin.png", "./src/img/skillslogo/java.png", "./src/img/skillslogo/php.png"];
  var linearcolor = ["linear-gradient(50deg,#F1BF26 78%, white 60%)","linear-gradient(50deg,#68217a 85%, white 60%)","linear-gradient(50deg,#3974a4 35%,#ffe56a 70%, white 60%)","linear-gradient(50deg,#1A8DD8 35%,#7671e2 55%, #F7880A 85%, white 60%)","linear-gradient(50deg,#E33336  45%, white 20%)","linear-gradient(50deg,#8C9BD6 45%, white 20%)"]

  if(side == 'right')
  {
    if (index == skillname.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }else if(side == 'left') {
    if (index == 0) {
      index = skillname.length - 1;
    } else {
      index--;
    }
  }

  document.getElementById("HTML").innerText = skillname[index];
  document.getElementById("skilllogo").setAttribute("src", url[index]);
  if(index != 0){
    document.getElementById("skill-bar").style.backgroundImage = linearcolor[index -1];
    style();
  }else{
    document.getElementById("skill-bar").style.backgroundImage = "linear-gradient(50deg, #E44C25 85%, white 60%)";
    document.getElementById("HTML").style.marginTop = "120px";
    document.getElementById("CSS").style.marginTop = "160px";
    document.getElementById("skill-bar").style.marginTop = "140px";
    document.getElementById("skill-bar2").style.marginTop = "180px";
    document.getElementById("CSS").style.visibility = "visible";
    document.getElementById("skill-bar2").style.visibility = "visible";
  }

}
