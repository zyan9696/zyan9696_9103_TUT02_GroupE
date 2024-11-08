// Array to hold randomPillShape objects
let pills = []; 
// the number of total number of randomPillShape
let totalShapes = 2000;

//This class creates and manages random shapes with randomPillShape
class randomPillShape {
  constructor(type) {
    this.type = type;
    // Initial random position on x-axis
    this.x = random(0.8);
    // Initial random position on y-axis
    this.y = random(0.8); 
    // Relative size of the pill
    this.size = random(0.005, 0.015);
    // Scale factor for noise movement
    this.PillScale = random(0.1, 0.3);
    // Starting point for Perlin noise
    this.PillLocation = random(10);
  }

  display() {
    noStroke();
    
    // Calculate the actual size based on the canvas dimensions
    let minDimension = min(width, height);
    let size = this.size * minDimension;

    //Samples the Perlin Noise for x and y,
    //x generates natural movement,
    //y generates a more varied movement pattern by adding 10
    let xNoise = noise(this.PillLocation);
    let yNoise = noise(this.PillLocation + 10);

    //The position of the shape is calculated by adding the noise values to its initial position
    let x = (this.x + xNoise * this.PillScale) * width;
    let y = (this.y + yNoise * this.PillScale) * height;

    // Draw the shape based on the type
    switch (this.type) {
      case 'Pill1':
        this.drawPill1(x, y, size);
        break;
      case 'Pill2':
        this.drawPill2(x, y, size);
        break;
      case 'Pill3':
        this.drawPill3(x, y, size);
        break;
      case 'Pill4':
        this.drawPill4(x, y, size);
        break;
    }

    // Increment noise location to create smooth movement
    this.PillLocation += 0.01;
  }
  
  //Draw white pills
  drawPill1(x, y, size) {
    fill(255, 255, 255);
    circle(x, y, size);
  }
  
  //Draw the rotated capsule
  drawPill2(x, y, size) {
    push();
    translate(x, y);
    //Applys rotation to rotate 10 degree;
    rotate(radians(10));
    fill(255, 175, 95);
    circle(x, y, size);
    rect(x,y+size/2,size,size);
    fill(255, 246, 205)
    circle(x, y+size, size);
    rect(x,y+size/1.5,size,size/2);
    pop();
  }

  //Draw the rotated capsule2
  drawPill3(x, y, size) {
    push();
    translate(x, y);
    //Applys rotation to rotate 45 degree;
    rotate(radians(45));
    fill(252, 244, 91); 
    circle(x, y, size);
    rect(x,y+size/2,size,size);
    fill(208, 113, 113)
    circle(x, y+size, size);
    rect(x,y+size/1.5,size,size/2);
    pop();
  }
  //Draw the rotated capsule3
  drawPill4(x, y, size) {
    push();
    translate(x, y);
    //Applys rotation to rotate 300 degree;
    rotate(radians(300));
    fill(143, 177, 232); 
    circle(x, y, size);
    rect(x,y+size/2,size,size);
    fill(215, 243, 255)
    circle(x, y+size, size);
    rect(x,y+size/1.5,size,size/2);
    pop();
  }
}

// Create a plate array to store the position of plates
let plates = [
  { x: 0.135, y: 0.13 ,type:1},
  { x: 0.43, y: 0.07 ,type:2},
  { x: 0.73, y: 0.008 ,type:3},
  { x: 0.07, y: 0.4 ,type:4},
  { x: 0.35, y: 0.34 ,type:3},
  { x: 0.63, y: 0.27 ,type:5},
  { x: 0.93, y: 0.2 ,type:5},
  { x: -0.02, y: 0.67 ,type:5},
  { x: 0.27, y: 0.62 ,type:6},
  { x: 0.56, y: 0.55 ,type:7},
  { x: 0.85, y: 0.48 ,type:7},
  { x: 0.16, y: 0.89 ,type:7},
  { x: 0.46, y: 0.85 ,type:2},
  { x: 0.76, y: 0.77 ,type:1},
  { x: 1.05, y: 0.71 ,type:4},
  { x: 0.65, y: 1.07 ,type:5},
  { x: 0.95, y: 1.0 ,type:1},
];

// Create a food array to store the the postion of foods
let foods = [
  { x: 0.135, y: 0.13 ,type:1},
  { x: 0.43, y: 0.07 ,type:2},
  { x: 0.73, y: 0.008 ,type:3},
  { x: 0.07, y: 0.4 ,type:4},
  { x: 0.35, y: 0.34 ,type:3},
  { x: 0.63, y: 0.27 ,type:5},
  { x: 0.93, y: 0.2 ,type:6},
  { x: -0.02, y: 0.67 ,type:6},
  // { x: 0.27, y: 0.62 ,type:6},
  { x: 0.56, y: 0.55 ,type:7},
  { x: 0.85, y: 0.48 ,type:8},
  { x: 0.16, y: 0.89 ,type:9},
  { x: 0.46, y: 0.85 ,type:10},
  { x: 0.76, y: 0.77 ,type:11},
  { x: 1.05, y: 0.71 ,type:4},
  { x: 0.65, y: 1.07 ,type:5},
  { x: 0.95, y: 1.0 ,type:1},
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  //A for loop generates a randompillshape during each iteration
  for (let i = 0; i < totalShapes; i++) {
    let shapeType;

    if (i < totalShapes / 4) {
      shapeType = 'Pill1';
    } else if (i < (totalShapes * 2) / 4) {
      shapeType = 'Pill2';
    } else if (i < (totalShapes * 3) / 4) {
      shapeType = 'Pill3';
    } else {
      shapeType = 'Pill4';
    }
    // Add them to the array
    pills.push(new randomPillShape(shapeType));
  }
}

function windowResized() {
  let side = min(windowWidth, windowHeight);
  resizeCanvas(side, side);
}

let noiseOffset = 0;

function draw() {
  // Make sure the canvas is a smaller value of the window width and height, keeping it square
  let side = min(windowWidth, windowHeight);
  resizeCanvas(side, side);
  
  //Generate a color value
  let noiseValue = noise(noiseOffset);
  //Map the output of Perlin noise to the color range from 0 to 255
  let r = map(noiseValue, 0, 1, 235, 255);
  let g = map(noiseValue, 0, 1, 140, 240);
  let b = map(noiseValue, 0, 1, 150, 230);
  //Set the background color that can automatically changes
  background(r, g, b);
  //Increment the offset value slightly each frame
  noiseOffset += 0.015;

     // Display each pill
     for (let pill of pills) {
      pill.display();
    }

  let PlateRatio = 0.265;
  let PlateDiameter = PlateRatio * side;

  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];
    noFill();
    noStroke();
    switch (plate.type){
      case 1:
        drawPinkPlate(plate.x, plate.y, PlateDiameter,side)
        break;
      case 2:
        drawYellowPlate(plate.x, plate.y, PlateDiameter,side)
        break;
      case 3:
        drawPurplePlate(plate.x, plate.y, PlateDiameter,side)
        break;
      case 4:
        drawBluePlate(plate.x, plate.y, PlateDiameter,side)
        break;
      case 5:
        drawGreenPlate(plate.x, plate.y, PlateDiameter,side)
        break;
      case 6:
          drawHotpot(plate.x, plate.y, 0.265,side)
          break;
      case 7:
        drawRainbowPlate(plate.x, plate.y, PlateDiameter,side)
        break;
    }
  }

  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    noFill();
    noStroke();
 switch (food.type){
      case 1:
        drawSushi(food.x, food.y, PlateDiameter,side)
        break;
      case 2:
        drawCurry(food.x, food.y, PlateDiameter,side)
        break;
      case 3:
        drawPudding(food.x, food.y, PlateDiameter,side)
        break;
      case 4:
        drawLightDonut(food.x, food.y, PlateDiameter,side)
        break;
      case 5:
        drawBurger(food.x, food.y, PlateDiameter,side)
          break;
      case 6:
        drawSushi(food.x, food.y, PlateDiameter,side)
          break;
      case 7:
        drawLimeCake(food.x, food.y, PlateDiameter,side)
          break;
      case 8:
        drawToast(food.x, food.y, PlateDiameter,side)
          break;
      case 9:
        drawDarkDonut(food.x, food.y, PlateDiameter,side)
          break;
      case 10:
        drawPizza(food.x, food.y, PlateDiameter,side)
          break;
      case 11:
        drawLimeCake(food.x, food.y, PlateDiameter,side)
          break;
    }
}
}


// Draw Plates Function
 //draw pink plate
 function drawPinkPlate(x,y,r,side){
   
  // pink flower
  function drawPinkFlower(x, y) {
    let side = min(windowWidth, windowHeight);
    let PlateDiameter = 0.265 * side;
    noStroke();
    fill(255, 205, 205);
    rect(x, y, 0.06 * PlateDiameter, 0.12 * PlateDiameter, 10);
    rect(x, y, 0.12 * PlateDiameter, 0.06 * PlateDiameter, 10);
    fill(255);
    circle(x, y, 0.03 * PlateDiameter);
  }
  
  //Pink plate
  noStroke();
  fill(233, 167, 165);
  circle(x * side, y * side, r);
  fill(255);
  circle(x* side, y * side, 0.95 * r);
  stroke(233, 167, 165);
  strokeWeight(3);
  noFill();
  circle(x * side, y * side, 0.65 * r);
  
  //Use a loop to repeat 8 flowers around the center point
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8; // Each flower is spaced 1/8 apart
    let px = (x * side) + (0.4 * r) * cos(angle); // Calculate the x-coordinate of the flower
    let py = (y * side) + (0.4 * r) * sin(angle); // Calculate the y-coordinate of the flower
    drawPinkFlower(px, py);
  }
  
}
 //Draw Yellow Plate
  function drawYellowPlate(x,y,r,side){
  noStroke();
  fill(253, 224, 161);
  circle(x*side, y*side,r);
  fill(255, 243, 217);
  circle(x*side, y*side, 0.95 * r);
  fill(242, 183, 101 );

  // circle pattern
for (let i = 0; i < 4; i++) {
  let angle = (TWO_PI * i / 4) + ((PI / 4)); 
  let yx = (x*side) + (0.4 * r) * cos(angle); 
  let yy = (y*side) + (0.4 * r) * sin(angle); 
  circle(yx, yy, 0.1 * r);
}
  fill(255,255,255);
  circle(x*side, y*side, 0.65 * r);
  //rhomboid pattern
   drawRhombus(x*side + r*0.4, y*side, 0.04* side, 0.02 * side, 0, color(242, 183, 101));
   drawRhombus(x*side - r*0.4, y*side, 0.04* side, 0.02 * side, 0, color(242, 183, 101));
   drawRhombus(x*side , y*side- r*0.4, 0.02* side, 0.04 * side, 0, color(242, 183, 101));
  drawRhombus(x*side , y*side+ r*0.4, 0.02* side, 0.04 * side, 0, color(242, 183, 101));
}
 //draw green plate
  function drawGreenPlate(x,y,r,side){
  //green plate
  noStroke();
  fill(193, 217, 170);
  circle(x*side,y*side, r);
  noFill();
  stroke(227, 246, 203);
  strokeWeight(5);
  circle(x*side,y*side, 0.85 * r);
  fill(255);
  stroke(227, 246, 203);
  strokeWeight(3);
  circle(x*side,y*side, 0.70 * r);
  
  // repeate leaves pattern
  for (let i = 0; i < 4; i++) {
    let angle = TWO_PI * i /4;
    let gx = (x*side) + (0.43 * r) * cos(angle);
    let gy = (y*side) + (0.43 * r) * sin(angle);
    drawLeafPattern(gx, gy);
  }

  // create leaves pattern
  function drawLeafPattern(centerX, centerY) {
    let side = min(windowWidth, windowHeight);
    let PlateDiameter = 0.265 * side;
    fill(227, 246, 203);
    noStroke();

    let width = 0.13 * PlateDiameter;
    let height = 0.05 * PlateDiameter;

    // Calculate the coordinates of the two ellipses from centerX and centerY
    let x1 = centerX - 0.015 * PlateDiameter; 
    let x2 = centerX + 0.023 * PlateDiameter; 
    let y1 = centerY - 0.005 * PlateDiameter; 
    let y2 = centerY + 0.005 * PlateDiameter; 

    // Draw two rotating elliptical leaves
    drawRotatedEllipse(x1, y1, width, height, PI / 4);
    drawRotatedEllipse(x2, y2, width, height, PI / 1.6);
  }
}
 //draw blue plates
  function drawBluePlate(x,y,r,side) {
  noStroke();
  fill(170, 211, 215);
  circle(x * side, y * side, r);
  fill(220, 243, 254);
  circle(x * side, y * side, 0.95 * r);
  noFill();
  stroke(139, 195, 219);
  strokeWeight(5);
  circle(x * side, y * side, 0.75 * r);
  fill(255);
  stroke(170, 211, 215);
  strokeWeight(4);
  circle(x * side, y * side, 0.65 * r);
}
 //draw purple plate
  function drawPurplePlate(x,y,r,side) {
  noStroke();
  fill(230, 216, 241);
  circle(x*side, y*side, r);
  
  fill(247, 236, 255);
  circle(x*side, y*side, 0.82 * r);

  fill(255);
  stroke(218, 192, 242);
  strokeWeight(4);
  circle(x*side, y*side, 0.63 * r);
  
  //four flowers within plates
  for (let i = 0; i < 4; i++) {
    let angle = TWO_PI * i /4;
    let px = (x*side) + (0.4 * r) * cos(angle);
    let py = (y*side) + (0.4 * r) * sin(angle);
    drawPurpleFlower(px, py); 
  }
  
// purple flowers 
function drawPurpleFlower(px, py) {
  noStroke();
  fill(218, 192, 242);
  rect(px, py, 0.06 * r, 0.12 * r);
  rect(px, py, 0.12 * r, 0.06 * r,);
  fill(247, 236, 255);
  rect(px, py, 0.03 * r, 0.03 * r,);
}
}
 //draw rainbow plate
  function drawRainbowPlate(x,y,r,side) {
  noStroke();
  fill(170, 211, 215);
  circle(x*side,y*side, r);
  fill(220, 243, 254 );
  circle(x*side,y*side, 0.95 * r);
  noFill();
  stroke(255, 205, 205);
  strokeWeight(4);
  circle(x*side,y*side, 0.85 * r);
  fill(255);
  stroke(253, 224, 161);
  strokeWeight(4);
  circle(x*side,y*side, 0.725 * r);
}

//draw hotpot
 function drawHotpot(x, y, r, side) {
  // Multiply the scale value by side to get the specific pixel coordinates
  x *= side;
  y *= side;
  r *= side;

  // grey hotpot border
  noStroke();
  fill(160);
  circle(x, y, r);
  circle(x - 0.12 * side, y, 0.2 * r);
  circle(x + 0.12 * side, y, 0.2 * r);

  // hotpot
  drawSemiCircle(x, y, 0.92 * r, 0, color(219, 128, 89));
  drawSemiCircle(x, y, 0.92 * r, PI, color(200, 95, 95));
  drawSemiCircle(x, y - 0.23 * r, 0.46 * r, PI, color(219, 128, 89));
  drawSemiCircle(x, y + 0.23 * r, 0.46 * r, 0, color(200, 95, 95));

  // tomato
  fill(218, 86, 63);
  circle(x, y - 0.07 * side, 0.32 * r);
  drawStar(x, y - 0.07 * side, 0.06 * r, color(119, 221, 81));
  fill(218, 86, 63);
  circle(x + 0.07 * side, y - 0.02 * side, 0.32 * r);
  drawStar(x + 0.07 * side, y - 0.02 * side, 0.06 * r, color(119, 221, 81));

  // food in hotpot
  fill(255, 220, 89);
  circle(x - 0.072 * side, y + 0.02 * side, 0.32 * r);
  stroke(219, 128, 89);
  strokeWeight(1);
  for (let i = 0; i < 8; i++) {
    let angle = i * (PI / 4);
    let lineX = x - 0.072 * side + 0.16 * r * cos(angle);
    let lineY = y + 0.02 * side + 0.16 * r * sin(angle);
    line(x - 0.072 * side, y + 0.02 * side, lineX, lineY);
  }

  // cucumber
  noStroke();
  fill(212, 255, 139);
  circle(x - 0.083 * side, y - 0.05 * side, 0.13 * r);
  circle(x - 0.05 * side, y + 0.08 * side, 0.13 * r);
  circle(x, y + 0.03 * side, 0.13 * r);

  // Yellow meat ball
  fill(255, 220, 89);
  circle(x + 0.015 * side, y + 0.08 * side, 0.09 * r);
  circle(x + 0.06 * side, y - 0.08 * side, 0.09 * r);
  circle(x + 0.09 * side, y + 0.04 * side, 0.08 * r);

  // bubble
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(x + 0.03 * side, y + 0.04 * side, 0.08 * r);
  circle(x - 0.01 * side, y - 0.02 * side, 0.06 * r);
  circle(x - 0.07 * side, y - 0.08 * side, 0.05 * r);
  circle(x - 0.02 * side, y + 0.1 * side, 0.07 * r);
  circle(x + 0.07 * side, y + 0.08 * side, 0.04 * r);
}

//Draw foods
//Draw a lime cake
function drawLimeCake(x,y,r,side) {
  //cake
  fill(255, 245, 221);
  stroke(251, 234, 189);
  strokeWeight(0.015*r);
  square(x*side, y*side,0.33*r);
  //lime
  //dark green circle
  fill(141, 180, 97);
  noStroke();
  circle(x*side-0.012*side, y*side-0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side+0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side-0.012*side, 0.09*r);  
  //light green circle
  fill(191, 221, 158);
  circle(x*side-0.012*side, y*side+0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side-0.012*side, 0.09*r);  
  //light green small circle
  circle(x*side-0.011*side, y*side-0.013*side, 0.08*r); 
  circle(x*side+0.013*side, y*side+0.011*side, 0.08*r);  
  //dark green small circle
  fill(141, 180, 97);
  circle(x*side+0.013*side, y*side-0.013*side, 0.08*r); 
  circle(x*side-0.011*side, y*side+0.011*side, 0.08*r);  
  //small rectangle
  fill(251, 234, 189);
  noStroke();
  drawRotatedRectangle(x*side+0.015*side, y*side-0.031*side,0.04*r, 0.015*r,-PI/3)
  drawRotatedRectangle(x*side-0.025*side, y*side-0.031*side,0.04*r, 0.015*r,-PI/4)
  drawRotatedRectangle(x*side-0.023*side, y*side+0.031*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side+0.030*side,0.04*r, 0.015*r,PI/2)
  drawRotatedRectangle(x*side-0.03*side, y*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side-0.01*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side, y*side+0.03*side,0.04*r, 0.015*r,-PI/3)
}
//Draw sushi
function drawSushi(x,y,r,side) {
  // rice
  fill(255);
  stroke(60);
  strokeWeight(0.013*r);
  circle(x*side-0.027*side, y*side-0.027*side, 0.2*r);
  circle(x*side+0.027*side, y*side+0.027*side, 0.2*r);
  circle(x*side+0.027*side, y*side-0.027*side, 0.2*r);
  circle(x*side-0.027*side, y*side+0.027*side, 0.2*r);
  circle(x*side-0.027*side, y*side+0.027*side, 0.2*r);  
  //red
  noStroke();
  fill(230, 132, 105)
  circle(x*side-0.027*side, y*side-0.027*side, 0.09*r);
  circle(x*side+0.027*side, y*side+0.027*side, 0.09*r);
  circle(x*side+0.027*side, y*side-0.027*side, 0.09*r);  
  circle(x*side-0.027*side, y*side+0.027*side, 0.09*r);  
  circle(x*side-0.027*side, y*side+0.027*side, 0.09*r);  
  //green
  fill(110, 192, 77)
  circle(x*side-0.038*side, y*side-0.022*side, 0.045*r);
  circle(x*side+0.038*side, y*side+0.022*side, 0.045*r);
  circle(x*side+0.038*side, y*side-0.022*side, 0.045*r);  
  circle(x*side-0.038*side, y*side+0.022*side, 0.045*r);  
  //yellow
  fill(255, 243, 77)
  circle(x*side-0.033*side, y*side-0.039*side, 0.045*r);
  circle(x*side+0.033*side, y*side+0.039*side, 0.045*r);
  circle(x*side+0.033*side, y*side-0.039*side, 0.045*r);  
  circle(x*side-0.033*side, y*side+0.039*side, 0.045*r);  
  //green
  fill(200, 241, 135)
  circle(x*side-0.039*side, y*side-0.032*side, 0.045*r);
  circle(x*side+0.039*side, y*side+0.032*side, 0.045*r);
  circle(x*side+0.039*side, y*side-0.032*side, 0.045*r);  
  circle(x*side-0.039*side, y*side+0.032*side, 0.045*r);  
  }
//draw pudding
function drawPudding(x,y,r,side) {
  //left pudding 
  fill(255, 231, 159);
  noStroke();
  circle(x*side-0.027*side, y*side, 0.34*r);
  fill(146, 86, 60);
  stroke(71, 32, 16);
  strokeWeight(0.004*r);
  circle(x*side-0.027*side, y*side, 0.19*r);
  drawRhombus(x*side-0.027*side,y*side,0.1*r,0.1*r,0,color(71, 32, 16));
  // text in pudding
  fill(255); 
  textSize(0.015*r); 
  text("Pudding",x*side-0.034*side,y*side); 
  //right scoop
  fill(170, 170, 170)
  ellipse(x*side+0.039*side, y*side-0.04*side, 0.08*r,0.13*r);
  rect(x*side+0.039*side,y*side,0.02*r,0.4*r);
  }
//draw darkdonut
function drawDarkDonut(x,y,r,side) {
  //donut
  stroke(78, 55, 17);
  strokeWeight(0.14*r);
  noFill();
  circle(x*side, y*side, 0.3*r)
  
  //blue sugar
  fill(124, 162, 242);
  noStroke();
  circle(x*side+0.04*side, y*side, 0.03*r);
  circle(x*side-0.04*side, y*side+0.03*side, 0.03*r);
  circle(x*side-0.03*side, y*side-0.02*side, 0.03*r);
  circle(x*side+0.04*side, y*side+0.03*side, 0.03*r);
  
  //yellow sugar
  fill(252, 244, 9);
  noStroke();
  circle(x*side-0.03*side, y*side,0.03*r);
  circle(x*side+0.03*side, y*side-0.02*side,0.03*r);
  circle(x*side-0.02*side, y*side-0.04*side,0.03*r);
  circle(x*side+0.004*side, y*side+0.035*side,0.03*r);

  //green suagr
  fill(135, 204, 104);
  noStroke();
  circle(x*side, y*side-0.045*side,0.03*r);
  circle(x*side+0.045*side,y*side-0.02*side,0.03*r);
  circle(x*side+0.02*side, y*side+0.04*side,0.03*r);
  circle(x*side-0.01*side, y*side+0.05*side,0.03*r);
  
  //red sugar
  fill(208, 113, 113);
  noStroke();
  circle(x*side-0.046*side,y*side+0.005*side,0.03*r);
  circle(x*side-0.02*side,y*side+0.03*side,0.03*r);
  circle(x*side+0.025*side,y*side+0.023*side,0.03*r);
  circle(x*side+0.023*side,y*side-0.037*side,0.03*r);
}
//draw lightdonut
function drawLightDonut(x,y,r,side) {

  //donut
  stroke(230, 165, 59);
  strokeWeight(0.14*r);
  noFill();
  circle(x*side+0.004*side, y*side, 0.3*r);
  stroke(251, 209, 141);
  circle(x*side, y*side, 0.3*r);

//blue sugar
  fill(124, 162, 242);
  noStroke();
  circle(x*side+0.04*side, y*side, 0.04*r);
  circle(x*side-0.04*side, y*side+0.03*side, 0.04*r);
  circle(x*side-0.03*side, y*side-0.02*side, 0.04*r);
  circle(x*side+0.04*side, y*side+0.03*side, 0.04*r);
  
  //yellow sugar
  fill(252, 244, 9);
  noStroke();
  circle(x*side-0.03*side, y*side,0.04*r);
  circle(x*side+0.03*side, y*side-0.02*side,0.04*r);
  circle(x*side-0.02*side, y*side-0.04*side,0.04*r);
  circle(x*side+0.004*side, y*side+0.035*side,0.04*r);

  //green sugar
  fill(135, 204, 104);
  noStroke();
  circle(x*side, y*side-0.045*side,0.04*r);
  circle(x*side+0.045*side,y*side-0.02*side,0.04*r);
  circle(x*side+0.02*side, y*side+0.04*side,0.04*r);
  circle(x*side-0.01*side, y*side+0.05*side,0.04*r);
  
  //red sugar
  fill(208, 113, 113);
  noStroke();
  circle(x*side-0.046*side,y*side+0.005*side,0.04*r);
  circle(x*side-0.02*side,y*side+0.03*side,0.04*r);
  circle(x*side+0.025*side,y*side+0.023*side,0.04*r);
  circle(x*side+0.023*side,y*side-0.037*side,0.04*r);
}
//draw hamburger
function drawBurger(x,y,r,side) {
  //green vege
  noStroke();
  fill(166, 221, 155);
  circle(x*side, y*side, 0.5*r);
  //burger
  stroke(233, 187, 104);
  strokeWeight(0.02*r);
  fill(252, 217, 150);
  circle(x*side, y*side, 0.38*r);
 // sesame
 noStroke();
 fill(255);
 ellipse(x*side+0.04*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side-0.02*side, y*side+0.03*side,0.016*r,0.03*r);
 ellipse(x*side-0.03*side, y*side-0.02*side,0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side+0.03*side, 0.016*r,0.03*r);
 ellipse(x*side,y*side+0.01*side,0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side+0.01*side, y*side+0.02*side, 0.016*r,0.03*r);
 ellipse(x*side-0.005*side, y*side+0.04*side, 0.016*r,0.03*r);
 ellipse(x*side-0.003*side, y*side-0.02*side, 0.016*r,0.03*r);
 ellipse(x*side+0.01*side, y*side-0.03*side, 0.016*r,0.03*r);
 ellipse(x*side+0.005*side, y*side-0.01*side, 0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side-0.017*side, 0.016*r,0.03*r);
 ellipse(x*side-0.02*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side-0.04*side, y*side+0.01*side, 0.016*r,0.03*r);
 ellipse(x*side-0.015*side, y*side-0.035*side, 0.016*r,0.03*r);
 ellipse(x*side+0.03*side, y*side-0.027*side, 0.016*r,0.03*r);
 ellipse(x*side+0.035*side, y*side+0.02*side, 0.016*r,0.03*r);
}
//draw pizza
function drawPizza(x,y,r,side) {
   noStroke();
   fill(248, 185, 103);
   circle(x*side, y*side, 0.66*r);
   fill(255, 238, 194);
   circle(x*side, y*side, 0.57*r);
   
   //Sausages
   fill(190, 67, 67);
   noStroke();
   circle(x*side+0.05*side, y*side, 0.09*r);
   circle(x*side+0.04*side, y*side-0.04*side, 0.09*r);
   circle(x*side, y*side-0.06*side, 0.09*r);
   circle(x*side-0.04*side, y*side-0.04*side, 0.09*r);
   circle(x*side-0.045*side, y*side+0.04*side, 0.09*r);
   circle(x*side+0.04*side, y*side+0.04*side, 0.09*r);
   circle(x*side-0.003*side, y*side-0.01*side, 0.09*r);  
   circle(x*side-0.058*side, y*side, 0.09*r);  
   circle(x*side, y*side+0.03*side, 0.09*r);  
   circle(x*side, y*side+0.063*side, 0.09*r);  
   circle(x*side-0.03*side, y*side+0.015*side, 0.09*r); 
                        
 //mushroom
   fill(114, 89, 89)
   circle(x*side-0.03*side, y*side-0.01*side, 0.05*r); 
   circle(x*side+0.02*side, y*side-0.01*side, 0.05*r); 
   circle(x*side-0.022*side, y*side+0.04*side, 0.05*r); 
   circle(x*side-0.062*side, y*side+0.025*side, 0.05*r);
   circle(x*side, y*side+0.01*side, 0.05*r); 
   circle(x*side-0.01*side, y*side-0.035*side, 0.05*r); 
   circle(x*side-0.025*side, y*side-0.06*side, 0.05*r); 
   circle(x*side-0.025*side, y*side+0.06*side, 0.05*r); 
   circle(x*side-0.06*side, y*side-0.025*side, 0.05*r); 
   circle(x*side+0.025*side, y*side+0.02*side, 0.05*r); 
   circle(x*side+0.055*side, y*side+0.025*side, 0.05*r); 
   circle(x*side+0.05*side, y*side-0.02*side, 0.05*r); 
   circle(x*side+0.015*side, y*side-0.03*side, 0.05*r); 
   circle(x*side+0.015*side, y*side+0.045*side, 0.05*r); 
   circle(x*side+0.023*side, y*side-0.05*side, 0.05*r); 
   circle(x*side+0.03*side, y*side+0.06*side, 0.05*r); 
 
 //chopped green onion
  drawRhombus(x*side-0.04*side, y*side-0.02*side,0.03*r, 0.07*r,PI/4, color(182, 215,136)) 
  drawRhombus(x*side-0.05*side, y*side+0.02*side,0.03*r, 0.07*r,-PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.015*side, y*side+0.008*side,0.03*r, 0.07*r,PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side+0.008*side,0.03*r, 0.07*r,-PI/3, color(182, 215,136)) 
  drawRhombus(x*side+0.01*side, y*side-0.042*side,0.03*r, 0.07*r,PI/2.5, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side-0.06*side,0.03*r, 0.07*r,-PI/2.5, color(182, 215,136)) 
  drawRhombus(x*side-0.017*side,y*side- 0.02*side,0.03*r, 0.07*r,PI/8, color(182, 215,136)) 
  drawRhombus(x*side-0.014*side,y*side+ 0.05*side,0.03*r, 0.07*r,PI/8, color(182, 215,136))
  drawRhombus(x*side-0.017*side, y*side+0.025*side,0.03*r, 0.07*r,PI/8, color(182, 215,136)) 
  drawRhombus(x*side-0.015*side,y*side+0.005*side,0.03*r, 0.07*r,-PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.068*side,y*side+0.005*side,0.03*r, 0.07*r,PI/7, color(182, 215,136)) 
  drawRhombus(x*side+0.065*side, y*side-0.02*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side-0.02*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side-0.02*side, y*side-0.045*side,0.03*r, 0.07*r,PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.017*side, y*side+0.03*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.018*side,y*side+0.065*side,0.03*r, 0.07*r,PI, color(182, 215,136)) 
  drawRhombus(x*side+0.06*side, y*side+0.038*side,0.03*r, 0.07*r,PI/5, color(182, 215,136)) 
}

//draw toast
function drawToast(x,y,r,side) {
  //toast
  noStroke();
  fill(179, 133, 92)
  ellipse(x*side, y*side-0.04*side, 0.45*r,0.2*r);
  rect(x*side, y*side+0.02*side,0.1*side,0.09*side)
  fill(255, 225, 144)
  ellipse(x*side, y*side-0.04*side, 0.4*r,0.17*r);
  rect(x*side, y*side+0.015*side,0.09*side,0.09*side)
  //egg
  fill(255);
  circle(x*side,y*side+0.01*side, 0.28*r);
  fill(255, 213, 97);
  circle(x*side+0.012*side, y*side+0.01*side+0.01*side, 0.12*r);
  
  //chopped green onion
  fill(158, 204, 129);
  noStroke();
  drawRotatedRectangle(x*side+0.015*side, y*side-0.031*side,0.03*r, 0.015*r,-PI/3)
  drawRotatedRectangle(x*side-0.025*side, y*side-0.031*side,0.03*r, 0.015*r,-PI/4)
  drawRotatedRectangle(x*side-0.023*side, y*side+0.031*side,0.03*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side+0.030*side,0.03*r, 0.015*r,PI/2)
  drawRotatedRectangle(x*side-0.03*side, y*side,0.03*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side-0.01*side,0.03*r, 0.015*r,PI/3)
   drawRotatedRectangle(x*side, y*side+0.03*side,0.03*r, 0.015*r,-PI/3)
}

//draw curry rice
function drawCurry(x,y,r,side) {  
  // Define some points about drawing Mayonnaise
  let Mpoints = [
    { x: x*side-0.06 * side, y: y* side-0.02 * side },
    { x: x*side-0.01 * side, y: y* side+0.056 * side },
    { x: x*side-0.03 * side, y: y* side-0.045 * side },
    { x: x*side+0.02 * side, y: y* side+0.05 * side },
    { x: x*side+0.01 * side, y: y* side-0.05 * side },
    { x: x*side+0.05 * side, y: y* side+0.035 * side },
  ];
  // curry
  noStroke();
  fill(242, 183, 101);
  circle(x * side, y * side, 0.65 * r);
  fill(173, 72, 35);
  circle(x * side, y * side, 0.5 * r);
  // Mayonnaise
  drawPolyline(Mpoints, 0.004*side, color(255, 240, 211));
}

// Function for drawing shapes
function drawPolyline(points, weight, color) {
  if (points.length < 2) return; 

  stroke(color); 
  strokeWeight(weight); 
  noFill();
  beginShape();
  for (let i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y); // 
  }
  endShape();
}

// Draw the rotating ellipse
function drawRotatedEllipse(cx, cy, w, h, angle) {
  push();
  translate(cx, cy);
  rotate(angle);
  ellipse(0, 0, w, h);
  pop();
}

//Draw a rhombus shape
function drawRhombus(cx, cy, width, height, angle, fillColor) {
  let side = min(windowWidth, windowHeight);
  // Calculate the four vertices 
  let halfWidth = width / 2;
  let halfHeight = height / 2;

  // Vertex coordinates
  let x1 = cx;
  let y1 = cy - halfHeight; // top

  let x2 = cx + halfWidth; // right
  let y2 = cy;

  let x3 = cx;
  let y3 = cy + halfHeight; // bottom

  let x4 = cx - halfWidth; // left
  let y4 = cy;

  // Rotate the coordinates
  let points = [
    createVector(x1, y1),
    createVector(x2, y2),
    createVector(x3, y3),
    createVector(x4, y4),
  ];
  for (let p of points) {
    let xOffset = p.x - cx;
    let yOffset = p.y - cy;
    p.x = cx+ xOffset * cos(angle) - yOffset * sin(angle);
    p.y = cy+ xOffset * sin(angle) + yOffset * cos(angle);
  }
  noStroke();
  fill(fillColor); 
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
}

  //Draw a pentagram
function drawStar(centerX, centerY, d, fillColor) {
  fill(fillColor);
  noStroke();
  // Radius of the outer vertice
  let outerRadius = d;
  // Radius of the inner vertice
  let innerRadius = d * 0.382;

  beginShape();
  for (let i = 0; i < 10; i++) {
    // Alternate the radius of the outer and inner vertices
    let radius = i % 2 === 0 ? outerRadius : innerRadius;
    // Calculates the Angle of the current vertice
    let angle = PI / 2 + (TWO_PI * i) / 10;
    let x = centerX + radius * cos(angle);
    let y = centerY - radius * sin(angle); 
    vertex(x, y);
  }
  endShape(CLOSE);
}
// Draw a semicircle
function drawSemiCircle(centerX, centerY, straightEdgeLength, angle, fillColor) {
  let radius = straightEdgeLength / 2;
  fill(fillColor);
  noStroke();
  push();
  translate(centerX, centerY);
  rotate(angle);
  arc(0, 0, straightEdgeLength, straightEdgeLength, -PI / 2, PI / 2, PIE);
  pop();
}

//draw a rotated rectangle
function drawRotatedRectangle(x, y, w, h, angle) {
  push();
  translate(x, y);
  rotate(angle);
  rect(0, 0, w, h);
  pop();
}



