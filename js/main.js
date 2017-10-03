var state = "menu";

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  configureCanvas(canvas);
  init_irudiak();
  MENU = new Menu();
  MENU.setup();
  JUEGO = new Juego();
  frameRate(FPS);
}

function draw() {
  clear();
  if (state == "menu") {
    MENU.draw();
    if (MENU.state == "juego") {
      state = "juego";
      MENU.end();
      JUEGO.setup();
    }
  } else if (state == "juego") {
    JUEGO.draw();
    if (JUEGO.state == "win") {
      state = "menu";
      JUEGO.end();
      MENU.setwin();
    } else if (JUEGO.state == "lose") {
      state = "menu";
      JUEGO.end();
      MENU.setover();
    }
  }
}

function configureCanvas(canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}

function init_irudiak() {

  IMAGES = {
    // Menua
    "instrucciones": loadImage("./media/menu/Instrucciones.png"),
    "behera": loadImage("./media/menu/behera.png"),
    "behera_inv": loadImage("./media/menu/behera_inv.png"),
    "eskuma": loadImage("./media/menu/eskuma.png"),
    "eskuma_h": loadImage("./media/menu/eskuma_h.png"),
    "eskuma_inv": loadImage("./media/menu/eskuma_inv.png"),
    "eskuma_h_inv": loadImage("./media/menu/eskuma_h_inv.png"),
    "ezkerra": loadImage("./media/menu/ezkerra.png"),
    "ezkerra_h": loadImage("./media/menu/ezkerra_h.png"),
    "ezkerra_inv": loadImage("./media/menu/ezkerra_inv.png"),
    "ezkerra_h_inv": loadImage("./media/menu/ezkerra_h_inv.png"),
    "gora": loadImage("./media/menu/gora.png"),
    "gora_inv": loadImage("./media/menu/gora_inv.png"),
    "instrucciones_inv": loadImage("./media/menu/instrucciones_inv.png"),
    "juego_inv": loadImage("./media/menu/juego_inv.png"),
    "menu_nagusia": loadImage("./media/menu/menu_nagusia.png"),
    "opciones": loadImage("./media/menu/opciones.png"),
    "opciones_inv": loadImage("./media/menu/opciones_inv.png"),
    "ranking": loadImage("./media/menu/ranking.png"),
    "ranking_inv": loadImage("./media/menu/ranking_inv.png"),
    // Statusak
    "game_over": loadImage("./media/state/game_over.png"),
    "success": loadImage("./media/state/success.png"),
    // Itemak
    "bomba": loadImage("./media/Bomba.gif"),
    "corazon": loadImage("./media/Corazon.gif"),
    "cuchillo1": loadImage("./media/Cuchillo1.png"),
    "cuchillo2": loadImage("./media/Cuchillo2.png"),
    "pantalla1": loadImage("./media/Pantalla1.png"),
    "pantalla2": loadImage("./media/Pantalla2.png"),
    "pantalla3": loadImage("./media/Pantalla3.png"),
    "pineapple": loadImage("./media/Pineapple.png"),
    "watermelon": loadImage("./media/Watermelon.png")
  };
}