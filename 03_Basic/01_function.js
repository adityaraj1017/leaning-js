function sayMyName() {
    console.log("Kumar Aditya Raj")
}

// sayMyName (Give reference of function)
sayMyName(); // Function execution

function addNumber(number1, number2) {
    console.log(number1+number2)
}

// During function declaration variable is called parameter and during function call it is called   arguments.

const result = addNumber(4,6)
console.log(result); // Result is undefined because there is no return statements

function calculated(num1, num2) {
    return(num1*num2)
}
// No code will executed after the return statement

const finalResult = calculated(7,9)
console.log(finalResult) // Give some result due to return statement

function logginUserMassage(name= "sam") {
    return `${name} just loggined in`
}
// Take sam as default value of name instead of undefined

logginUserMassage("Aditya") // Only call the function doesn't do anything else
console.log(logginUserMassage("Aditya"));
// If we doesn't pass the argument then it take undefined as default


// ********** Passing multiple value *********
function calculatdCartPrize(...items) {
    return items
}
// Here ... is rest operator, it combine the all items given to the function
/*
    If we used parameter as (num1, num2 , ...items), then first data goes to num1, second one goes to num2 and remaining goes to itmes
*/

console.log(calculatdCartPrize(20,24,81,138))


// ********** Passing Object **********
const user = {
    name: "piyakkad",
    prize: 399
}

function myObject(username) {
    console.log(`Username is ${username.name} and prize is ${username.prize}`)
}

myObject(user)


// ********** Passing Array **********
const myArray = [24,5324,245,245]

function returnSecondValue(myarray) {
    return myarray[1]
}

console.log(returnSecondValue(myArray))

/*
    We can also passed array and object by the following ways:-
    myObject({name:"piyakkad", prize:399}) For object
    calculatedChartPrize([23,535,636,231])
*/