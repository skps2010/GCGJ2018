var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
var img = new Image();
img.onload = function(){
    context.drawImage(img, 0, 0);
};
img.src = "http://www.w3.org/html/logo/img/one-color.png";
ctx.strokeRect(0,0,1000,800);
for(i=0;i<1000;i=i+100){
    ctx.moveTo(i,0);
    ctx.lineTo(i,800);
    ctx.stroke();
}
for(i=0;i<800;i=i+80){
    ctx.moveTo(0,i);
    ctx.lineTo(1000,i);
    ctx.stroke();
}
ctx.closePath();