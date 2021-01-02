// Code based on the book Getting Started with P5.js: Making Interactive Graphics in JavaScript and Processing by Fry, Reas, and McCarthy (see chapter 8: Motion)

class Vehicule {
  constructor (path){
    this.path = path;
    this.startX;   // Initial x coordinate
    this.stopX;   // Final x coordinate
    this.startY;   // Initial y coordinate
    this.stopY;    // Final y coordinate
    this.x = this.startX;    // Current x coordinate
    this.y = this.startY;    // Current y coordinate
    this.step = 0.005;  // createCanvas of each step (0.0 to 1.0)
    this.pct = 0.0;     // Percentage traveled (0.0 to 1.0)
    this.i = 0;        // Index number for path
  }

  show(){
    stroke(75);
    strokeWeight(3);
    ellipse(this.x , this.y, 15);
  }


  update() {

    if(this.pct >= 1.0){
      this.i +=2;
      this.pct = 0.0;
    }

    this.startX = this.path[0+this.i];
    this.startY = this.path[1+this.i];
    this.stopX = this.path[2+this.i];
    this.stopY = this.path[3+this.i];

    //move from right to left
    if (this.startY == this.stopY && this.pct < 1.0){
      this.x = this.startX + ((this.stopX-this.startX) * this.pct);
      this.y = this.startY + ((this.stopY-this.startY) * this.pct);
      this.pct += this.step;
    }
    //move from right to left AND up
    else if (this.startY > this.stopY && this.pct < 1.0) {
      this.x = this.startX + ((this.stopX-this.startX) * this.pct);
      this.y = this.startY + ((this.stopY-this.startY) * this.pct);
      this.pct += this.step;
    }
    //move from right to left AND down
    else if (this.startY < this.stopY && this.pct < 1.0) {
      this.x = this.startX + ((this.stopX-this.startX) * this.pct);
      this.y = this.startY + ((this.stopY - this.startY) * this.pct);
      this.pct += this.step;
    }

  }


}
