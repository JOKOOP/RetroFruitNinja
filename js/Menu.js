class Menu {

  constructor(canvas){
    this.canvas = canvas;
    this.setup();
  }

  setup(){
    var img = loadImage("./media/menu/menu_nagusia.png");
    image(img, 0, 0);
  }
}
