
 function step(width, height, orientation, chemin){
    window.score = window.score+1;

    var vraiY = 0;
    for (let x = 0; x < width; x++) {
        window.tabGlobal[x] = [];
        for (let y = 0; y < height; y++) {
            window.tabGlobal[x][y] = "EMPTY";  
        }
    }
    window.wSnake = width;
    window.hSnake = height;
    var tailles = window.tailleSnake;
    window.snakevrai.splice(0, window.snakevrai.length);
    move(orientation, window.snakevrai, chemin, tailles);
    for (let index = 0; index < window.snakevrai.length; index++) {
        window.tabGlobal[window.snakevrai[index][0]][window.snakevrai[index][1]] = "SNAKE";
        
    }
    for (let index = 0; index < window.WALL.length; index++) {
        window.tabGlobal[window.WALL[index][0]][window.WALL[index][1]] = "WALL";
        
    }
    for (let index = 0; index < window.FOOD.length; index++) {
        window.tabGlobal[window.FOOD[index][0]][window.FOOD[index][1]] = "FOOD";
        
    }
    for (let y = 0; y < window.tabGlobal[0].length; y++) {
        vraiY = h/40*y;
        for (let x = 0; x < window.tabGlobal.length; x++) {
            
            if(window.tabGlobal[x][y] == "SNAKE"){
                ctx.fillStyle = "#e74c3c";

            }else if(window.tabGlobal[x][y] == "FOOD"){
                ctx.fillStyle = "#fbc531";
            }else if(window.tabGlobal[x][y] == "WALL"){
                ctx.fillStyle = "#f5f6fa";
            }else{
                ctx.fillStyle = "#34495e";

            }
            ctx.fillRect(w/80*x, vraiY, w/80, h/40);
            
        }

    }
}

 function move(direction, snakevrai, chemin, tailles){
    var compte = 0;
    var tete = [];
    var taille = chemin.length-1;
    var x = 0;
    var y = 0;
    switch (direction) {
        case "down":
            for (let i = window.tailleSnake; i >= 0; i--) {
                var element = chemin[taille - i];
                   window.snakevrai.push(element);
           }
            tete = chemin[chemin.length-1];
            x = tete[0];
            y = tete[1];
            if(rencontre(x,y) == 0){
                perte = true;
                perteFunction();

            }

            for (let k = 0; k < window.FOOD.length; k++) {
                if(window.FOOD[k][0] == x && window.FOOD[k][1] == y){

                    window.FOOD.splice(k, 1, [getRandomArbitrary(1, window.wSnake),getRandomArbitrary(1, window.hSnake)]);

                    window.tailleSnake = window.tailleSnake+6;
                    window.score = window.score+50;



                }
            }
            chemin.push([x, y+1]);
            
            break;
        case "up":
            for (let i = window.tailleSnake; i >= 0; i--) {
                var element = chemin[taille - i];
                   window.snakevrai.push(element);
           }
           
            tete = chemin[chemin.length-1];
            x = tete[0];
            y = tete[1];
            if(rencontre(x,y) == 0){
                perte = true;
                perteFunction();

            }

            for (let k = 0; k < window.FOOD.length; k++) {
                if(window.FOOD[k][0] == x && window.FOOD[k][1] == y){
                    window.FOOD.splice(k, 1, [getRandomArbitrary(1, window.wSnake),getRandomArbitrary(1, window.hSnake)]);

                    window.tailleSnake = window.tailleSnake+6;
                    window.score = window.score+50;

                }
            }
            chemin.push([x, y-1]);
            break;
        case "left":
            for (let i = window.tailleSnake; i >= 0; i--) {
                var element = chemin[taille - i];
                   window.snakevrai.push(element);
           }
           
            tete = chemin[chemin.length-1];
            x = tete[0];
            y = tete[1];
            if(rencontre(x,y) == 0){
                perte = true;
                perteFunction();
            }

            for (let k = 0; k < window.FOOD.length; k++) {
                if(window.FOOD[k][0] == x && window.FOOD[k][1] == y){
                    window.FOOD.splice(k, 1, [getRandomArbitrary(1, window.wSnake),getRandomArbitrary(1, window.hSnake)]);

                    window.tailleSnake = window.tailleSnake+6;
                    window.score = window.score+50;

                }
            }
            chemin.push([x-1, y]);
            
            break;
        case "right":
            for (let i = window.tailleSnake; i >= 0; i--) {
                var element = chemin[taille - i];
                   window.snakevrai.push(element);
           }
            tete = chemin[chemin.length-1];
            x = tete[0];
            y = tete[1];
            if(rencontre(x,y) == 0){
                perte = true;
                perteFunction();

            }
            for (let k = 0; k < window.FOOD.length; k++) {
                if(window.FOOD[k][0] == x && window.FOOD[k][1] == y){
                    
                    window.FOOD.splice(k, 1, [getRandomArbitrary(1, window.wSnake),getRandomArbitrary(1, window.hSnake)]);

                    window.tailleSnake = window.tailleSnake+6;
                    window.score = window.score+50;

                }
            }
            chemin.push([x+1, y]);
            
            break;
        default:
            break;
    }
}
function rencontre(x, y){
    var o;
    for (let i = 0; i < window.WALL.length; i++) {
        if(window.WALL[i][0] == x && window.WALL[i][1] == y){
            o = 0;
        }
    }
    
    if(x<0 || y<0){
        o = 0;
    }
    for (let j = window.snakevrai.length-2; j != 0; j--) {
        if(x == window.snakevrai[j][0] && y == window.snakevrai[j][1]){
            o = 0;
        }
        
    }
    if(x>=window.wSnake || y>=window.hSnake){
        o = 0;
    }
    return o;
}
 
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }