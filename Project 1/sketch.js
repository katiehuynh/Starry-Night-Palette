/*
katie 
How to Interact: 
Click on canvas first to activate it
press '1' On/Off - blue
press '2' On/Off - dark blue
press '3' On/Off - blue
press '4' On/Off - stroke
press '5' On/Off - yellow
press '6' On/OFF - white splatter
move your mouse on the canvas to paint
*/
let R, G, B, A;
let brushSize;
let brush1 = false;
let brush2 = false;
let brush3 = false;
let brush4 = false;
let brush5 = false;
let brush6 = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  angleMode(DEGREES);
}

function draw() {
  stroke('black');
  noFill();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 2, windowWidth - 20, windowHeight - 20);
  //fill(R, G, B, A);
  noStroke();
  //brushSize = map(mouseY, 0, windowHeight, 0, 55);
  
  
  
 // R = map(mouseX, 0, windowWidth, 0, 255);
 // G = random(255);
 // B = map(mouseY, 0, windowHeight, 0, 255);
 // A = map(mouseY, 0, windowHeight, 105, 5);
  //brush1
  
    if (brush1) {
      noStroke();
      let brushSize = random(30,90);
      fill(random(30,105), random(95,130), random(180,220), random(30,150));
      rect(mouseX, mouseY, brushSize, brushSize);
    }
    if (brush2) {
      let brushSize = random(20,80);
      fill(random(2,7),random(1,10), random(27,39), random(2,100));
      rect(mouseX, mouseY, brushSize +10, brushSize);
    }
    if (brush3) {
      let brushSize = random(20,80);
      fill(random(15,30),random(20,70), random(200,220), random(2,100));
      rect(mouseX, mouseY, brushSize +10, brushSize);
    }
    if (brush4) {
      noFill();
      strokeWeight(2);
      stroke(random(0,60), random(50,90), random(200,270), random(100,200));
      translate(200,0);
      rotate(30);
      rect(mouseX - 20, mouseY - 20, 2, 1);
    }
    if (brush5) {
      let brushSize = random(20,65);
      noStroke();
      fill(random(200,240), random(190,220), random(87,120), random(150,250));
      rect(mouseX, mouseY, brushSize, brushSize);
    }
  
    if(brush6){
      noStroke();
      fill('white');
      let radius = random(1,4);
      ellipse(mouseX, mouseY,radius, random(10,20) + random(-30,30, radius));
      
      

      
  
    }
 
  
}

function keyTyped() {
  if (key === '1') {
    brush1 = !brush1;
  }else if (key === '2') {
    brush2 = !brush2;
  }else if (key === '3') {
    brush3 = !brush3;
  }else if (key === '4') {
    brush4 = !brush4;
  }else if (key === '5') {
    brush5 = !brush5;
  }else if (key === '6') {
    brush6 = !brush6;
  }
 
  if(key === 'd'){
    saveCanvas('katie.jpg');
  }

}