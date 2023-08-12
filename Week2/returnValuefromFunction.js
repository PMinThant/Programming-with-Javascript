function consoleLog(val) {
    console.log(val)
    return val
}
console.log(typeof(consoleLog('Hello')))

function doubleIt(num){
    return num * 2;
}

function ObjectMaker(val){
    return {
        prop : val
    }
}
console.log(ObjectMaker(doubleIt(20)));