class Juego{

  constructor(){
    this.cuchillo = new Cuchillo();
    this.musica = new Musica();
  }

  setup(){
    this.musica.play_first();
    this.ziklo = 0;
    this.state = "playing";
    this.zailtasuna = 1;
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

    this.cuchillo.draw();

    if (this.ziklo == 5) {
      this.zailtasuna++;
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
