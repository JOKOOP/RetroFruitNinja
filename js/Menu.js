class Menu {

  constructor(){
    this.musica = new Musica();
  }

  setup(){
    this.state = "root";
    this.img = loadImage("./media/menu/menu_nagusia.png");
    this.resaltatu = "";
    this.musica.play_menu_song();
  }

  setover(){
    this.state = "over";
    this.img = loadImage("./media/state/game_over.png");
    this.musica.play_over_song();
  }

  setwin(){
    this.state = "win";
    this.img = loadImage("./media/state/success.png");
    this.musica.play_succ_song();
  }

  end(){
    this.musica.pause();
  }

  over_mouse(){
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 245 && mouseX < 500 && mouseY > 383 && mouseY < 420){ //volver
          this.state = "root";
          this.musica.play_menu_song();
        }
      }
    }
  }

  root_mouse(){
    if(mouseX > 314 && mouseX < 406 && mouseY > 173 && mouseY < 200){ //jugar
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "juego";
        }
      }
      this.resaltatu = [loadImage("./media/menu/juego_inv.png"), 0, 0];
    }else if (mouseX > 293 && mouseX < 425 && mouseY > 207 && mouseY < 234) { // opciones
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "opciones";
        }
      }
      this.resaltatu = [loadImage("./media/menu/opciones_inv.png"), 0, 0];
    }else if (mouseX > 293 && mouseX < 425 && mouseY > 241 && mouseY < 270) { // ranking
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "ranking";
        }
      }
      this.resaltatu = [loadImage("./media/menu/ranking_inv.png"), 0, 0];
    }else if (mouseX > 254 && mouseX < 466 && mouseY > 279 && mouseY < 310) { // instrucciones
      if (mouseIsPressed){
        if(mouseButton == LEFT){
          this.state = "instrucciones";
        }
      }
      this.resaltatu = [loadImage("./media/menu/instrucciones_inv.png"), 0, 0];
    }else{
      this.resaltatu = [];
    }
  }

  opciones_mouse(){
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //volver
          this.state = "root";
        }
        /*
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //sound
          this.state = "root";
        }
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //sound
          this.state = "root";
        }
        */
        if(mouseX > 420 && mouseX < 435 && mouseY > 245 && mouseY < 264){ //cushi
          console.log("cuxiyo cambiao a 1")
          CUCHILLO.la_faca = loadImage("./media/Cuchillo.png");
        }
        if(mouseX > 475 && mouseX < 490 && mouseY > 245 && mouseY < 264){ //cushi
          console.log("cuxiyo cambiao a 2")
          CUCHILLO.la_faca = loadImage("./media/Cuchillo 2.png");
        }
      }
    }
  }

  ranking_mouse(){
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
    image(this.img, 0, 0);

    switch (this.state) {
      case "root":
        this.img = loadImage("./media/menu/menu_nagusia.png");
        if (this.resaltatu.length > 0) {
          image(this.resaltatu[0], this.resaltatu[1], this.resaltatu[2]);
        }
        this.root_mouse();
        break;
      case "opciones":
        this.img = loadImage("./media/menu/opciones.png");
        this.opciones_mouse();
        break;
      case "ranking":
        this.img = loadImage("./media/menu/ranking.png");
        this.ranking_mouse();
        break;
      case "instrucciones":
        this.img = loadImage("./media/menu/Instrucciones.png");
        this.inst_mouse();
        break;
      case "over":
        this.img = loadImage("./media/state/game_over.png");
        this.over_mouse();
        break;
      case "win":
        this.img = loadImage("./media/state/game_over.png");
        this.over_mouse();
        break;
      default:
        break;
    }
  }
}
