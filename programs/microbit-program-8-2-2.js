namespace Complex {
    export function add(Bobby: ComplexNumber, Alan: ComplexNumber, show: boolean = false): ComplexNumber {
        let Realie = Bobby.real + Alan.real;
        let Imajean = Bobby.imaginNum + Alan.imaginNum;

        let imADjinn = "i" + Imajean.toString();

        let Zulu: ComplexNumber = new ComplexNumber(Realie, imADjinn);

        if (show) {
            showComplex(Bobby);
            Plus.showImage(0, 1500);
            showComplex(Alan);
            basic.showString("=");
            showComplex(Zulu);
        }

        return Zulu;
    }

    export function conjugate(Chuck: ComplexNumber): ComplexNumber {
        let holder = 0;
        let retString = "";

        holder = Chuck.imaginNum * -1;

        if(holder < 0){
            retString = "-i" + Chuck.imaginNum.toString();
        } else {
            retString = "i" + (-1*Chuck.imaginNum).toString();
        }

        return new ComplexNumber(Chuck.real, retString);
    }

    export function multiply(David: ComplexNumber, Eddy: ComplexNumber): ComplexNumber {
        let holder = 0;
        let retString = "";

        holder = (David.imaginNum * Eddy.real) + (Eddy.imaginNum * David.real);

        if(holder < 0){
            retString = "-i" + (-1*holder).toString();
        } else {
            retString = "i" + holder.toString();
        }

        return new ComplexNumber((David.real * Eddy.real) +
            (David.imaginNum * Eddy.imaginNum * -1),
            retString);
    }

    export function showComplex(Francis: ComplexNumber) {
        basic.showString(Francis.real.toString());
        if (Francis.imaginary.substr(0, 1) != "-") {
            Plus.showImage(0, 1500);
        }
        basic.showString(Francis.imaginary);
    }
}

class ComplexNumber {
    private _real: number;
    private _imaginary: string;

    constructor(real: number, imaginary: string) {
        this._real = real;
        this._imaginary = imaginary;
    }

    get real() {
        return this._real;
    }

    set real(NewReal: number) {
        this._real = NewReal;
    }

    get imaginary(): string {
        return this._imaginary;
    }

    set imaginary(NewImag: string) {
        this._imaginary = NewImag;
    }

    get imaginNum(): number{
        if(this.imaginary.charAt(0) == '-'){
            return -1*parseInt(this.imaginary.substr(2, this.imaginary.length-1));
        } else {
            return parseInt(this.imaginary.substr(1, this.imaginary.length-1));
        }
    }
}

let Plus: Image = images.createImage(`00000
                                      00100
                                      01110
                                      00100
                                      00000`);

let Mult: Image = images.createImage(`00000
                                      01010
                                      00100
                                      01010
                                      00000`)

let George: ComplexNumber = new ComplexNumber(6, "i7");
let Howard: ComplexNumber = new ComplexNumber(-8, "-i5");

Complex.add(George, Howard, true);

Complex.showComplex(George);
basic.showString("C", 1500);
Complex.showComplex(Complex.conjugate(George));

Complex.showComplex(Howard);
basic.showString("C", 1500);
Complex.showComplex(Complex.conjugate(Howard));

Complex.showComplex(George);
Mult.showImage(0, 1500);
Complex.showComplex(Howard);
basic.showString("=", 1500);
Complex.showComplex(Complex.multiply(George, Howard));
