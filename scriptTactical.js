pawn1 = document.getElementById("pawn1");
pawn2 = document.getElementById("pawn2");
pawn3 = document.getElementById("pawn3");
pawn4 = document.getElementById("pawn4");
pawn5 = document.getElementById("pawn5");
pawn6 = document.getElementById("pawn6");
pawn7 = document.getElementById("pawn7");
pawn8 = document.getElementById("pawn8");
pawn9 = document.getElementById("pawn9");
pawn10 = document.getElementById("pawn10");
pawn11 = document.getElementById("pawn11");
pawn12 = document.getElementById("pawn12");

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");
btn9 = document.getElementById("btn9");
btn10 = document.getElementById("btn10");
btn11 = document.getElementById("btn11");
btn12 = document.getElementById("btn12");

map = document.getElementById("map");

const pawnArr = [pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8, pawn9, pawn10, pawn11, pawn12];
const btnArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12];

pawn = pawnArr[0];

bypass = true;

function movPawn(event) {
  xClick = event.clientX + map.scrollLeft;
  yClick = event.clientY + map.scrollTop;

  localStorage.setItem(`${pawn.id}_x`, xClick - 15);
  localStorage.setItem(`${pawn.id}_y`, yClick - 15);

  pawn.style.left = `${localStorage.getItem(`${pawn.id}_x`)}px`;
  pawn.style.top = `${localStorage.getItem(`${pawn.id}_y`)}px`;
}

function movActive(i){
  pawn = pawnArr[i];

  btnArr.forEach(element => {
    element.style.borderStyle = "solid";
  });

  btnArr[i].style.borderStyle = "dashed";
}

function movSetPos(i){
    pawn = pawnArr[i];
    pawn.style.left = `${localStorage.getItem(`${pawn.id}_x`)}px`;
    pawn.style.top = `${localStorage.getItem(`${pawn.id}_y`)}px`;

    if(btnArr[i].children[0].src == `http://127.0.0.1:5500/pawn/`){
        btnArr[i].style.display = "none";
        pawnArr[i].style.display = "none";
        localStorage.setItem(`${pawn.id}_x`, 0);
        localStorage.setItem(`${pawn.id}_y`, 0);
    };
}

window.addEventListener("load", function() {
    for(i = 0; i < 12; i++){
        movSetPos(i);

    }
    pawn = pawnArr[0];
});

btn1.addEventListener("click", (event)=>{movActive(0)});
btn2.addEventListener("click", (event)=>{movActive(1)});
btn3.addEventListener("click", (event)=>{movActive(2)});
btn4.addEventListener("click", (event)=>{movActive(3)});
btn5.addEventListener("click", (event)=>{movActive(4)});
btn6.addEventListener("click", (event)=>{movActive(5)});
btn7.addEventListener("click", (event)=>{movActive(6)});
btn8.addEventListener("click", (event)=>{movActive(7)});
btn9.addEventListener("click", (event)=>{movActive(8)});
btn10.addEventListener("click", (event)=>{movActive(9)});
btn11.addEventListener("click", (event)=>{movActive(10)});
btn12.addEventListener("click", (event)=>{movActive(11)});

map.addEventListener("click", movPawn);