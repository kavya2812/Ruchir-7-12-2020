class Plinko {
    constructor(x,y) {
      var options = {
        restitution: 1,
        friction: 0,
        isStatic:true
      }
      this.r = 8;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      noStroke();
      fill("black");
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }
  };