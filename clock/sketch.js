

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {

  background(0);


  text( "Fancy Clock", 350, 100 );
  translate(400,400);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(5);
  smooth();
  noFill();

  let secondsAngle = map(sc, 0, 60, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let hourAngle = map(hr % 12 , 0, 12, 0, 360);  

  //second
  stroke(100, 150, 200);
  arc(0, 0, 300, 300, 0, secondsAngle);
  push();
  rotate(secondsAngle);
  line(0, 0, 100, 0);
  pop();

  //minutes
  stroke(200, 100, 150);  
  arc(0, 0, 280, 280, 0, minuteAngle);
  push();
  rotate(minuteAngle);
  line(0, 0, 75, 0);
  pop();

  //hours
  stroke(150, 200, 100);  
  arc(0, 0, 260, 260, 0, hourAngle);
  push();
  rotate(hourAngle);
  line(0, 0, 50, 0);
  pop();

  //center dot
  stroke(255);
  point(0,0);

  //time
  rotate(90);
  noStroke();
  fill(255);  
  text( hr + " : " + mn + " : " + sc, -25, 200 );

}
