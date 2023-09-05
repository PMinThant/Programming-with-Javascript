function testBracketDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5){
        dynamicKey = "speed";
    } else{
        dynamicKey = "color";
    }

    var drone = {
        speed : 15,
        color : "örange"
    }

    console.log(drone[dynamicKey]);
    
}
testBracketDynamicAccess();