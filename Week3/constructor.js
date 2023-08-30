Date_test=new Date;
console.log(Date_test);
// math_test=new Math;
// console.log(math_test);
two_power_five = Math.pow(2,5);
console.log(two_power_five);

//custom constructor function
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function(){
        console.log('The ${this.flavor} icecream has melted');
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

kiwiIcecream;
appleIcecream;
/* testing why not the best approach using constructor function
on all built-in objects */
console.log(new String('plum') === new String('plum'));
console.log("plum" === "plum");
/* it is not the values that you pass to the constructor 
that are being compared, but rather the memory location 
where objects are saved.*/


//literals
//testing a pattern literal instead of RegExp
/* an example of using /d/ as a pattern literal, passed-in 
as an argument to the match method on a string.*/
console.log("abcd".match(/d/));
console.log("abcd".match(/a/));

