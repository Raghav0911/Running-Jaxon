var path,boy,boy_animation,pathImg,inv_ground1,inv_ground2;
function preload(){
  //pre-load images
pathImg=loadImage("path.png");
boy_animation=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.4;

  boy=createSprite(200,250);
  boy.addAnimation("RUNNER",boy_animation);
  boy.scale=0.1;

  inv_ground1=createSprite(20,200,5,400);
  inv_ground1.visible=false;
  inv_ground2=createSprite(390,200,5,400);
  inv_ground2.visible=false;
}

function draw() {
  background("blue");
  
  boy.x=mouseX

  boy.collide(inv_ground1);
  boy.collide(inv_ground2);
    
  if(path.y>400){
    path.y= path.width/2;
  }
  

  drawSprites();
}
