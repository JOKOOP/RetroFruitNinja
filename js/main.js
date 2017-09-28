function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  CUCHILLO = new Cuchillo();

  MUSICA = new Musica();

  configureCanvas(canvas);
  frameRate(FPS);

  createFruta();
  MUSICA.play_current();
}

function draw() {
  clear();
  var reset = true;
  var colision = false;
  for (var i = FRUTAS.length - 1; i >= 0; i--) {
    FRUTAS[i].move();
    FRUTAS[i].draw();
    colision = FRUTAS[i].check_collision(FRUTAS[i].x, FRUTAS[i].y, FRUTAS[i].radium);

    if(FRUTAS[i]){
      if (!FRUTAS[i].has_ended()){
        reset = false;
      }
    }
    if(colision){

      FRUTAS.splice(i, 1);
    }
  }

  if (reset && FRUTAS !== false) {
    FRUTAS = false;
    ZIKLO++;
    setTimeout(function(){ createFruta();}, 800);
  }

	CUCHILLO.draw();


  if (ZIKLO === 5 * ZAILTASUNA) {
    if(ZAILTASUNA === 3) {
      //you win!!
    }
    zaildu();
    ZIKLO = 0;
  }
}

function zaildu () {
  NUMBOLAS++;
  OFFSET += 0.05;
  ZAILTASUNA++;
  MUSICA.play_next();
}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}
