var myCanvas;
var player;
var limitTime;
var safePower;
var power;
var meteors = [];
var badGuys = 10;
var gameOff = false;
var gameOn = false;
var powerGo = false;
var powerOn = false;

var titleBrand;
var score;
var enemies;
var lifes;

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.player;
  this.s = 25;
  this.hist = [];
  this.margin = 40;
  this.speed = .4;
  this.player = createSprite(this.x, this.y, this.s, this.s);
  this.r = 100;
  this.g = 203;
  this.b = 202;
  this.player.shapeColor = color(this.r, this.g, this.b);
  this.player.maxSpeed = 10;
  this.player.friction = .03;
  this.player.setCollider("rectangle", 0, 0, this.s, this.s);
  this.Margin = function () {
    if(this.player.position.x<-this.margin) {
      this.player.position.x = width+this.margin;
    }
    if(this.player.position.x>width+this.margin) {
      this.player.position.x = -this.margin;
    }
    if(this.player.position.y<-this.margin) {
      this.player.position.y = height+this.margin;
    }
    if(this.player.position.y>height+this.margin) {
      this.player.position.y = -this.margin;
    }
  }
  this.Movement = function () {
    if (keyDown(UP_ARROW)) {
      this.player.addSpeed(this.speed, -90);
    }
    if (keyDown(LEFT_ARROW)) {
      this.player.addSpeed(this.speed, 180);
    }
    if (keyDown(RIGHT_ARROW)) {
      this.player.addSpeed(this.speed, 0);
    }
    if (keyDown(DOWN_ARROW)) {
      this.player.addSpeed(this.speed, 90);
    }
  }
  this.Tail = function () {
    this.vect = createVector(this.player.position.x, this.player.position.y);
    this.hist.push(this.vect);
    if (this.hist.length > this.s) {
        this.hist.splice(0,1);
    }
    for (var i = 0; i < this.hist.length; i++) {
      this.pos = this.hist[i];
      fill (this.r, this.g, this.b, i*5);
      noStroke();
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, i,i);
    }
  }
  this.Destroy = function () {
    this.player.remove();
  }
}

function Missile(x, y) {
  this.x = x;
  this.y = y;
  this.missile;
  this.s = 25;
  this.hist = [];
  this.margin = 40;
  this.speed = 30/this.s * .17;
  this.angle = random(-360, 360);
  this.missile = createSprite(this.x, this.y, this.s, this.s);
  this.missile.shapeColor = color(204, 38, 73);
  this.missile.maxSpeed = 10;
  this.missile.friction = .03;
  this.missile.setCollider("rectangle", 0, 0, this.s, this.s);
  this.Margin = function () {
    if(this.missile.position.x < -this.margin) {
      this.missile.position.x = width+this.margin;
    }
    if(this.missile.position.x > width+this.margin) {
      this.missile.position.x = -this.margin;
    }
    if(this.missile.position.y < -this.margin) {
      this.missile.position.y = height+this.margin;
    }
    if(this.missile.position.y > height+this.margin) {
      this.missile.position.y = -this.margin;
    }
  }
  this.Movement = function () {
    this.missile.addSpeed(this.speed, this.angle);
  }
  this.Tail = function () {
    this.vect = createVector(this.missile.position.x, this.missile.position.y);
    this.hist.push(this.vect);
    if (this.hist.length > this.s) {
        this.hist.splice(0,1);
    }
    for (var i = 0; i < this.hist.length; i++) {
      this.pos = this.hist[i];
      fill (204, 38, 73, i * 5);
      noStroke();
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, i,i);
    }
  }
  this.Destroy = function () {
    this.missile.remove();
  }
}

function PowerStar(x, y) {
  this.x = x;
  this.y = y;
  this.powerUp;
  this.s = 10;
  this.hist = [];
  this.margin = 20;
  this.speed = random(5, 10)/this.s * .4;
  this.angle = random(-360, 360);
  this.powerUp = createSprite(this.x, this.y, this.s, this.s);
  this.powerUp.shapeColor = color(245, 135, 35);
  this.powerUp.maxSpeed = 10;
  this.powerUp.friction = .03;
  this.powerUp.setCollider("rectangle", 0, 0, this.s, this.s);
  this.Margin = function () {
    if(this.powerUp.position.x < -this.margin) {
      this.powerUp.position.x = width+this.margin;
    }
    if(this.powerUp.position.x > width+this.margin) {
      this.powerUp.position.x = -this.margin;
    }
    if(this.powerUp.position.y < -this.margin) {
      this.powerUp.position.y = height+this.margin;
    }
    if(this.powerUp.position.y > height+this.margin) {
      this.powerUp.position.y = -this.margin;
    }
  }
  this.Movement = function () {
    this.powerUp.addSpeed(random(0, this.speed), random(this.angle));
  }
  this.Tail = function () {
    this.vect = createVector(this.powerUp.position.x, this.powerUp.position.y);
    this.hist.push(this.vect);
    if (this.hist.length > 15) {
        this.hist.splice(0,1);
    }
    for (var i = 0; i < this.hist.length; i++) {
      this.pos = this.hist[i];
      fill (random(255), random(255), random(255), i * 5);
      noStroke();
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, i,i);
    }
  }
  this.Destroy = function () {
    this.powerUp.remove();
  }
}

function setup() {
  myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.position(0,0);
  myCanvas.style('z-index','-1');
}

function draw() {
  background(0,0,0);
if (!gameOff) {
    if (gameOn) {
        player.Margin();
        player.Movement();
        player.Tail();
        for (var i = 0; i < meteors.length; i++) {
          meteors[i].Margin();
          meteors[i].Movement();
          meteors[i].Tail();
        }
        if (powerGo) {
        power.Margin();
        power.Movement();
        power.Tail();
        if (player.player.overlap(power.powerUp)) {
            powerOn = true;
            power.powerUp.position.x = -80;
            power.powerUp.position.y = -80;
            power.Destroy();
            power.hist.splice(0, power.hist.length); 
            PowerUp(); 
            limitTime = millis() + 4000; 
          }    
        }
        if (!powerOn) {
          player.r = 100;
          player.g = 203;
          player.b = 202;
            for (var i = 0; i < meteors.length; i++) {
                if (meteors[i].missile.overlap(player.player)) {
                  console.log("Hit Player");
                  player.Destroy();
                  GameOver();
                  player.hist.splice(0, player.hist.length);
                  TakeCount();
                }
            }
            safePower = false;
        }
        if (powerOn) {
          player.r = random(255);
          player.g = random(255);
          player.b = random(255);
          for (var i = 0; i < meteors.length; i++) {
            if (meteors[i].missile.overlap(player.player)) {
              console.log("Hit");
              meteors[i].Destroy();
              meteors.splice(i, 1);
              TakeCount();
            }
          }
          if (!safePower) {
            safePower = true;
            limitTime = millis() + 4000;
          }
          else {
            if (millis() > limitTime) {
              powerOn = false;
            }
          }
        }
        if (meteors.length <= 0) {
            gameOff = true;
            Win();
        }
        drawSprites();
        }
    }
}

function GameOver () {
  var kIa = badGuys - meteors.length;
  player = new Player(windowWidth/2  - (.005 * windowWidth), windowHeight/2 - (.35 * windowHeight));
  if (meteors.length < badGuys) {
      for (var i = 0; i < kIa; i++) {
        meteors.push(new Missile(-20, -20));
      }
  }
}

function Win () {
  //Winner Winner Chicken Dinner!!!
  $(".game-text").text("WINNER, WINNER, CHICKEN DINNER!!!");
  $(".game-text").css("color", "rgb(100, 203, 202)");
  console.log("Winner Winner Chicken Dinner!!!");
  $(".home-logo, .home-skills, .home-description").fadeTo(1000, 1);
  gameOn = false;
  gameOff = false;
  power.powerUp.position.x = -80;
  power.powerUp.position.y = -80;
  power.Destroy();
  power.hist.splice(0, power.hist.length); 
  player.Destroy();
  Menu();
}

function keyPressed () {
  if (keyCode === 32 && gameOn === false) {
    StartGame();
    gameOn = true;
    $(".home-logo, .home-skills, .home-description").fadeOut(1000, 0);
  }
}

function StartGame () {
  player = new Player(windowWidth/2  - (.005 * windowWidth), windowHeight/2 - (.35 * windowHeight));
  for (var i = 0; i < badGuys; i++) {
      meteors.push(new Missile(-20, -20));
  }
  var xPow = random(0, width);
  var yPow = random(0, height);
  power = new PowerStar(xPow, yPow);
  powerGo = true;
  Board();
}

function PowerUp() {
    var xPow = random(0, width);
    var yPow = random(0, height);
    power = new PowerStar(xPow, yPow);
    powerGo = true;
}



function Board() {
  titleBrand = "Dodge Square";   
  score = (badGuys - meteors.length) * 100;
  enemies = meteors.length;   
  $('nav .navbar-brand').text(titleBrand);     
  $('nav li:nth-child(2) .anim-link').text("Points: " + score).css("color", "rgb(245, 135, 35)");   
  $('nav li:nth-child(3) .anim-link').text("Enemies: " + enemies).css("color", "rgb(204, 38, 73)"); 
}  

function Menu() {   
  titleBrand = "DID";   
  score = "Resume";   
  enemies = "Contact";     
  $('nav .navbar-brand').text(titleBrand);   
  $('nav li:nth-child(2) .anim-link').text(score).css("color", "rgb(254, 254, 254)");   
  $('nav li:nth-child(3) .anim-link').text(enemies).css("color", "rgb(254, 254, 254)"); 
}  

function TakeCount() {  
  score = badGuys - meteors.length;           
  enemies = meteors.length;   lifes = lifes;   
  Board();   
}
