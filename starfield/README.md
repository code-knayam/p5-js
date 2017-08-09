# Starfield

In this problem, we are replicating a starfield.
Where the stars move out when we move the mouse from left to right.

This is done by creating an array of Star object
which has an update function to update the z value.

this z value represents the position of the star in terms of the 3D space.
smaller value of z corresponds to star being away.

Based on the value of z, we are mapping the value of sx and sy to draw the ellipse ie the star,
this z is also used to map the size of the star -> small value smaller star

Then a pz value is used to create a line effect between the last and the current position of the star.


Watch the Starfield here -

https://code-knayam.github.io/p5-js/starfield

# Move mouse left - right to decrease - increase speed
