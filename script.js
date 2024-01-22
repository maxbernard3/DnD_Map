pawn1 = document.getElementById("pawn1");
map = document.getElementById("map");

pawn = pawn1;
mile = 220/200;
movSpeed = 40*mile;

bypass = true;

function movPawn(event) {
    pawnLeft = pawn.getBoundingClientRect().left + map.scrollLeft;
    pawnTop = pawn.getBoundingClientRect().top + map.scrollTop;

    xClick = event.clientX + map.scrollLeft;
    yClick = event.clientY + map.scrollTop;

    pawn.style.left = `${xClick}px`;
    pawn.style.top = `${yClick}px`;

    let data = "";

    /*x = (pawnLeft - xClick);
    y = (pawnTop - yClick);

    distances = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    console.log(movSpeed - distances);

    if(distances < movSpeed || bypass == true){
      pawn.style.left = `${xClick}px`;
      pawn.style.top = `${yClick}px`;
    }*/
  }
  
map.addEventListener("click", movPawn);