let wholeThing: Array<Array<Array<number>>> = [];

basic.forever(function(){
    let thisLine: Array<Array<number>> = [];

    let a = randint(0, 4);

    if(wholeThing.length > 1){
        for(let i = 0; i < wholeThing.length; i++){
            for(let j = 0; j < wholeThing[i].length; j++){
                wholeThing[i][j][1] -= 1;
            }
        }
    }

    for(let i = 0; i <= a; i++){
        thisLine.push([i, 4]);
    }

    wholeThing.push(thisLine);

    if(wholeThing.length > 5){
        wholeThing.removeAt(0);
    }

    basic.clearScreen();
    
    for(let i = 0; i < wholeThing.length; i++){
        for(let j = 0; j < wholeThing[i].length; j++){
            led.plot(wholeThing[i][j][0], wholeThing[i][j][1]);
        }
    }

    pause(150);

})
