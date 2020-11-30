class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
    this.Body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.Body)

  }

  display() {
      fill("white")
      rectMode(CENTER)
      rect(this.Body.position.x, this.Body.position.y, this.width, this.height)
  }
}