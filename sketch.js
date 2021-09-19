const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var Sand1, Sand2, Sand3, Sand4,Sand5,Sand6,Sand7,Sand8,Sand9,Sand10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    Sand1 = new Sand(500,450,5,5);
    Sand2 = new Sand(510,450,5,5);
    Sand3 = new Sand(520,450,5,5);
    Sand4 = new Sand(530,450,5,5);
    Sand5 = new Sand(540,450,5,5);
    Sand6 = new Sand(505,445,5,5);
    Sand7 = new Sand(515,445,5,5);
    Sand8 = new Sand(525,445,5,5);
    Sand9 = new Sand(545,445,5,5);
    Sand10 = new Sand(535,445,5,5);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();

    stone.display();
    iron.display();
    rubber.display();

    Sand1.display();
    Sand2.display();
    Sand3.display();
    Sand4.display();
    Sand5.display();
    Sand6.display();
    Sand7.display();
    Sand8.display();
    Sand9.display();
    Sand10.display();
}