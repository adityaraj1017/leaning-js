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

// **************************** Operation ***************************************

let value2 = 3;
let negValue2 = -value2;

console.log(negValue2);

/*
    Different operation are:-
    Addition (a+b)
    Subtraction (a-b)
    Multiplication (a*b)
    Division (a/b)
    Power (a**b a to power b)
    Remainder (a%b)
*/

let str1 = "Hello"
let str2 = " Aditya"

let str3 = str1 + str2
console.log(str3)

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + 2 + 2) // Output depend upon first value datatypes.
console.log(1 + 2 + "2")

console.log(3 * 5 + 6 / 4) // Best way is using the parenthesis ((3*5)+6)/7

console.log(+true) // +true => 1 and -true => -1
console.log(+false) // +false => 0 and -false => -0

let num1, num2, num3;
num1 = num2 = num3 = 4 // Not the best practise 

let counter = 100
++counter // Prefix or postfix operation
console.log(counter)