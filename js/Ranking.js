AJAX_SERVER = "http://zerbitzaria.ovh:5000"

class Ranking {

  static get_best(succ){ // succ = funcion a ejecutar cuando llegue la respuesta
    $.ajax({
      success: function(data){
        succ(data.ranking);
      },
      error: function(data){
        alert("error! "+JSON.stringify(data)); // debug
      },
      processData: false,
      type: 'GET',
      url: AJAX_SERVER+'/get_best'
    });
  }

  static get_worst(){
    $.ajax({
      success: function(data){
        succ(data.ranking);
      },
      error: function(data){
        alert("error! "+JSON.stringify(data)); // debug
      },
      processData: false,
      type: 'GET',
      url: AJAX_SERVER+'/get_worst'
    });
  }

  static add(rank){ // rank = {"name" : name, "points" : points}
  $.ajax({
      contentType: 'application/json',
      data : JSON.stringify(rank),
      success: function(data){
        console.log("rank added")
      },
      error: function(data){
        alert("error! "+JSON.stringify(data)); // debug
      },
      processData: false,
      type: 'POST',
      url: AJAX_SERVER+'/add_rank'
    });
  }
}
