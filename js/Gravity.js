BUFFER = []

/**
 * Calcula el movimiento con una velocidad horzontal fija y una aceleración vertical. El resultado es una parábola que se usa para representar la subida y 
 * bajada de las frutas y bombas. Se le introducen las posiciones del momento y el tiempo del movimiento y da como resultado las posiciones y el tiempo del 
 * siguiente punto.
 * @param {float} posX0   -posición horizontal del tiempo anterior al cálculo.
 * @param {float} vX      -velocidad horizontal fija.
 * @param {float} t       -tiempo anterior. 
 * @param {float} posY0   -posición vertical del tiempo anterior.
 * @param {float} vY0     -velocidad vertical inicial.
 * @returns {Array}     -un Array con los siguientes elementos:x (posición horizontal del tiempo posterior), y (posición vertical del tiempo posterior), 
 *                      Time (tiempo posterior).
 */
function makeFall(posX0, vX, t, posY0, vY0) {
  /* x = x0 + (vx * t) */
  var x = posX0 + (vX * t);
  /* y = y0 + (vy0 * t) + (1/2 * a * t^2) */
  var y = posY0 + (vY0 * t) + (VY_KTE * G * t * t);
  var time = t + OFFSET;
  return [x, y, time];
}
/**
 * Calcula la velocidad según la velocidad inicial y el tiempo teniendo en cuenta la misma aceleración que se usa en la función "makefall".
 * @param {float} vy0     -velocidad inicial.
 * @param {float} t       -tiempo.
 * @returns {float} vy  -velocidad del momento. 
  */
function get_vy_t (vy0, t) {
  var vy = vy0 + G * t
  return vy;
}
/**
 * Calcula el tiempo que tardará la parábola en completarse.
 * @param {float} vy0   -velocidad vertical inical.
 * @returns {float} t   -tiempo requerido para completar la parábola
 */
function fallTime (vy0) {
  var t = (vy0 / (VY_KTE * G)) * -1;
  return t;
}
/**
 * Comprueba que la posición es adecuada para un punto inicial para la fruta o bomba, de modo que ésta no caiga fura de los bordes horizontales de la pantalla.
 * @param {obj} fruta -Fruta o bomba cuyo recorrido en parábola hay que comprobar.
 * @returns {boolean} -Espeifica si la parábolaentra dentro de la pantalla. "True" significa que sí que entra dentro.
 */
function isValidX(fruta) {
  var t = fallTime(fruta.get_vy());
  var x = fruta.get_baseX() + (fruta.get_vx() * t);
  return (x < 720 - RADIUM && x > 0 + RADIUM);
}
/**
 * Crea un número (establecido por "NUMBOLAS") de objetos "fruta" y las guarda en un buffer para que vayan apareciendo de uno en uno en el juego en diferentes 
 * momentos. L posición horizontal, la velocidad vertical inicial y la horizontal son elegidas aleatoriamente dentro de unos límites que permitan un movimiento
 * parabólico que entre dentro de la pantalla de juego. Además, se elige aleatoriamente si ha de ser una bomba o una fruta. Después se aplican ésto elementos más la 
 * posición vertical incial fija (igual a la altura de la pantalla, de modo que aparezcan al fondo de la misma) para crear un nuevo objeto de tipo "Fruta". Una vez 
 * hecho ésto, se comprueba que su movimiento parabólico termina dentro de la pantalla con la función "isValidX". De ser así, se añade la fruta al array "BUFFER". 
 * De otra forma, ese ciclo se da por nulo y se restituye el contador a su valor anterior.
 */
function createFruta () {
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
/**
 * Mete las frutas de una en una dentro del juego desde el BUFFER.
 */
function añadirFruta (x, y, vx, vy, bomb) {
  if (FRUTAS === false) {
    FRUTAS = [];
  }
  FRUTAS.push(BUFFER[0]);
  BUFFER.splice(0, 1);
}
