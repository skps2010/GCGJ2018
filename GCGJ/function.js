$(document).ready(function(){

    for(let i=0; i<100; i++){
  
        // $(".bg").append(
        //     '<div class="grid">'+(i+1)+'</div>'
        // );
        var randomG=Math.floor(Math.random()*(6-0));
        if(randomG==0){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_grass.png"/>');
        }
        else if(randomG==1){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_s_g.png"/>');
        }  
        else if(randomG==2){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_s_g2.png"/>');
        }  
        else if(randomG==3){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_s_g3.png"/>');
        }  
        else if(randomG==4){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_s_g4.png"/>');
        }  
        else if(randomG==5){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_soil.png"/>');
        }

        var randomR=Math.floor(Math.random()*(20-0));
        if(randomR==0){
            $(".bg").append('<img class="my_image" src="./image/ground/gcgj_rock.png"/>');
        }
      }
      let playerX = 0;
      let playerY = 0;
      
      $(".btn").on("click", function(){
        playerX+=100;
        $(".player").css("left", playerX+ "px");
                
      });
});
