var quadrado
function setup() {
  quadrado = createSprite(200,200,20,20);
  quadrado.shapeColor = "black";
  createCanvas(400,400);
}

function draw() 
{
  background("green");
  drawSprites();
  if (keyDown("left")){
    quadrado.x = quadrado.x - 20;
  }
  if (keyDown("right")){
    quadrado.x = quadrado.x +20;
  }
if (keyIsDown(UP_ARROW)){
quadrado.y = quadrado.y - 50;
}
if (keyIsDown(DOWN_ARROW)){
  quadrado.y = quadrado.y + 50;
  }
}




