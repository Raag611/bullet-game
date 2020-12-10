var bullet, wall;

var speed , weight;

function setup() {

  createCanvas(1600,400);
speed= random(233,321);
weight=random(30,52);

thickness=random(22,83),

bullet =createSprite(30, 200, 70, 5);
bullet.velocityX = speed;
bullet.shapeColor = color(255);


  wall=createSprite(1200, 200, thickness,height/2);
}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)){
  
   bullet.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     bullet.shapeColor=color(255,0,0);


   } 

   if(deformation<180 && deformation>100)
   {
     bullet.shapeColor=color(230,230,0);


   }
   if(deformation<100)
   {
     bullet.shapeColor=color(0,255,0);


   }


  }
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    

    if(damage>10)
    {
     wall.shapeColor=color(255,0,0);


    }
    if(damage<10)
    {
     wall.shapeColor=color(0,255,0);


    }





  }

  hasCollided(bullet,wall);
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
      return true


  }
  
  return false;

  






}