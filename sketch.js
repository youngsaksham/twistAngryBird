const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 ;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,50,50);
    box2 = new Box(800,320,50,50);
    box3 = new Box(900,320,50,50);
    box4 = new Box(1000,320,50,50);
    box5 = new Box(1100,320,50,50);

    box6 = new Box(750,270,50,50);
    box7 = new Box(850,270,50,50);
    box8 = new Box(950,270,50,50);
    box9 = new Box(1050,270,50,50);

    box10 = new Box(800,220,50,50);
    box11 = new Box(900,220,50,50);
    box12 = new Box(1000,220,50,50);

    box13 = new Box(850,170,50,50);
    box14 = new Box(950,170,50,50);

    box15 = new Box(900,120,50,50);

   log1 = new Log(750,320,50,50);
   log2 = new Log(850,320,50,50);
   log3 = new Log(950,320,50,50);
   log4 = new Log(1050,320,50,50);

   log5 = new Log(800,270,50,50);
   log6 = new Log(900,270,50,50);
   log7 = new Log(1000,270,50,50);

   log8 = new Log(850,220,50,50);
   log9 = new Log(950,220,50,50);

   log10 = new Log(900,170,50,50);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
   
 
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}