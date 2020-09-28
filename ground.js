class Ground{
    constructor(x, y, width, height){
        var GroundOptions ={
            isStatic: true
        }

    this.body = Bodies.rectangle(x, y, width, height, GroundOptions);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
    
    display(){
        push();
        fill("red"); 
        rectMode(CENTER);
        pop(); 
    }
}