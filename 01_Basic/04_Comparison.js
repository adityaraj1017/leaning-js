/*
    Basic comparison operation are:-
    a > b
    a >= b
    a < b
    a <= b
    a == b
    a != b
*/

console.log("2" > 1)
console.log(NaN > 1) // NaN is not compare with number

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// Comparison operation convert the null into 0, So null > 0 give false whereas null >= 0 give true

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
// Give false to all of above given comparison

console.log(undefined == null) // True

// Strictly check === (Check value as well as datatypes):-

console.log("2" === 2) // False