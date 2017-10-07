/**
 * 
 * @class
 * @classdesc Representa a cada furta o bomba presentes en la partida.
 * @property {int} baseX      - Posición horizontal inicial (fija).
 * @property {int} baseY      - Posición vertical inicial (fija).
 * @property {int} x          - Posición horizontal (variable).
 * @property {int} y          - Posición vertical (variable).
 * @property {int} vx         - Velocidad horizontal (fija).
 * @property {int} vy         - Velocidad vertical inicial (fija).
 * @property {int} vym        - Velocidad vertical del momento (variable).
 * @property {int} radium     - Radio de las frutas y bombas.
 * @property {boolean} bomba  - Especifica si es una bomba o una fruta. De ser true, es una bomba.
 * @property {obj} color      - Imágen a usar.
 * @property {int} time       - Tiempo.
 * @property {boolean} ended  - Señala el momento en el que la fruta o bomba ha salido de la pantalla.
 *
 * 
 */
class Fruta { // No estoy muy deacuerdo con el nombre pero es absurdo hacer 2 clases

  constructor (x, y, vx, vy, bomba){
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.vym = vy;
    this.radium = RADIUM;
    this.bomba = bomba; // si no es una bomba es una fruta
    this.color = this.get_color();
    this.time = 0;
    this.ended = false;
  }
  /**
   * Establece qué imágen ha de usarse. Si el objeto es una bomba, se establece la imágen de bomba. Si es una fruta, se elige aleatoriamente entre la imágen de 
   * sandía y la de la piña.
   */
  get_color(){
    if(this.bomba){0
      return IMAGES.bomba;
    }else{
      return (Math.random() > 0.5) ? IMAGES.watermelon : IMAGES.pineapple;
    }
  }
  /**
   * Devuelve el valor de la velocidad horizontal.
   */
  get_vx() {
    return this.vx;
  }
   /**
   * Devuelve el valor de la velocidad vertical en ése momento.
   */
  get_vy() {
    return this.vy;
  }
  /**
   * Devuelve el valor de la posición horizontal inicial.
   */
  get_baseX(){
    return this.baseX;
  }
  /**
   * Dibuja la imágen del objeto en la posición que debe estar en la pantalla del según se ha calculado en la función "move". Además, se calcula la velocidad del 
   * objeto en ése momento con "get_vy_t".
   */
  draw(){ //else if (FRUTAS[i].has_ended() && !FRUTAS[i].bomba) {
        //  VIDAS--;
        //  FRUTAS.splice(i, 1);
        //1}
    this.vym = get_vy_t(this.vy, this.time);
    //this.radium = (this.vym < 0) ? ((this.vym < -25) ? RADIUM/1.3 : RADIUM / 1.2) : ((this.vym < 25) ? RADIUM / 1.1 : RADIUM); //Haundiagoa
    image(this.color, this.x, this.y, this.radium, this.radium);
  }
  /**
   * Calcula la posición en la que tiene que estar el objeto en la pantalla de juego en ése momento (t) específico teniendo en cuenta la posición y velocidad 
   * iniciales y el tiempo. Después actualiza los datos con los resultados.
   */
  move(){
    var array = makeFall(this.baseX, this.vx, this.time, this.baseY, this.vy);
    this.x = array[0];
    this.y = array[1];
    this.time = array[2];

    if (this.y > 480 && this.vym > 0) {
      this.ended = true;
    }
  }
  /**
   * Comprueba si la posición de la fruta es tal que entra en colisión con el cuchillo y devuelve el resultado en boolean.
   */
  check_collision(){
    var colision;
    var i = 0;
    if (this.vym > 0) {
      if(CUCHILLO.x < this.x + this.radium && CUCHILLO.x+CUCHILLO.width > this.x && (CUCHILLO.y) < this.y + this.radium && (CUCHILLO.y+CUCHILLO.height) > this.y && this.bomba){
        VIDAS--;
        i++;
        colision = true;
      }else if(CUCHILLO.x < this.x + this.radium && CUCHILLO.x+CUCHILLO.width > this.x && (CUCHILLO.y) < this.y + this.radium && (CUCHILLO.y+CUCHILLO.height) > this.y && !this.bomba){
        colision = true;
      }else{
        colision = false;
      }
    }else{
      colision = false;
    }
    return colision;
  }
  /**
  *Devueleve el dato que indica si la fruta ha salido de la pantalla. 
  */
  has_ended () {
    return this.ended;
  }

}
