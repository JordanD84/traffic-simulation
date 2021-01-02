class Path {
  constructor (path){
    this.v = path;
    // for (let i = 0; i < path.length; i++){
    //   this.v[i] = path[i];
    // }

  }

  show(){
    for (let i = 0; i < this.v.length-2; i+=2){
      strokeWeight(3);
      stroke(125);
      line(this.v[i], this.v[i+1], this.v[i+2], this.v[i+3]);
    }
    // strokeWeight(3);
    // stroke(125);
    // line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
    // line(this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    // line(this.v3.x, this.v3.y, this.v4.x, this.v4.y);
    // line(this.v4.x, this.v4.y, this.v5.x, this.v5.y);
  }


}
