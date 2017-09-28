BUFFER = []

function makeFall(posX0, vX, t, posY0, vY0) {
  /* x = x0 + (vx * t) */
  var x = posX0 + (vX * t);
  /* y = y0 + (vy0 * t) + (1/2 * a * t^2) */
  var y = posY0 + (vY0 * t) + (VY_KTE * G * t * t);
  var time = t + OFFSET;
  return [x, y, time];
}

function createFruta () {
  FRUTAS = [ ];
  for (var i = NUMBOLAS; i > 0; i--){
    var x = Math.floor((Math.random() * 520) + 100);
    var vx = Math.floor((Math.random() * 21) - 10);
    var vy = Math.floor((Math.random() * (VY_MAX - VY_MIN + 1)) + VY_MIN);
    var bomb = (Math.random() > HARDNESS) ? true : false;
    
    var fruta = new Fruta(x, CANVAS_HEIGHT, vx, vy, bomb);
    if (isValidX(fruta)){
      BUFFER.push(fruta);
      setTimeout(function(){añadirFruta ();}, 250 * (NUMBOLAS - i));
    } else {
      i++;
    }
  }
}

function añadirFruta (x, y, vx, vy, bomb) {
  FRUTAS.push(BUFFER[0]);
  BUFFER.splice(0, 1);
}

function fallTime (vy0) {
  var t = (vy0 / (VY_KTE * G)) * -1;
  return t;
}

function isValidX(fruta) {
  var t = fallTime(fruta.get_vy());
  var x = fruta.get_baseX() + (fruta.get_vx() * t);
  return (x < 720 - RADIUM && x > 0 + RADIUM);
}