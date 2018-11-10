var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var key = [false, false, false, false]; //左 上 右 下

function move() {
    if (key[0]) x -= 1;
    if (key[1]) y -= 1;
    if (key[2]) x += 1;
    if (key[3]) y += 1;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    move();

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function keyUpHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);