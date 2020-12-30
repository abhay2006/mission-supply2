var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxleft , boxright , boxbase

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options =  {}

restitution : 1

	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
boxleft = createSprite(250,600,20,100,{isStatic:true})
boxleft.shapeColor = "red";
World.add(world,boxleft);
boxright = createSprite(450,600,20,100,{isStatic:true})
boxright.shapeColor = "red";
World.add(world,boxright);
boxbase = createSprite(350,650,220,20,{isStatic:true})
boxbase.shapeColor = "red";
World.add(world,boxbase);

}


function draw() {
 
  background(0);

  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
  Matter.Body.setStatic(packageBody,false);

  }
}



