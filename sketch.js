var f1,m1;

function setup() {
  createCanvas(1200,800);
  f1=createSprite(400, 100, 50, 80);
  f1.shapeColor='pink';
  f1.debug=true;

   m1=createSprite(400,700,80,50);
  m1.shapeColor='orange';
  m1.debug=true; 
  m1.velocityY=-5;
  f1.velocityY=5;
}

function draw() {
  background(0); 
  if(m1.x-f1.x<f1.width/2+m1.width/2
    && f1.x-m1.x<f1.width/2+m1.width/2){
      m1.velocityX=m1.velocityX*(-1);
      f1.velocityX=f1.velocityX*(-1);
    } 
    if(m1.y-f1.y<f1.height/2+m1.height/2
      && f1.y-m1.y<f1.height/2+m1.height/2){
        m1.velocityY=m1.velocityY*(-1);
        f1.velocityY = f1.velocityY*(-1);
      }
  drawSprites();
}