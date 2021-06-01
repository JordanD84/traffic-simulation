let path = [];
let vehicules = []; // Array that contains all vehicules
let p1;
let timer;
let t = 0;
let choice = [];

function setup() {
  createCanvas(600,400);
  path1 = [0, height/2, 200, height/2, 300, height*3/4, 400, height/2, 600, height/2];
  path2 = [0, height/2, 200, height/2, 300, height*1/4, 400, height/2, 600, height/2];
  path3 = [0, height/2, 200, height/2, 300, height*2/4, 400, height/2, 600, height/2];
  p1 = new Path(path1);
  p2 = new Path(path2);
  p3 = new Path(path3);
  choice = [path1, path2, path3];

}

// Vehicule deleted if mouse is pressed
function mousePressed(){
  vehicules.shift();
}

function draw(){
  background(220);
  // Create timer
  timer = millis()/1000;

  // Show the three paths define at the beginning
  p1.show();
  p2.show();
  p3.show();

  // Initizializes the vehicules
  spawn();


  // Displays and Moves the Vehicules
  for (let i = 0; i < vehicules.length; i++) {
    vehicules[i].update();
    vehicules[i].show();
    // Delete vehicule when it reaches the end of the path
    if (vehicules[i].end()==1){
      vehicules.shift();
    }
  }


}


//Function that dictates the spawning behaviour of vehicules
function spawn (){
  let int = randomGaussian(2,0.5);
  if (timer - t >= int){
    let v = new Vehicule(random(choice));
    vehicules.push(v);
    print(int);
    t+= int;
  }
}
