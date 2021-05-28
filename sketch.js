
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var robo,robo1,Fire,eagle,electoEagle,mobile,Tower,Tank,giant1;
var enemy,enemygrp,bullet,gun;
var edges,mobile1,eagle1,shots,power;
var propability=100
var propability1=100



function preload(){
robo=loadImage("robo/2.o.png")
robo1=loadImage("robo/2.01.png")
Fire =loadImage("robo/bullet.png")
Eagle=loadImage("robo/eagle1.png")
electoEagle=loadImage("robo/eagle.png")
mobile=loadImage("robo/mobile.png")
Tower11=loadImage("robo/TOWER.png")
robo=loadImage("robo/2.o.png")
Tank=loadImage("robo/tank.png")
giant1=loadImage("robo/robo.png")
shots=loadSound("robo/gun.mp3")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
bird=new Birdgaurd();
enemy = createSprite(windowWidth/2,windowHeight/4,10,40);
enemy.visible=false;
	Engine.run(engine);
  
}


function draw() {
  background("white");

textSize(30);
fill("red");
text("PROPABILITY1% = "+propability,windowWidth-400,windowHeight/1.1)
fill("green");

text("PROPABILITY% = "+propability1,windowWidth/10,windowHeight/1.1)


  bird.display();
  if(keyCode===32){
	Body.bird.x+=20
  }

tank();

 giant();

 tower();

 gunscene();

 drawSprites();
 
}








function giant(){
if(propability<5){
	enemy.addImage(giant1)

}
}

function electro(){
	if(propability1<5){
	power=createSprite(windowWidth/2,windowHeight/1.1)
	power.addImage(electoEagle)
	}
	}



function keyPressed(){
	if(keydown("m")){
		for(t=windowWidth/1.4;t<windowWidth/2.8;t=t+30){
mobile1=createSprite(t,windowHeight/1.4)
mobile1.addImage(mobile);
mobile1.velocityY=-12;
}
	}
}

function keyPressed(){
	if(keyDown("e")){
		for(t=windowWidth/1.4;t<windowWidth/2.8;t=t+30){
eagle1=createSprite(t,windowHeight/1.4)
}
eagle1.addImage(Eagle);
eagle1.velocityY=-12;

	}
}

function gunscene(){
	if(frameCount%250===0&& propability>5){
	gun=createSprite(windowWidth/2,windowHeight/4,10,40)
	gun.addImage(robo1)
	shots.play();
	if(frameCount%3===0){
		bullet=createSprite(random(windowWidth/4,windowWidth/2),gun.y-10,10,40)
			bullet.addImage(Fire)
			bullet.velocityY=-30;
	}
	}
}

function tower(){
	if(frameCount%210===0&& propability>5){
enemy=createSprite(windowWidth/2,windowHeight/4,10,40)
enemy.addImage(Tower11)
enemy.visible=true;
	}
}

function tank(){
	if(frameCount%140===0 && propability>5){
  var tank1=createSprite(windowWidth/2,windowHeight/4,10,40)
  tank1.addImage("tank",Tank)
  tank1.velocityX=-3
  //tank1.bounceOff(edges);
  bullet=createSprite(tank1.x,tank1.y-10,10,40)
  bullet.addImage(Fire)
  bullet.velocityY=-30;
}
  }