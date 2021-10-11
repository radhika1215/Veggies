var harry, harry_running, harry_collided;

var background, backgroundImage;

var giftsGroup, balloonImage, coinImage, ChocolateImage, WatchImage, roseImage, tomatoImage;
var junkGroup, friesImage, burgerImage, sandwichImage;

var ground;
var score = 0;


function preload() {

  backgroundImage = loadImage("Happy-birthday.jpg");
  //bg2=loadImage("HB1-4.jpg")

  harry_running = loadAnimation("harry1.png", "harry2.png", "harry3.png", "harry4.png", "harry5.png", "harry6.png", "harry7.png", "harry8.png")

  harry_collided = loadAnimation("harry4.png")

  balloonImage = loadImage("balloon1.png")
  ChocolateImage = loadImage("Dairy_MIlk.png")
  WatchImage = loadImage("Watchr.png")
  coinImage = loadImage("coin_bg.png")
  roseImage = loadImage("OIP__1.png")
  cakeImage = loadImage("Bgr.png")
  cakeImage.scale=0.5;

  burgerImage = loadImage("burger.png")
  sandwichImage = loadImage("sandwich.png")
  friesImage = loadImage("fries.png")

}

function setup() {
  createCanvas(500,500);

  background1 = createSprite(270, 250);
  background1.addImage(backgroundImage);
  background1.scale = 1;
  console.log(background1);

 /* bg=createSprite(280,250);
  bg.addImage(bg2)
  bg.scale=1;*/


  harry = createSprite(100, 355, 30, 30);
  harry.addAnimation("running", harry_running);
  harry.addAnimation("collided", harry_collided);
  harry.scale = 0.5;

  ground = createSprite(100, 413, 400, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible = false;

  giftsGroup = new Group();
  junkGroup = new Group();
}

function draw() {
  background("lightpurple	");
 

  if (keyDown("space")) {
    harry.velocityY = -10;
  }


  if (ground.x > 0) {
    ground.x = ground.width / 2;
    
  }

  background1.velocityX = -3;
  //bg.velocityX=-3;
  if (background1.x < 0) {
    //background.x=background.width/2
    background1.x =275;
  }


  if (harry.isTouching(giftsGroup)) {
    giftsGroup.destroyEach();
    score = score + 1;
  }

  if (harry.isTouching(junkGroup)) {
    harry.changeAnimation("collided", harry_collided);
    harry.velocityY = 0
    background1.velocityX = 0;
    ground.velocityX = 0;
    junkGroup.setVelocityXEach(0);
    giftsGroup.setVelocityXEach(-1);
    junkGroup.setLifetimeEach(-1);
    giftsGroup.setLifetimeEach(0);
    giftsGroup.destroyEach();
  }


  harry.velocityY = harry.velocityY + 0.8;
  harry.collide(ground)

  spwanJunk();
  spwanGifts();
  drawSprites();


  fill("white");
  textSize(30);
  textFont('Ink Free');
  text("Score: " + score, 10, 30);
  
  
  textSize(12);
  textFont('Algerian');
  fill("Blue");
 
  text("Story: Collecting Birthday gifts ", 70, 70);
  fill("Green");
  text("Nani::Press Space button to collect your gifts!",10,90)
  fill("Red");
  text("Make sure  does not collect any junk food on the way.All the best!", 10, 110);

}

function spwanGifts() {
  if (frameCount % 60 === 0) {
    var gifts = createSprite(300, 200, 10, 10);

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        gifts.addImage(balloonImage);
        break;
      case 2:
        gifts.addImage(ChocolateImage);
        break;
      case 3:
        gifts.addImage(WatchImage);
        break;
      case 4:
        gifts.addImage(coinImage);
        break;
      case 5:
        gifts.addImage(roseImage);
        break;
      case 6:
        gifts.addImage(cakeImage);
        break;
      default:
        break;
    }

    gifts.velocityX = -7;
    gifts.scale = 0.19;
    gifts.lifetime = 300;
    giftsGroup.add(gifts);
  }
}

function spwanJunk() {
  if (frameCount % 150 === 0) {
    var junk = createSprite(200, 360, 20, 20);

    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        junk.addImage(friesImage);
        break;
      case 2:
        junk.addImage(burgerImage);
        break;
      case 3:
        junk.addImage(sandwichImage);
        break;
      default:
        break;
    }

    junk.velocityX = -10;
    junk.scale = 0.4;
    junk.lifetime = 200;
    junkGroup.add(junk);
  }

}