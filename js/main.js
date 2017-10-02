var state = "menu";

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  configureCanvas(canvas);
  MENU = new Menu();
  MENU.setup();
  JUEGO = new Juego();
  frameRate(FPS);
}

function draw() {
  clear();
  if (state == "menu"){
    MENU.draw();
    if (MENU.state == "juego"){
      state = "juego";
      MENU.end();
      JUEGO.setup();
    }
  }else if(state == "juego"){
    drawVidas();
    JUEGO.draw();
    if (JUEGO.state == "win"){
      state = "menu";
      JUEGO.end();
      MENU.setwin();
    }else if(JUEGO.state == "lose"){
      alert("lose!");
      state = "menu";
      JUEGO.end();
      MENU.setover();
    }
  }
}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}

function createGameOverBackground(){
  //image(loadImage("./media/Cuchillo.png");, this.x, this.y, this.width, this.height);
}

function drawVidas(){
  for (var j = VIDAS.length - 1; j >= 0; j--) {
  image(loadImage("./media/Corazon.gif", 500, 250, 20, 20));
  }
    
}
