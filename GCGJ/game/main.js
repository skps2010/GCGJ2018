var key = [false, false, false, false]; //左 上 右 下
var moveX = [-1, 0, 1, 0];
var moveY = [0, -1, 0, 1];
var x = 0,
    y = 0,
    bar = 20,
    stonebar = 10,
    dir = 0;

var rockArray = new Array(100);
var monsterArray = new Array(100);
var treeArray = new Array(100);

set();

function move(a) {
    dir = a;

    if (bar <= 0) return;
    let dx = x + moveX[a];
    let dy = y + moveY[a];

    if (dx < 0 || dx > 9 || dy < 0 || dy > 9) return;
    if (rockArray[dy * 10 + dx] == 1) return;
    x = dx;
    y = dy;
    bar--;
    set();
}

function mine() {
    if (bar <= 0) return;
    if (rockArray[(y + moveY[dir]) * 10 + (x + moveX[dir])] != 1) return;
    bar--;
    stonebar++;

    set();
}

function set() {
    console.table(rockArray);
    $(".player").css("left", (x * 100) + "px");
    $(".player").css("top", (y * 100) + "px");
    $(".bar").css("height", (bar * 10 + 5) + "px");
    $(".stonebar").css("height", (stonebar * 10 + 5) + "px");
}

function keyUpHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);