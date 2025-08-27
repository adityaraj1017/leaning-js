let value = "33";

console.log(typeof value);
console.log(typeof(value));

let valueInNumber = Number(value); // Change the string datatypes into number
console.log(typeof(valueInNumber));

/*
    Into number:-
    "33" => 33
    "33abde" => NaN
    true => 1
    null => 0
    undefined => NaN
*/

let login = 0;
let BooleanLogin = Boolean(login);

console.log(BooleanLogin);

/*
    Into Boolean:-
    0 => flase; Except_zero => true
    "" => false
    "Aditya" => true
*/

let score = 99
let scoreInString = String(score)

console.log(scoreInString)
console.log(typeof scoreInString)