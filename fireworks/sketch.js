var fireworks = [];
var gravity;

function setup() {
    createCanvas(1200, 720);
    colorMode(HSB);
    stroke(255);
    strokeWeight(4);
    gravity = createVector(0, 0.2);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 20);
    if (random() < 0.2) {
        fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            this.fireworks.splice(i, 1);
        }
    }
}