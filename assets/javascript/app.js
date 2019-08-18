var qualities = ["Web Developer", "Coffee Enthusiast", "Aspiring Nomad"];

$(document).ready(function(){
    $('.parallax').parallax();
  });

function create(){
    for(var i = 0; i <qualities.length; i++){
    var newDiv = $("<h2>")
    newDiv.append(qualities[i]);
    $(".lead").append(newDiv);
    }
 
}

setTimeout(function() {
    create();
}, 1000, setTimeout(function(){
    $(".heading").hide();
    $(".welcome").show();
}, 4000));