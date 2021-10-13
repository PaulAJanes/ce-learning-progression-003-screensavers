class UnsignedBinary {
    bin_str: String;
    carry: boolean;
    value: number;
    original: String;
    noDots: String;

    constructor(bin_str: String) {
        this.original = bin_str;
        this.noDots = MakeBinString(bin_str);
        this.bin_str = this.noDots + "..";
        this.value = FindBinValue(this.noDots);
        this.carry = Carry(bin_str);
    }

    add(OtherBin: UnsignedBinary): UnsignedBinary {
        let ReturnOfTheString: String = "";
        let sum = this.value + OtherBin.value;

        for (let i = 128; i > 0;) {
            if (sum >= i) {
                ReturnOfTheString += "1";
                sum -= i;
            } else {
                ReturnOfTheString += "0";
            }
            i = Math.floor(i / 2);
        }

        return new UnsignedBinary(ReturnOfTheString);
    }
}

function UnresBinString(Str: String): String {
    let inHereString: String = "";

    for (let i = 0; i < Str.length; i++) {
        if (Str.charAt(i) == "1" || Str.charAt(i) == "0") {
            inHereString += Str.charAt(i);
        }
    }

    return inHereString;
}

function MakeBinString(Str: String): String {
    let inHereString: String = "";
    let inHereString2: String = "";

    for (let i = 0; i < Str.length; i++) {
        if (Str.charAt(i) == "1" || Str.charAt(i) == "0") {
            inHereString += Str.charAt(i);
        }
    }

    if (inHereString.length > 16) {
        for (let i = (inHereString.length - 16); i < inHereString.length; i++) {
            inHereString2 += inHereString.charAt(i);
        }
    } else if (inHereString.length < 16) {
        while (inHereString2.length < (16 - inHereString.length)) {
            inHereString2 += "0";
        }
        for (let i = 0; i < inHereString.length; i++) {
            inHereString2 += inHereString.charAt(i);
        }
    }

    return inHereString2;
}

function FindBinValue(Str: String): number {
    let ReturnMe: number = 0;

    for (let i = 0; i < Str.length; i++) {
        ReturnMe += Math.pow(2, (Str.length - 1 - i)) * parseInt(Str.charAt(i));
    }

    return ReturnMe;
}

function Carry(Checker: String): boolean {
    let CarryMEEE: boolean = false;

    if (FindBinValue(UnresBinString(Checker)) > 255) {
        CarryMEEE = true;
    }

    return CarryMEEE;
}

function DoIt() {
    basic.showAnimation(
    `00000 00001 00010 00100 01000 10000 00000 00000
     00001 00011 00110 01100 11000 10000 00000 00000
     00000 00001 00010 00100 01000 10000 00000 00000
     00000 00001 00010 00100 01000 10000 00000 00000
     00001 00011 00111 01110 11100 11000 10000 00000`, 100
     )
}

function Dont() {
    basic.showAnimation(
    `00000 00001 00011 00110 01100 11000 10000 00000 00000
     00001 00010 00100 01001 10010 00100 01000 10000 00000
     00001 00010 00100 01001 10010 00100 01000 10000 00000
     00001 00010 00100 01001 10010 00100 01000 10000 00000
     00000 00001 00011 00110 01100 11000 10000 00000 00000`, 100
     )
}

function showDots() {
    basic.showAnimation(
        `00000 00000 00000 00000 00000 00000 00000 00000
         00000 00000 00000 00000 00000 00000 00000 00000
         00000 00000 00000 00000 00000 00000 00000 00000
         00001 00010 00101 01010 10100 01000 10000 00000
         00000 00000 00000 00000 00000 00000 00000 00000`, 100
    )
}

let Bubba: UnsignedBinary = new UnsignedBinary("11a0c1a2af1va06aa10a5");
let George: UnsignedBinary = new UnsignedBinary("110a10151102102aew0c125662001");
let Alice: UnsignedBinary = Bubba.add(George);

for (let i = 0; i < Alice.noDots.length; i++) {
    if (Alice.noDots.charAt(i) == "1") {
        DoIt();
    } else {
        Dont();
    }
    pause(1000);
}

showDots();
