class Juego{

  constructor(){
    this.cuchillo = new Cuchillo();
    this.musica = new Musica();
    this.state = "playing";
  }

  setup(){
    createFruta();
    this.musica.play_current();
  }

  end(){
    this.musica.pause();
  }

  draw(){
    clear();
    var reset = true;
    var colision = false;
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
      ZIKLO++;
      setTimeout(function(){ createFruta();}, 800);
    }

    this.cuchillo.draw();

    if (ZIKLO == 5 * ZAILTASUNA) {
      if(ZAILTASUNA == 3) {
        this.state = "win";
      }
      this.zaildu();
      ZIKLO = 0;
    }
  }

  zaildu(){
    NUMBOLAS++;
    OFFSET += 0.05;
    this.musica.play_next();
  }
}
