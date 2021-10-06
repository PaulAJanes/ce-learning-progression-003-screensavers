class rainDrop extends game.LedSprite {
    b: number;

    constructor(x: number, y: number, b: number) {
        super(x, y);
        this.b = b;
        this.changeDirectionBy(90);
        this.setBrightness(this.b * 80);
    }
}

let wholeThingRain: Array<Array<rainDrop>> = [];
let wholeThingCoding: Array<Array<Array<number>>> = [];

function killRain() {
    for (let i = 0; i < wholeThingRain.length; i++) {
        for (let j = 0; j < wholeThingRain[i].length; j++) {
            wholeThingRain[i][j].delete();
        }
    }
    for (let i = wholeThingRain.length - 1; i >= 0; i--) {
        wholeThingRain.removeAt(i);
    }
}

function coding() {
    if (wholeThingRain.length > 0) {
        killRain();
    }
    let thisLine: Array<Array<number>> = [];

    let a = randint(0, 4);

    if (wholeThingCoding.length > 1) {
        for (let i = 0; i < wholeThingCoding.length; i++) {
            for (let j = 0; j < wholeThingCoding[i].length; j++) {
                wholeThingCoding[i][j][1] -= 1;
            }
        }
    }

    for (let i = 0; i <= a; i++) {
        thisLine.push([i, 4]);
    }

    wholeThingCoding.push(thisLine);

    if (wholeThingCoding.length > 5) {
        wholeThingCoding.removeAt(0);
    }

    basic.clearScreen();

    for (let i = 0; i < wholeThingCoding.length; i++) {
        for (let j = 0; j < wholeThingCoding[i].length; j++) {
            led.plot(wholeThingCoding[i][j][0], wholeThingCoding[i][j][1]);
        }
    }

    pause(150);
}

function rain() {
    let thisLine: Array<rainDrop> = [];

    for (let i = 0; i < randint(1, 5); i++) {
        let Droppy = new rainDrop(randint(0, 4), 0, randint(1, 3));
        thisLine.push(Droppy);
    }

    for (let i = 0; i < wholeThingRain.length; i++) {
        if (wholeThingRain[i].length == 0) {
            wholeThingRain.removeAt(i);
        }
    }

    wholeThingRain.push(thisLine);

    for (let i = 0; i < wholeThingRain.length; i++) {
        for (let j = 0; j < wholeThingRain[i].length; j++) {
            if (wholeThingRain[i][j].get(LedSpriteProperty.Y) == 4) {
                wholeThingRain[i][j].delete();
            } else if (randint(0, 2) < wholeThingRain[i][j].b) {
                wholeThingRain[i][j].move(1);
            }
        }
    }
    pause(100);
}

function freqbars() {
    let wholeThingFBar: Array<Array<Array<number>>> = [];
    if (wholeThingRain.length > 0) {
        killRain();
    }
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
        wholeThingFBar.push(thisLine);
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            led.plotBrightness(wholeThingFBar[j][i][0], wholeThingFBar[j][i][1], wholeThingFBar[j][i][2]);
            pause(10);
        }
    }

    pause(50);

    for (let i = 4; i >= 0; i--) {
        for (let j = 0; j < 5; j++) {
            if (wholeThingFBar[j][i][2] != 250) {
                led.unplot(wholeThingFBar[j][i][0], wholeThingFBar[j][i][1]);
            }
        }
        pause(50);
    }

    pause(25);
    basic.clearScreen();
    pause(150);

}

enum Gestures { TiltLeft, TiltRight };
enum Mode { Asleep, Working };
let mode: Mode = Mode.Working;
let gesture: Gestures = Gestures.TiltLeft;

let screensavers = [[rain, freqbars], [coding, coding]];

input.onButtonPressed(Button.A, () => mode = Mode.Asleep);
input.onButtonPressed(Button.B, () => mode = Mode.Working);
input.onGesture(Gesture.TiltLeft, () => gesture = Gestures.TiltLeft);
input.onGesture(Gesture.TiltRight, () => gesture = Gestures.TiltRight);

basic.forever(function () {
    screensavers[mode][gesture]();
})
