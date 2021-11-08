//This is not finished. It's just as far as I got.

namespace Complex {
    let common = 1;

    export function isPrime(p: number): boolean{
        if(p < 2){
            return false;
        } else {
            for(let i = 2; i <= Math.floor(Math.sqrt(p)); i++){
                if(p % i == 0){
                    return false;
                }
            }
            return true;
        }
    }

    function canReduce(d: number, n: number): boolean{
        if(isPrime(n) && d % n != 0 && n != 0 && d != 0){
            return false;
        } else {
            for(let i = 2; i <= Math.floor((n>d)?(n/2):(d/2)); i++){
                if(n % i == 0 && d % i == 0){
                    common = i;
                    return true;
                }
            }
            return false;
        }
    }

    function reduce(d: number, n: number): number[]{
        while(canReduce(d, n)){
            d = d/common;
            n = n/common;
        }
        return [d, n];
    }

    function isFraction(BobRoss: string): boolean{
        if (BobRoss.includes("/") 
        && parseInt(BobRoss.substr(0, BobRoss.indexOf("/"))).toString() == BobRoss.substr(0, BobRoss.indexOf("/"))
        && parseInt(BobRoss.substr(BobRoss.indexOf("/") + 1, BobRoss.length)).toString() == BobRoss.substr(BobRoss.indexOf("/")+1, BobRoss.length)){
            return true;
        } else {
            return false;
        }
    }

    export function showFraction(Frank: Fraction){
        if(Frank.denom == 1 || Frank.numer == 0){
            basic.showNumber(Frank.numer);
        } else {
            basic.showNumber(Frank.numer);
            Div.showImage(0, 1500);
            basic.showNumber(Frank.denom);
        }
    }

    export class Fraction {
        private _denom: number;
        private _numer: number;

        constructor(numer: number, denom: number){
            this._denom = reduce(denom, numer)[0];
            this._numer = reduce(denom, numer)[1];
        }

        get denom(): number{
            return this._denom;
        }

        get numer(): number{
            return this._numer;
        }

        multDiv(Fanny: Fraction, mult: boolean = true): Fraction{
            if(mult){
                return new Fraction(Fanny.numer * this.numer, Fanny.denom * this.denom);
            } else {
                return new Fraction(Fanny.denom * this.numer, Fanny.numer * this.denom);
            }
        }

        sumDiff(Fanny: Fraction, plus: boolean = true): Fraction{
            let newDenom = this.denom * Fanny.denom;
            let newNumerThis = this.numer * Fanny.denom;
            let newNumerFanny = Fanny.numer * this.denom;
            
            if(plus){
                return new Fraction(newNumerThis + newNumerFanny, newDenom);
            } else if(newNumerThis > newNumerFanny){
                return new Fraction(newNumerThis - newNumerFanny, newDenom);
            } else {
                return new Fraction(newNumerFanny - newNumerThis, newDenom);
            }
        }

        toString(): string{
            return this.numer.toString() + "/" + this.denom.toString();
        }

        equals(Roberto: Fraction): boolean {
            if(this.denom == Roberto.denom 
            && this.numer == Roberto.numer){
                return true;
            } else {
                return false;
            }
        }
    }

    let Abby: Fraction = new Fraction(1, 1);

    export class ComplexNumber {
        private _real: string;
        private _imag: string;

        constructor(realNum: number = 0, imagNum: number = 0, realFrac: Fraction = Abby, imagFrac: Fraction = Abby) {
            if(realNum != 0 
            && realFrac.equals(Abby)){
                this._real = realNum.toString();
            } else if(realNum == 0 
                    && !realFrac.equals(Abby)){
                this._real = realFrac.toString();
            } else {
                this._real = "1";
            }

            if (imagNum != 0
                && imagFrac.equals(Abby)) {
                this._imag = imagNum.toString();
            } else if (imagNum == 0
                && !imagFrac.equals(Abby)) {
                this._imag = imagFrac.toString();
            } else {
                this._imag = "1";
            }
        }

        get real(): string{
            return this._real;
        }

        get imag(): string{
            return this._imag;
        }

        multiply(Other: ComplexNumber): ComplexNumber{
            let realNumR: number;
            let imagNumR: number;
            let realFracR: Fraction;
            let imagFracR: Fraction;
            let realFracOth: Fraction;
            let realFracThis: Fraction;
            let imagFracOth: Fraction;
            let imagFracThis: Fraction;

            if(isFraction(Other.real) 
            && isFraction(this._real)){

                realFracOth = new Fraction(parseInt(Other.real.substr(0, Other.real.indexOf("/"))), parseInt(Other.real.substr(Other.real.indexOf("/")+1, Other.real.length-1)));
                realFracThis = new Fraction(parseInt(this._real.substr(0, this._real.indexOf("/"))), parseInt(this._real.substr(this._real.indexOf("/") + 1, this._real.length - 1)));
                realFracR = realFracOth.multDiv(realFracThis, true);

            } else if(isFraction(Other.real)
            && !isFraction(this._real)){

                realFracOth = new Fraction(parseInt(Other.real.substr(0, Other.real.indexOf("/"))), parseInt(Other.real.substr(Other.real.indexOf("/") + 1, Other.real.length - 1)));
                realFracR = new Fraction(realFracOth.numer*parseInt(this._real), realFracOth.denom);

            } else if(!isFraction(Other.real)
            && isFraction(this._real)){

                realFracThis = new Fraction(parseInt(this._real.substr(0, this._real.indexOf("/"))), parseInt(this._real.substr(this._real.indexOf("/") + 1, this._real.length - 1)));
                realFracR = new Fraction(realFracThis.numer * parseInt(Other.real), realFracThis.denom);

            } else {
                realNumR = parseInt(this._real) * parseInt(Other.real);
            }

            if (isFraction(Other.imag)
                && isFraction(this._imag)) {

                imagFracOth = new Fraction(parseInt(Other.imag.substr(0, Other.imag.indexOf("/"))), parseInt(Other.imag.substr(Other.imag.indexOf("/") + 1, Other.imag.length - 1)));
                imagFracThis = new Fraction(parseInt(this._imag.substr(0, this._imag.indexOf("/"))), parseInt(this._imag.substr(this._imag.indexOf("/") + 1, this._imag.length - 1)));
                imagFracR = imagFracOth.multDiv(imagFracThis, true);

            } else if (isFraction(Other.imag)
                && !isFraction(this._imag)) {

                imagFracOth = new Fraction(parseInt(Other.imag.substr(0, Other.imag.indexOf("/"))), parseInt(Other.imag.substr(Other.imag.indexOf("/") + 1, Other.imag.length - 1)));
                imagFracR = new Fraction(imagFracOth.numer * parseInt(this._imag), imagFracOth.denom);

            } else if (!isFraction(Other.imag)
                && isFraction(this._imag)) {

                imagFracThis = new Fraction(parseInt(this._imag.substr(0, this._imag.indexOf("/"))), parseInt(this._imag.substr(this._imag.indexOf("/") + 1, this._imag.length - 1)));
                imagFracR = new Fraction(imagFracThis.numer * parseInt(Other.imag), imagFracThis.denom);
                
            } else {
                imagNumR = parseInt(this._imag) * parseInt(Other.imag);
            }

            if((isFraction(this._real) || isFraction(Other.real)) 
            && (isFraction(this._imag) || isFraction(Other.imag))){
                return new ComplexNumber(undefined, undefined, realFracR, imagFracR);
            } else if (isFraction(this._real) || isFraction(Other.real)){
                return new ComplexNumber(undefined, imagNumR, realFracR, undefined);
            } else if (isFraction(this._imag) || isFraction(Other.imag)){
                return new ComplexNumber(realNumR, undefined, undefined, imagFracR);
            } else {
                return new ComplexNumber(realNumR, imagNumR, undefined, undefined);
            }
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
                                      00000`);
                                    
let Div: Image = images.createImage(`00000
                                     00010
                                     00100
                                     01000
                                     00000`)

//let George: Complex.ComplexNumber = new Complex.ComplexNumber(6, "i7");
//let Howard: Complex.ComplexNumber = new Complex.ComplexNumber(-8, "-i5");

/*Complex.add(George, Howard, true);

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
Complex.showComplex(Complex.multiply(George, Howard));*/

//Complex.showFraction(new Complex.Fraction(1, 0));
