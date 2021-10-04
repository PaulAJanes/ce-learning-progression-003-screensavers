function W(){
    basic.showString("W");
}

function Z(){
    basic.showString("Z");
}

enum Mode {Asleep, Working};
let mode: Mode = Mode.Working;

let screensavers = [Z, W];

input.onButtonPressed(Button.A, () => mode = Mode.Asleep);
input.onButtonPressed(Button.B, () => mode = Mode.Working);

basic.forever(function(){
    screensavers[mode]();
})
