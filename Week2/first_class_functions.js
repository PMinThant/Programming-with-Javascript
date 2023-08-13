function addTwoNums(a,b) {
    console.log(a + b)
}

function randomNumber(){
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum(){
    return 42
}

var useRandom = true;
var getNumber;
if (useRandom) {
    getNumber = randomNumber;
} else {
    getNumber = specificNum;
}

addTwoNums(getNumber(),getNumber());