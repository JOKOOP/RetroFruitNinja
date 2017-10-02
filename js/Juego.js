class Juego{

  constructor(){
    CUCHILLO = new Cuchillo();
    this.musica = new Musica();
    this.backgrounds = ["./media/Pantalla1.png", "./media/Pantalla2.png", "./media/Pantalla1.png"];
    this.image = loadImage(this.backgrounds[0]);
  }

  setup(){
    this.musica.play_first();
    this.image = loadImage(this.backgrounds[0]);
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

  draw(){
    clear();
    var reset = true;
    var colision = false;
    image(this.image, 0, 0);
    drawVidas();
    for (var i = FRUTAS.length - 1; i >= 0; i--) {
      FRUTAS[i].move();
      FRUTAS[i].draw();
      colision = FRUTAS[i].check_collision(FRUTAS[i].x, FRUTAS[i].y, FRUTAS[i].radium);

      if(FRUTAS[i]){
        if (!FRUTAS[i].has_ended()){
          reset = false;
        }
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

    CUCHILLO.draw();

    if(VIDAS == 0){
      this.state = "lose";
    }

    if (this.ziklo == 5) {
      this.zailtasuna++;
      this.image = loadImage(this.backgrounds[this.zailtasuna-1]);
      if(this.zailtasuna > 3) {
        this.state = "win";
      }
      this.zaildu();
      this.ziklo = 0;
    }
  }

  zaildu(){
    NUMBOLAS++;
    OFFSET += 0.02;
    this.musica.play_next();
  }
}
