const HEIGHT = 7;
enum Mode { All, StartEnd };
let mode: Mode = Mode.StartEnd;

let start: Array<number> = [0];
let left: Array<number> = [0];

for (let i = HEIGHT; i > 0; i--) {
    start.push(i);
    left.push(i);
}

let middle: Array<number> = [0];
let right: Array<number> = [0];

let mover: number = 0;

input.onButtonPressed(Button.A, () => mode = Mode.All);
input.onButtonPressed(Button.B, () => mode = Mode.StartEnd);

function display() {
    for (let i = (left.length == 1) ? 0 : 1; i < left.length; i++) {
        basic.showNumber(left[i]);
        pause(250);
    }
    basic.clearScreen();
    pause(350);
    for (let i = (middle.length == 1) ? 0 : 1; i < middle.length; i++) {
        basic.showNumber(middle[i]);
        pause(250);
    }
    basic.clearScreen();
    pause(350);
    for (let i = (right.length == 1) ? 0 : 1; i < right.length; i++) {
        basic.showNumber(right[i]);
        pause(250);
    }
    basic.clearScreen();
    pause(750);
}

function LeftToRight(): number {
    right.push(left[left.length - 1]);
    left.pop();
    return right[right.length - 1];
}

function LeftToMiddle(): number {
    middle.push(left[left.length - 1]);
    left.pop();
    return middle[middle.length - 1];
}

function MiddleToRight(): number {
    right.push(middle[middle.length - 1]);
    middle.pop();
    return right[right.length - 1];
}

function MiddleToLeft(): number {
    left.push(middle[middle.length - 1]);
    middle.pop();
    return left[left.length - 1];
}

function RightToLeft(): number {
    left.push(right[right.length - 1]);
    right.pop();
    return left[left.length - 1];
}

function RightToMiddle(): number {
    middle.push(right[right.length - 1]);
    right.pop();
    return middle[middle.length - 1];
}

function isLegal(Arr1: Array<number>, Arr2: Array<number>, prev: number): boolean {
    if(Arr1[Arr1.length -1] == prev
        || Arr1[Arr1.length-1] == 0
        || (Arr2[Arr2.length-1] != 0
            && Arr1[Arr1.length-1] > Arr2[Arr2.length-1])
        || (Arr2[Arr2.length-1] != 0
            && Arr1[Arr1.length-1] % 2 == Arr2[Arr2.length-1] % 2)){
                return false;
    } else {
        return true;
    }
}

function isBest(Arr1: Array<number>, Arr2: Array<number>, Arr3: Array<number>, prev: number): boolean {
    if (!isLegal(Arr1, Arr2, prev)
        || (isLegal(Arr1, Arr3, prev)
            && (Arr3[Arr3.length - 1] == Arr1[Arr1.length - 1] + 1
                || (Arr3[Arr3.length - 1] != 0 
                    && Arr2[Arr2.length - 1] == 0)))) {
        return false;
    } else {
        return true;
    }
}

function move(odd: boolean, prev: number, first: boolean) {
    if(!first){
        if (isBest(left, right, middle, prev)) {
            mover = LeftToRight();
        } else if (isBest(middle, left, right, prev)) {
            mover = MiddleToLeft();
        } else if (isBest(right, middle, left, prev)) {
            mover = RightToMiddle();
        } else if (isBest(left, middle, right, prev)) {
            mover = LeftToMiddle();
        } else if (isBest(middle, right, left, prev)) {
            mover = MiddleToRight();
        } else {
            mover = RightToLeft();
        }
    } else {
        if(odd){
            mover = LeftToRight();
        } else {
            mover = LeftToMiddle();
        }
    }
    if (mode == Mode.All) {
        display();
    }
    if (right[HEIGHT] != 1){
        move(odd, mover, false);
    }
}

function isOdd(RayRay: Array<number>): boolean {
    if (RayRay[1] % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

display();
move(isOdd(start), 0, true);
display();
