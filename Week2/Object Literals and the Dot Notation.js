var user = {}; //create an object
var arrOfKeys = ['rangeTilesPerTurn','socialSkills','streetSmarts','health']
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(assistantManager[arrOfKeys[i]])
}

console.log(assistantManager)
console.log(assistantManager.streetSmarts)
assistantManager.Testing = 45;
console.log(assistantManager)
assistantManager.Testing = 90;
console.log(assistantManager)

function addFruits(one, two, three){
    var fruitsArr = [];
    fruitsArr.push(one);
    fruitsArr.push(two);
    fruitsArr.push(three);
    console.log(fruitsArr)
}
var fruits = []
fruits.push("apple");
fruits.push("pear")
fruits.pop();
console.log(fruits);

addFruits('guava','grapes', 'watermelon');