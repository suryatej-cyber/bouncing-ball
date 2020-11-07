const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var world,engine;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
 world=engine.world;
 var ground_options={
  isStatic: true
 } 
 var ball_options={
   restitution:1.0
 }
 ball=Bodies.circle(200,100,20,ball_options)
 World.add(world,ball);
ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}