class Dustbin{
    constructor(x, y, width, height){
        var BoxOptions ={
            isStatic: true
        }

    this.body = Bodies.rectangle(x, y, width, height, BoxOptions);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
    display(){
        push();
        rectMode(CENTER);
        fill("green"); 
        pop();  
    }
}