class Juego{

  constructor(){
    CUCHILLO = new Cuchillo();
    this.musica = new Musica();
    this.backgrounds = [IMAGES.pantalla1, IMAGES.pantalla2, IMAGES.pantalla3];
    this.image = this.backgrounds[0];
    this.bidak = IMAGES.corazon;
  }

  setup(){
    if(OP_MUSICA){
      this.musica.play_first();
    }
    this.image = this.backgrounds[0];
    this.ziklo = 0;
    this.state = "playing";
    this.zailtasuna = 1;
    VIDAS = POS_VIDAS.length;
    NUMBOLAS = 3;
    FRUTAS = [];
    OFFSET = 0.12;
    createFruta();
  }

  end(){
    this.musica.pause();
  }

  drawVidas(){
    for (var i = VIDAS - 1; i >= 0; i--) {
      image(this.bidak, POS_VIDAS[i].posX, POS_VIDAS[i].posY, 20, 20);
    }
  }

  draw(){
    clear();
    var reset = true;
    var colision = false;
    
    image(this.image, 0, 0);
    CUCHILLO.draw();
    this.drawVidas();

    for (var i = FRUTAS.length - 1; i >= 0; i--) {
      FRUTAS[i].move();
      FRUTAS[i].draw();
      colision = FRUTAS[i].check_collision();

      if(FRUTAS[i]){
        if (!FRUTAS[i].has_ended()){
          reset = false;
        } 
         /* Hau oso zaila da */
        //else if (FRUTAS[i].has_ended() && !FRUTAS[i].bomba) {
        //  VIDAS--;
        //  FRUTAS.splice(i, 1);
        //1}
      }
      if(colision){
        FRUTAS.splice(i, 1);
      }
    }

    if (reset && FRUTAS !== false) {
      FRUTAS = false;
      this.ziklo++;
      setTimeout(function(){ createFruta();}, 800);
    }


    if(VIDAS == 0){
      this.state = "lose";
    }

    if (this.ziklo == 2) { // Debug
      this.zailtasuna++;

      if(this.zailtasuna > 3) {
        this.state = "win";
      }else{
        this.image = this.backgrounds[this.zailtasuna-1];
      }
      this.zaildu();
      this.ziklo = 0;
    }
  }

  zaildu(){
    NUMBOLAS++;
    OFFSET += 0.04;
    if(OP_MUSICA) {
      this.musica.play_next();
    }
  }
}
