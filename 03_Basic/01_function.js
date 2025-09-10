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