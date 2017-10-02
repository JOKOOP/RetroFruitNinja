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

  end(){
    this.musica.pause();
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

  root_mouse_hover(){
    
  }

  opciones_mouse(){
    if(mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 300 && mouseX < 419 && mouseY > 393 && mouseY < 440){ //volver
          this.state = "root";
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
      default:
        break;
    }
  }
}
