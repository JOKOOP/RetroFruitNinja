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
      return loadImage("./media/Bomba.gif"); ;
    }else{
      return (Math.random() > 0.5) ? loadImage("./media/Watermelon.png") : loadImage("./media/Pineapple.png");
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

  draw(){
    this.vym = get_vy_t(this.vy, this.time);
    //this.radium = (this.vym < 0) ? RADIUM/1.25 : RADIUM;
    image(this.color, this.x, this.y, this.radium, this.radium);
  }

  move(){
    var array = makeFall(this.baseX, this.vx, this.time, this.baseY, this.vy);
    this.x = array[0];
    this.y = array[1];
    this.time = array[2];

    if (this.y > 480) {
      this.ended = true;
    }
  }

  check_collision(x, y, radium){
    var colision;
    var i = 0;
    if (this.vym > 0) {
      if(CUCHILLO.x < (x) && CUCHILLO.x+CUCHILLO.width > (x) && (CUCHILLO.y) < y && (CUCHILLO.y+CUCHILLO.height) > y && this.bomba){
        console.log('colision bomba');
        VIDAS--;
        console.log(VIDAS);
        i++;
        colision = true;
      }else if(CUCHILLO.x < (x) && CUCHILLO.x+CUCHILLO.width > (x) && (CUCHILLO.y) < y && (CUCHILLO.y+CUCHILLO.height) > y && !this.bomba){
        console.log('colision fruta');
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
