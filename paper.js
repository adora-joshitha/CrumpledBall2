class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, radius, options);
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); 
        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink"); 
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();  
    }
}