const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
const Mouse=Matter.Mouse;
var ground;
var myworld;
var myEngine;
var duck, flying, starfish, monkey, octopus;
var duckImage, flyingI, starfishI, monkeyI, octopusI, sharkI, mantaI;
var sea, river, jungle, intro, darksea;
var seaI, riverI, jungleI, introI, darkseaI;
var tree, mango, coin;
var treeI, mangoI, coinI;
var animal, a1I, a2I;
var  sadmonkey, hangingMonkey;
var  sadmonkeyI, hangingMonkeyI;
var intro, introi, invisible;
var obstacle, obstacleGroup, coin, coinGroup, animalGroup;
var intro1,intro2,intro3,lost,win, story;
var intro1I,intro2I,intro3I,lostI,winI, storyI;
var check,die,lostbm,welcome,monkeybm,starfishbm,duckbm,winbm;
var form,reset;
var life = 2;
var life2 = 5;
var chance = 10;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var gameState = "1";

function preload() {

  duckImage = loadImage('images/duck.png')
  a1I = loadImage('images/snake.png')
  a2I = loadImage('images/croc.png')
  flying = loadImage('images/flying.png')
  starfishI = loadImage('images/starfish.png');
  monkeyI = loadImage('images/monkey.png');
  sharkI = loadImage('images/shark.png');
  mantaI = loadImage('images/manta.png');
  seaI = loadImage('images/seabg.jpeg');
  riverI = loadImage('images/frogbg.jpeg');
  jungleI = loadImage('images/jungle2.jpeg');
  introi = loadImage('images/intro.jpeg');
  darkseaI = loadImage('images/darksea.jpg');
  treeI = loadImage('images/tree.png');
  mangoI = loadImage('images/mango.png');
  coinI = loadImage('images/coin.png');
  happyFrofI = loadImage('images/happyfrog.png');
  sadmonkeyI = loadImage('images/sadMonkey.png');
  hangingMonkeyI = loadImage('images/hangingmonk.png');
  intro1I=loadImage("images/level1.jpg");
  intro2I=loadImage("images/level2.jpg");
  intro3I=loadImage("images/level3.jpg");
  lostI=loadImage("images/lose.jpg");
  winI=loadImage("images/win.jpg");
  storyI=loadImage("images/welcome.jpg");
  /*check=loadSound("music/Checkpoint.mp3")
  die=loadSound("music/Die.flac")
  lostbm=loadSound("music/Lost.wav")
  welcome=loadSound("music/Intro.wav")
  monkeybm=loadSound("music/Monkey.wav")
  starfishbm=loadSound("music/Starfish.mp3")
  winbm=loadSound("music/Win.mp3")
  duckbm=loadSound("music/Duck.mp3")*/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  form = new Form()
  reset=new Form2()

  //physics engine world
  engine = Engine.create();
  world = engine.world;

  //intros
  intro1=createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro1.addImage(intro1I)
 intro1.visible = false;
  intro1.scale = 1;
  intro1.scale = 0.5;

  intro2=createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro2.addImage(intro2I)
  intro2.visible = false;
  intro2.scale = 1;
  intro2.scale = 0.25;

  intro3=createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro3.addImage(intro3I)
  intro3.visible = false;
  intro3.scale = 1;
  intro3.scale = 1;

  lost=createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  lost.addImage(lostI)
  lost.visible = false;
  lost.scale = 1;
  lost.scale = 0.25;

  win=createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  win.addImage(winI)
  win.visible = false;
  win.scale = 1;
 win.scale = 0.25;

  story=createSprite(displayWidth / 2, displayHeight / 2-50, 100, 100)
  story.addImage(storyI)
  story.visible = false;
  story.scale = 0.25;

  //level1(starfish)

  sea = createSprite(displayWidth / 2, displayHeight / 2 - 200, 100, 100)
  sea.addImage(seaI)
  sea.visible = false;
  sea.scale = 1;

  starfish = createSprite(displayWidth / 2, displayHeight / 2, 100, 100)
  starfish.addImage(starfishI)
  starfish.visible = false;
  starfish.scale = 0.18;

  octopus = createSprite(100, 200, 100, 100)
  //octopus.addImage(octopusI)
  octopus.visible = false;

  //level2(frog)
  river = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  river.addImage(riverI)
  river.visible = false;
  river.scale = 2.4

  invisible = createSprite(displayWidth / 2, displayHeight / 2 + 150, displayWidth, 20)
  invisible.visible = false;

  duck = createSprite(displayWidth / 2 - 400, displayHeight / 2, 100, 100)
  duck.addImage(duckImage, duck)
  duck.visible = false;
  duck.scale = 0.25

  //groups
  obstacleGroup = new Group()
  coinGroup = new Group()
  enemyGroup = new Group()
  //thank you and reset

  //level3(monkey)
  jungle = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  jungle.addImage(jungleI)
  jungle.visible = false;
  //jungle.scale = 2.4

tree=createSprite(displayWidth / 2 + 300, displayHeight / 2 - 70, 450, 450) 
tree.addImage(treeI)
tree.visible=false;
tree.scale=0.7
 m1 = new Mango(displayWidth / 2 + 200, displayHeight / 2 - 200, 30, 50)
  m2 = new Mango(displayWidth / 2 + 300, displayHeight / 2 - 250, 30, 50)
  m3 = new Mango(displayWidth / 2 + 400, displayHeight / 2 - 200, 30, 50)
  m4 = new Mango(displayWidth / 2 + 130, displayHeight / 2 - 90, 30, 50)
  m5 = new Mango(displayWidth / 2 + 300, displayHeight / 2-80, 30, 50)
  m6 = new Mango(displayWidth / 2 + 470, displayHeight / 2-70, 30, 50)
  ground = new Ground(displayWidth / 2, displayHeight / 2 + 350, displayWidth, 2)
  ground1 = new Ground(displayWidth / 2, displayHeight / 2 - 550, displayWidth, 2)
  ground2 = new Ground(displayWidth / 2+650, displayHeight/2 , 2, displayHeight)
  ground3 = new Ground(displayWidth / 2-650, displayHeight/2, 2, displayHeight)

  monkey=new Monkey(10,10,70,140)
  string=new String(monkey.body,{x:350,y:50})  
  Engine.run(engine);

 // welcome.loop()
}

function draw() {
  background(introi);
  drawSprites();
  edges = createEdgeSprites();


  if (gameState === "1") {
    form.display()
    reset.display()
  }

  //---------------------------------------------------------------------------------------

  if(gameState==="story"){
    clear()
    background(seaI)
    story.visible = true;
     if(keyDown("Space")){
       gameState="level1intro"
     }
     reset.display()
     drawSprites()
  }

  if(gameState==="level1intro"){
    clear()
    background(seaI)
    story.visible=false;
    intro1.visible=true;
    if(keyDown("Enter")){
      gameState="level1"
    }
    reset.display()
    drawSprites()
 }

  //level1
  if (gameState === "level1") {
    clear()
    intro1.visible=false;
    sea.visible = true;
    starfish.visible = true;
    spawnObstacles()
    reset.display()
    drawSprites()


    //life and score display
    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score1, 50, 80)
    text("LIFE LEFT: " + life, 50, 50)
    spawnObstacles()
    spawncoins()
    ground.display()
    ground1.display()
    ground2.display()
    ground3.display()

    //movement of starfish
    if (keyDown('UP_ARROW')) {
      starfish.y -= 5;
    }

    if (keyDown('DOWN_ARROW')) {
      starfish.y += 5;
    }

    if (keyDown('LEFT_ARROw')) {
      starfish.x -= 5
    }

    if (keyDown('RIGHT_ARROw')) {
      starfish.x += 5
    }

    //rules
    if (starfish.isTouching(obstacleGroup)) {
      life -= 1
    }

    for (var i = 0; i < coinGroup.length; i++) {
      if (coinGroup.get(i).isTouching(starfish)) {
        coinGroup.get(i).destroy()
        score1 = score1 + 1
      }
    }

    for (var i = 0; i < obstacleGroup.length; i++) {
      if (obstacleGroup.get(i).isTouching(starfish)) {
        obstacleGroup.get(i).destroy()
        life = life - 1
      }
    }

    //changing to level2
    if (gameState === "level1" && score1 === 15) {
      clear()
      gameState = "level2intro"

    }

    if(life===0){
      gameState==="lose"
    }

  }

  if(gameState==="level2intro"){
    clear()
    reset.display()
    sea.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    background(riverI)
    intro2.visible=true;
    if(keyDown("Enter")){
      gameState="level2"
    }
    drawSprites()
 }

  //-----------------------------------------------------------------------------------------------------

  if (gameState === "level2") {
    //removing level1
    //console.log(duck.y)
    intro2.visible=false;
    sea.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    reset.display()
    //viewing level2
    drawSprites()
    river.visible = true;
    duck.visible = true;
    spawnEnemies()
    duck.collide(invisible)
    life = 5
    ground.display()
    ground1.display()
    ground2.display()
    ground3.display()

    //making the duck jump
    if (keyDown('UP_ARROW') && duck.y <= 469) {
      duck.velocityY = -10;
      duck.addImage(flying)
      duck.scale = 0.35;
      duck.setCollider("rectangle", 0, 0, 500, 500);
    }
     
    if(duck.y >= 469){
      duck.addImage(duckImage)
    }

    //gravity for duck
    duck.velocityY += 0.9;

    //score
    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score2, 50, 80)
    text("LIFE LEFT: " + life2, 50, 50)
    spawnObstacles()
    spawncoins()

    //score system
    score2 = score2 + Math.round(getFrameRate() / 60);

    //destroying the enemy+life 
    for (var i = 0; i < enemyGroup.length; i++) {
      if (enemyGroup.get(i).isTouching(duck)) {
        enemyGroup.get(i).destroy()
        life2 = life2 - 1
      }
    }

    if(life2===0){
      gameState==="lose"
    }

    if (score2 === 250) {
      gameState = "level3intro";
    }


  }

  if(gameState==="level3intro"){
    clear()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible=false;
    reset.display()
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    background(jungleI)
    intro3.visible=true;
    if(keyDown("Enter")){
      gameState="level3"
    }
    drawSprites()
 }

  //-----------------------------------------------------------------------------------------

  //level3

  if (gameState === "level3") {
    clear()
    background(jungleI)
    drawSprites();
    reset.display()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible=false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    tree.visible=true;
    monkey.display()
    m1.display()
    m2.display()
    m3.display()
    m4.display()
    m5.display()
    m6.display()
    ground.display()
    ground1.display()
    ground2.display()
    ground3.display()
    string.display()

    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score3, 50, 80)
    text("CHANCES LEFT: " + chance, 50, 50)

    /*if(m1.body.isStatic===false){
      score3=score3+1;
    }

    if(m2.body.isStatic===false){
      score3=score3+1;
    }

    if(m3.body.isStatic===false){
      score3=score3+1;
    }

    if(m4.body.isStatic===false){
      score3=score3+1;
    }

    if(m5.body.isStatic===false){
      score3=score3+1;
    }

    if(m6.body.isStatic===false){
      score3=score3+1;
    }*/

    if(string.fly()){
      chance=chance-1;
    }

    detectCollision(monkey, m1)
    detectCollision(monkey, m2)
    detectCollision(monkey, m3)
    detectCollision(monkey, m4)
    detectCollision(monkey, m5)
    detectCollision(monkey, m6)

    if(chance===0){
      gameState="lose"
    }

    if(score3===3){
       gameState==="win"
    }

  }

   if(gameState==="win"){
     clear()
     sea.visible = false;
     story.visible=false;
     reset.display()
    intro1.visible=true;
     obstacleGroup.destroyEach()
     coinGroup.destroyEach()
     starfish.visible = false;
     obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible=false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
     background("black")
      win.visible=true;
      drawSprites()
   }

   if(gameState==="lose"){
    clear()
    sea.visible = false;
    story.visible=false;
    intro1.visible=true;
    reset.display()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible=false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    background("black")
     lost.visible=true;
     drawSprites()
  }
}

function spawnObstacles() {
  if (frameCount % 150 === 0) {
    obstacle = createSprite(0, random(100, 200), 20, 20)
    obstacle.lifetime = 1000
    obstacle.debug = true;
    var ran = Math.round(random(1, 2))
    switch (ran) {
      case 1: obstacle.addImage(sharkI)
        obstacle.y = random(100, displayHeight - 100);
        obstacle.scale = 0.35
        obstacle.velocityX = random(4, 10)
        //obstacle.setCollider("rectangle",0,0,50,200);
        break;

      case 2: obstacle.addImage(mantaI)
        obstacle.scale = 0.35
        obstacle.x = displayWidth + 100
        obstacle.y = random(100, displayHeight - 100);
        obstacle.velocityX -= random(4, 10)
        break;
      default: break;

    }
    obstacleGroup.add(obstacle)
  }
}

function spawncoins() {
  if (frameCount % 20 === 0) {
    coin = createSprite(displayWidth + 100, (random(100, 600)), 200, 100)
    coin.addImage(coinI);
    coin.scale = 0.05;
    coin.velocityX -= 2;
    coin.lifetime = 1000;
    // coin.debug=true;
    coinGroup.add(coin);

  }
}

function spawnEnemies() {
  if (frameCount % 200 === 0) {
    enemy = createSprite(displayWidth + 100, displayHeight / 2 + 120, 20, 20)
    enemy.lifetime = 1000
    //enemy.scale=0.25;
    enemy.velocityX -= random(4, 10)
    enemy.debug = true;
    var ran = Math.round(random(1, 2))
    switch (ran) {
      case 1: enemy.addImage(a2I)
        break;

      case 2: enemy.addImage(a1I)
        enemy.scale = 0.4
        break;
      default: break;

    }
    enemyGroup.add(enemy)
  }
}

function mouseDragged(){
  Matter.Body.setPosition(monkey.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  string.fly()
}

function detectCollision(monkey, m) {
  var distance = dist(monkey.body.position.x, monkey.body.position.y, m.body.position.x, m.body.position.y)
  if (distance <= monkey.r, m.r) {
    Matter.Body.isStatic(m.body, false)
  }
}


function keyPressed(){
  if(keyCode===32){
  string.attach(monkey.body);
  }
}