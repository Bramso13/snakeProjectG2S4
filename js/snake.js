$('.ui.radio.checkbox')
  .checkbox()
;
var niveau = "";
var surnom = "";
var perte = true;
$("#boutonPlay").click(function(){
    document.body.style.backgroundColor = "#34495e";
    perte = false;
    $(".nivoRadio").each(function(index, item){
        if($(item).is(':checked')){niveau = $(item).attr("id");}
    });
    $(".page").each(function(index, item){
        if($(item).hasClass("activeEffet")){
            $(item).removeClass("activeEffet");
        }
    });
   window.score = 0;
    console.log("window", window);
$.get("json/"+niveau+".json", function(data){
    // Déclaration des constantes et variables nécessaires
    window.SNAKE = data["snake"];
    window.snakevrai = [];
    window.tailleSnake = data["snake"].length;
    window.WALL = data["walls"];
    window.FOOD = data["food"];
    var temp = '';
    const chemin = window.SNAKE;

    window.tabGlobal = [];
    // 
    if(touche != ""){
        window.interval = setInterval(function(){
            if(!perte){
                switch (touche) {
                    case 'ArrowDown':
                        if(temp != 'ArrowUp'){
                            step(data["dimensions"][0], data["dimensions"][1], 'down', chemin);
                            temp = 'ArrowDown';
                        }else{
                            step(data["dimensions"][0], data["dimensions"][1], 'up', chemin);
                            temp = 'ArrowUp';

                        }
                        break;
                    case 'ArrowUp':
                        if(temp != 'ArrowDown'){
                            step(data["dimensions"][0], data["dimensions"][1], 'up', chemin);
                            temp = 'ArrowUp';
                        }else{
                            step(data["dimensions"][0], data["dimensions"][1], 'down', chemin);
                            temp = 'ArrowDown';

                        }
                        break;
                    case 'ArrowLeft':
                        if(temp != 'ArrowRight'){
                            step(data["dimensions"][0], data["dimensions"][1], 'left', chemin);
                            temp = 'ArrowLeft';
                        }else{
                            step(data["dimensions"][0], data["dimensions"][1], 'right', chemin);
                            temp = 'ArrowRight';
                            
                        }
                        break;
                    case 'ArrowRight':
                        if(temp != 'ArrowLeft'){
                            step(data["dimensions"][0], data["dimensions"][1], 'right', chemin);
                            temp = 'ArrowRight';
                        }else{
                            step(data["dimensions"][0], data["dimensions"][1], 'left', chemin);
                            temp = 'ArrowLeft';

                        }
                        break;
                    default:
                        break;
                }
        }
        $("#scoreDirect").text(window.score);
            }, data["delay"]);
    }

});

});
var canvas = document.getElementById("canvasSnake");
var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h;
var ctx = canvas.getContext("2d");
var touche = "touche";
document.onkeydown = logKey;
function logKey(e){
    touche = e.code;
    console.log(touche);
    document.getElementById("appuie").style.display = "none";
}
function perteFunction(){
    clearInterval(window.interval);
    $("#h4Score").text(window.score);
    document.getElementById("gameover").style.display = "block";
}
$("#butRejouer").click(function(){
    document.location.reload(true);
});
