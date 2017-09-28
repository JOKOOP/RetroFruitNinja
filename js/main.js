function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  CUCHILLO = new Cuchillo();
  MUSICA = new Musica();
  configureCanvas(canvas);
  frameRate(FPS);
    /*document.addEventListener('mousemove', function (e) {
    px = (e.pageX > 50) ? ((e.pageX < 430) ? e.pageX - 50 : 380) : 0;
    cuchillo.x =px;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	cuchillo.draw(ctx);
  }, false);*/

  MUSICA.play_current();
  FRUTAS.push(createFruta());
  FRUTAS.push(createFruta());
  FRUTAS.push(createFruta());

}

function draw() {
  clear();
  for (var i = FRUTAS.length - 1; i >= 0; i--) {
    FRUTAS[i].move();
    FRUTAS[i].draw();
    if (FRUTAS[i].has_ended()){
      FRUTAS.splice(i, 1);
      FRUTAS.push(createFruta());
    }

  }
	CUCHILLO.draw();

}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';

}

function createFruta () {
  var x = Math.floor((Math.random() * 520) + 100);
  var vx = Math.floor((Math.random() * 21) - 10);
  var vy = Math.floor((Math.random() * (VY_MAX - VY_MIN + 1)) + VY_MIN);
  var bomb = (Math.random() > 0.9) ? true : false;
  return new Fruta(x, CANVAS_HEIGHT, vx, vy, bomb);
}
