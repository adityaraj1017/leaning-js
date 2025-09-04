const score = 400;
console.log(score);

const balance = new Number(100); // Store in object format
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Fixed digit after decimal point

const otherNumber = 123.986;
console.log(otherNumber.toPrecision(4)); 
// Return a string and covert the number according to required significance digits

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // Place the comma in the number to make it redable

/*
    There is also some properties that for the number, they are as follow:-
    min(min value that can store)
    max(max value that can store)
    minSafeValue,  maxSafeValue and many more

    ** Take a look of mdn document.
*/


// ************************** Maths *********************************

console.log(Math.abs(-5)); // Absulate value 

console.log(Math.round(4.6)); // Round the number according to nearest integer
console.log(Math.ceil(4.6)); // Round the number according to nearest greater integer
console.log(Math.floor(4.6)); // Round the number according to nearest smallest integer

console.log(Math.random()); // Return any number between 0 and 1 with 0 includes
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);
// Always return certain value between 10 and 11