var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 200, 50, 80);
  movingRect = createSprite(100, 200, 80, 50);

  fixedRect.velocityX = -3;
  movingRect.velocityX = 3;



  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
 
  
  if(fixedRect.x -movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.x - fixedRect.x  < movingRect.width/2 + fixedRect.width/2){
        fixedRect.velocityX = fixedRect.velocityX * -1;
        movingRect.velocityX = movingRect.velocityX * -1;

    }
    if(fixedRect.y -movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y  < movingRect.height/2 + fixedRect.height/2){
        fixedRect.velocityY = fixedRect.velocityY * -1;
        movingRect.velocityY = movingRect.velocityY * -1;
    

    }
  drawSprites();
}