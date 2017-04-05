function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  createCanvas(windowWidth,windowHeight);
  background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  textSize(windowWidth/25);
  text("Welcome to Epilepsy.edu",windowWidth/4,windowHeight/2);
}