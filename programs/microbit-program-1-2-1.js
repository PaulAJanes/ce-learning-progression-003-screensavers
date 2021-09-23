const Numbers = 100;

let theseNumbers: Array<number> = [];

for(let i = 1; i <= Numbers; i++){
    theseNumbers.push(i);
}

for(let i = 1; i <= 17; i++){
    basic.showNumber(theseNumbers[theseNumbers.length-18+i]);
}
