var bg;
var spaceship;
var spaceshipImg;
var astroied1,astroied2,astroied3,astroied4,astroied5,astroied6;
var astroied1Img,astroied2Img,astroied3Img,astroied4Img,astroied5Img,astroied6Img;
var astroied1Grup,astroied2Grup,astroied3Grup,astroied4Grup,astroied5Grup,astroied6Grup;
var bullet;
var bulletImg;
var bulletGrup;
var score = 0;
var lives = 5;
var gameState = "Play";
var bulletSound;
var destroySound;

function preload(){
bg = loadImage("images/bg2.png")
spaceshipImg = loadImage("images/spaceship1.png")
astroied1Img = loadImage("images/astroied.png")
astroied2Img = loadImage("images/astroied2.png")
astroied3Img = loadImage("images/astroied3.png")
astroied4Img = loadImage("images/astroied4.png")
astroied5Img = loadImage("images/astroied5.png")
astroied6Img = loadImage("images/astroied6.png")
bulletImg = loadImage("images/bullet.png")
bulletSound = loadSound("sounds/bullet sound.wav")
destroySound = loadSound("sounds/destroy.wav")
}

function setup(){
 createCanvas(displayWidth,displayHeight);
 spaceship = createSprite(750,750);
 spaceship.addImage(spaceshipImg)
 spaceship.scale = 0.4;

 spaceship.setCollider("rectangle",0,0,spaceship.width/2,spaceship.height/2);
 spaceship.debug = true
 astroied1Grup = new Group();
 astroied2Grup = new Group();
 astroied3Grup = new Group();
 astroied4Grup = new Group();
 astroied5Grup = new Group();
 astroied6Grup = new Group();
 bulletGrup = new Group();
}

function draw(){
 
   background(bg);
if(gameState === "Play"){


   if(keyDown("left")){
spaceship.x = spaceship.x-6.5
 }
 if(keyDown("right")){
spaceship.x = spaceship.x+6.5
 }
 if((keyDown("space"))&&bulletGrup.isTouching(spaceship)===false){
firebullet();
bulletSound.play();
 }
var rand=Math.round(random(1,6))
if(frameCount % 100 === 0){
if(rand===1){
    spawnAstroied1();
}
else if(rand===2){
    spawnAstroied2();
}
else if(rand===3){
    spawnAstroied3();
}
else if(rand===4){
    spawnAstroied4();
}
else if(rand===5){
    spawnAstroied5();
}
else {spawnAstroied6();}
}

if(bulletGrup.isTouching(astroied1Grup)){
  astroied1Grup.destroyEach(); 
  score=score+1 
  destroySound.play();
}
if( bulletGrup.isTouching(astroied2Grup)){
    astroied2Grup.destroyEach();
    score=score+2 
    destroySound.play();
}
if(bulletGrup.isTouching(astroied3Grup)){
    astroied3Grup.destroyEach();
    score=score+3 
    destroySound.play();
} 
if(bulletGrup.isTouching(astroied4Grup)){
    astroied4Grup.destroyEach();
    score=score+4 
    destroySound.play();
}
if(bulletGrup.isTouching(astroied5Grup)){
    astroied5Grup.destroyEach();
    score=score+6 
    destroySound.play();
} 
if(bulletGrup.isTouching(astroied6Grup)){
    astroied6Grup.destroyEach();
    score=score+8 
    destroySound.play();
}   
if(astroied1Grup.isTouching(spaceship)|| astroied2Grup.isTouching(spaceship)|| astroied3Grup.isTouching(spaceship)
|| astroied4Grup.isTouching(spaceship)|| astroied5Grup.isTouching(spaceship)|| astroied6Grup.isTouching(spaceship)){
lives = lives-1
astroied1Grup.destroyEach();
astroied2Grup.destroyEach();
astroied3Grup.destroyEach();
astroied4Grup.destroyEach();
astroied5Grup.destroyEach();
astroied6Grup.destroyEach();
bulletGrup.destroyEach();
    
}
if(lives === 0){
    gameState = "End"
}
if(score > 100){
astroied1.velocityY = 3.5;
astroied2.velocityY = 3.5;
astroied3.velocityY = 3.5;
astroied4.velocityY = 3.5;
astroied5.velocityY = 3.5;
astroied6.velocityY = 3.5;

}
}
if(gameState === "End"){
textSize(100)
text( "GameOver",620,350)
 
textSize(60)
fill("red")
text("Press R to Restart", 500,450)
}
 
if(spaceship.x < 100){
spaceship.x = 110
}

if(spaceship.x > displayWidth -100){
spaceship.x = displayWidth -110 
}

drawSprites();
textSize(20)
stroke("white")
text("Score="+score,100,190)

text("Lives="+lives,100,150)

reset();

}

function spawnAstroied1(){
    astroied1 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied1.addImage(astroied1Img)
    astroied1.scale = 0.3
    astroied1.velocityY = 2.5
    astroied1Grup.add(astroied1)
    astroied1Grup.setLifetimeEach(800);
}
function spawnAstroied2(){
    astroied2 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied2.addImage(astroied2Img)
    astroied2.scale = 0.2
    astroied2.velocityY = 2.5
    astroied2Grup.add(astroied2)
    astroied2Grup.setLifetimeEach(800);
}
function spawnAstroied3(){
    astroied3 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied3.addImage(astroied3Img)
    astroied3.scale = 0.3
    astroied3.velocityY = 2.5
    astroied3Grup.add(astroied3)
    astroied3Grup.setLifetimeEach(800);
}
function spawnAstroied4(){
    astroied4 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied4.addImage(astroied4Img)
    astroied4.scale = 0.6
    astroied4.velocityY = 2.5
    astroied4Grup.add(astroied4)   
    astroied4Grup.setLifetimeEach(800); 
}
function spawnAstroied5(){
    astroied5 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied5.addImage(astroied5Img)
    astroied5.scale = 0.2
    astroied5.velocityY = 2.5
    astroied5Grup.add(astroied5)
    astroied5Grup.setLifetimeEach(800);
}
function spawnAstroied6(){
    astroied6 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied6.addImage(astroied6Img)
    astroied6.scale = 0.5
    astroied6.velocityY = 2.5
    astroied6Grup.add(astroied6)
    astroied6Grup.setLifetimeEach(800);
}

function firebullet(){
    bullet = createSprite(spaceship.x,750);
    bullet.addImage(bulletImg)
    bullet.scale = 0.1
    bullet.velocityY = -10
    bulletGrup.add(bullet)
    bulletGrup.setLifetimeEach(70)
}
function reset(){
    if(keyDown("r")){
        gameState = "Play"
     
    }
}