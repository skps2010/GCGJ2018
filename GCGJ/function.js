$(document).ready(function(){

    for(let i=0; i<25; i++){
  
        $(".bg").append(
      '<div class="grid">'+(i+1)+'</div>'
      );  
        
      }
      let playerX = 25;
      let playerY = 25;
      
      $(".btn").on("click", function(){
        playerX+=100;
        $(".player").css("left", playerX+ "px");
        
      });
});
