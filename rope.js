class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        
        this.pointB=pointB;
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke ("#61320B");
        line(pointA.x+30, pointA.y+30, pointB.x, pointB.y);
    }
}

    
fly(){
    this.rope.bodyA=null;
    
   }

   
   attach(bodyA){
    this.rope.bodyA=bodyA;
}




}