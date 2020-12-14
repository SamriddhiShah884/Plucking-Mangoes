class Boy{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Matter.Bodies.rectangle(150,600,40,70,options);
        this.image=loadImage("boy.png");
        World.add(world, this.body);
    }

    display(){
        image(this.image,100,500,200,250)
    }


}