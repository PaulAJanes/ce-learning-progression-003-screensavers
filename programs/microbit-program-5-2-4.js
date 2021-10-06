class rainDrop extends game.LedSprite {
    b: number;

    constructor(x: number, y: number, b: number) {
        super(x, y);
        this.b = b;
        this.changeDirectionBy(45);
        this.setBrightness(this.b * 80);
    }
}

let wholeThing: Array<Array<rainDrop>> = [];

function rain() {
    let thisLine: Array<rainDrop> = [];

    for (let i = 0; i < randint(1, 5); i++) {
        let Droppy = new rainDrop(randint(0, 4), 0, randint(1, 3));
        thisLine.push(Droppy);
    }

    for (let i = 1; i < randint(2, 5); i++){
        let Droppy = new rainDrop(0, randint(1, 4), randint(1, 3));
        thisLine.push(Droppy);
    }

    for (let i = 0; i < wholeThing.length; i++) {
        if (wholeThing[i].length == 0) {
            wholeThing.removeAt(i);
        }
    }

    wholeThing.push(thisLine);

    for (let i = 0; i < wholeThing.length; i++) {
        for (let j = 0; j < wholeThing[i].length; j++) {
            if ((wholeThing[i][j].get(LedSpriteProperty.Y) == 4) || (wholeThing[i][j].get(LedSpriteProperty.X) == 4)) {
                wholeThing[i][j].delete();
            } else if (randint(0, 2) < wholeThing[i][j].b) {
                wholeThing[i][j].move(1);
            }
        }
    }
    pause(100);

}

basic.forever(function () {
    rain();
})
