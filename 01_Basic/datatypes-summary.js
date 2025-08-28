/*
    Different between static and dynamic programing language are:-
    Static:- Datatypes check at compile time. Generally faster, Rigid but safer, Error is dected    before the running.
    Dynamic:- Datatypes check at run types. Generally slower, Flexible but risky, Error is dected during runing.
*/

// On the basic of how it store in memory and call from memory datatypes are divided into two categories.

// Primitive (Call by value):-
// 7 types :- string, number, null, undefined, boolean, bigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail
// Not need to define datatypes.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 325425123124328923402387n
console.log(typeof bigNumber)

// Reference (Non-primitive):-
// Array, Object and Function

const heroes = ["Krish","Hanuman","nagraj","chhota bhem"]
let myobject = {
    name: "Aditya raj",
    age: 34,
}

const myFunction = function() {
    console.log("Hello World!")
}

console.log(typeof myFunction) // Object function
console.log(typeof heroes) // Object
console.log(typeof myobject) // Object