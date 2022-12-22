

 
  


function setup() {
canvas=createCanvas(780,790);
canvas= createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

  
}
function draw(){
    image(video,0,0,640,480);
   fill ('yellow');
   circle(400,150,200);
   fill('black');
    circle(377,130,20);
    fill('black');
    fill('black');
    circle(420,130,20);
    fill('red');
rect(380,180,50,20);
}
