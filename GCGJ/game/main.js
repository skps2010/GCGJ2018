var key = [false, false, false, false]; //左 上 右 下
var moveX = [-100, 0, 100, 0];
var moveY = [0, -100, 0, 100];

function move(a) {
    let playerX = (parseInt($("#player_s2").css("left")));
    let playerY = (parseInt($("#player_s2").css("top")));
    let arrayNum = playerX/100 + playerY/100 *10;
    console.log(playerX);
    console.log(playerY);
    console.log(arrayNum);
    console.log(rockArray[arrayNum]);

    if(rockArray[arrayNum] != 1 && monsterArray[arrayNum] != 1){
        $("#player_s1").css("left", (parseInt($("#player_s1").css("left")) + moveX[a]) + "px");
        $("#player_s1").css("top", (parseInt($("#player_s1").css("top")) + moveY[a]) + "px");
        $("#player_s2").css("left", (parseInt($("#player_s2").css("left")) + moveX[a]) + "px");
        $("#player_s2").css("top", (parseInt($("#player_s2").css("top")) + (moveY[a])) + "px");
    }
    
    //console.log((parseInt($(".player").css("left"))));
    //console.log((parseInt($(".player").css("top"))));

    moveAni();
}



function moveAni(){
    setTimeout(function(){
        s2ImgCounter  = (s2ImgCounter+1)%2;
        s2Times++;
        $("#player_s2").attr("src",  `./image/player/gcgj_player_s2-${s2ImgCounter}.png`);
        if(s2Times<8){
            moveAni();
        }else{
            s2Times = 0;
        }
       },250);
}

var s2ImgCounter = 0;
var s2Times = 0;

function keyUpHandler(e) {
   if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = false;
}

function keyDownHandler(e) {
   if (e.keyCode >= 37 && e.keyCode <= 40) key[e.keyCode - 37] = true;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
