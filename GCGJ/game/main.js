var key = [false, false, false, false]; //左 上 右 下

var moveX = [-1, 0, 1, 0];
var moveY = [0, -1, 0, 1];
var x = 4,
    y = 4,
    bar = 20,
    stonebar = 10,
    dir = 0,
    size = 100;

var rockArray = new Array(100);
var rockNum = 0;
var monsterArray = new Array(100);
var treeArray = new Array(100);
var monsterArray = new Array(100);

var tasks = new Array();

set();

function move(a) {
    dir = a;

    if (bar <= 0) return;
    let dx = x + moveX[a];
    let dy = y + moveY[a];

    if (dx < 0 || dx > 9 || dy < 0 || dy > 9) return;
    if (rockArray[dy * 10 + dx] >= 1 || monsterArray[dy * 10 + dx] == 1) return;
    x = dx;
    y = dy;
    bar--;
    set();
    moveAni();
}

function mine() {
    let indexRock = (y + moveY[dir]) * 10 + (x + moveX[dir]);
    if (bar <= 0) return;
    if (rockArray[indexRock] == 0) return;
    bar--;
    stonebar++;
    rockArray[indexRock]--;
    if (rockArray[indexRock] == 0) {
        $("#rock" + indexRock).remove();
        rockNum--;
        while (rockNum < 5) {
            let randomR = Math.floor(Math.random() * (100 - 0));
            let locationX = randomR % 10 * size;
            let locationY = Math.floor(randomR / 10) * size;
            if (rockArray[randomR] == 0 && randomR != (y * 10 + x)) {
                rockArray[randomR] == 2;
                $(".bg").append('<img class="rock" id = rock' + randomR + ' src="./image/ground/gcgj_rock.png"/>');
                $("#rock" + randomR).css("left", locationX + "px");
                $("#rock" + randomR).css("top", locationY + "px");
                rockNum++;
            }
        }
    }


    set();
}

function set() {
    console.table(rockArray);
    $(".player").css("left", (x * size) + "px");
    $(".player").css("top", (y * size - size) + "px");
    $(".bar").css("height", (bar * 10 + 5) + "px");
    $(".stonebar").css("height", (stonebar * 10 + 5) + "px");
}


function moveAni() {
    setTimeout(function() {
        s2ImgCounter = (s2ImgCounter + 1) % 2;
        s2Times++;
        $("#player_s2").attr("src", `./image/player/gcgj_player_s2-${s2ImgCounter}.png`);
        if (s2Times < 8) {
            moveAni();
        } else {
            s2Times = 0;
        }
    }, 250);
}

var s2ImgCounter = 0;
var s2Times = 0;

function doTask() {
    eval(tasks.shift());
    if (tasks.length > 0) setTimeout(doTask, 1000);
}