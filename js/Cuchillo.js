HEIGHT = 20
WIDTH = 100

class Cuchillo {

  constructor (x, y){
    this.x = x;
    this.y = y;
    this.height = HEIGHT;
    this.width = WIDTH;
  }

  draw(context){
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = "#0095DD"; // color
    context.fill();
    context.closePath();
  }

  move(){
    // Mover a x,y ?
  }

  check_collision(){

  }

}
