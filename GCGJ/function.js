var rockArray = new Array(100);
var monsterArray = new Array(100);
var treeArray = new Array(100);

$(document).ready(function(){

    for(let i=0; i<100; i++){
  
        // $(".bg").append(
        //     '<div class="grid">'+(i+1)+'</div>'
        // );

        // let playerX = 0;
        // let playerY = 0;
      
        // $(".btn").on("click", function(){
        //     playerX+=100;
        //     $(".player").css("left", playerX+ "px");              
        // });

        rockArray[i] = 0;
        monsterArray[i] = 0;
        treeArray[i] = 0;

        var randomG=Math.floor(Math.random()*(6-0));
        var locationX = i%10 * 100;
        var locationY = Math.floor(i/10) * 100;
        if(randomG==0){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_grass.png"/>');
        }
        else if(randomG==1){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil1.png"/>');
        }  
        else if(randomG==2){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil2.png"/>');
        }  
        else if(randomG==3){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil3.png"/>');
        }  
        else if(randomG==4){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil4.png"/>');
        }  
        else if(randomG==5){
            $(".bg").append('<img class="grass" id = grass' + i + ' src="./image/ground/gcgj_soil.png"/>');
        }
        
        $("#grass"+i).css("left", locationX + "px");
        $("#grass"+i).css("top", locationY + "px");

        var randomR=Math.floor(Math.random()*(20-0));
        if(randomR==0 && i!=24){
            $(".bg").append('<img class="rock" id = rock' + i + ' src="./image/ground/gcgj_rock.png"/>');
            $("#rock"+i).css("left", locationX + "px");
            $("#rock"+i).css("top", locationY + "px");
            rockArray[i] = 1;
            console.log(i);
            //rock(i);
        }
    }
 
    // function rock(i){   
    //     console.log(i);
    // }
    $(".rock").click(function(){
        move(0);
        console.log("function yes");
    });
    
    // function move(i){ 
    //     var p = $( "#player_s1" );
    //     var position = p.position();
    //     var xmove=0;
    //     var ymove=0;
    //     if(i==0){
    //         ymove=100;
    //     }
    //     else if(i==1){
    //         xmove=100;
    //     }
    //     else if(i==2){
    //         ymove=-100;
    //     }
    //     else if(i==3){
    //         xmove=-100;
    //     }
    //     $("#player_s1").css("left", (position.locationX + xmove) + "px", 
    //         "right", (position.locationY + ymove) + "px");
    //     $("#player_s1").css("left", (position.locationX + xmove) + "px", 
    //         "right", (position.locationY + ymove - 100) + "px");
    //     console.log("move yes");
    //     //$('#my_image').attr('src','second.jpg');
    // }
}
);
