const bicycle = {
    bell: function () {
        return "Ring, ring!"
    }
}

const door = {
    bell: function () {
        return "Ring, ring!"
    }
}

bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please"

function ringTheBell(thing){
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // Ring, ring! Come here, please!

concatTest = "abc".concat("def");
console.log(concatTest);

concatArray = ["abc"].concat(["def"]);
console.log(concatArray);

plusArray = ["abc"]+["def"];
console.log(plusArray);


class Bird {
    useWings(){
        console.log("Flying")
    }
}
class Eagle extends Bird{
    useWings(){
        super.useWings();

        console.log("Barely flapping!")
    }
}

class Penguin extends Bird{
    useWings(){
        super.useWings();
        console.log("Diving!");
}
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // Flying! Barely flapping!
kingPenguin.useWings(); // Diving!