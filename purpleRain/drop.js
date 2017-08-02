function Drop() {

  this.x = random( width );
  this.y = random( -500, 50 );
  this.ySpeed = random(3, 8);
  this.len = random(1, 10);

  this.fall = function() {
    this.y = this.y + this.ySpeed + 0.5;

    if ( this.y > height) {
      this.y = 0;
    }

  };

  this.show = function() {
    stroke(138, 43, 226);
    line( this.x, this.y, this.x, this.y + this.len );
  };

}
