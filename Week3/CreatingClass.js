class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log('Lights on?',this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train("red", false);
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);


var train4 = new Train('red', false);
console.log(train4.toggleLights());
console.log(train4.lightsStatus());
console.log(train4.getSelf());
console.log(train4.getPrototype());

class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this. passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.logh('High speed status:', this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational.");
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();

console.log(train5.getPrototype());
console.log(highSpeed1.getPrototype());