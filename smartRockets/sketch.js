var population;
var lifeSpan = 200;
var lifeP;
var count = 0;
var target;
var maxForce = 0.5;


var rx = 100;
var ry = 150;
var rw = 100;
var rh = 10;

function setup() {
    createCanvas(400, 300);
    population = new Population();
    lifeP = createP();
    target = createVector(width / 3, 50);
}

function draw() {
    background(0);
    population.run();
    lifeP.html(count);
    count++;
    if (count == lifeSpan) {        
        population.evaluate();
        population.selection();
        count = 0;        
    }
    fill(255);
    rect(rx, ry, rw, rh);

    ellipse(target.x, target.y, 16, 16);
}
