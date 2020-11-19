var wall, thickness;
var bullet, speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(100, 200, 70, 20);
  bullet.velocityX = speed;
 

 wall = createSprite(1200, 200, thickness, height/2);

 //bullet.debug = true;
 //wall.debug = true;
}

function draw() {
  background(0);  

  bullet.shapeColor = "white";
  wall.shapeColor = "white";

  if(collide(bullet, wall)){
 bullet.velocityX = 0
 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

 if(damage>10){
   wall.shapeColor = color(255, 0, 0);
 }

 if(damage<10)
   wall.shapeColor = color(0, 255, 0);
  }

 drawSprites();
}

function collide(bullet, wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if (bulletRightEdge>=wallLeftEdge){
  return true;
 }
 return false;
}