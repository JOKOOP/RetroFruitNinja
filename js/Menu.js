class Menu {

  constructor(){
    this.setup();
  }

  setup(){
    this.state = "root";
    this.img = loadImage("./media/menu/menu_nagusia.png");
  }

  root_mouse(){
    if (mouseIsPressed){
      if(mouseButton == LEFT){
        if(mouseX > 314 && mouseX < 406 && mouseY > 173 && mouseY < 200){ //jugar
          alert("let's play yo");
        }else if (mouseX > 293 && mouseX < 425 && mouseY > 207 && mouseY < 234) { // opciones
          this.state = "opciones";
        }else if (mouseX > 293 && mouseX < 425 && mouseY > 241 && mouseY < 270) { // ranking
          this.state = "ranking";
        }else if (mouseX > 254 && mouseX < 466 && mouseY > 279 && mouseY < 310) { // instrucciones
          this.state = "instrucciones";
        }
      }
    }
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
