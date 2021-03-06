
function Rocket(dna) {
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    if (dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }
    this.fitness = 0;
    this.completed = false;
    this.crashed = false;

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {

        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (d < 20) {
            this.completed = true;            
            this.pos = target.copy();            
        }

        //obstacles
        for (var i = 0; i < obstacle.length; i++) {
            if (this.pos.x > obstacle[i].rx
                && this.pos.x < obstacle[i].rx + rw
                && this.pos.y > obstacle[i].ry
                && this.pos.y < obstacle[i].ry + rh) {
                this.crashed = true;
            }
        }

        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
        }

        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
        }

        this.applyForce(this.dna.genes[count]);
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }
    }

    this.calcFitness = function () {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
        if (this.completed) {
            this.fitness *= 10;
        }
        if (this.crashed) {
            this.fitness /= 10;
        }
    }
    
    this.hasCompleted  = function() {        
        return this.completed;
    }

    this.show = function () {
        push();
        noStroke();
        var color = random();
        fill(95 * color, 300 * color, 20 * color);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);        
        ellipse(10, 0, 15, 15);                
        rect(0, 0, 25, 6);
        pop();
    }

}