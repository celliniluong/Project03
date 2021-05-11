/***********************************************************************************
 Project 03: OneWay
  by Cellini Luong
  Uses the p5.2DAdventure.js class 
  
------------------------------------------------------------------------------------
  To use:
  Add this line to the index.html
  <script src="p5.2DAdventure.js"></script>
***********************************************************************************/

// adventure manager global  
var adventureManager;

// p5.play
var playerSprite;
var playerAnimation;

// Clickables: the manager class
var clickablesManager;    // the manager class
var clickables;           // an array of clickable objects


// indexes into the clickable array (constants) 
const cl_startScenario = 0;
const cl_OneA = 1;
const cl_OneB = 2;
const cl_OneC = 3;
const cl_TwoA = 4;
const cl_TwoB = 5;
const cl_TwoC = 6;
const cl_ThreeA = 7;
const cl_ThreeB = 8;
const cl_SixA = 9;
const cl_SixB = 10;
const cl_SixC = 11;
const cl_SevenA = 12;
const cl_SevenB = 13;
const cl_NineA = 14;
const cl_NineB = 15;
const cl_TenA = 16;
const cl_TenB = 17;
const cl_TwelveA = 18;
const cl_TwelveB = 19;

// Stress symbol for scorecard
var stressSymbol;   // stress symbol
var maxStress = 5;

var stressCard;

// room indices - look at adventureManager
const one = 3;
const two = 4;
const three = 5;
const four = 6;
const five = 7;
const six = 8;
const seven = 9;
const eight = 10;
const nine = 11;
const ten = 12;
const eleven = 13;
const twelve = 14;

let headlineFont;
let bodyFont;


// Allocate Adventure Manager with states table and interaction tables
function preload() {

  // loading font
  headlineFont = loadFont('fonts/Poppins-Bold.ttf');
  bodyFont = loadFont('fonts/Poppins-Regular.ttf');

  // loading images
  stressSymbol = loadImage("assets/Stress.png");

  
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  adventureManager = new AdventureManager('data/adventureStates.csv', 'data/interactionTable.csv', 'data/clickableLayout.csv');
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);

  stressCard = new scoreCard();

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // this is optional but will manage turning visibility of buttons on/off
  // based on the state name in the clickableLayout
  adventureManager.setClickableManager(clickablesManager);

  // This will load the images, go through state and interation tables, etc
  adventureManager.setup();

  // load all text screens
  loadAllText();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  fs = fullscreen();
}

// Adventure manager handles it all!
function draw() {
  // draws background rooms and handles movement from one to another
  adventureManager.draw();

  stressCard.draw();

  
  // draw the p5.clickables, in front of the mazes but behind the sprites 
  clickablesManager.draw();
}

// pass to adventure manager, this do the draw / undraw events
function keyPressed() {
  // toggle fullscreen mode
  if( key === 'f') {
    fs = fullscreen();
    fullscreen(!fs);
    return;
  }

  // dispatch all keys to adventure manager
  adventureManager.keyPressed(key); 
}

function mouseReleased() {
  // dispatch all mouse events to adventure manager
  adventureManager.mouseReleased();
}


//-------------- CLICKABLE CODE  ---------------//

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;    
  }

  // we do specific callbacks for each clickable
  clickables[0].onPress = clickableButtonPressed;
  clickables[cl_OneA].onPress = cl_OneA_Pressed;
  clickables[cl_OneB].onPress = cl_OneB_Pressed;
  clickables[cl_OneC].onPress = cl_OneC_Pressed;
  clickables[cl_TwoA].onPress = cl_TwoA_Pressed;
  clickables[cl_TwoB].onPress = cl_TwoB_Pressed;
  clickables[cl_TwoC].onPress = cl_TwoC_Pressed;
  clickables[cl_ThreeA].onPress = cl_ThreeA_Pressed;
  clickables[cl_ThreeB].onPress = cl_ThreeB_Pressed;
  clickables[cl_SixA].onPress = cl_SixA_Pressed;
  clickables[cl_SixB].onPress = cl_SixB_Pressed;
  clickables[cl_SixC].onPress = cl_SixC_Pressed;
  clickables[cl_SevenA].onPress = cl_SevenA_Pressed;
  clickables[cl_SevenB].onPress = cl_SevenB_Pressed;
  clickables[cl_NineA].onPress = cl_NineA_Pressed;
  clickables[cl_NineB].onPress = cl_NineB_Pressed;
  clickables[cl_TenA].onPress = cl_TenA_Pressed;
  clickables[cl_TenB].onPress = cl_TenB_Pressed;
  clickables[cl_TwelveA].onPress = cl_TwelveA_Pressed;
  clickables[cl_TwelveB].onPress = cl_TwelveB_Pressed;

}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#EE2525";
  this.noTint = true;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#F2F2F2";
}

// Callback for every clickable used
clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
} 

cl_OneA_Pressed = function() {
   // add scores, etc.
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_OneB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_OneC_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TwoA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TwoB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TwoC_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_ThreeA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_ThreeB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_SixA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_SixB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_SixC_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_SevenA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_SevenB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_NineA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_NineB_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TenA_Pressed = function() {
   stressCard.addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TenB_Pressed = function() {
   addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TwelveA_Pressed = function() {
   addStress(1);
   adventureManager.clickablePressed(this.name);
}
cl_TwelveB_Pressed = function() {
   addStress(1);
   adventureManager.clickablePressed(this.name);
}

//-------------- STRESS CARD --------//

class scoreCard {
  constructor () {
    this.image = loadImage("assets/stresscard.png")
    this.x = width/2;
    this.y = height/2;
    this.stress = 0;
  }


  draw(){
    if( this.image ) {
      push();
      // draw stress space
      imageMode(CENTER);
      image( this.image, this.x, this.y );

      // draw stress symbol
      for( let i = 0; i < this.stress; i++ ){
        image(stressSymbol, this.x + 70 + (i*40), this.y + 10)
      }

      pop();
    }
  }

  getStress() {
    return this.stress;
  }

  // add, check for max overflow
  addStress(amt) {
    this.stress += amt;
    if( this.stress > maxStress ) {
      this.stress = maxStress;
    }

  }

  // sub, check for below zero
  subStress(amt) {
    this.stress -= amt;
    if( this.stress < 0 ) {
      this.stress = 0;
    }
  }
}


//-------------- ROOMS --------------//

// hard-coded text for all the rooms

function loadAllText() {

    scenarioRooms = adventureManager.states;
  resultsRooms = adventureManager.states;

  scenarioRooms[one].setText("Where to?", "You just lost the lease on your apartment. Where are you moving to?");
  scenarioRooms[two].setText("Should you stay or should you go?", "You are looking for an apartment in Manhattan. However, since you do not already have OneWay installed into your body, the lifestyle is troublingly incompatible with your needs. You struggle to even submit a rental application without OneWay, let alone get in touch with real estate agents. What do you want to do?");
  scenarioRooms[three].setText("Software update", "You bought OneWay and managed to secure a spot in Manhattan. BigInc has just released a software upgrade that cost nearly as much as the installation itself. This update will put you in deep debt, but is the only way to stay compatible with the technology in Manhattan. What do you do?");
  resultsRooms[four].setText("Yikes", "You paid for the update in order to keep OneWay compatible. But, now you are very broke. You can’t even afford your current rent. You try to seek support from the government, but you do not qualify for any aid because having OneWay puts you in the highest bracket of income. You now have the most current technology, but are homeless.");
  resultsRooms[five].setText("Congratulations", "You have left what is left of New York. You have escaped the pressure of Big Inc. For now that is…..");
  scenarioRooms[six].setText("Should you stay or should you go?", "You are on Staten Island. In order to seek residency, you must commit to an anti-technology oath. The purists have banned all forms of smart devices and have reverted to pre-internet times of living in fear of the evolution of technology. Stay or go someplace else?");
  scenarioRooms[seven].setText("Welcome to Staten Island?", "You’ve decided to stay on Staten Island. You are having trouble getting accustomed to the tech-free lifestyle and you feel a lot of social pressure from the community on where you stand in response to BigInc taking over NYC. What do you do?");
  resultsRooms[eight].setText("Yikes", "You have decided to commit the Purists, but have chosen the side of a losing battle. Your own community has started to lose faith in the cause, resulting in leadership taking unethical actions to keep the community pure. Naturally the community becomes corrupt and loses many members to BigInc.");
  scenarioRooms[nine].setText("In or out?", "Big Inc just bought out abandoned buildings all over Brooklyn with plans to convert them to luxury apartments, OneWay compatible apartments with the hopes of inviting other wealthy communities to join their society. If you have OneWay installed, you’ll have the chance to be a part of the extended community and get in early at an up and coming area.");
  scenarioRooms[ten].setText("Software update","You bought OneWay and have been living in a poor quality building while waiting for your spot in the up and coming luxury apartments. BigInc has just released a software upgrade that cost nearly as much as the installation itself. This update will put you in deep debt, but is the only way to secure your spot on the waitlist. What do you do?");
  resultsRooms[eleven].setText("Yikes", "The building you are currently living in just got bought out by BigInc. They are doing a complete remodel and kicking out all of the current residents. You can’t afford to live anywhere in Brooklyn anymore. You try to seek support from the government, but you do not qualify for any aid because having OneWay puts you in the highest bracket of income. You now have an outdated form of OneWay and are homeless.");
  scenarioRooms[twelve].setText("In or out?", "The building you were living in just got bought out by BigInc. OneWay has taken over all of Brooklyn, displacing its current residents onto the streets. You feel like your only choices are to buy OneWay or leave NYC. What do you do?");

}

//-------------- SUBCLASSES / Scenario Screens, Results Screens ---------------//

// Defining class for Scenario Sreens
class ScenarioRoom extends PNGRoom {
  // Constructor gets calle with the new keyword, when upon constructor for the adventure manager in preload()
  constructor() {
    super();    // call super-class constructor to initialize variables in PNGRoom

    this.titleText = "";
    this.bodyText = "";
  }

  // should be called for each room, after adventureManager allocates
  setText( titleText, bodyText ) {
    this.titleText = titleText;
    this.bodyText = bodyText;
    this.drawY = 260;
    this.drawX = 430;
  }


  // Setting up draw layout for Scenario Screens
    draw() {
      // this calls PNGRoom.draw()
      super.draw();
      
      push();

      // title text
      fill(255);
      textAlign(LEFT);
      textFont(headlineFont);
      textSize(36);

      text(this.titleText, this.drawX , this.drawY - 120);
     
      // Draw text in a box
      //text(this.titleText, width/6, height/6, this.textBoxWidth, this.textBoxHeight );
    
      textFont(bodyFont);
      textSize(24);

      text(this.bodyText, this.drawX, this.drawY - 80, width - 480,height - (this.drawY+100) );
      
      pop();
    }
}

// Defining class for Results Sreens
class ResultsRoom extends PNGRoom {
  // Constructor gets calle with the new keyword, when upon constructor for the adventure manager in preload()
  constructor() {
    super();    // call super-class constructor to initialize variables in PNGRoom

    this.titleText = "";
    this.bodyText = "";
  }

  // should be called for each room, after adventureManager allocates
  setText( titleText, bodyText ) {
    this.titleText = titleText;
    this.bodyText = bodyText;
    this.drawY = 280;
    this.drawX = 270;
  }

 
  // Setting up draw layout for Results Screens
    draw() {
      // this calls PNGRoom.draw()
      super.draw();
      
      push();

      // title text
      fill(0);
      textAlign(CENTER);
      textFont(headlineFont);
      textSize(36);

      text(this.titleText, width/2 , this.drawY);
     
      // Draw text in a box
      //text(this.titleText, width/6, height/6, this.textBoxWidth, this.textBoxHeight );
    
      textFont(bodyFont);
      textSize(20);

      text(this.bodyText, this.drawX, this.drawY + 40, 770, 500);
      
      pop();
    }
}