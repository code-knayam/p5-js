var a = 0;
var sponge = [];
function setup() {
  createCanvas(600, 600, WEBGL);
  var b = new Box ( 0,0,0,200);
  sponge.push(b);
}

function mousePressed() {
  var next = [];
  for ( var i =0; i< sponge.length; i++ ) {
    var newBox = sponge[i].generate();
    next = next.concat( newBox );
  }
  sponge = next;
}

function draw() {
  background(51);
  rotateX(a);
  rotateY(a * 0.2);
  rotateZ(a * 0.1);
  for ( var i=0; i< sponge.length; i++ ) {
    sponge[i].show();
  }

  a+=0.01;
}
