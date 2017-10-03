class Menu {

  constructor(){
    this.musica = new Musica();
  }

  setup(){
    this.state = "root";
    this.img = IMAGES.menu_nagusia;
    this.resaltatu = "";
    if(OP_MUSICA)
      this.musica.play_menu_song();
  }

  setover(){
    this.state = "over";
    this.img = IMAGES.game_over;
    if(OP_MUSICA)
      this.musica.play_over_song();
  }

  setwin(){
    this.state = "win";
    this.img = IMAGES.success;
    if(OP_MUSICA)
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
          this.state = "juego";
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
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //volver
          this.state = "root";
        }

        if(mouseX > 420 && mouseX < 435 && mouseY > 200 && mouseY < 230){ //sound
          console.log("Musica apagada");
          if (OP_MUSICA){
            this.musica.pause();
            OP_MUSICA = false;
          }
        }
        if(mouseX > 475 && mouseX < 490 && mouseY > 200 && mouseY < 230){ //sound
          console.log("Musica encendida");
          if (!OP_MUSICA){
            this.musica.play_menu_song();
            OP_MUSICA = true;
          }
        }

        if(mouseX > 420 && mouseX < 435 && mouseY > 245 && mouseY < 264){ //cushi
          CUCHILLO.la_faca = IMAGES.cuchillo1;
        }
        if(mouseX > 475 && mouseX < 490 && mouseY > 245 && mouseY < 264){ //cushi
          CUCHILLO.la_faca = IMAGES.cuchillo1;
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
        this.img = IMAGES.ranking;
        this.ranking_mouse();
        break;
      case "instrucciones":
        this.img = IMAGES.instrucciones;
        this.inst_mouse();
        break;
      case "over":
        this.img = IMAGES.game_over;
        this.over_mouse();
        break;
      case "win":
        this.img = IMAGES.success;
        this.over_mouse();
        break;
    }
  }
}
