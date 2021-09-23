let wholeThing: Array<Array<Array<number>>> = [];
let i = 3;

basic.forever(function(){
    let thisLine: Array<Array<number>> = [];
    i--;

    for(let j = 0; j < 5; j++){
        thisLine[j] = [j, 0, randint(0, 2)];
    }

    if(wholeThing.length > 0){
        for(let j = 0; j < wholeThing.length; j++){
            for(let k = 0; k < 5; k++){
                if(wholeThing[j][k][2] >= i){
                    wholeThing[j][k][1] += 1;
                }
            }
        }
    }

    wholeThing.push(thisLine);

    if(wholeThing.length > 5){
        wholeThing.removeAt(0);
    }

    basic.clearScreen();
    for(let j = 0; j < wholeThing.length; j++){
        for(let k = 0; k < 5; k++){
            led.plotBrightness(wholeThing[j][k][0], wholeThing[j][k][1], (wholeThing[j][k][2]+1)*80);
        }
    }
    pause(150);

    if(i == 0){
        i = 3;
    }
})
