var state = "menu";

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  configureCanvas(canvas);
  init();
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
    } else if (MENU.state == "best") {
      MENU.setwin();
    } else if (MENU.state == "worst") {
      MENU.setover();
    } else if (MENU.state == "none") {
      MENU.setunranked();
    }
  } else if (state == "juego") {
    JUEGO.draw();
    if (JUEGO.state == "waiting") {
      state = "menu";
      JUEGO.end();
      MENU.waitresult();
    } 
  }
}

function configureCanvas(canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}

function init() {

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
    "opcion_cuchillo1" : loadImage("./media/menu/opcion_cuchillo1.png"),
    "opcion_cuchillo2" : loadImage("./media/menu/opcion_cuchillo2.png"),
    "opcion_no" : loadImage("./media/menu/opcion_no.png"),
    "opcion_si" : loadImage("./media/menu/opcion_si.png"),
    "nickName": loadImage("./media/menu/nickname.png"),
    // Statusak
    "game_over": loadImage("./media/state/game_over.png"),
    "success": loadImage("./media/state/success.png"),
    "not_ranked": loadImage("./media/state/not_ranked.png"),
    "loading" : loadImage("./media/state/loading.gif"),
    // Itemak
    "bomba": loadImage("./media/item/Bomba.gif"),
    "corazon": loadImage("./media/item/Corazon.gif"),
    "cuchillo1": loadImage("./media/item/Cuchillo1.png"),
    "cuchillo2": loadImage("./media/item/Cuchillo2.png"),
    "pantalla1": loadImage("./media/item/Pantalla1.png"),
    "pantalla2": loadImage("./media/item/Pantalla2.png"),
    "pantalla3": loadImage("./media/item/Pantalla3.png"),
    "pineapple": loadImage("./media/item/Pineapple.png"),
    "watermelon": loadImage("./media/item/Watermelon.png")

  };

  FONT = loadFont("./media/fonts/Mario-Kart-DS.ttf");
}

function keyTyped() {
  if (MENU.state == "nickName") {
    if(keyCode > 96 && keyCode < 123 && NICKNAME.length < 3){
      NICKNAME += (key);
    }else if(keyCode > 96 && keyCode < 123){
      NICKNAME = NICKNAME.substring(0,2);
      NICKNAME += key;   
    }else if (keyCode == ENTER){
      MENU.state = "juego";
    }
  }
}

function analize_result (ret_json) {
  MENU.state = ret_json.rank;
}
