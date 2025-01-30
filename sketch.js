let circleColor = [255, 0, 0];
let circleSize = 50;        

function setup() {
  createCanvas(600, 600);
  background(220); 
}

function draw() {

  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function mousePressed() {
  circleColor = [random(255), random(255), random(255)]; 
}


function keyPressed() {
  if (key === 'R' || key === 'r') {
    circleSize = 50;
  } else if (key === 'G' || key === 'g') {
    circleSize = 80; 
  } else if (key === 'B' || key === 'b') {
    circleSize = 30;
  }
}


function mouseMoved() {
  circleSize = map(mouseX, 0, width, 20, 100); 
}
