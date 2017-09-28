HEIGHT = 35
WIDTH = 100

class Cuchillo {

  constructor (){
    this.x = mouseX;
    this.y = 440;
    this.height = HEIGHT;
    this.width = WIDTH;
    this.la_faca = loadImage("./media/Cuchillo.png");
  }

  draw(){
    this.x = 0;
    fill('#ADADAD');
    if(mouseX <= this.width/2){
      this.x = 0;
    }else if(mouseX >= CANVAS_WIDTH - this.width/2){
      this.x= CANVAS_WIDTH - this.width;
    }else{
      this.x= mouseX-this.width/2;
    }
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    // Mover a x,y ?
  }

  check_collision() {

  }
}