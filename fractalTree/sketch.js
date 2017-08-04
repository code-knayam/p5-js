// var angle = 0;
var tree = [];
var count = 0;
var leaves = [];

function setup() {
  createCanvas(400, 400);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;


  // slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function mousePressed() {
  for(var i=tree.length-1; i >= 0; i--) {
    if ( !tree[i].finished) {
      tree.push( tree[i].branchRight() );
      tree.push( tree[i].branchLeft() );
    }
    tree[i].finished = true;
  }
  count++;

  if( count === 6) {
    for( i=0; i< tree.length; i++) {
      if(!tree[i].finished){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);

  for(var i=0; i<tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for( i=0; i<leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse( leaves[i].x, leaves[i].y, 8, 8 );
    leaves[i].y += random(-0.2,0.2);
    leaves[i].x += random(-0.2,0.2);    
    // tree[i].jitter();
  }

  // angle = slider.value();
  // stroke(255);
  // translate(200, height);
  // branch(100);

}

// function branch(len) {
//   line(0, 0, 0, - len);
//   translate(0, -len);
//   if(len > 4) {
//     push();
//     rotate( angle );
//     branch(len*0.67);
//     pop();
//     push();
//     rotate(-angle);
//     branch(len*0.67);
//     pop();
//   }
// }
