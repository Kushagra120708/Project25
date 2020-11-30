
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin;
var bin,binImg;

function preload()
{
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

   bin = createSprite(690,560,5,5);
   bin.addImage(binImg)
   bin.scale = 0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,645,800,10);
	paper = new Paper(100,640,45);
	BDustbin = new Dustbin(690,635,120,10);
	RDustbin = new Dustbin(630,550,10,160);
	LDustbin = new Dustbin(750,550,10,160);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("BLACK");
  
   keyPressed();

 ground.display();
 BDustbin.display();
 RDustbin.display();
 LDustbin.display();
 paper.display();

 drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:0.5,y:-2});
	}
}

