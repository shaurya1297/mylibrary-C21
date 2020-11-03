var rec1 , rec2, edges;

function setup() {
  createCanvas(800,400);
  rec1 =createSprite(400, 200, 50, 50);
  rec2 =createSprite(600,200,50,50)
  rec1.shapeColor="green"
  rec2.shapeColor="green"
  rec1.debug= true
  rec2.debug= true
  rec1.velocityX=2
  rec1.velocityY=3
  rec2.velocityX=-3
  rec2.velocityY=-2
  edges= createEdgeSprites()
}

function draw() {
  background(255,255,255);
  rec1.bounceOff(edges)  
  rec2.bounceOff(edges)
bounceOff(rec1,rec2);
if(isTouching(rec1,rec2)){
    rec1.shapeColor= "red"
    rec2.shapeColor= "red"
    
   console.log(rec1.velocityX)
  }else{
    rec1.shapeColor= "green"
    rec2.shapeColor= "green"
  }


  drawSprites();
}
