var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
}


  drawSprites();
}
