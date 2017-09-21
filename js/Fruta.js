RADIUM = 5;
GRAVITY = 2;

class Fruta { // No estoy muy deacuerdo con el nombre pero es absurdo hacer 2 clases

  constructor (x, y, bomba){
    this.x = x;
    this.y = y;
    this.radium = RADIUM;
    this.bomba = bomba; // si no es una bomba es una fruta
    this.color = this.get_color();
  }

  private get_color(){
    if(this.bomba){
      return "black";
    }else{
      return "pink";
    }
  }

  draw(context){
    context.beginPath();
    context.arc(this.x, this.y, this.radium, 0, Math.PI*2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  move(){
    this.y += this.gravity;
  }

  check_collision(x, y, w, h){
            
  }

}
