var duck;
var dog;

var hedgeHog;
var hedgeHog2;
var hedgeHog3;
var hedgeHog4;
var hedgeHog5;
var hedgeHog6;
var hedgeHog7;
var hedgeHog8;
var hedgeHog9;
var hedgeHog10;
var hedgeHog11;
var hedgeHog12;
var hedgeHog13;

var pluma;
var bar;
var dogDirection;

var hedgeDirection;
var hedgeDirection2;
var hedgeDirection3;
var hedgeDirection4;
var hedgeDirection5;
var hedgeDirection6;
var hedgeDirection7;
var hedgeDirection8;
var hedgeDirection9;
var hedgeDirection10;
var hedgeDirection11;
var hedgeDirection12;
var hedgeDirection13;

var plumas = [];
var thorns = [];
var barriers = [];
var baseStand = [];
var boxes = [];
var barrier;
var obstacles; 
var base;
var box;
var gravity = 1;
var bg;
var sceneH = 700;
var sceneW = 4000;
var boost;
var hasCheckedBoost = false;
var hasCheckedBoostLeft = false;
var volar = false;
var gameOver;

var featherImage;
var thornImage;

var hedgeAnimation;
var hedgeAnimation2;
var hedgeAnimation3;
var hedgeAnimation4;
var hedgeAnimation5;
var hedgeAnimation6;
var hedgeAnimation7;
var hedgeAnimation8;
var hedgeAnimation9;
var hedgeAnimation10;
var hedgeAnimation11;
var hedgeAnimation12;
var hedgeAnimation13;

var dogAnimation;

var posX;
var posY;
var posXLeft;
var posYLeft;

var directionX;
var directionY;
var directionXLeft;
var directionYLeft;

var movingBaseStand1;
var movingBase1;
var movingBaseStand2;
var movingBase2;

var movingBaseStand1Left;
var movingBase1Left;
var movBase;
var movBaseStand;
var goingLeft;
var goingLeftBase;

var backGround;
var forest;

var widthImage;
var heightImage;

var height2;

var fromColor;
var toColor;
var colorCounter;

var cambio = false;


var song;

var jumpSound;
var littleJumpSound;
var featherSound;
var gameOverSound;


var forest;
var myForest;

var forest2;
var myForest2;

var wiForest;
var heForest;
var xForest;

var wiForest2;
var heForest2;
var xForest2;


function setup () {
     fromColor = color(41, 128, 185);
     toColor = color(158, 25, 108);
     colorCounter = 0;
    
    createCanvas(windowWidth, windowHeight);
    backGround = loadImage("/images/duck/BG/Background.png");
   

   
    widthImage = windowWidth + 10;
    heightImage = windowHeight + 10;

    height2 = height/2 + 150; 



    littleJumpSound = loadSound('/music/little_pop.wav');
    jumpSound = loadSound('/music/pop.wav');
    featherSound = loadSound('/music/feather.wav');
    gameOverSound = loadSound('/music/gameOver.wav');
    
    gameOverSound.playMode('restart');
    
    

     wiForest = 2596;
     xForest = width/2 - 10310; 
     forest = loadImage('/images/duck/BG/prueba.png');
     
     wiForest2 = 2596;
     xForest2 = width/2 - 12900; 
     forest2 = loadImage('/images/duck/BG/prueba2.png');
     




    thorns = [createSprite(width/2 + 850, height/2 - 5, 80, 80),     // after big jump
              createSprite(width/2 + 150, height/2 - 5, 80, 80),     // after big jump
              createSprite(width/2 - 4985, height/2 - 5, 80, 80),    // before trap
              createSprite(width/2 - 6150, height/2 - 5, 80, 80),    // second obstacle
              createSprite(width/2 - 7165, height/2 - 5, 80, 80),    // between jumps
              createSprite(width/2 - 9100, height/2 - 5, 80, 80),
              //createSprite(width/2 - 11000, height2 - 5, 80, 80),
              createSprite(width/2 + 1140, height/2 - 5, 80, 80),
              createSprite(width/2 + 1260, height/2 - 5, 80, 80),
              createSprite(width/2 + 3800, height/2 + 30, 80, 80),
              createSprite(width/2 - 2790, height/2 + 195, 80, 80),
              createSprite(width/2 - 3790, height/2 + 195, 80, 80)
              ];
         
              thornImage = loadImage("/images/duck/Thorn/thorn.png");
              for (var i = 0; i < thorns.length; i++) {
                   thorns[i].addImage(thornImage);
              }



    baseStand = [createSprite(width/2, height/2 + 36, 498, 3),            //middle (width/2)
                 createSprite(width/2 - 650, height/2 + 36, 498, 3),      //before middle
                 createSprite(width/2 + 650, height/2 + 36, 498, 3),      //after middle
                 createSprite(width/2 - 1850, height/2 + 36, 498, 3),
                 createSprite(width/2 - 2500, height/2 + 36, 498, 3),
                 createSprite(width/2 - 2725, height/2 - 274, 48, 3),     // BARRIER !!!!! ---- !!!!!! the one in the middle
                 createSprite(width/2 - 2988, height/2 - 299, 148, 3),    // last box (base trap)
                 createSprite(width/2 - 3740, height/2 + 236, 1980, 3),   // base (base trap)
                 createSprite(width/2 - 3270, height/2 - 299, 148, 3),  
                 createSprite(width/2 - 3490, height/2 - 99, 73, 3),      //small box (base trap)
                 createSprite(width/2 - 3890, height/2 - 199, 298, 3),    //big box (base trap)
                 createSprite(width/2 - 4240, height/2 - 224, 148, 3),    //second box 
                 createSprite(width/2 - 4440, height/2 - 224, 73, 3),     //first box
                 createSprite(width/2 - 4440, height/2 + 26, 48, 3),      //ladder (small box) (base trap)
                 createSprite(width/2 - 4600, height/2 - 74, 48, 3),      //secondladder (small box) (base trap)
                 createSprite(width/2 - 4750, height/2 - 224, 48, 3),     // BARRIER !!!!! ---- !!!!!! third jump before trap
                 createSprite(width/2 - 4920, height/2 - 115, 48, 3),     // BARRIER !!!!! ---- !!!!!! third jump before trap
                 createSprite(width/2 - 5395, height/2 + 36, 899, 3),     //before trap (large)
                 createSprite(width/2 - 6240, height/2 + 36, 498, 3),     // between jumps 
                 createSprite(width/2 - 6515, height/2 - 115, 48, 3),     // BARRIER !!!!! ---- !!!!!! second barrier jump
                 createSprite(width/2 - 6680, height/2 - 115, 48, 3),     // BARRIER !!!!! ---- !!!!!! second barrier jump
                 createSprite(width/2 - 6955, height/2 + 36, 498, 3),     // base between jumps with thorn
                 createSprite(width/2 - 7400, height/2 - 115, 48, 3),     // BARRIER !!!!! ---- !!!!!! third barrier jump  
                 createSprite(width/2 - 7230, height/2 - 224, 48, 3),     // BARRIER !!!!! ---- !!!!!! third barrier jump
                 createSprite(width/2 - 7675, height/2 + 36, 498, 3),     // base after big jump
                 createSprite(width/2 - 8500, height/2 + 36, 698, 3),     // base before big jump
                 createSprite(width/2 - 9200, height/2 + 36, 698, 3),     // base ??? 
                 createSprite(width/2 - 9575, height/2 - 274, 48, 3),     // BARRIER !!!!! ---- !!!!!! ladder 
                 createSprite(width/2 - 9625, height/2 - 214, 48, 3),     // BARRIER !!!!! ---- !!!!!! ladder
                 createSprite(width/2 - 9675, height/2 - 134, 48, 3),     // BARRIER !!!!! ---- !!!!!! ladder 
                 createSprite(width/2 - 9725, height/2 - 64, 48, 3),      // BARRIER !!!!! ---- !!!!!! ladder
                 createSprite(width/2 - 10100, height/2 + 36, 698, 3),
                 createSprite(width/2 - 10470, height/2 - 274, 48, 3),     // BARRIER !!!!! ---- !!!!!! First big barrier
                 createSprite(width/2 - 11340, height2 + 36, 1698, 3),    // big first base
                 createSprite(width/2 - 10700, height2 - 259, 173, 3),    // first obstacles 000   changes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 createSprite(width/2 - 11200, height2 - 259, 173, 3),    // first obstacles 000
                 createSprite(width/2 - 11500, height2 - 179, 173, 3),    // first obstacles 000
                 createSprite(width/2 - 10950, height2 - 309, 173, 3),    // first obstacles 000
                 createSprite(width/2 + 1200, height/2 - 209, 173, 3),     // After the midpoint
                 createSprite(width/2 + 1450, height/2 + 36, 698, 3),      //Firs base after mipoint 
                 createSprite(width/2 + 2480, height/2 + 36, 698, 3),      //Second Base after midpoint
                 createSprite(width/2 + 3870, height/2 + 236, 1980, 3),     // BIG BASE FINAL
                 createSprite(width/2 + 2855, height/2 - 224, 48, 3),       // BARRIER !!!!! ---- !!!!!! Before final
                 createSprite(width/2 + 3200, height/2 - 259, 173, 3),      // Feather base
                 createSprite(width/2 + 3200, height/2 + 41, 173, 3),       // Big ladder
                 createSprite(width/2 + 2915, height/2 - 59, 68, 3),         // Small ladder
                 createSprite(width/2 + 3800, height/2 + 71, 273, 3),
                 createSprite(width/2 + 3800, height/2 - 209, 273, 3),
                 createSprite(width/2 + 4250, height/2 - 59, 198, 3),
                 createSprite(width/2 + 5000, height/2 + 236, 1978, 3),
                 createSprite(width/2 + 4900, height/2 - 109, 277, 3),       //inside the moving one...
                 createSprite(width/2 + 6000, height/2 - 260, 277, 3),       // stair with minions
                 createSprite(width/2 + 6150, height/2 - 110, 277, 3),
                 createSprite(width/2 + 6350, height/2 +  20, 277, 3),
                 createSprite(width/2 + 8600, height/2 +  20, 277, 3)
                 ];


    boxes = [createSprite(width/2, height/2 + 60, 500, 50),          //middle (width/2)
            createSprite(width/2 - 650, height/2 + 60, 500, 50),     //before middle
            createSprite(width/2 + 650, height/2 + 60, 500, 50),     //after middle
            createSprite(width/2 - 1850, height/2 + 60, 500, 50),    //big jump
            createSprite(width/2 - 2500, height/2 + 60, 500, 50),    //big jump
            createSprite(width/2 - 2988, height/2 - 275, 150, 50),   //last box (base trap)
            createSprite(width/2 - 3740, height/2 + 260, 1980, 50),  //base (base trap)
            createSprite(width/2 - 3270, height/2 - 275, 150, 50),    
            createSprite(width/2 - 3490, height/2 - 75, 75, 50),     //small box (base trap)
            createSprite(width/2 - 3890, height/2 - 175, 300, 50),   //big box
            createSprite(width/2 - 4240, height/2 - 200, 150, 50),   //second box
            createSprite(width/2 - 4440, height/2 - 200, 75, 50),    //first box 
            createSprite(width/2 - 4440, height/2 + 50, 50, 50),     //ladder (small box)
            createSprite(width/2 - 4600, height/2 - 50, 50, 50),     //second ladder (small box)
            createSprite(width/2 - 5395, height/2 + 60, 900, 50),    //before trap (large)
            createSprite(width/2 - 6240, height/2 + 60, 500, 50),    //between jumps
            createSprite(width/2 - 6955, height/2 + 60, 500, 50),    //between jumps W/Thorns
            createSprite(width/2 - 7675, height/2 + 60, 500, 50),
            createSprite(width/2 - 8500, height/2 + 60, 700, 50),    // first big jump
            createSprite(width/2 - 9200, height/2 + 60, 700, 50),     // first big jump
            createSprite(width/2 - 10100, height/2 + 60, 700, 50),
            createSprite(width/2 - 11340, height2 + 60, 1700, 50),     // big first base
            createSprite(width/2 - 10700, height2 - 250, 175, 20),     // first obstacles
            createSprite(width/2 - 11200, height2 - 250, 175, 20),     // first obstacles
            createSprite(width/2 - 11500, height2 - 170, 175, 20),     // first obstacles
            createSprite(width/2 - 10950, height2 - 300, 175, 20),     // first obstacles
            createSprite(width/2 + 1200, height/2 - 200, 175, 20),      // After the midpoint
            createSprite(width/2 + 1450, height/2 + 60, 700, 50),       //Firs base after mipoint 
            createSprite(width/2 + 2480, height/2 + 60, 700, 50),       //Second Base after midpoint
            createSprite(width/2 + 3870, height/2 + 260, 1980, 50),      // BIG BASE FINAL
            createSprite(width/2 + 3200, height/2 - 250, 175, 20),       // Feather base
            createSprite(width/2 + 3200, height/2 + 50, 175, 20),        // Big ladder
            createSprite(width/2 + 2915, height/2 - 50, 70, 20),         // Small ladder
            createSprite(width/2 + 3800, height/2 + 80, 275, 20),
            createSprite(width/2 + 3800, height/2 - 200, 275, 20),
            createSprite(width/2 + 4250, height/2 - 50, 200, 20),
            createSprite(width/2 + 5000, height/2 + 260, 1980, 50),
            createSprite(width/2 + 4900, height/2 - 100, 280, 20),     //inside the moving one...
            createSprite(width/2 + 6000, height/2 - 250, 280, 20),
            createSprite(width/2 + 6150, height/2 - 100, 280, 20),
            createSprite(width/2 + 6350, height/2 +  30, 280, 20),
            createSprite(width/2 + 8600, height/2 +  30, 280, 20)        
            ];


    barriers = [createSprite(width/2 - 2725, height/2 - 120, 50, 310),
                createSprite(width/2 - 4750, height/2 + 30, 50, 510),
                createSprite(width/2 - 4920, height/2 + 85, 50, 400),
                createSprite(width/2 - 6515, height/2 + 85, 50, 400), // second jump
                createSprite(width/2 - 6680, height/2 + 85, 50, 400),
                createSprite(width/2 - 7230, height/2 + 30, 50, 510),
                createSprite(width/2 - 7400, height/2 + 85, 50, 400),
                createSprite(width/2 - 9575, height/2 - 20, 50, 510), // ladder
                createSprite(width/2 - 9625, height/2 + 10, 50, 450), // ladder
                createSprite(width/2 - 9675, height/2 + 50, 50, 370), // ladder
                createSprite(width/2 - 9725, height/2 + 85, 50, 300), // ladder
                createSprite(width/2 - 10470, height/2 - 20, 50, 510),// After first big barrier
                createSprite(width/2 + 2855, height/2 + 30, 50, 510)  // Before FINAL BASE          
                ];
    

    plumas = [createSprite(width/2 + 650, height/2 + 17, 28, 28),
              createSprite(width/2 - 2500, height/2 - 125, 28, 28),
              createSprite(width/2 + 4900, height/2 - 250, 28, 28),
              createSprite(width/2 + 2755, height/2 - 10, 28, 28),
              createSprite(width/2 + 8185, height/2, 28, 28),
              createSprite(6810, height/2 - 150, 28, 28)
              ]; 
              
              featherImage = loadImage("/images/duck/feather_icon/feather.png");
              for(var i = 0; i < plumas.length; i++) {
              plumas[i].addImage(featherImage);
              }


                      ////// /images/DUCK ANIMATION ///////   
              
                                                     // Beginning of the level - 12100
                                                     // End of the level + 4200
                                                     // Jump to fly end + 8400


    duck = createSprite(width/2 - 12100, height/2 - 250, 25, 54);
    var myAnimation = duck.addAnimation("Standing_Action","/images/duck/Standing_Action/stan_1.png", "/images/duck/Standing_Action/stan_24.png");
    duck.addAnimation("moving", "/images/duck/Moving/walking_001.png", "/images/duck/Moving/walking_004.png");
    duck.addAnimation("flying", "/images/duck/Flying_straight/flying_right_1.png", "/images/duck/Flying_straight/flying_right_3.png");
    duck.addAnimation("flying_UP", "/images/duck/Flying_UP/flying_UP_1.png", "/images/duck/Flying_UP/flying_UP_3.png");
    
    var sprintCorriendo = duck.addAnimation("corriendo", "/images/duck/Sprint/sprint_1.png", "/images/duck/Sprint/sprint_3.png");
    sprintCorriendo.offY = - 6;
    
    duck.addAnimation("die", "/images/duck/Die/die_1.png", "/images/duck/Die/die_2.png");
    duck.setCollider("rectangle", 0, 0, 30, 54);


                     ////// DUCK ANIMATION ///////



                     ////// HEDGEHOG & DOG ANIMATION ///////  
   
    hedgeHog2 = createSprite(width/2 - 8600, height/2 + 14, 45, 45);
    hedgeHog3 = createSprite(width/2 - 5700, height/2 + 14, 45, 45);
    hedgeHog4 = createSprite(width/2 - 3990, height/2 + 214, 45, 45);
    hedgeHog5 = createSprite(width/2 - 4500, height/2 + 214, 45, 45);
    hedgeHog6 = createSprite(width/2 - 3500, height/2 + 214, 45, 45);
    hedgeHog7 = createSprite(width/2 - 2990, height/2 + 214, 45, 45);
    hedgeHog8 = createSprite(width/2 + 2300, height/2 + 14, 45, 45);
    hedgeHog9 = createSprite(width/2 + 3910, height/2 - 232, 45, 45);

    hedgeHog10 = createSprite(width/2 + 4820, height/2 - 130, 45, 45);
    hedgeHog11 = createSprite(width/2 + 5000, height/2 - 130, 45, 45);
    hedgeHog12 = createSprite(width/2 + 6000, height/2 - 280, 45, 45);
    hedgeHog13 = createSprite(width/2 + 6300, height/2, 45, 45);


    
    hedgeAnimation2 = hedgeHog2.addAnimation("hog2", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation3 = hedgeHog3.addAnimation("hog3", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation4 = hedgeHog4.addAnimation("hog4", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation5 = hedgeHog5.addAnimation("hog5", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation6 = hedgeHog6.addAnimation("hog6", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation7 = hedgeHog7.addAnimation("hog7", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation8 = hedgeHog8.addAnimation("hog8", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation9 = hedgeHog9.addAnimation("hog9", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation10 = hedgeHog10.addAnimation("hog10", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation11 = hedgeHog11.addAnimation("hog11", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation12 = hedgeHog12.addAnimation("hog12", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");
    hedgeAnimation13 = hedgeHog13.addAnimation("hog13", "/images/duck/Hedgehog/hedgehog_1.png", "/images/duck/Hedgehog/hedgehog_3.png");





    dog = createSprite(width/2 + 3910, height/2 + 185, 155, 100);
    dogAnimation = dog.addAnimation("dDog", "/images/duck/Dog/dog_1.png", "/images/duck/Dog/dog_4.png");

                 ////// HEDGEHOG & DOG ANIMATION ///////


      ////   MOVING BARRIERS   /////

             // RIGHT //

      posX = width/2 + 6800;
      posY = height/2 - 110;

      movingBaseStand1 = createSprite(posX + 2400, posY - 211, 148, 3);
      movingBase1 = createSprite(posX + 2400, posY -200, 150, 20);
      
      movingBaseStand2 = createSprite(posX + 2850, posY - 110, 148, 3);
      movingBase2 = createSprite(posX + 2850, posY -100, 150, 20);
  
           // RIGHT //


          // LEFT //

      posXLeft = width/2 + 5300;
      posYLeft = height/2 - 120;

      movingBaseStand1Left = createSprite(posXLeft, posYLeft - 11, 148, 3);
      movingBase1Left = createSprite(posXLeft, posYLeft, 150, 20);
      
           // LEFT //

   
      ////   MOVING BARRIERS   /////
  

    pluma = new Group();
      pluma.add(plumas[0]);
      pluma.add(plumas[1]);
      pluma.add(plumas[2]);
      pluma.add(plumas[3]);
      pluma.add(plumas[4]);
      pluma.add(plumas[5]);


    obstacles = new Group();
      obstacles.add(thorns[0]);
      obstacles.add(thorns[1]);
      obstacles.add(thorns[2]);
      obstacles.add(thorns[3]);
      obstacles.add(thorns[4]);
      obstacles.add(thorns[5]);
      obstacles.add(thorns[6]);
      obstacles.add(thorns[7]);
      obstacles.add(thorns[8]);
      obstacles.add(thorns[9]);
      obstacles.add(thorns[10]);
     
     
    base = new Group();
      base.add(baseStand[0]);
      base.add(baseStand[1]);
      base.add(baseStand[2]);
      base.add(baseStand[3]);
      base.add(baseStand[4]);
      base.add(baseStand[5]);
      base.add(baseStand[6]);
      base.add(baseStand[7]);
      base.add(baseStand[8]);
      base.add(baseStand[9]);
      base.add(baseStand[10]);
      base.add(baseStand[11]);
      base.add(baseStand[12]);
      base.add(baseStand[13]);
      base.add(baseStand[14]);
      base.add(baseStand[15]);
      base.add(baseStand[16]);
      base.add(baseStand[17]);
      base.add(baseStand[18]);
      base.add(baseStand[19]);
      base.add(baseStand[20]);
      base.add(baseStand[21]);
      base.add(baseStand[22]);
      base.add(baseStand[23]);
      base.add(baseStand[24]);
      base.add(baseStand[25]);
      base.add(baseStand[26]);
      base.add(baseStand[27]);
      base.add(baseStand[28]);
      base.add(baseStand[29]);
      base.add(baseStand[30]);
      base.add(baseStand[31]);
      base.add(baseStand[32]);
      base.add(baseStand[33]);
      base.add(baseStand[34]);
      base.add(baseStand[35]);
      base.add(baseStand[36]);
      base.add(baseStand[37]);
      base.add(baseStand[38]);
      base.add(baseStand[39]);
      base.add(baseStand[40]);
      base.add(baseStand[41]);
      base.add(baseStand[42]);
      base.add(baseStand[43]);
      base.add(baseStand[44]);
      base.add(baseStand[45]);
      base.add(baseStand[46]);
      base.add(baseStand[47]);
      base.add(baseStand[48]);
      base.add(baseStand[49]);
      base.add(baseStand[50]);
      base.add(baseStand[51]);
      base.add(baseStand[52]);
      base.add(baseStand[53]);
      base.add(baseStand[54]);


    box = new Group();
      box.add(boxes[0]);
      box.add(boxes[1]);
      box.add(boxes[2]);
      box.add(boxes[3]);
      box.add(boxes[4]);
      box.add(boxes[5]);
      box.add(boxes[6]);
      box.add(boxes[7]);
      box.add(boxes[8]);
      box.add(boxes[9]);
      box.add(boxes[10]);
      box.add(boxes[11]);
      box.add(boxes[12]);
      box.add(boxes[13]);
      box.add(boxes[14]);
      box.add(boxes[15]);
      box.add(boxes[16]);
      box.add(boxes[17]);
      box.add(boxes[18]);
      box.add(boxes[19]);
      box.add(boxes[20]);
      box.add(boxes[21]);
      box.add(boxes[22]);
      box.add(boxes[23]);
      box.add(boxes[24]);
      box.add(boxes[25]);
      box.add(boxes[26]);
      box.add(boxes[27]);
      box.add(boxes[28]);
      box.add(boxes[29]);
      box.add(boxes[30]);
      box.add(boxes[31]);
      box.add(boxes[32]);
      box.add(boxes[33]);
      box.add(boxes[34]);
      box.add(boxes[35]);
      box.add(boxes[36]);
      box.add(boxes[37]);
      box.add(boxes[38]);
      box.add(boxes[39]);
      box.add(boxes[40]);
      box.add(boxes[41]);

 
    barrier = new Group();
      barrier.add(barriers[0]);
      barrier.add(barriers[1]);
      barrier.add(barriers[2]);
      barrier.add(barriers[3]);
      barrier.add(barriers[4]);
      barrier.add(barriers[5]);
      barrier.add(barriers[6]);
      barrier.add(barriers[7]);
      barrier.add(barriers[8]);
      barrier.add(barriers[9]);
      barrier.add(barriers[10]);
      barrier.add(barriers[11]);
      barrier.add(barriers[12]);
     

    movBase = new Group();
      movBase.add(movingBase1);
      movBase.add(movingBase2);
      

    
    movBaseStand = new Group();
      movBaseStand.add(movingBaseStand1);
      movBaseStand.add(movingBaseStand2);
      


    goingLeft = new Group();
      goingLeft.add(movingBase1Left);


    
    goingLeftBase = new Group();
     goingLeftBase.add(movingBaseStand1Left);


  
    bg = new Group();
    
    hedgeDirection2 = 1;
    hedgeDirection3 = 1;
    hedgeDirection4 = 1;
    hedgeDirection5 = - 1;
    hedgeDirection6 = - 1;
    hedgeDirection7 = 1;
    hedgeDirection8 = - 1;
    hedgeDirection9 = - 1;
    hedgeDirection10 = - 1;
    hedgeDirection11 =  1;
    hedgeDirection12 =  1;
    hedgeDirection13 =  1;

    dogDirection = 3; //6  or 3 when sniffing

    bar = 150;

    gameOver = false;
  
 
   directionX = 1;
   directionY = 0;  
   directionXLeft = -1;
   directionYLeft = 0; 

}



function draw () {

   //background(255, 255, 255);
   

   //camera.zoom = .2;
   
 

   var mapColor = map(duck.position.x, width/2 - 12100, width + 6400, 0, 1);
   var lColor = lerpColor(fromColor, toColor, colorCounter);
   fill(lColor);
   rect(duck.position.x - widthImage/2, camera.position.y - windowHeight/2,  widthImage, heightImage);
   colorCounter = mapColor;

   // image(prueba, duck.position.x - widthImage/2, camera.position.y - windowHeight/2,  widthImage, heightImage);
     
    
    

    image(backGround, duck.position.x - widthImage/2, camera.position.y - windowHeight/2 - 600,  widthImage, heightImage + 600);
    image(forest2, xForest2, camera.position.y - windowHeight/2,  wiForest2, heForest2);
    image(forest, xForest, camera.position.y - windowHeight/2,  wiForest, heForest);
  

   fill(255);
   textSize(28);
   textAlign(LEFT);
   text("Use the arrows to move and the space bar to jump",width/2 - 12300, height/2 - 250, 400,400);

   fill(255);
   textSize(28);
   textAlign(LEFT);
   text("Press SHIFT to Fly",width/2 - 2590, height/2 - 250, 400,400);

     
   fill(255);
   textSize(18);
   textAlign(LEFT);
   text("WAIT FOR IT..",width/2 + 4390, height/2 - 180, 240,400);

   fill(255);
   textSize(18);
   textAlign(LEFT);
   text("WAIT FOR IT... AGAIN.",width/2 + 6300, height/2 - 180, 240,400);


   textSize(30);
   textAlign(LEFT);
   text("JUMP!!!",width/2 + 8800, height/2 - 80, 370,400);
   textSize(20);
   text("TRUST ME",width/2 + 8930, height/2 - 70, 370,400);

   
   textSize(45);
   textAlign(LEFT);
   text("CREATIVE CODING",width/2 + 9800, height/2 - 80);
   textSize(40);
   text('"Duck Adventure"',width/2 + 9880, height/2 - 10);
   
   textSize(45);
   textAlign(LEFT);
   textSize(40);
   text("SPECIAL THANKS TO :",width/2 + 10700, height/2 - 80);
   text('p5.js',width/2 + 10890, height/2 - 10);
   text('p5.play',width/2 + 10890, height/2 + 50);
   text('Clay Ewing',width/2 + 10840, height/2 + 120);
   text('Lien Tran',width/2 + 10855, height/2 + 180);
   text('UM Interactive Media Program',width/2 + 10650, height/2 + 240);
   

   textSize(45);
   textAlign(LEFT);
   text("DESIGN BY :",width/2 + 12500, height/2 - 80);
   textSize(40);
   text('José Guzman',width/2 + 12500, height/2 - 10);
   

  
   camera.position.x = duck.position.x;
   duck.velocity.y += gravity;  
   duck.overlap(pluma, collect);
   duck.collide(box);
   duck.collide(barrier);
   duck.collide(movBase);
   duck.collide(goingLeft);
      


          /////    BACKGROUND MOVEMENT     /////
       
        if (duck.position.x > xForest2 + wiForest2 * 1.5) {
              xForest2 += (wiForest2 * 2) - 10;

        }      

        if (duck.position.x > xForest + wiForest * 1.5) {
              xForest += (wiForest * 2) - 10;

        }        


          /////    BACKGROUND MOVEMENT     /////
 
      

      if (duck.overlap(base)) {
            duck.velocity.y = 0;
            cambio = false;
      }
  
      if (duck.overlap(movBaseStand)) {
                duck.velocity.y = 0;
                duck.position.x += directionX;
      }       

      if (duck.overlap(movBaseStand) && directionY > 0) {    
                duck.position.y += directionY;
      }
      
      if (duck.overlap(goingLeftBase)) {
                duck.velocity.y = 0;
                duck.position.x += directionXLeft;
      }
      
      if (duck.overlap(goingLeftBase) && directionYLeft > 0) {
                duck.position.y += directionYLeft;
      }
    
      if (duck.overlap(obstacles)){ 
                die ();
      }
      
      if (duck.overlap(dog)) {
                die ();
      }

      if (duck.overlap(hedgeHog2) || duck.overlap(hedgeHog3) || duck.overlap(hedgeHog4) || duck.overlap(hedgeHog5) || duck.overlap(hedgeHog6) || duck.overlap(hedgeHog7) || duck.overlap(hedgeHog8) || duck.overlap(hedgeHog9) || duck.overlap(hedgeHog10) || duck.overlap(hedgeHog11) || duck.overlap(hedgeHog12) || duck.overlap(hedgeHog13)) {
                die ();
      }
      
      if (duck.position.y > height - 35) {
                die ();
      }

      if (gameOver && mouseIsPressed){
               newGame ();
      }  
        
      if (!gameOver) {      //////  Game Over


      if (keyWentDown(32)) {
          if (duck.velocity.y == 0 && duck.overlap(base) || duck.overlap(movBaseStand) || duck.overlap(goingLeftBase)) {
                      duck.velocity.y = - 23;
                      jumpSound.play();
                      cambio = true;
                                 
            }    
      }

      if(keyWentDown("x") && cambio == true) {
           duck.velocity.y = - 10;
           littleJumpSound.play();
           if (cambio == true) {
            cambio = false;
           }
      }

      if (keyIsDown(LEFT_ARROW)) {
        duck.changeAnimation("moving");
        duck.mirrorX(- 1);
        duck.velocity.x = - 3;

          if (!hasCheckedBoostLeft) {
            hasCheckedBoostLeft = true;
            boost = millis() + 1800;
          }         
           
          else {
            if (millis() > boost) {
              duck.changeAnimation("corriendo");
              duck.mirrorX(-1);
              duck.velocity.x = - 5;
            }
          } 
      }

           else if (keyIsDown(RIGHT_ARROW)) {
                    duck.changeAnimation("moving");
                    duck.mirrorX(1);
                    duck.velocity.x = 3;

                if (!hasCheckedBoost) {
                    hasCheckedBoost = true;
                    boost = millis() + 1800;
                }

                    else {
                           if (millis() > boost) {
                             duck.changeAnimation("corriendo");
                             duck.mirrorX(1);
                             duck.velocity.x = 5;            
                           }
                    }

            }
      
      else {
        duck.changeAnimation("Standing_Action");
        duck.velocity.x = 0;

      }
       
      if (keyIsDown(SHIFT)) {
          fly ();  
       }

      if (!keyIsDown(RIGHT_ARROW)) {
         hasCheckedBoost = false;
      }
      
      if (!keyIsDown(LEFT_ARROW)) {
         hasCheckedBoostLeft = false;
      }
      

    flyBar ();
     
    
    }  ////////  GameOver
    
           /////   BAD GUYS   /////

      hedgeHog2.velocity.x = hedgeDirection2;
      if (hedgeHog2.position.x > width/2 - 8176) {
           hedgeHog2.mirrorX(- 1);
           hedgeDirection2 = - 1;
      } 
         else if (hedgeHog2.overlap(obstacles)) {
             hedgeHog2.mirrorX(1);
             hedgeDirection2 = 1;
         }

      hedgeHog3.velocity.x = hedgeDirection3;
      if (hedgeHog3.overlap(obstacles)) {
          hedgeHog3.mirrorX(- 1);
          hedgeDirection3 = - 1;
      }
         else if (hedgeHog3.position.x < width/2 - 5823) {
             hedgeHog3.mirrorX(1);
             hedgeDirection3 = 1;
         }

      hedgeHog4.velocity.x = hedgeDirection4;
      if (hedgeHog4.overlap(obstacles)) {
          hedgeHog4.mirrorX(- 1);
          hedgeDirection4 = - 1;
      }
         else if (hedgeHog4.overlap(hedgeHog5)) {
             hedgeHog4.mirrorX(1);
             hedgeDirection4 = 1;
         }
      
      hedgeHog5.velocity.x = hedgeDirection5;
      if (hedgeHog5.overlap(barrier)) {
          hedgeHog5.mirrorX(1);
          hedgeDirection5 = 1;
      }
         else if (hedgeHog5.overlap(hedgeHog4)) {
             hedgeHog5.mirrorX(- 1);
             hedgeDirection5 = - 1;
         }

      hedgeHog6.velocity.x = hedgeDirection6;
      if (hedgeHog6.overlap(obstacles)) {
          hedgeHog6.mirrorX(1);
          hedgeDirection6 = 1;
      }
         else if (hedgeHog6.overlap(hedgeHog7)) {
             hedgeHog6.mirrorX(- 1);
             hedgeDirection6 = - 1;
         }
      
      hedgeHog7.velocity.x = hedgeDirection7;
      if (hedgeHog7.overlap(obstacles)) {
          hedgeHog7.mirrorX(- 1);
          hedgeDirection7 = - 1;
      }
         else if (hedgeHog7.overlap(hedgeHog6)) {
             hedgeHog7.mirrorX(1);
             hedgeDirection7 = 1;
         }
      
      hedgeHog8.velocity.x = hedgeDirection8;
      if (hedgeHog8.overlap(barrier)) {
           hedgeHog8.mirrorX(- 1);
           hedgeDirection8 = - 1;
      } 
         else if (hedgeHog8.position.x < width/2 + 2154) {
            hedgeHog8.mirrorX(1);
            hedgeDirection8 = 1;
         }

      hedgeHog9.velocity.x = hedgeDirection9;
      if (hedgeHog9.position.x < width/2 + 3690) {
           hedgeHog9.mirrorX(1);
           hedgeDirection9 = 1;
      } 
         else if (hedgeHog9.position.x > width/2 + 3915) {
            hedgeHog9.mirrorX(- 1);
            hedgeDirection9 = - 1;
         }
      
      hedgeHog10.velocity.x = hedgeDirection10;
      if (hedgeHog10.position.x < width/2 + 4785) {
           hedgeHog10.mirrorX(1);
           hedgeDirection10 = 1;
      } 
         else if (hedgeHog10.overlap(hedgeHog11)) {
            hedgeHog10.mirrorX(- 1);
            hedgeDirection10 = - 1;
         }

      hedgeHog11.velocity.x = hedgeDirection11;
      if (hedgeHog11.position.x > width/2 + 5035) {
           hedgeHog11.mirrorX(-1);
           hedgeDirection11 = - 1;
      } 
         else if (hedgeHog11.overlap(hedgeHog10)) {
            hedgeHog11.mirrorX(1);
            hedgeDirection11 = 1;
         }

       hedgeHog12.velocity.x = hedgeDirection12;
       if (hedgeHog12.position.x < width/2 + 5865) {
            hedgeHog12.mirrorX(1);
            hedgeDirection12 = 1;
       } 
          else if (hedgeHog12.position.x > width/2 + 6132) {
             hedgeHog12.mirrorX(- 1);
             hedgeDirection12 = - 1;
          }

      hedgeHog13.velocity.x = hedgeDirection13;
      if (hedgeHog13.position.x < width/2 + 6216) {
           hedgeHog13.mirrorX(1);
           hedgeDirection13 = 1;
      } 
         else if (hedgeHog13.position.x > width/2 + 6485) {
            hedgeHog13.mirrorX(-1);
            hedgeDirection13 = - 1;
         }
         
        
                  //////   SUB BOSS   //////
       
                var distDG = dist(duck.position.x, duck.position.y, dog.position.x, dog.position.y);

                dog.velocity.x = dogDirection;
                 
                 if (distDG > 40 && duck.position.x > width/2 + 3125 && duck.position.x < width/2 + 5902) {
                    dogRunning ();

                 }


                 else if (dog.overlap(obstacles) || dog.position.x > width/2 + 5904) {
                    dog.mirrorX(- 1);
                    dogDirection = - 3;  //6
                 } 
                
                    else if (dog.overlap(barrier)) {
                             dog.mirrorX(1);
                             dogDirection = 3;   //6
                    }              
        
             //////   SUB BOSS   //////



           /////   BAD GUYS   /////




          /////    MOVING BARS /////
     

    var movX = movingBase1.position.x;
    var movY = movingBase1.position.y;

   
   movingBase1.velocity.x = directionX;
   movingBase1.velocity.y = directionY;

   movingBaseStand1.velocity.x = directionX;
   movingBaseStand1.velocity.y = directionY;
   
   movingBase2.velocity.x = directionX;
   movingBase2.velocity.y = directionY;

   movingBaseStand2.velocity.x = directionX;
   movingBaseStand2.velocity.y = directionY;
   


            // Moving Right //
       
    if (movX >= posX + 650 && movY <= posY) {
           directionX = 0;
           directionY = 2;
       }
       
       else if (movX >= posX && movY >= posY + 150) {
            directionX = - 2;
            directionY = 0;
       }
       
       else if (movX <= posX - 50 && movY >= posY) {
            directionX = 0;
            directionY = - 2;
       }

       else if (movX <= posX && movY <= posY - 150) {
            directionX = 2;
            directionY = 0;
       }
    
            // Moving Right //
    
   
    var movXLeft = movingBase1Left.position.x;
    var movYLeft = movingBase1Left.position.y;

   movingBase1Left.velocity.x = directionXLeft;
   movingBase1Left.velocity.y = directionYLeft;

   movingBaseStand1Left.velocity.x = directionXLeft;
   movingBaseStand1Left.velocity.y = directionYLeft;


            // Moving Left //
       
    if (movXLeft <= posXLeft - 850 && movYLeft <= posYLeft) {
           directionXLeft = 0;
           directionYLeft = 2;
       }
       
       else if (movXLeft <= posXLeft && movYLeft >= posYLeft + 150) {
            directionXLeft =  2;
            directionYLeft = 0;
       }
       
       else if (movXLeft >= posXLeft + 150 && movYLeft >= posYLeft) {
            directionXLeft = 0;
            directionYLeft = - 2;
       }

       else if (movXLeft >= posXLeft && movYLeft <= posYLeft - 150) {
            directionXLeft = - 2;
            directionYLeft = 0;
       }
    
             // Moving Left //

          /////    MOVING BARS /////

 
          /////    THE END      /////



      if (duck.position.x > width/2 + 8800) {    
               endGame ();
            }
      
       
          /////    THE END      /////



      drawSprites (bg);
      drawSprites ();
    
     
      duck.debug = mouseIsPressed;
    //  base.debug = mouseIsPressed;
    //  box.debug = mouseIsPressed;
    //  obstacles.debug = mouseIsPressed;

}



 function collect (collector, collected) {
    volar = true;
    bar = 150;
    collected.remove();
    featherSound.play();

 }
    

function fly () {
     if (volar == true) {

         if (keyIsDown(SHIFT)) {
              duck.changeAnimation("flying");
              duck.velocity.y = 0;
                   
             if (keyIsDown(UP_ARROW)) {
                 duck.changeAnimation("flying_UP");
                 duck.velocity.y = - 3;   
             }
   
             if (keyIsDown(DOWN_ARROW)) {
                 duck.changeAnimation("flying_UP");
                 duck.velocity.y = 3;   
             }

             if (keyIsDown(RIGHT_ARROW)) {
                duck.changeAnimation("flying");
                duck.mirrorX(1);
                duck.velocity.x = 3;   
             }

             if (keyIsDown(LEFT_ARROW)) {
                duck.changeAnimation("flying");
                duck.mirrorX(- 1);
                duck.velocity.x = - 3;   
             }
          }
      } 

}


function flyBar () {  
  if (volar == true) {
    
      if (keyIsDown(SHIFT)) {
       bar -= 1;
      } 

      fill (255);
      text('FLY TIME', duck.position.x + 95, 73);
      rect (duck.position.x - 75, 50, bar, 30);
      if (bar < 0) {
      volar = false;
      bar = 150;
      }
      
  }
    
}





function dogRunning () {
  
     dog.velocity.x = dogDirection;

      if (duck.position.x < dog.position.x - 255) {
                 dog.mirrorX(-1);
                 dogDirection =  - 6;
      }
     
      if  (duck.position.x > dog.position.x + 255) {
                 dog.mirrorX(1);
                 dogDirection = 6;
      }

}

function die () {
   duck.changeAnimation("die");
   duck.velocity.x = 0;
   duck.velocity.y = 0;
   gameOver = true;
   textSize(45);
   textAlign(LEFT);
   text("SORRY, KEEP TRYING.",duck.position.x - 500, height/2 - 320);
   textSize(25);
   textAlign(LEFT);
   text("CLICK ON THE SCREEN TO START AGAIN",duck.position.x + 50, height/2 - 320);

}

function newGame () {
   // update sprites ...
  
   document.location.reload(true);
}

function endGame () {
  frameRate(35);
      duck.changeAnimation("flying");
      duck.velocity.x += .01;
      duck.velocity.y = 0;
      gameOver = true;
      
}
