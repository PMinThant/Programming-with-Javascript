// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (a in dairy){
        console.log(dairy[a])
    }

}
logDairy()

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan()
{
    for (b of Object.keys(bird)) {
            console.log(b+": "+bird[b])
        
    }
}
birdCan()

// Task 3
function animalCan()
{
    for (d in bird) {
            console.log(d+": "+bird[d])
        
    }
}
animalCan()
