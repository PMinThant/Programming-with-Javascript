class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    };
};

class Threadmill{
    constructor(position, modes){
        this.position = position;
        this.modes = modes;
    }
}

class Gym{
    constructor(openHrs, stationaryBikePos, treadmillPos){
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Threadmill(treadmillPos, 5);

    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)
console.log(boxingGym.stationaryBike)
console.log(boxingGym.treadmill)