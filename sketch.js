  

let shapes = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      speedX: random(2, 5),
      speedY: random(2, 5),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
    });
  }
}


function draw() {
  background(220);

 
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];

    
    shape.x += shape.speedX;
    shape.y += shape.speedY;

    
    if (shape.x < 0 || shape.x > width) {
      shape.speedX *= -1;  
    }
    if (shape.y < 0 || shape.y > height) {
      shape.speedY *= -1; 
    }


    for (let j = i + 1; j < shapes.length; j++) {
      let other = shapes[j];

      let distX = shape.x - other.x;
      let distY = shape.y - other.y;
      let distance = sqrt(distX * distX + distY * distY);
      let minDist = (shape.size + other.size) / 2;
