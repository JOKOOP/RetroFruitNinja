var state = "menu";

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  configureCanvas(canvas);
  MENU = new Menu();
  JUEGO = new Juego();
  frameRate(FPS);
}

function draw() {
  clear();
  if (state == "menu"){
    MENU.draw();
    if (MENU.state == "juego"){
      state = "juego";
      JUEGO.setup();
    }
  }else if(state == "juego"){
    JUEGO.draw();
  }
}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}
