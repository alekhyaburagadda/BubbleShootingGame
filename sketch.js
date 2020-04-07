var bubblesImg;
var bubbles;
var player;
var playerImg;

function preload(){
bubblesImg= loadImage('circle.png');
playerImg= loadImage('redCircle.png');
}


function setup() {
  createCanvas(800,800);
  player=new Player(400,400);
  bubbles= new Bubbles;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}