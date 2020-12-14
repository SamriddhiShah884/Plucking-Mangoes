class Ground{
    constructor(){
        var options={
            isStatic:true
            
            
        }
        this.body=Matter.Bodies.rectangle(0,680,1200,20,options);
        this.image=loadImage("grass.png");
        World.add(world, this.body);

    }

    display(){
        stroke ("black");
       image(this.image,0,620,600,90);
       image(this.image,600,620,600,90);
    }
}