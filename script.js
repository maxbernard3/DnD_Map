pawn1 = document.getElementById("pawn1");
map = document.getElementById("map");

pawn = pawn1;
mile = 220 / 200;
movSpeed = 40 * mile;

bypass = true;

function movPawn(event) {
    xClick = event.clientX + map.scrollLeft;
    yClick = event.clientY + map.scrollTop;

    localStorage.setItem(`pawn_x`, xClick - 15);
    localStorage.setItem(`pawn_y`, yClick - 15);

    pawn.style.left = `${localStorage.getItem(`pawn_x`)}px`;
    pawn.style.top = `${localStorage.getItem(`pawn_y`)}px`;
}


window.addEventListener("load", function() {
    pawn.style.left = `${localStorage.getItem(`pawn_x`)}px`;
    pawn.style.top = `${localStorage.getItem(`pawn_y`)}px`;
});

map.addEventListener("click", movPawn);