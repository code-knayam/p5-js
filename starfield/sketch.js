var stars = [];
var speed;
function setup() {
  createCanvas(1200, 600);
  for ( var i = 0; i < 500; i++) {
    stars[i] = new Star();
  }

}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 40);
  translate( width/2, height/2);
  for ( var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

}
