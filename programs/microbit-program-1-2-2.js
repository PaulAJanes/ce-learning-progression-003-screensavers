const Numbers = 100;

function isPrime(p: number): boolean{

    let primal = true;
    if(p != 1){
        for(let i = 2; i <= Math.floor(Math.sqrt(p)); i++){
            if(p % i == 0){
                primal = false;
                break;
            }
        }
    } else {
        primal = false;
    }
    return primal;

}

let theseNumbers: Array<number> = [];

for(let i = 1; i <= Numbers; i++){
    theseNumbers.push(i);
}

for(let i = theseNumbers.length - 1; i >= 0; i--){
    if(!isPrime(theseNumbers[i])){
        theseNumbers.removeAt(i);
    }
}

for(let i = 0; i < theseNumbers.length; i++){
    basic.showNumber(theseNumbers[i]);
}
