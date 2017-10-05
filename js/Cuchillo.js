HEIGHT = 35
WIDTH = 100

/**
 * 
 * @class
 * @classdesc Representa al cuchillo que, dentro del juego, está localizado en la parte baja de la 
 *            pantalla moviendose horizontalmente siguiendo el puntero del ratón.
 * @property {int} x - Posición horizontal inicial (varia según la posición del puntero)
 * @property {int} y - Posición vertical (fijo)
 * @property {int} height - Altura del cuchillo
 * @property {int} width - Anchura del cuchillo
 * @property {obj} la_faca - Dirección a la imagen del cuchillo en uso.
 * 
 */
class Cuchillo {

  constructor (){
    this.x = mouseX;
    this.y = 440;
    this.height = HEIGHT;
    this.width = WIDTH;
    this.la_faca = IMAGES.cuchillo1;
  }

    /**
   * Se en  encarga de mostrar la imagen del cuchillo a una altura fija y una posición horizontal 
   * dependiente de la posición del puntero del ratón. Si la posición horizontal del puntero es tal 
   * que el cuchillo  aparecería fuera del marco, se establece la posición del cuchillo como 
   * el máximo posible a izquierda o derecha de la pantalla teniendo en cuenta el tamaño del cuchillo
   * para que ninguna parte del mismo queede fuera de la pantalla.
   */
  draw(){
    this.x = 0;
    if(mouseX <= this.width/2){
      this.x = 0;
    }else if(mouseX >= CANVAS_WIDTH - this.width/2){
      this.x= CANVAS_WIDTH - this.width;
    }else{
      this.x= mouseX-this.width/2;
    }
    image(this.la_faca, this.x, this.y, this.width, this.height);
  }
}