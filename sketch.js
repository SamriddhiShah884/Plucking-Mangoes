
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope;
var tree;
var mango1, mango2, mango3 , mango4, mango5, mango6;
var boy;
var ground;
var stone;
var 	backgroundImg;

function preload()
{
	backgroundImg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  tree=new Tree();
  boy= new Boy();
	ground= new Ground();

	stone= new Stone(115,540,40);
	mango1= new Mango(980, 30, 25,25);
	mango2= new Mango(890, 130, 25,25);
	mango3= new Mango(960, 250, 25,25);
	mango4= new Mango(1100, 210, 25,25);
	mango5= new Mango(870, 70, 25,25);
	mango6= new Mango(800, 230, 25,25);
	rope= new Rope(stone.body, {x:140, y:560});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

 
  
  rope.display();
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  drawSprites();
 
}



function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode===32){
      rope.attach(stone.body);
  }
}



function detectCollision(lstone, lmango){
  var mangoPos=lmango.body.position;
  var stonePos=lstone.body.position;
//console.log("detecting");
  var distance=dist(stonePos.x, stonePos.y,mangoPos.x, mangoPos.y );

  if(distance<=lmango.r+lstone.r){
    console.log("a");
    Matter.Body.setStatic(lmango.body,false);
  }
}