
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var robo,robo1,Fire,eagle,electoEagle,mobile,Tower,Tank,giant;
var enemy,enemygrp;

function preload()
{
robo=loadImage("robo/2.o.png")
robo1=loadImage("robo/2.01.png")
Fire =loadImage("robo/bullet.png")
eagle=loadImage("robo/eagle1.png")
electoEagle=loadImage("robo/eagle.png")
mobile=loadImage("robo/mobile.png")
Tower=loadImage("robo/TOWER.png")
robo=loadImage("robo/2.o.png")
Tank=loadImage("robo/tank.png")
giant=loadImage("robo/tank.png")








}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
bird=new Birdgaurd();
enemy = createSprite(windowWidth/2,windowHeight/4,10,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bird.display();
  if(keyCode===32){
	Body.bird.x+=20
  }
 Obstacle();
  
  drawSprites();
 
}

function Obstacle(){
	if(frameCount % 20 === 0) {
		enemy = createSprite(windowWidth/2,windowHeight/4,10,40);

		enemy.velocityY= 6;
		
		var rand = Math.round(random(1,3));
		switch(rand) {
		  case 1: tank();
				  break;
		  case 2: tower();
				  break;
		  case 3: fire();
				  break;
				  default:break
		  
		}

}

}

function tank(){

}

function tower(){

}

function fire(){

}


