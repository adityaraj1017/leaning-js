const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const myNums = myNumber.map( (value) => {
//     return value + 10;
// })

// Chaining:- If we can apply more than two method then it is called chaining.

const myNums = myNumber
                .map((value) => value * 10)
                .map((value) => value + 1)
                .filter((value) => value >= 40)

console.log(myNums)