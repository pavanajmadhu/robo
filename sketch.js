
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var robo,robo1,Fire,eagle,electoEagle,mobile,Tower,Tank,giant;
var enemy,enemygrp,bullet,gun;

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
  background("white");

  bird.display();
  if(keyCode===32){
	Body.bird.x+=20
  }
  createEdgeSprites();
// Obstacle();
  
 drawSprites();
 
}

function Obstacle(){
	if(frameCount % 50 === 0) {

		
		var rand = Math.round(random(1));
		switch(rand) {
		  case 1: function tank(){
			var tank1=createSprite(windowWidth/2,windowHeight/4,10,40)
			tank1=loadImage(Tank)
			tank1.velocityX=-3
            tank1.bounceOf(edges);
			bullet=createSprite(tank1.x,tank1.y-10,10,40)
			bullet.addImage(Fire)
			bullet.velocityY=-30;
			}
				  break;
		  case 2: function tower(){
	enemy=createSprite(windowWidth/2,windowHeight/4,10,40)
	enemy.addImage(Tower)
	   }
				  break;
		  case 3: 
		  function gunscene(){
			  gun=createSprite(windowWidth/2,windowHeight/4,10,40)
			  gun.addImage(robo1)
			  if(frameCount%3===0){
				  bullet=createSprite(random(windowWidth/4,windowWidth/2),gun.y-10,10,40)
					  bullet.addImage(Fire)
					  bullet.velocityY=-30;
		  
			  }
		  }
				  break;
				  default:break
		  
		}

}

}







