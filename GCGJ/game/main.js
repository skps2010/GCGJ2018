var key = [false, false, false, false]; //左 上 右 下
var moveX = [-100, 0, 100, 0];
var moveY = [0, -100, 0, 100];

function move(a) {
    $(".player").css("left", (parseInt($(".player").css("left")) + moveX[a]) + "px");
    $(".player").css("top", (parseInt($(".player").css("top")) + moveY[a]) + "px");
    console.log($(".player").css("left"));
}

function keyUpHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);