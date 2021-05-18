const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder_, thunder1, thunder2, thunder3, thunder4;
var person_, person_Img;

var engine, world;
var maxDrops = 100;

var drops = [];
var thundersImg = 0;

function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
}

function setup(){
  var canvas = createCanvas(400,655);
    
  engine = Engine.create();
  world = engine.world;
    
  umbrella_ = new umbrella(200,450);

  if(frameCount % 150 === 0){
  for(var i=0; i<maxDrops; i++){
  drops.push(new drop(random(0,400), random(0,400)));
  }

  }

}

function draw(){
  background("black");
  Engine.update(engine);


  rand = Math.round(random(1,4));
  if(frameCount%70===0){
  thundersImg=frameCount;
  thunder_ = createSprite(random(10,370), random(10,30), 10, 10);
  switch(rand){
  case 1: thunder_.addImage(thunder1);
  break;
  case 2: thunder_.addImage(thunder2);
  break; 
  case 3: thunder_.addImage(thunder3);
  break;
  case 4: thunder_.addImage(thunder4);
  break;
  default: break;
  }
  
  thunder_.scale = random(0.3,0.5)
  }
  
  if(thundersImg + 10 === frameCount && thunder_){
  thunder_.destroy();
  }

  umbrella_.display();

   
  for(var i = 0; i<maxDrops; i++){
  drops[i].showDrop();
  drops[i].updateY();
          
  }
  drawSprites();
} 
