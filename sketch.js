var PLAY=1
var END=0
var gamestate=1
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
  
  

  
}


function draw() {
  background("black");
  text("score : "+score,330,50)
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Survival Time: "+survivaltime,100,50)
  
  
  if(gamestate===PLAY){
    Food()
  Obstacles()
    
    if(keyDown("space")){
    
    monkey.velocityY = -13
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  ground.x = ground.width/2;
  
  text("score : "+score,330,50)
  
  stroke("white")
  textSize(20)
  fill("white")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivaltime,100,50)
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    score=(score+1)
  }
  }
  if(monkey.collide(obstacleGroup)){
    gamestate=END
  
  monkey.collide(ground)
  
  ground.velocityX=0
    
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    monkey.velocityX=0
    

  }
  

  drawSprites();
}

function Food(){
  if(frameCount%70===0){
     banana = createSprite(600,100,40,10)
    banana.addImage(bananaImage)
    banana.scale=0.1 
    banana.y=Math.round(random(120,200))
    banana.velocityX=-5
    banana.lifetime=300
    FoodGroup.add(banana)
  }
}
function Obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(600,310,40,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacleGroup.add(obstacle)
  }
    }






