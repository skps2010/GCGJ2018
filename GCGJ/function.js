$(document).ready(function() {

    for (let i = 0; i < 10; i++) {

        // $(".bg").append(
        //     '<div class="grid">'+(i+1)+'</div>'
        // );

        // let playerX = 0;
        // let playerY = 0;

        // $(".btn").on("click", function(){
        //     playerX+=100;
        //     $(".player").css("left", playerX+ "px");              
        // });

        var rockArray = new Array(100);
        var monsterArray = new Array(100);
        var treeArray = new Array(100);

        rockArray[i] = 0;
        monsterArray[i] = 0;
        treeArray[i] = 0;

        var randomG = Math.floor(Math.random() * (6 - 0));
        var locationX = i % 10 * 100;
        var locationY = Math.floor(i / 10) * 100;
        if (randomG == 0) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_grass.png"/>');
        } else if (randomG == 1) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_s_g.png"/>');
        } else if (randomG == 2) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_s_g2.png"/>');
        } else if (randomG == 3) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_s_g3.png"/>');
        } else if (randomG == 4) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_s_g4.png"/>');
        } else if (randomG == 5) {
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil.png"/>');
        }

        $("#grass" + i).css("left", locationX + "px");
        $("#grass" + i).css("top", locationY + "px");

        var randomR = Math.floor(Math.random() * (20 - 0));
        if (randomR == 0) {
            $(".bg").append('<img class="rock" id = rock' + i + ' src="./image/ground/gcgj_rock.png"/>');
            $("#rock" + i).css("left", locationX + "px");
            $("#rock" + i).css("top", locationY + "px");
            rockArray[i] = 1;
            //rock(i);
        }
    }
    // function rock(i){   
    //     console.log(i);
    // }

});