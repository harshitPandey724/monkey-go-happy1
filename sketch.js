var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background1,backgroundImage;
var apple,appleImage;
var gameoverImage,gameover;
var bananaGroup, obstacleGroup,appleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("forest.jpg");
  appleImage = loadImage("apple.png");
  
 
}



function setup() {
  createCanvas(600,500);
  
  background1 = createSprite(300,250,600,500);
  background1.addImage("jungle",backgroundImage);
  
  monkey = createSprite(80,380,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,450,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground. visible = false;
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  appleGroup = new Group();

  
}


function draw() {
 background("white")
  
  
  
  
     
      background1.velocityX = -4;
      if(background1.x < 0){
      background1.x = background1.width/2;
    }
    
    ground.velocityX = -4; 
    if(ground.x < 0){
    ground.x = ground.width/2;
  }
    
    //monkey.velocityX = 3;
    
     if(keyDown("space")){
        monkey.velocityY = -12;  
  } 
    monkey.velocityY = monkey.velocityY + 0.25;
    monkey.collide(ground);
  
    foodA()
    foodB()
    obstacles()
  
    drawSprites();

  
}

function obstacles(){
   if(frameCount % 300===0){
  obstacle = createSprite(400,390,60,89); 
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.3;
  obstacle.velocityX = -5;
  obstacle.lifetime = 300;
  //obstacle.debug = true;
  obstacle.setCollider("circle",0,0,200);
  
  obstacleGroup.add(obstacle);
  


   }

}

function foodB(){
  if(frameCount % 80===0){
  banana = createSprite(500,200,20,20);
  banana.y = Math.round(random(120,200));  
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 300;

  bananaGroup.add(banana);

  }
}

function foodA(){
  if(frameCount % 80===0){
  apple = createSprite(0,200,20,20);
  apple.y = Math.round(random(120,200));  
  apple.addImage(appleImage);
  apple.scale = 0.1;
  apple.velocityX = 3;
  apple.lifetime = 300;

  appleGroup.add(apple);

  }
}





