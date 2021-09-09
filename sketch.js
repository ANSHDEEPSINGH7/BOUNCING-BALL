const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine , world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world= engine.world;

var option={
isStatic: true

}

var option1={
  restitution: 1.0
}

ball=Bodies.circle(200,100,20,option1);
World.add(world,ball);

ground=Bodies.rectangle(200,390,200 ,10,option);
World.add(world,ground);
  
}

function draw() {
  background("cyan");  

  Engine.update(engine);
  rectMode(CENTER)
 
  
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode()
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}