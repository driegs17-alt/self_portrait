// Self-Portrait
// Move the mouse: my eyes follow it.
// Click: my shirt changes color.
// Hold the mouse down: big smile.
// The background color is random every time it runs.

let bgColor;
let shirtColor;

function setup() {
  createCanvas(600, 600);
  bgColor = color(random(150, 255), random(150, 255), random(150, 255));
  shirtColor = color(random(255), random(255), random(255));
}

function draw() {
  background(bgColor);

  // 6 foot mark
  stroke(0);
  strokeWeight(2);
  line(40, 112, 200, 112);
  noStroke();
  fill(0);
  textSize(20);
  text();

  // shirt
  fill(shirtColor);
  arc(300, 620, 460, 320, PI, TWO_PI);

  // neck and head
  fill(233, 185, 148);
  rect(270, 380, 60, 90);
  ellipse(300, 280, 220, 270);

  // collar
  fill(255);
  triangle(260, 460, 300, 475, 280, 505);
  triangle(340, 460, 300, 475, 320, 505);

  // brown hair
  fill(90, 58, 36);
  arc(300, 225, 236, 225, PI, TWO_PI);
  noFill();
  stroke(90, 58, 36);
  strokeWeight(28);
  bezier(240, 150, 290, 120, 360, 140, 395, 200);

  // sunglasses on my head
  noStroke();
  fill(20);
  rect(235, 145, 55, 28, 8);
  rect(310, 145, 55, 28, 8);
  stroke(20);
  strokeWeight(5);
  line(290, 155, 310, 155);

  // eyes that follow the mouse
  let lookX = map(mouseX, 0, width, -8, 8);
  let lookY = map(mouseY, 0, height, -5, 5);
  noStroke();
  fill(255);
  ellipse(255, 280, 42, 28);
  ellipse(345, 280, 42, 28);
  fill(70, 45, 30);
  ellipse(255 + lookX, 280 + lookY, 16, 16);
  ellipse(345 + lookX, 280 + lookY, 16, 16);

  // eyebrows
  stroke(90, 58, 36);
  strokeWeight(7);
  line(232, 252, 276, 248);
  line(324, 248, 368, 252);

  // smile (bigger while the mouse is held down)
  noFill();
  stroke(0);
  strokeWeight(4);
  if (mouseIsPressed) {
    arc(300, 340, 90, 60, 0, PI);
  } else {
    arc(300, 340, 70, 25, 0, PI);
  }
}

function mousePressed() {
  shirtColor = color(random(255), random(255), random(255));
}
