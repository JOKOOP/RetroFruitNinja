class Fruta { // No estoy muy deacuerdo con el nombre pero es absurdo hacer 2 clases

  constructor (x, y, vx, vy, bomba){
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radium = RADIUM;
    this.bomba = bomba; // si no es una bomba es una fruta
    this.color = this.get_color();
    this.time = 0;
    this.ended = false;
  }

  get_color(){
    if(this.bomba){
      return '#000000';
    }else{
      return '#EAA014';
    }
  }

  draw(){
    fill(this.color);
    ellipse(this.x, this.y, this.radium, this.radium);
  }

  move(){
    var array = makeFall(this.baseX, this.vx, this.time, this.baseY, this.vy);
    this.x = array[0];
    this.y = array[1];
    this.time = array[2];

    if (this.y > 480) {
      this.ended = true;
    }
    //console.log('X: ' + this.x + ' Y: ' + this.y + ' t: ' + this.time);
  }

  check_collision(x, y, w, h){
            
  }

  has_ended () {
    return this.ended;
  }

}
