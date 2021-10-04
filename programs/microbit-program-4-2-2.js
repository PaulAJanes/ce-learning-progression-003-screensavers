function L(){
    basic.showString("L");
}

function R(){
    basic.showString("R");
}

enum Gestures {TiltLeft, TiltRight};
let gesture: Gestures = Gestures.TiltLeft;

let screensavers = [L, R];

input.onGesture(Gesture.TiltLeft, () => gesture = Gestures.TiltLeft);
input.onGesture(Gesture.TiltRight, () => gesture = Gestures.TiltRight);

basic.forever(function(){
    screensavers[gesture]();
})
