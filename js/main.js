FRUTAS = [
    new Fruta(0, CANVAS_HEIGHT, 10, VY_MAX, false),
    new Fruta(700, CANVAS_HEIGHT, -9, VY_MAX + 10, false),
    new Fruta(100, CANVAS_HEIGHT, 7, VY_MAX + 5, true)
  ];



function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  configureCanvas(canvas);

  frameRate(FPS);
}

function draw() {
  clear();
  for (var i = FRUTAS.length - 1; i >= 0; i--) {
    FRUTAS[i].move();
    FRUTAS[i].draw();
    /*
    if (FRUTAS[i].has_ended()){
      FRUTAS[i].splice(i, 1);
      FRUTAS.push(new Fruta(Math.floor((Math.random() * 520) + 100),
                            CANVAS_HEIGHT, 
                            Math.floor((Math.random() * 620) + 100), 
                            VY_MAX, 
                            (Math.random() > 0.5) ? true : false));
    }
    */
  }
}

function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}