# Smart Rockets

In this practice problem, we are creating smart rockets.

The rockets evolve the "best" path to a target, moving around obstacles.
Here we are using genetic algorithm for rockets to decide the best path, every time a new generation iof rocket is created. 
Eventually every rocket tries to follow the best path upto the target.
A mutation is generated in every generation to deviate a particular rocket from the path to include some randomness.

Watch the Smart Rockets here -

https://code-knayam.github.io/p5-js/smartRockets/

The smart rockets' goal is to reach the round target at the top. Rocket life is 400 frames and it crashes if it touches an obstacle or boundary. The rocket population follows a genetic algorithm to devise the best path to the target. And tries to follow on the track of the rocket which performed best from previous generation.There is also a mutation function introduced which randomizes the path of a rocket in the population to change its course.