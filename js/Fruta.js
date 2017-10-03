class Fruta { // No estoy muy deacuerdo con el nombre pero es absurdo hacer 2 clases

  constructor (x, y, vx, vy, bomba){
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.vym = vy;
    this.radium = RADIUM;
    this.bomba = bomba; // si no es una bomba es una fruta
    this.color = this.get_color();
    this.time = 0;
    this.ended = false;
  }

  get_color(){
    if(this.bomba){0
      return IMAGES.bomba;
    }else{
      return (Math.random() > 0.5) ? IMAGES.watermelon : IMAGES.pineapple;
    }
  }

  get_vx() {
    return this.vx;
  }

  get_vy() {
    return this.vy;
  }

  get_baseX(){
    return this.baseX;
  }

  draw(){ //else if (FRUTAS[i].has_ended() && !FRUTAS[i].bomba) {
        //  VIDAS--;
        //  FRUTAS.splice(i, 1);
        //1}
    this.vym = get_vy_t(this.vy, this.time);
    //this.radium = (this.vym < 0) ? ((this.vym < -25) ? RADIUM/1.3 : RADIUM / 1.2) : ((this.vym < 25) ? RADIUM / 1.1 : RADIUM); //Haundiagoa
    image(this.color, this.x, this.y, this.radium, this.radium);
  }

  move(){
    var array = makeFall(this.baseX, this.vx, this.time, this.baseY, this.vy);
    this.x = array[0];
    this.y = array[1];
    this.time = array[2];

    if (this.y > 480 && this.vym > 0) {
      this.ended = true;
    }
  }

  check_collision(){
    var colision;
    var i = 0;
    if (this.vym > 0) {
      if(CUCHILLO.x < this.x + this.radium && CUCHILLO.x+CUCHILLO.width > this.x && (CUCHILLO.y) < this.y + this.radium && (CUCHILLO.y+CUCHILLO.height) > this.y && this.bomba){
        VIDAS--;
        i++;
        colision = true;
      }else if(CUCHILLO.x < this.x + this.radium && CUCHILLO.x+CUCHILLO.width > this.x && (CUCHILLO.y) < this.y + this.radium && (CUCHILLO.y+CUCHILLO.height) > this.y && !this.bomba){
        colision = true;
      }else{
        colision = false;
      }
    }else{
      colision = false;
    }
    return colision;
  }

  has_ended () {
    return this.ended;
  }

}
