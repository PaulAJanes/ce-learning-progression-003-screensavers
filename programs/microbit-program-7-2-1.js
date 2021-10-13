function BubbleSort(Nums: Array<number>){
    let mover: boolean = false;
    let holder: number = 0;

    do{
        mover = false;
        for(let i = 0; i < Nums.length - 1; i++){
            if(Nums[i] > Nums[i+1]){
                holder = Nums[i];
                Nums.removeAt(i);
                Nums.insertAt(i+1, holder);
                mover = true;
            }
        }
    } while (mover);
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

function scrollArray(Scrolly: Array<number>){
    for(let i = 0; i < Scrolly.length; i++){
        for(let j = 0; j < Scrolly[i].toString().length; j++){
            MyImages[parseInt(Scrolly[i].toString().charAt(j))].scrollImage(0, 100);
        }
        pause(1000);
        MyImages[10].scrollImage(0, 100);
    }
}

let Input: Array<number> = [14, 19, 3, 2, 0, 56, 12, 7, 90, 1, 11];

scrollArray(Input);

BubbleSort(Input);

scrollArray(Input);
