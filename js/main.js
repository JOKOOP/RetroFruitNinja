function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  CUCHILLO = new Cuchillo();
  configureCanvas(canvas);  
  frameRate(FPS);

  createFruta();
}

function draw() {
  clear();
  var reset = true;
  for (var i = FRUTAS.length - 1; i >= 0; i--) {
    FRUTAS[i].move();
    FRUTAS[i].draw();
    if (!FRUTAS[i].has_ended()){
      reset = false;
    }
  }

  if (reset && FRUTAS != false) {
    FRUTAS = false;
    ZIKLO++;
    setTimeout(function(){ createFruta();}, 800);
  }

	CUCHILLO.draw();  

  if (ZIKLO === 5) {
    NUMBOLAS++;
    OFFSET += 0.08;
    ZIKLO = 0;
  }
}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}

function createFruta () {
  FRUTAS = [ ];
  for (var i = NUMBOLAS; i > 0; i--){
    var x = Math.floor((Math.random() * 520) + 100);
    var vx = Math.floor((Math.random() * 21) - 10);
    var vy = Math.floor((Math.random() * (VY_MAX - VY_MIN + 1)) + VY_MIN);
    var bomb = (Math.random() > HARDNESS) ? true : false;
    FRUTAS.push(new Fruta(x, CANVAS_HEIGHT, vx, vy, bomb));
  }
}
