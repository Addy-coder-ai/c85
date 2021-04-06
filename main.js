canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
NaSaImGmArSaRrAy=["oop.jpg","opiast.jpg","sopqoa.jpg","topertaip.jpg"];
randomNuMbEr=Math.floor(Math.random()*4);
console.log(randomNuMbEr);
roverWidth=90;
roverHeight=70;
backgroundImg=NaSaImGmArSaRrAy[randomNuMbEr];
console.log("backgroundImg =" + backgroundImg);
roverImg="rover.png";
roverX=10;
roverY=10;
function add() {
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=backgroundImg;
roverimgtag=new Image();
roverimgtag.onload=uploadRover;
roverimgtag.src=roverImg;
}
function uploadBackground() {
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
ctx.drawImage(roverimgtag,roverX,roverY,roverWidth,roverHeight); 
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e) {
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if (keyPressed=='38') {
   uP();
   console.log("up");
   }
   if (keyPressed=='40') {
    dOwN();
    console.log("down");
    }
    if (keyPressed=='37') {
        lEfT();
        console.log("left");
        }
        if (keyPressed=='39') {
            rIgHt();
            console.log("right");
            }
}
function uP() {
    if (roverY >= 0) {
      roverY=roverY-10;
      console.log("when up arrow is pressed X ="+ roverX + "Y=" + roverY);
      uploadBackground();
      uploadRover();
    }
}
function dOwN() {
    if (roverY <= 530) {
      roverY=roverY+10;
      console.log("when down arrow is pressed X ="+ roverX + "Y=" + roverY);
      uploadBackground();
      uploadRover();
    }
}
function lEfT() {
    if (roverX >= 0) {
      roverX=roverX-10;
      console.log("when left arrow is pressed X ="+ roverX + "Y=" + roverY);
      uploadBackground();
      uploadRover();
    }
}
function rIgHt() {
    if (roverX <= 710) {
      roverX=roverX+10;
      console.log("when right arrow is pressed X ="+ roverX + "Y=" + roverY);
      uploadBackground();
      uploadRover();
    }
}

