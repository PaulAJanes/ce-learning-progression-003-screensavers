namespace Screensaver{
    class rainDrop extends game.LedSprite {
        b: number;

        constructor(x: number, y: number, b: number) {
            super(x, y);
            this.b = b;
            this.changeDirectionBy(90);
            this.setBrightness(this.b * 80);
        }
    }

    class bouncingMarble {
        x: number;
        y: number;
        b: number;
        t: boolean;

        constructor(x: number, y: number, b: number, t: boolean = true) {
            this.x = x;
            this.y = y;
            this.b = b;
            this.t = t;
            this.show();
        }

        move() {
            this.hide();
            if (!(this.b == 4 - this.y) && !this.t) {
                this.y -= 1;
            } else if ((this.b == 4 - this.y) && !this.t) {
                this.t = true;
            } else if (!(this.y == 4) && this.t) {
                this.y += 1;
            } else if ((this.y == 4) && this.t) {
                this.t = false;
                this.b -= 1;
            }
            if (!(this.b == 0)) {
                this.show();
            }
            pause(50);
        }

        show() {
            led.plot(this.x, this.y);
        }

        hide() {
            led.unplot(this.x, this.y);
        }
    }

    let allTheThings: Array<bouncingMarble> = [];
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

    export function coding() {
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

    export function rain() {
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

    export function freqbars() {
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

    export function doTheBounce() {
        if (wholeThingRain.length > 0) {
            killRain();
        }

        for (let i = 0; i < allTheThings.length; i++) {
            if (allTheThings[i].b == 0) {
                allTheThings.removeAt(i);
            }
        }

        if (allTheThings.length < 5) {
            let Bouncey = new bouncingMarble(randint(0, 4), randint(0, 4), randint(1, 4));
            allTheThings.push(Bouncey);
        }

        for (let i = 0; i < allTheThings.length; i++) {
            allTheThings[i].move();
        }
    }
}

enum Gestures { TiltLeft, TiltRight, Shake };
enum Mode { Asleep, Working };
let mode: Mode = Mode.Working;
let gesture: Gestures = Gestures.TiltLeft;

let screensavers = [[Screensaver.rain, Screensaver.freqbars, Screensaver.doTheBounce], [Screensaver.coding, Screensaver.coding, Screensaver.doTheBounce]];

input.onButtonPressed(Button.A, () => mode = Mode.Asleep);
input.onButtonPressed(Button.B, () => mode = Mode.Working);
input.onGesture(Gesture.TiltLeft, () => gesture = Gestures.TiltLeft);
input.onGesture(Gesture.TiltRight, () => gesture = Gestures.TiltRight);
input.onGesture(Gesture.Shake, () => gesture = Gestures.Shake);

basic.forever(function () {
    screensavers[mode][gesture]();
    basic.clearScreen();
})
