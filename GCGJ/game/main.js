var key = [false, false, false, false]; //左 上 右 下
var moveX = [-100, 0, 100, 0];
var moveY = [0, -100, 0, 100];

function move(a) {
    console.log(a);
   $("#player_s1").css("left", (parseInt($("#player_s1").css("left")) + moveX[a]) + "px");
   $("#player_s1").css("top", (parseInt($("#player_s1").css("top")) + moveY[a]) + "px");
   $("#player_s2").css("left", (parseInt($("#player_s2").css("left")) + moveX[a]) + "px");
   $("#player_s2").css("top", (parseInt($("#player_s2").css("top")) + (moveY[a])) + "px");
   console.log((parseInt($(".player").css("left"))));
   console.log((parseInt($(".player").css("top"))));
   //settimeout(function(){},1000);
}

function keyUpHandler(e) {
   if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
   if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
