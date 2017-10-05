class Cuchillo {

  constructor (){
    this.x = mouseX;
    this.y = 440;
    this.height = 35;
    this.width = 100;
    this.la_faca = IMAGES.cuchillo1;
  }

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