const userEmail = "h@hitesh.com";

if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
} 

/*
    falsy values:-
    false, 0, -0, Bigint 0n, "", null, undefined, NaN

    truthy values:-
    "0", "false", " ", {}, [], function(){}
*/


// ********** Checking for empty array *********

const myArray = [];

if(myArray.length === 0) {
    console.log("Empty array");
}


// ********** Checking for empty object *********

const myObject = {};

if(Object.keys(myObject).length === 0) {
    console.log("Empty object");
}

/*
    false == 0  // True
    fase == ""  // True
    0 == ""  // True
*/


// ********** Nullish Coalescing Operator (??): null, undefined **********
// It is used where we are not conform about data coming from API

let val1;

// val1 = 5 ?? 10;  // Output = 5
// val1 = null ?? 10  // Output = 10
// val1 = undefined ?? 15  // Output = 15
val1 = null ?? 10 ?? 20

console.log(val1);


// ********** Terniary operator *********

// condition ? true : false

const iceTeaPrize = 100;

iceTeaPrize <= 80 ? console.log("Less than 80") : console.log("More than 80");