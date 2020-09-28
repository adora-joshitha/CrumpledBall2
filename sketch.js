
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1;
var box2;
var box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(60, 60, 30);
	World.add(world, ball);	

	box1 = new Dustbin(600, 600, 150, 20);
	World.add(world, box1);
	box2 = new Dustbin(525, 565, 20, 90);
	World.add(world, box2);
	box3 = new Dustbin(675, 565, 20, 90);
	World.add(world, box3);

	ground = new Ground(400, 650, 800, 100);
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  background(100);

  Engine.update(engine);

  ball.display();

  box1.display();
  box2.display();
  box3.display();

  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:85})
	}
}