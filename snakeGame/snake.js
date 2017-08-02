function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 1;
  this.tail = [];

  this.update = function() {

    if( this.total === this.tail.length) {
      for( var i=0; i< this.total-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xSpeed*scl;
    this.y = this.y + this.ySpeed*scl;

    this.x = constrain(this.x, 0 , width-scl);
    this.y = constrain(this.y, 0 , height-scl);

  };

  this.show = function() {
    fill(255);
    for(var i=0; i<this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

  };

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if ( d<1) {
      this.total++;
      console.log("Score = " + this.total);
      return true;
    } else {
      return false;
    }
  };

  this.death  = function() {
    for( var i=0; i<this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d<1) {
        this.total = 1;
        this.tail=[];
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        console.log("Game over");
      }
    }
  };

}
