HEIGHT = 20
WIDTH = 100

class Cuchillo {

  constructor (){
    this.y = 440;
    this.height = HEIGHT;
    this.width = WIDTH;
  }

  draw(){
	var x = 0;
    fill('#ADADAD');
	if(mouseX <= this.width/2){
		x = 0;
	}else if(mouseX >= CANVAS_WIDTH - this.width/2){
		x= CANVAS_WIDTH - this.width;
	}else{
		x= mouseX-this.width/2;
	}
	rect(x, this.y, this.width, this.height);
	
  }

  move(){
    // Mover a x,y ?
  }

  check_collision(){

  }


}
