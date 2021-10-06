const Numbers = 1000;

function isPrime(p: number): boolean {

    let primal = true;
    if (p != 1) {
        for (let i = 2; i <= Math.floor(Math.sqrt(p)); i++) {
            if (p % i == 0) {
                primal = false;
                break;
            }
        }
    } else {
        primal = false;
    }
    return primal;

}

function randomPrimes(Primes: Array<number>){
    basic.showNumber(Primes[randint(0, Primes.length - 1)]);
}

let theseNumbers: Array<number> = [];

for (let i = 1; i <= Numbers; i++) {
    if(isPrime(i)){
        theseNumbers.push(i);
    }
}

basic.forever(function(){
    randomPrimes(theseNumbers);
})
