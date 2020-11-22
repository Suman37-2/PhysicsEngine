const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var myEngine,myWorld;

function setup(){
  createCanvas(500,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var op2={
    restitution:0
  }
  
  box=Bodies.rectangle(250,200,20,20,op2);
  World.add(myWorld,box);

  var op1={
    isStatic:true
  }

  ground=Bodies.rectangle(250,390,500,20,op1);
  World.add(myWorld,ground);
}
function draw(){
  background(0);
  Engine.update(myEngine);
  
  var pos=box.position;
  var pos2=ground.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,20,20);
  rect(pos2.x,pos2.y,500,20);
}