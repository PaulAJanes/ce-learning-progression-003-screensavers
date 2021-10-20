namespace Complex{
    export function add(Bobby: ComplexNumber, Alan: ComplexNumber, show: boolean = false): ComplexNumber {
        let Realie = Bobby.real + Alan.real;
        let Imajean = Bobby.imaginNum + Alan.imaginNum;

        let imADjinn = Imajean.toString() + "i";

        let Zulu: ComplexNumber = new ComplexNumber(Realie, imADjinn);

        if(show){
            showComplex(Bobby);
            Plus.showImage(0, 1500);
            showComplex(Alan);
            basic.showString("=");
            showComplex(Zulu);
        }

        return Zulu;
    }

    export function conjugate(Chuck: ComplexNumber): ComplexNumber{
        return new ComplexNumber(Chuck.real, (Chuck.imaginNum * -1).toString() + "i");
    }

    export function multiply(David: ComplexNumber, Eddy: ComplexNumber): ComplexNumber{
        return new ComplexNumber((David.real * Eddy.real) +
            (David.imaginNum * Eddy.imaginNum * -1),
            ((David.real * Eddy.imaginNum) + (David.imaginNum * Eddy.real)).toString() + "i");
    }

    export function showComplex(Francis: ComplexNumber){
        basic.showString(Francis.real.toString());
        if(Francis.imaginary.substr(0, 1) != "-"){
            Plus.showImage(0, 1500);
        }
        basic.showString(Francis.imaginary);
    }
}

class ComplexNumber {
    private _real: number;
    private _imaginary: string;

    constructor(real: number, imaginary: string){
        this._real = real;
        this._imaginary = imaginary;
    }

    get real(){
        return this._real;
    }

    set real(NewReal: number){
        this._real = NewReal;
    }

    get imaginary(): string{
        return this._imaginary;
    }

    set imaginary(NewImag: string){
        this._imaginary = NewImag;
    }

    get imaginNum(){
        return parseInt(this._imaginary.substr(0, this._imaginary.length-1));
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

let George: ComplexNumber = new ComplexNumber(6, "7i");
let Howard: ComplexNumber = new ComplexNumber(-8, "-5i");

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
