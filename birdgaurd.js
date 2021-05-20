class Birdgaurd{
    constructor(){
        var options={
            isStatic:true,
          }
            this.body=Bodies.rectangle(windowWidth/2,windowHeight/1.1,50,100,options);
          World.add(world,this.body)
          this.image=loadImage("robo/birdgaurd.png")
          }
    
    display(){
        var pos=this.body.position;
       
        imageMode(CENTER);
        push();
        
        image(this.image,pos.x,pos.y,250,400)

        pop();
    }
}