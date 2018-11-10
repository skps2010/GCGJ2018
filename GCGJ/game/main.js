// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width / 2;
// var y = canvas.height / 2;
var key = [false, false, false, false]; //左 上 右 下
var moveX = [-100, 0, 100, 0];
var moveY = [0, -100, 0, 100];

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(0,0,1000,800);
// for(i=0;i<1000;i=i+100){
//     ctx.moveTo(i,0);
//     ctx.lineTo(i,800);
//     ctx.stroke();
// }
// for(i=0;i<800;i=i+80){
//     ctx.moveTo(0,i);
//     ctx.lineTo(1000,i);
//     ctx.stroke();
// }
// ctx.closePath();

function move(a) {
    $(".player").css("left", ($(".player").css("left") + moveX[a]) + "px");
    $(".player").css("top", ($(".player").css("top") + moveY[a]) + "px");
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

//setInterval(draw, 10);