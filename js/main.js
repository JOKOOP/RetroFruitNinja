
function run_game() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");

  var cuchillo = new Cuchillo(10, 10);


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cuchillo.draw(ctx);

}


window.onload = run_game;
