var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);     
 car = createSprite(50,200,50,50);
 wall=createSprite(500,200,60,height/2);
 speed=random(55,90);
 weight=random(500,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed;
  if (wall.x-car.x<(car.width/2+wall.width)/2)
 {
    car.velocityX=0; 
    car.x=50;
    car.y=200;
    var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180) 
    {
    car.shapeColor=(255,0,0);  
    }
    if (deformation<180&&deformation>100) 
    {
      car.shapeColor=(230,230,0);
    }
    if (deformatiom<100) 
    {
      car.shapeColor=(0,255,0);
    }
 }
  drawSprites();
}