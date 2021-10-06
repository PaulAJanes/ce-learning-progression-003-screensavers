class bouncingMarble{
    x: number;
    y: number;
    b: number;
    t: boolean;

    constructor(x: number, y:number, b: number, t: boolean = true){
        this.x = x;
        this.y = y;
        this.b = b;
        this.t = t;
        this.show();
    }

    move(){
        this.hide();
        if (!(this.b == 4 - this.y) && !this.t){
            this.y -= 1;
        } else if ((this.b == 4 - this.y) && !this.t){
            this.t = true;
        } else if (!(this.y == 4) && this.t){
            this.y += 1;
        } else if ((this.y == 4) && this.t){
            this.t = false;
            this.b -= 1;
        }
        if(!(this.b == 0)){
            this.show();
        }
        pause(50);
    }

    show(){
        led.plot(this.x, this.y);
    }

    hide(){
        led.unplot(this.x, this.y);
    }
}

let allTheThings: Array<bouncingMarble> = [];

function doTheBounce(){
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

basic.forever(function(){
    doTheBounce();
})
