class Menu {

  constructor(){
    this.musica = new Musica();
  }

  setup(){
    this.state = "root";
    this.img = IMAGES.menu_nagusia;
    this.resaltatu = "";
    this.musika_status = IMAGES.opcion_si;
    this.kutxillo_status = IMAGES.opcion_cuchillo1;
    if(OP_MUSICA) {
      this.musica.play_menu_song();
    }
  }

  setover(){
    this.state = "over";
    this.img = IMAGES.game_over;
    if(OP_MUSICA) {
      this.musica.play_over_song();
    }
  }

  setwin(){
    this.state = "win";
    this.img = IMAGES.success;
    if(OP_MUSICA)
      this.musica.play_succ_song();
  }

  setunranked(){
    this.state = "unranked";
    this.img = IMAGES.not_ranked;
    if(OP_MUSICA) {
      this.musica.play_menu_song();
    }
  }

  waitresult() {
    this.state = "wait";
    this.img = IMAGES.loading;
    if(OP_MUSICA) {
      this.musica.play_menu_song();
    }
  }

  end(){
    this.musica.pause();
  }

  over_mouse(){
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 245 && mouseX < 500 && mouseY > 383 && mouseY < 420){ //volver
          this.state = "root";
          if (OP_MUSICA)
            this.musica.play_menu_song();
        }
      }
    }
  }

  root_mouse(){
    if(mouseX > 314 && mouseX < 406 && mouseY > 173 && mouseY < 200){ //jugar
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          NICKNAME = "";
          this.state = "nickName";
        }
      }
      this.resaltatu = [IMAGES.juego_inv, 0, 0];
    }else if (mouseX > 293 && mouseX < 425 && mouseY > 207 && mouseY < 234) { // opciones
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "opciones";
        }
      }
      this.resaltatu = [IMAGES.opciones_inv, 0, 0];
    }else if (mouseX > 293 && mouseX < 425 && mouseY > 241 && mouseY < 270) { // ranking
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "ranking";
          this.best_str = "";
          this.worst_str = "";
          Ranking.get_best(this.loadBest);
          Ranking.get_worst(this.loadWorst);
          this.img = IMAGES.ranking;
        }
      }
      this.resaltatu = [IMAGES.ranking_inv, 0, 0];
    }else if (mouseX > 254 && mouseX < 466 && mouseY > 279 && mouseY < 310) { // instrucciones
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "instrucciones";
        }
      }
      this.resaltatu = [IMAGES.instrucciones_inv, 0, 0];
    }else{
      this.resaltatu = [];
    }
  }

  opciones_mouse(){
    image(this.musika_status, 0, 0);
    image(this.kutxillo_status, 0, 0);
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //volver
          this.state = "root";
        }

        if(mouseX > 420 && mouseX < 435 && mouseY > 200 && mouseY < 230){ //sound
          if (!OP_MUSICA){
            this.musica.play_menu_song();
            OP_MUSICA = true;
            this.musika_status = IMAGES.opcion_si;
          }
        }
        if(mouseX > 475 && mouseX < 490 && mouseY > 200 && mouseY < 230){ //sound
          if (OP_MUSICA){
            this.musica.pause();
            OP_MUSICA = false;
            this.musika_status = IMAGES.opcion_no; 
          }
        }
        if(mouseX > 420 && mouseX < 435 && mouseY > 245 && mouseY < 264){ //cushi
          CUCHILLO.la_faca = IMAGES.cuchillo1;
          this.kutxillo_status = IMAGES.opcion_cuchillo1;
        }
        if(mouseX > 525 && mouseX < 540 && mouseY > 245 && mouseY < 264){ //cushi
          CUCHILLO.la_faca = IMAGES.cuchillo2;
          this.kutxillo_status = IMAGES.opcion_cuchillo2;
        }
      }
    }
  }

  nickname_mouse() {
    fill('#FFFFFF');
    textFont(FONT, 30);
    text(NICKNAME, 338, 230);  
  }

  ranking_mouse(){
   
    fill('#000000');
    textFont(FONT, 30);
    text(this.best_str, 50, 50);
    fill('#FFFFFF');
    textFont(FONT, 30);
    text(this.worst_str, 400, 50);
    
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //volver
          this.state = "root";
        }
      }
    }
  }

  inst_mouse(){
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 420 && mouseY < 450){ //volver
          this.state = "root";
        }
      }
    }
  }

  draw(){
    clear();
    image(this.img, 0, 0);

    switch (this.state) {
      case "root":
        this.img = IMAGES.menu_nagusia;
        if (this.resaltatu.length > 0) {
          image(this.resaltatu[0], this.resaltatu[1], this.resaltatu[2]);
        }
        this.root_mouse();
        break;
      case "opciones":
        this.img = IMAGES.opciones;
        this.opciones_mouse();
        break;
      case "ranking":
        this.ranking_mouse();
        break;
      case "instrucciones":
        this.img = IMAGES.instrucciones;
        this.inst_mouse();
        break;
      case "over":
      case "win":
      case "unranked":
        this.over_mouse();
        break;
      case "nickName":
        this.img = IMAGES.nickName;
        this.nickname_mouse();
        break;
      default:
        break;
    }
  }

  loadBest (data) {
    for (var i = 0; i < 5; i++) {
      MENU.best_str += data.ranking[i].name.substring(0, 3).toUpperCase() + " ...... " + data.ranking[i].points + "\n";
    }
  }

  loadWorst (data) {
    for (var i = 0; i < 5; i++) {
      MENU.worst_str += data.ranking[i].name.substring(0, 3).toUpperCase() + " ...... " + data.ranking[i].points + "\n";
    }
  }
  
}
