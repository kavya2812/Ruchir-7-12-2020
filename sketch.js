const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,20);
  
  for(var k = 0; k<=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  
  

  for (var j = 25; j <=225; j=j+25) 
    {
    
       plinkos.push(new Plinko(j,50));
    }

    for (var j = 15; j <=width-10; j=j+25) 
    {
    
       plinkos.push(new Plinko(j,100));
    }
  

 
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
  ground.display();
  
 
  for(var j = 0; j< particles.length; j++) {
    particles[j].display();
  }

  if(frameCount%30===0) {
    particles.push(new Particle(random(0,400), 10,5));
  }
  for(var k = 0; k< divisions.length; k++) {
    divisions[k].display();
  }
  for(var g = 0; g< plinkos.length; g++) {
    plinkos[g].display();
  }
}