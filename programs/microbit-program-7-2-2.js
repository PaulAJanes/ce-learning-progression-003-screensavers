function BubbleSort(Nums: Array<number>){
    let holder: number = 0;
    let mover: boolean = false;

    for(let i = 0; i < Nums.length - 1; i++){
        if(Nums[i] > Nums[i+1]){
            holder = Nums[i];
            Nums.removeAt(i);
            Nums.insertAt(i + 1, holder);
            mover = true;
        }
    }

    if(mover){
        BubbleSort(Nums);
    }
}

let MyImages: Array<Image> = [
    images.createImage(`00110
                    01001
                    01001
                    01001
                    00110`),
    images.createImage(`01100
                    00100
                    00100
                    00100
                    01110`),
    images.createImage(`00110
                    01001
                    00010
                    00100
                    01111`),
    images.createImage(`00110
                    01001
                    00010
                    01001
                    00110`),
    images.createImage(`00101
                    00101
                    00111
                    00001
                    00001`),
    images.createImage(`01110
                    01000
                    01100
                    00010
                    01100`),
    images.createImage(`00100
                    01000
                    01100
                    01010
                    00100`),
    images.createImage(`01111
                    00001
                    00010
                    00100
                    01000`),
    images.createImage(`00100
                    01010
                    00100
                    01010
                    00100`),
    images.createImage(`00100
                    01010
                    00110
                    00100
                    01000`),
    images.createImage(`00000
                    00000
                    00000
                    00000
                    00000`)];

let letterImages = [
    images.createImage(`00100
                        01010
                        11111
                        10001
                        10001`),
    images.createImage(`11100
                        10010
                        11100
                        10010
                        11100`),
    images.createImage(`01100
                        10010
                        10000
                        10010
                        01100`),
    images.createImage(`11100
                        10010
                        10001
                        10010
                        11100`),
    images.createImage(`11111
                        10000
                        11110
                        10000
                        11111`),
    images.createImage(`11111
                        10000
                        11110
                        10000
                        10000`),
    images.createImage(`01100
                        10000
                        10110
                        10010
                        01100`),
    images.createImage(`10001
                        10001
                        11111
                        10001
                        10001`),
    images.createImage(`01110
                        00100
                        00100
                        00100
                        01110`),
    images.createImage(`01110
                        00100
                        00100
                        10100
                        01100`),
    images.createImage(`10010
                        10100
                        11000
                        10100
                        10010`),
    images.createImage(`10000
                        10000
                        10000
                        10000
                        11100`),
    images.createImage(`10001
                        11011
                        10101
                        10001
                        10001`),
    images.createImage(`10001
                        11001
                        10101
                        10011
                        10001`),
    images.createImage(`01110
                        10001
                        10001
                        10001
                        01110`),
    images.createImage(`11100
                        10010
                        11100
                        10000
                        10000`),
    images.createImage(`01110
                        10001
                        10101
                        10011
                        01111`),
    images.createImage(`11100
                        10010
                        11100
                        10100
                        10010`),
    images.createImage(`01110
                        10000
                        01100
                        00010
                        11100`),
    images.createImage(`01110
                        00100
                        00100
                        00100
                        00100`),
    images.createImage(`10001
                        10001
                        10001
                        10001
                        01110`),
    images.createImage(`10001
                        10001
                        01010
                        01010
                        00100`),
    images.createImage(`10001
                        10001
                        10101
                        11011
                        10001`),
    images.createImage(`10001
                        01010
                        00100
                        01010
                        10001`),
    images.createImage(`10001
                        01010
                        00100
                        00100
                        00100`),
    images.createImage(`11111
                        00010
                        00100
                        01000
                        11111`)]

let Alphabet: String = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function scrollArray(Scrolly: Array<number>) {
    for (let i = 0; i < Scrolly.length; i++) {
        for (let j = 0; j < Scrolly[i].toString().length; j++) {
            MyImages[parseInt(Scrolly[i].toString().charAt(j))].scrollImage(1, 100);
        }
        pause(1000);
        MyImages[10].scrollImage(1, 100);
    }
}

function scrollString(Scrolly: String) {
    for (let i = 0; i < Scrolly.length; i++) {
        letterImages[Alphabet.indexOf(Scrolly.charAt(i))].scrollImage(1, 100);
    }
    MyImages[10].scrollImage(1, 100);
    pause(250);
}

let Input: Array<number> = [];

basic.forever(function () {
    Input = [14, 19, 3, 2, 0, 56, 12, 7, 90, 1, 11];

    scrollString("INPUT");
    scrollArray(Input);

    BubbleSort(Input);

    scrollString("SORTED");
    scrollArray(Input);
})
