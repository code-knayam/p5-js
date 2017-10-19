function Particle(x, y, hu, firework) {

	this.pos = createVector(x, y);
	this.firework = firework;
	this.lifespan = random(50, 240);
	this.hu = hu;

	if (firework) {
		this.vel = createVector(0, random(-17, -9));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(3, 10));
	}

	this.acc = createVector(random(-5, 5), 0);

	this.applyForce = function (force) {
		if (!firework) {
			force.x = random(-0.3, 0.3);
		}
		this.acc.add(force);
	}

	this.update = function () {

		if (!this.firework) {
			this.vel.mult(0.9);
			this.lifespan -= 4;
		}

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function () {
		colorMode(HSB);
		if (!this.firework) {
			strokeWeight(random(0.1, 3));
			stroke(this.hu, 255, 255, this.lifespan);
		} else {
			strokeWeight(5);
			stroke(this.hu, 255, 255);
		}

		point(this.pos.x, this.pos.y);
	}

	this.done = function () {
		if (this.lifespan < 0) {
			return true;
		} else {
			return false;
		}
	}
}

