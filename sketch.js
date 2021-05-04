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

  headlineFont = loadFont('fonts/Poppins-Bold.ttf');
  bodyFont = loadFont('fonts/Poppins-Regular.ttf');
  
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  adventureManager = new AdventureManager('data/adventureStates.csv', 'data/interactionTable.csv', 'data/clickableLayout.csv');
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);

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
  this.color = "#AA33AA";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#AAAAAA";
}

clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
} 

// do something similar for ALL clickables
cl_OneA_Pressed = function() {
   // add scores, etc.

   adventureManager.clickablePressed(this.name);
}

cl_OneB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_OneC_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_TwoA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_TwoB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_TwoC_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_ThreeA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_ThreeB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_SixA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_SixB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}

cl_SixC_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_SevenA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_SevenB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_NineA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_NineB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_TenA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_TenB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_TwelveA_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}
cl_TwelveB_Pressed = function() {

   adventureManager.clickablePressed(this.name);
}


//-------------- ROOMS --------------//

// hard-coded text for all the rooms
// the elegant way would be to load from an array
function loadAllText() {
  // go through all states and setup text
  // ONLY call if these are ScenarioRoom
  
// copy the array reference from adventure manager so that code is cleajer
  scenarioRooms = adventureManager.states;

  scenarioRooms[one].setText("Who Pays for it?", "The underground tunnels cost money to maintain. Goomazon threatens to leave the city if they have to pay for all the maintenance work. Who pays for it?");
  scenarioRooms[two].setText("Do we lure them back?", "Goomazon moves their headquarters to our rival city across the river. They layoff local workers. How should we respond?");
  scenarioRooms[three].setText("What do we cut?", "The city budget is getting tanked because of the cost of the tunels. Which programs should we cut?");
  scenarioRooms[four].setText("How do we help the economy?", "The wealthy leave the city in droves. Restaurants start closing and our tax base is depleted. What do we do?");
  scenarioRooms[five].setText("It's bad, what do we do?", "The rival company is even worse than Goomazon. In addition to being anti-union, they force everyone to wear silly uniforms, sing happy children's songs and sign the most restrictive NDAs ever.");
  scenarioRooms[six].setText("Oh-no! Now what to do?", "Goomazon expands its operations. It is now both in your city and the rival city. It's driven out all the local businesses.");
  scenarioRooms[seven].setText("How can we fix this?", "The city has cut the budget to some of its essential services. It's been a cascading effect. Without arts and adequate transportation, everyone has become depressed. THE END.");
  scenarioRooms[eight].setText("How do we respond?", "There are massive worker's strikes. The city is shut down. Big labor is angry and riling people up. Thousands of protesters are in the streets.");
  scenarioRooms[nine].setText();
  scenarioRooms[ten].setText();
  scenarioRooms[eleven].setText();
  scenarioRooms[twelve].setText();

}

//-------------- SUBCLASSES / YOUR DRAW CODE CAN GO HERE ---------------//

// Instructions screen has a backgrounnd image, loaded from the adventureStates table
// It is sublcassed from PNGRoom, which means all the loading, unloading and drawing of that
// class can be used. We call super() to call the super class's function as needed
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
    this.drawY = 360;
    this.drawX = 430;
  }


  // call the PNGRoom superclass's draw function to draw the background image
  // and draw our instructions on top of this
    draw() {
      // this calls PNGRoom.draw()
      super.draw();
      
      push();

      // title text
      fill(255);
      textAlign(LEFT);
      textFont(headlineFont);
      textSize(36);

      text("How do we feel?", this.drawX , 240);
     
      // Draw text in a box
      //text(this.titleText, width/6, height/6, this.textBoxWidth, this.textBoxHeight );
    
      textFont(bodyFont);
      textSize(28);

      text(this.bodyText, this.drawX, this.drawY - 80, width - 480,height - (this.drawY+100) );
      
      pop();
    }
}

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
    this.drawY = 360;
    this.drawX = 430;
  }

  // call the PNGRoom superclass's draw function to draw the background image
  // and draw our instructions on top of this
    draw() {
      // this calls PNGRoom.draw()
      super.draw();
      
      push();

      // title text
      fill(255);
      textAlign(LEFT);
      textFont(headlineFont);
      textSize(36);

      text("How do we feel?", this.drawX , 240);
     
      // Draw text in a box
      //text(this.titleText, width/6, height/6, this.textBoxWidth, this.textBoxHeight );
    
      textFont(bodyFont);
      textSize(28);

      text(this.bodyText, this.drawX, this.drawY - 80, width - 480,height - (this.drawY+100) );
      
      pop();
    }
}