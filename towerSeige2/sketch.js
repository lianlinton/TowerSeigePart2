const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box51, box52, box53, box54, box55, box56, box57, box58, box59;
var polygon, pol;
var slingshot;

function preload()
{
  pol = loadImage("pol.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+150, 300, 20);
  ground2 = new Ground(width/2+300, height/2-50, 200, 20);

  polygon = Bodies.circle(50, 200, 10);
  World.add(world, polygon);

  slingshot = new Sling(this.polygon, {x: 100, y: 200});

  box1 = new Box(width/2-200, height/2+120, 30, 40);
  box2 = new Box(width/2-170, height/2+120, 30, 40);
  box3 = new Box(width/2-140, height/2+120, 30, 40);
  box4 = new Box(width/2-110, height/2+120, 30, 40);
  box5 = new Box(width/2-80, height/2+120, 30, 40);
  box6 = new Box(width/2-50, height/2+120, 30, 40);
  box7 = new Box(width/2-20, height/2+120, 30, 40);
  box8 = new Box(width/2-170, height/2+80, 30, 40);
  box9 = new Box(width/2-140, height/2+80, 30, 40);
  box10 = new Box(width/2-110, height/2+80, 30, 40);
  box11 = new Box(width/2-80, height/2+80, 30, 40);
  box12 = new Box(width/2-50, height/2+80, 30, 40);
  box13 = new Box(width/2-140, height/2+40, 30, 40);
  box14 = new Box(width/2-110, height/2+40, 30, 40);
  box15 = new Box(width/2-80, height/2+40, 30, 40);
  box16 = new Box(width/2-110, height/2, 30, 40);
  box17 = new Box(width/2+315, height/2-80, 30, 40);
  box18 = new Box(width/2+250, height/2-80, 30, 40);
  box19 = new Box(width/2+280, height/2-80, 30, 40);
  box20 = new Box(width/2+310, height/2-80, 30, 40);
  box21 = new Box(width/2+340, height/2-80, 30, 40);
  box22 = new Box(width/2+265, height/2-120, 30, 40);
  box23 = new Box(width/2+295, height/2-120, 30, 40);
  box24 = new Box(width/2+325, height/2-120, 30, 40);
  box25 = new Box(width/2+310, height/2-160, 30, 40);
  box26 = new Box(width/2+325, height/2-160, 30, 40);

}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
  ground1.display();
  ground2.display();
  fill(135, 205, 235);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255, 190, 200);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(65, 220, 210);
  box13.display();
  box14.display();
  box15.display();
  fill(130, 130, 130);
  box16.display();
  
  fill(135, 205, 235);
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill(255, 190, 200);
  box22.display();
  box23.display();
  box24.display();
  fill(65, 220, 210);
  box25.display();

  slingshot.display();

  imageMode(CENTER);
  image(pol, polygon.position.x, polygon.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.polygon);
  }
}