var x = 0;
var y = 0;
var spacing;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {

  spacing = 20;

  stroke(200);
  if (random(1) < 0.3) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }

}
