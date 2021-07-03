var backgroundImage;
//var playerCount;
var character,characterImage;
var backgroundImage2;
var gameState = 0;
var database;
var game, form, button,task,task2;
var black,blue,red,yellow,purple,white,green;
var blackhat,bluehat,redhat,yellowhat,purplehat,whitehat,greenhat;
var task2IMG_,TASK2;
var applause,glass_break;

function preload(){
      backgroundImage = loadImage("background.png")
      backgroundImage2 = loadImage("background2.png")
      characterImage = loadImage("character boy1.png");
      blackhat = loadImage("black hat.png");
      bluehat = loadImage("blue hat.png");
      redhat = loadImage("red hat.png")
      yellowhat = loadImage("yellow hat.png")
      purplehat = loadImage("purple hat.png")
      whitehat = loadImage("white hat.png");
      greenhat = loadImage("green hat.png");
      // task2IMG_ = loadImage("Images/task2.jpg")
      applause = loadSound("applause_sound.wav");
      glass_break = loadSound("glass_break.wav");
}
function setup() {
  createCanvas(displayWidth, displayHeight-80);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  
 
}

function draw() {
  background(backgroundImage2); 
  
 

   if(keyDown("space")) {
     gameState = 1;
  }

  if(gameState ===1){
    game.play2();
  }

  
  drawSprites();
}
 

