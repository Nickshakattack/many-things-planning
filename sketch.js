  

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
