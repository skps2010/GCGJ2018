var key = [false, false, false, false]; //左 上 右 下
var moveX = [-100, 0, 100, 0];
var moveY = [0, -100, 0, 100];
var stone = 0;

function move(a) {
    change(".player", "left", moveX[a]);
    change(".player", "top", moveY[a]);
    change(".bar", "height", -10);
}

function mine() {
    change(".bar", "height", -10);
    change(".stonebar", "height", +10);
}

function change(s1, s2, a) {
    $(s1).css(s2, (parseInt($(s1).css(s2)) + a) + "px");
}

function keyUpHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);