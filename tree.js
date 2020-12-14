class Tree{
    constructor(){
        var options={
            isStatic:true,
         
        }
        this.body=Matter.Bodies.rectangle(700,0,500,700, options);
        this.image=loadImage("tree.png");
        World.add(world, this.body);
    }
    
    display(){
        image(this.image, 700,0,500,700);
    }
    
}