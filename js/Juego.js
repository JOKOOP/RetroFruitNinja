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
    this.request = false;
    VIDAS = POS_VIDAS.length;
    NUMBOLAS = 3;
    FRUTAS = [];
    OFFSET = 0.12;
    PUNTUAZIOA = 0;
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
    this.update_puntuak();

    for (var i = FRUTAS.length - 1; i >= 0; i--) {
      FRUTAS[i].move();
      FRUTAS[i].draw();
      colision = FRUTAS[i].check_collision();

      if(FRUTAS[i]){
        if (!FRUTAS[i].has_ended()){
          reset = false;
        } else {
          PUNTUAZIOA += FRUTAS[i].color.kale;
          FRUTAS.splice(i, 1);
        }
         /* Hau oso zaila da */
        //else if (FRUTAS[i].has_ended() && !FRUTAS[i].bomba) {
        //  VIDAS--;
        //  FRUTAS.splice(i, 1);
        //}
      }
      if(colision){
        PUNTUAZIOA += FRUTAS[i].color.ondo;
        FRUTAS.splice(i, 1);
      }
    }

    if (reset && FRUTAS !== false) {
      FRUTAS = false;
      this.ziklo++;
      setTimeout(function(){ createFruta();}, 800);
    }


    if(VIDAS == 0){
      this.state = "waiting";
      Ranking.add({"name" : NICKNAME, "points" : PUNTUAZIOA}, analize_result);
    }

    if (this.ziklo == this.zailtasuna * 5) {

      this.zaildu();

      if(this.zailtasuna < NIBELAK) {
        this.zailtasuna++;
        this.image = this.backgrounds[this.zailtasuna-1];
        if(OP_MUSICA) {
          this.musica.play_next();
        }
      }
      this.ziklo = 0;
    }
  }

  zaildu(){
    if (NUMBOLAS <= MAX_NUMBOLAS) NUMBOLAS++;
    if (OFFSET <= MAX_OFFSET) OFFSET += 0.04;
    if (HARDNESS >= MIN_HARDNESS) HARDNESS -= 0.05;
  }

  update_puntuak(){
    fill('#FFFFFF');
    textFont(FONT, 30);
    text(PUNTUAZIOA + " puntos", 45, 45);
  }
}
