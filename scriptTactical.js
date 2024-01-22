pawn1 = document.getElementById("pawn1");
pawn2 = document.getElementById("pawn2");
pawn3 = document.getElementById("pawn3");
pawn4 = document.getElementById("pawn4");
pawn5 = document.getElementById("pawn5");
pawn6 = document.getElementById("pawn6");
pawn7 = document.getElementById("pawn7");
pawn8 = document.getElementById("pawn8");

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");

map = document.getElementById("map");

const pawnArr = [pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8];
const btnArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];

pawn = pawnArr[0];

bypass = true;

function movPawn(event) {
  xClick = event.clientX + map.scrollLeft;
  yClick = event.clientY + map.scrollTop;

  pawn.style.left = `${xClick}px`;
  pawn.style.top = `${yClick}px`;
}

function movActive(i){
  pawn = pawnArr[i];

  btnArr.forEach(element => {
    element.style.borderStyle = "solid";
  });

  btnArr[i].style.borderStyle = "dashed";
}

btn1.addEventListener("click", (event)=>{movActive(0)});
btn2.addEventListener("click", (event)=>{movActive(1)});
btn3.addEventListener("click", (event)=>{movActive(2)});
btn4.addEventListener("click", (event)=>{movActive(3)});
btn5.addEventListener("click", (event)=>{movActive(4)});
btn6.addEventListener("click", (event)=>{movActive(5)});
btn7.addEventListener("click", (event)=>{movActive(6)});
btn8.addEventListener("click", (event)=>{movActive(7)});


map.addEventListener("click", movPawn);