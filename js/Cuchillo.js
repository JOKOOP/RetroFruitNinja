HEIGHT = 35
WIDTH = 100

class Cuchillo {

  constructor() {
    this.y = 440;
    this.height = HEIGHT;
    this.width = WIDTH;
    this.la_faca = loadImage("./media/Cuchillo.png");
  }

  draw() {
    var x = 0;
    if (mouseX <= this.width / 2) {
      x = 0;
    } else if (mouseX >= CANVAS_WIDTH - this.width / 2) {
      x = CANVAS_WIDTH - this.width;
    } else {
      x = mouseX - this.width / 2;
    }
    image(this.la_faca, x, this.y, this.width, this.height);
  }

  move() {
    // Mover a x,y ?
  }

  check_collision() {

  }
}