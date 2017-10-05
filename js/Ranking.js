AJAX_SERVER = "http://zerbitzaria.ovh:5000"

class Ranking {

  static get_best(succ){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if (req.readyState == 4){
        if (req.status == 200){
          succ(req.responseText);
        }
      }
    }

    req.open("GET", AJAX_SERVER+"/get_best", true)
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Data-Type", "jsonp");
    req.send();
  }

  static get_worst(succ){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if (req.readyState == 4){
        if (req.status == 200){
          succ(req.responseText);
        }
      }
    }

    req.open("GET", AJAX_SERVER+"/get_worst", true)
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Data-Type", "jsonp");
    req.send();
  }

  static add(rank, succ){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if (req.readyState == 4){
        if (req.status == 200){
          succ(req.responseText);
        }
      }
    }

    req.open("POST", AJAX_SERVER+"/add_rank", true)
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Data-Type", "jsonp");
    req.send(JSON.stringify(rank));
  }
}
