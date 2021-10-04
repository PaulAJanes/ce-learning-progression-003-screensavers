function freqbars() {
    let wholeThing: Array<Array<Array<number>>> = [];

    for (let i = 0; i < 5; i++) {
        let thisLine: Array<Array<number>> = [];
        let a = 5 - randint(0, 5);
        for (let j = 4; j >= a; j--) {
            let b = 100;

            if (j == a && j < 3) {
                b = 250;
            }
            thisLine.push([i, j, b]);
        }
        if (a > 0) {
            for (let j = a - 1; j >= 0; j--) {
                thisLine.push([i, j, 0]);
            }
        }
        wholeThing.push(thisLine);
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            led.plotBrightness(wholeThing[j][i][0], wholeThing[j][i][1], wholeThing[j][i][2]);
            pause(10);
        }
    }

    pause(50);

    for (let i = 4; i >= 0; i--) {
        for (let j = 0; j < 5; j++) {
            if (wholeThing[j][i][2] != 250) {
                led.unplot(wholeThing[j][i][0], wholeThing[j][i][1]);
            }
        }
        pause(50);
    }

    pause(25);
    basic.clearScreen();
    pause(150);

}

basic.forever(function(){
    freqbars();
})
