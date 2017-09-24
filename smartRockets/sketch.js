var population;
var lifeSpan = 400;
var lifeP, reachedP;
var count = 0, reachedCount = 0;
var target;
var maxForce = 0.5;

var obstacle = [
    { 'rx': 100, 'ry': 150 },
    { 'rx': 300, 'ry': 280 },
    { 'rx': 500, 'ry': 200 },
    { 'rx': 100, 'ry': 400 },
    { 'rx': 500, 'ry': 400 }
];
var rw = 100;
var rh = 10;

function setup() {
    createCanvas(650, 500);
    population = new Population();
    lifeP = createP();
    reachedP = createP();
    target = createVector(width / 3, 50);
    //helper text
    createP("The smart rockets' goal is to reach the round target at the top. Rocket life is 400 frames and it crashes if it touches an obstacle or boundary. ");
    createP("The rocket population follows a genetic algorithm to devise the best path to the target. And tries to follow on the track of the rocket which performed best from previous generation.");
    createP("There is also a mutation function introduced which randomizes the path of a rocket in the population to change its course.");
}

function draw() {
    background(0);
    population.run();
    lifeP.html("Frames = " + count);

    count++;
    if (count == lifeSpan) {
        population.evaluate();
        population.reached();
        reachedP.html("Reached in last generation  = " + reachedCount + " / 25");
        population.selection();
        count = 0;
        reachedCount = 0;
    }

    //obstacles
    fill(100, 100, 150);
    for (var i = 0; i < obstacle.length; i++) {
        rect(obstacle[i].rx, obstacle[i].ry, rw, rh);
    }

    //bunker
    fill(200, 150, 150);
    // ellipse(width / 2, height, 25, 25);

    // target
    fill(100, 150, 100);
    ellipse(target.x, target.y, 26, 26);
}
