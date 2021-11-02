// add = 4, stroke = 2; add = 2; stroke = 2; add = 1, stroke = 1;

let x = 600;
let y = 400;
let ra;
let add = 1;
let height = 800;
let width = 1200;
let r = 255;
let g = 255;
let b = 255;
let rColorChange = 0.0005; // 0.0001, 0.001, 0.0005
let speed = 1000;

function setup() {
  createCanvas(width, height);
  background(50);
}

function draw() {

  for (let i = 0; i < speed; i++) {
    step();
  }

}

function step(){
  ra = floor(random(4));

  stroke(r, g, b);
  strokeWeight(1)
  point(x, y)

  if(ra===0 && y < height){
    y+=add;
  }else if(ra===1 && x < width){
    x+=add;
  }else if(ra===2 && y > 0){
    y-=add;
  }else if(ra===3 && x > 0){
    x-=add;
  }
  
  if(random() < rColorChange){
    r = random(255); 
    g = random(255); 
    b = random(255); 
  }
}
