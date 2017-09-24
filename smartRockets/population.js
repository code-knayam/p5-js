function Population() {
    this.rockets = [];
    this.popSize = 25;
    this.matingPool = [];

    for (var i = 0; i < this.popSize; i++) {
        this.rockets[i] = new Rocket();
    }

    this.evaluate = function () {
        var maxFit = 0;

        for (var i = 0; i < this.popSize; i++) {
            this.rockets[i].calcFitness();
            if (this.rockets[i].fitness > maxFit) {
                maxFit = this.rockets[i].fitness;
            }
        }
        // console.log(this.rockets);
        for (var i = 0; i < this.popSize; i++) {
            this.rockets[i].fitness /= maxFit;
        }

        this.matingPool = [];
        for (var i = 0; i < this.popSize; i++) {
            var n = this.rockets[i].fitness * 100;
            for (var j = 0; j < n; j++) {
                this.matingPool.push(this.rockets[i]);
            }
        }

    }

    this.selection = function () {
        var newRockets = [];
        for (var i = 0; i < this.rockets.length; i++) {

            var parentA = random(this.matingPool).dna;
            var parentB = random(this.matingPool).dna;

            var child = parentA.crossover(parentB);
            child.mutation();
            newRockets[i] = new Rocket(child);
        }
        this.rockets = newRockets;

    }


    this.run = function () {
        for (var i = 0; i < this.popSize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}
